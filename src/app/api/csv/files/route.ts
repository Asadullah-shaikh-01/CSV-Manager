import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";
import { cookies } from 'next/headers';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { Prisma } from '@prisma/client';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const listOnly = searchParams.get('listOnly') === 'true';

  if (listOnly) {
    try {
        const uploadDir = join(process.cwd(), 'uploads');
        
        // Ensure the uploads directory exists
        try {
            await stat(uploadDir);
        } catch {
            // If directory doesn't exist, return empty array
            return NextResponse.json({ files: [] });
        }
        
        // Get all files in the uploads directory
        const files = await readdir(uploadDir);
        
        // Get details for each CSV file
        const fileDetails = await Promise.all(
            files
                .filter(file => file.endsWith('.csv'))
                .map(async (file) => {
                    const filePath = join(uploadDir, file);
                    const stats = await stat(filePath);
                    const batchId = file.replace('.csv', '');
                    
                    return {
                        id: batchId,
                        fileName: file,
                        uploadDate: stats.mtime,
                        size: stats.size,
                    };
                })
        );

        // Sort files by upload date (newest first)
        const sortedFiles = fileDetails.sort((a, b) => 
            b.uploadDate.getTime() - a.uploadDate.getTime()
        );

        return NextResponse.json({ files: sortedFiles });
    } catch (error) {
        console.error('Error listing files:', error);
        return NextResponse.json(
            { error: 'Failed to list files', files: [] },
            { status: 500 }
        );
    }
  }

  try {
    // Get user ID from auth cookie
    const cookieStore = cookies();
    const authToken = cookieStore.get('auth_token');
    
    if (!authToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = authToken.value;
    
    // Pagination
    const page = parseInt(searchParams.get('page') || '1');
    const size = parseInt(searchParams.get('size') || '10');
    
    // Filtering
    const filter = searchParams.get('filter') || '';
    const tag = searchParams.get('tag') || '';
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const archived = searchParams.get('archived') === 'true';
    
    // Sorting
    const sortBy = searchParams.get('sortBy') || 'uploadedAt';
    const sortOrder = (searchParams.get('sortOrder') || 'desc') as 'asc' | 'desc';

    const skip = (page - 1) * size;

    // Build where clause
    const where: Prisma.CsvFileWhereInput = {
      userId,
      isArchived: archived,
    };

    // Add filter conditions
    if (filter) {
      where.fileName = { contains: filter, mode: 'insensitive' as Prisma.QueryMode };
    }

    if (tag) {
      where.tags = { has: tag };
    }

    // Handle date filtering
    const dateFilter: Prisma.DateTimeFilter = {};
    if (startDate) {
      dateFilter.gte = new Date(startDate);
    }
    if (endDate) {
      dateFilter.lte = new Date(endDate);
    }
    if (Object.keys(dateFilter).length > 0) {
      where.uploadedAt = dateFilter;
    }

    const [files, totalCount] = await Promise.all([
      prisma.csvFile.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        skip,
        take: size,
        include: {
          _count: {
            select: { rows: true }
          }
        },
      }),
      prisma.csvFile.count({ where }),
    ]);

    // Update lastAccessed timestamp for viewed files
    await Promise.all(
      files.map(file =>
        prisma.csvFile.update({
          where: { id: file.id },
          data: { lastAccessed: new Date() },
        })
      )
    );

    return NextResponse.json({
      files,
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / size),
      pageSize: size,
    });
  } catch (err: any) {
    console.error('Error fetching files:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
} 