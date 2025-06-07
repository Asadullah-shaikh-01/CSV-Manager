import { NextResponse } from 'next/server';
import { readFile, unlink } from 'fs/promises';
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
        // 2. Save to database in a transaction
        // 3. Update batch status
        // 4. Send notifications if needed

        // Clean up: remove the temporary CSV file
        await unlink(filePath);

        return NextResponse.json({
            batchId,
            status: 'completed',
            recordCount: transformedData.length,
            message: 'Import completed successfully'
        });
    } catch (error) {
        console.error('Import error:', error);
        return NextResponse.json(
            { error: 'Failed to import CSV data' },
            { status: 500 }
        );
    }
} 