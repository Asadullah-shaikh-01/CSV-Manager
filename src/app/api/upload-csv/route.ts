import { NextRequest, NextResponse } from "next/server";
import { parse } from "papaparse";
import prisma from "@/lib/prisma";
import { cookies } from 'next/headers';
import type { FileType } from "@/app/types/csvTypes";
import { Prisma } from "@prisma/client";
import { 
    validateFile, 
    ensureUploadDir, 
    generateSecureFileName,
    getFileMetadata,
    sanitizeFileName 
} from "@/lib/server/utils";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(request: NextRequest) {
    try {
        // Get user ID from auth cookie
        const cookieStore = cookies();
        const authToken = cookieStore.get('auth_token');
        
        if (!authToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = authToken.value;
        const formData = await request.formData();
        const file = formData.get("file") as File;
        const fileType = (formData.get("fileType") as FileType) || 'other';

        // Validate file
        const validation = validateFile(file, {
            maxSize: 10 * 1024 * 1024, // 10MB
            allowedTypes: ['.csv']
        });

        if (!validation.isValid) {
            return NextResponse.json({ error: validation.error }, { status: 400 });
        }

        // Get file metadata
        const metadata = getFileMetadata(file);
        const secureFileName = generateSecureFileName(metadata.originalName);
        
        // Read file content
        const fileContent = await file.text();
        
        // Parse CSV
        const { data, errors, meta } = parse(fileContent, {
            header: true,
            skipEmptyLines: true,
            error: (error) => {
                console.error('CSV parsing error:', error);
            }
        });

        if (errors.length > 0) {
            return NextResponse.json(
                { 
                    error: "Invalid CSV format",
                    details: errors.map(err => err.message)
                },
                { status: 400 }
            );
        }

        if (!Array.isArray(data) || data.length === 0) {
            return NextResponse.json(
                { error: "CSV file is empty or invalid" },
                { status: 400 }
            );
        }

        // Ensure the first row is an object with keys
        const firstRow = data[0];
        if (typeof firstRow !== 'object' || firstRow === null) {
            return NextResponse.json(
                { error: "Invalid CSV structure" },
                { status: 400 }
            );
        }

        // Get column headers
        const columnHeaders = Object.keys(firstRow);

        // Save file to disk
        const uploadDir = await ensureUploadDir();
        const filePath = join(uploadDir, secureFileName);
        await writeFile(filePath, fileContent);

        // Save to database using a transaction
        const csvFile = await prisma.$transaction(async (tx) => {
            // Create CSV file record
            const file = await tx.csvFile.create({
                data: {
                    userId,
                    fileName: secureFileName,
                    originalName: sanitizeFileName(metadata.originalName),
                    uploadedAt: new Date(),
                    columnHeaders,
                    rowCount: data.length,
                    fileSize: metadata.size,
                    mimeType: metadata.mimeType,
                    description: '',
                    tags: [],
                    isArchived: false
                }
            });

            // Create CSV rows in batches
            const batchSize = 1000;
            for (let i = 0; i < data.length; i += batchSize) {
                const batch = data.slice(i, i + batchSize).map((row, index) => ({
                    csvFileId: file.id,
                    rowData: row,
                    rowIndex: i + index,
                    isValid: true
                }));

                await tx.csvRow.createMany({
                    data: batch
                });
            }

            return file;
        });

        return NextResponse.json({
            id: csvFile.id,
            fileName: csvFile.fileName,
            originalName: csvFile.originalName,
            columnHeaders: csvFile.columnHeaders,
            rowCount: csvFile.rowCount
        });

    } catch (error) {
        console.error('Upload error:', error);
        
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json(
                { error: 'Database operation failed', code: error.code },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to process upload' },
            { status: 500 }
        );
    }
} 