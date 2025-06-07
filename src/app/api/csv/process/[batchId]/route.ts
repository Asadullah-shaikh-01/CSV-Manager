import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { parse } from 'csv-parse/sync';

interface CsvRecord {
    [key: string]: string;
}

interface FieldMappings {
    [key: string]: string;
}

export async function POST(
    request: Request,
    { params }: { params: { batchId: string } }
) {
    try {
        const { mappings } = await request.json() as { mappings: FieldMappings };
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
            skip_empty_lines: true
        }) as CsvRecord[];

        // Transform and validate all records
        const transformedData = records.map((record: CsvRecord) => {
            const transformedRecord: CsvRecord = {};
            Object.entries(mappings).forEach(([systemField, csvColumn]) => {
                if (csvColumn) {
                    transformedRecord[systemField] = record[csvColumn];
                }
            });
            return transformedRecord;
        });

        // Here you would typically:
        // 1. Validate all records
        // 2. Generate a preview or summary
        // 3. Update batch status
        // 4. Send notifications if needed

        return NextResponse.json({
            batchId,
            status: 'processed',
            recordCount: transformedData.length,
            preview: transformedData.slice(0, 5), // Send first 5 records as preview
            message: 'Processing completed successfully'
        });
    } catch (error) {
        console.error('Processing error:', error);
        return NextResponse.json(
            { error: 'Failed to process CSV data' },
            { status: 500 }
        );
    }
} 