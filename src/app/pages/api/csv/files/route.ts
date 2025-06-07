import { NextRequest, NextResponse } from 'next/server';
import prisma from "../../../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const userId = 'demo-user-id'; // Replace with real user
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const size = parseInt(searchParams.get('size') || '5');
    const filter = searchParams.get('filter') || '';

    const skip = (page - 1) * size;

    const [files, totalCount] = await Promise.all([
      prisma.csvFile.findMany({
        where: { 
          userId,
          fileName: { contains: filter, mode: 'insensitive' }
        },
        orderBy: { uploadedAt: 'desc' },
        skip,
        take: size,
      }),
      prisma.csvFile.count({
        where: { 
          userId,
          fileName: { contains: filter, mode: 'insensitive' }
        }
      })
    ]);

    return NextResponse.json({ files, totalCount });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
