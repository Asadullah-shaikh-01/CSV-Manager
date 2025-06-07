import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { parse } from 'csv-parse/sync';

export async function POST(
    request: Request,
    { params }: { params: { batchId: string } }
) {
    try {
        const { mappings } = await request.json();
        const { batchId } = params;

        if (!mappings || !batchId) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Read the CSV file
        const filePath = join(process.cwd(), 'uploads', `${batchId}.csv`);
        const fileContent = await readFile(filePath, 'utf-8');

        // Parse CSV content
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            trim: true // Add trim to clean up whitespace
        });

        // Transform data based on mappings
        const transformedData = records.map((record: any) => {
            const transformedRecord: any = {};
            Object.entries(mappings).forEach(([systemField, csvColumn]) => {
                if (csvColumn) {
                    transformedRecord[systemField] = record[csvColumn];
                }
            });
            return transformedRecord;
        });

        // Return both the full record count and a preview
        return NextResponse.json({
            batchId,
            recordCount: records.length, // Total number of records in the CSV
            preview: transformedData.slice(0, 3), // First 3 records for preview
            status: 'processed'
        });
    } catch (error) {
        console.error('Processing error:', error);
        return NextResponse.json(
            { error: 'Failed to process CSV file' },
            { status: 500 }
        );
    }
} 