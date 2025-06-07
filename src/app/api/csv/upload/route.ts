import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { ensureUploadDir } from '@/lib/server/utils';
import { parse } from 'csv-parse/sync';

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');
        const batchName = formData.get('batchName') as string;
        const batchType = formData.get('batchType') as string;

        if (!file || !batchName || !batchType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Ensure file is actually a File object
        if (!(file instanceof File)) {
            return NextResponse.json(
                { error: 'Invalid file' },
                { status: 400 }
            );
        }

        // Check file type
        if (!file.name.toLowerCase().endsWith('.csv')) {
            return NextResponse.json(
                { error: 'Only CSV files are allowed' },
                { status: 400 }
            );
        }

        // Check file size (10MB limit)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            return NextResponse.json(
                { error: 'File size exceeds 10MB limit' },
                { status: 400 }
            );
        }

        // Generate unique ID for the batch
        const batchId = uuidv4();

        try {
            // Ensure uploads directory exists and get its path
            const uploadDir = await ensureUploadDir();
            
            // Convert file to buffer and save it
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            
            // Parse CSV to get headers
            const csvContent = buffer.toString();
            const records = parse(csvContent, {
                columns: true,
                skip_empty_lines: true,
                from: 1,
                to: 2 // We only need one row to get the headers
            });
            
            const headers = Object.keys(records[0] || {});
            
            // Save the file
            const filePath = join(uploadDir, `${batchId}.csv`);
            await writeFile(filePath, buffer);

            // Store batch metadata
            const batchMetadata = {
                id: batchId,
                name: batchName,
                type: batchType,
                fileName: file.name,
                uploadDate: new Date().toISOString(),
                status: 'pending',
                headers: headers
            };

            return NextResponse.json(batchMetadata);
        } catch (error) {
            console.error('File system error:', error);
            return NextResponse.json(
                { error: 'Failed to save file' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'Failed to process upload' },
            { status: 500 }
        );
    }
} 