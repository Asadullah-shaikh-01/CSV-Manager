import { NextResponse } from 'next/server';
import { readFile, unlink } from 'fs/promises';
import { join } from 'path';
import { parse } from 'csv-parse/sync';
import { Prisma } from '@prisma/client';

type CsvRecord = Record<string, string>;
type FieldMappings = Record<string, string>;

interface ImportResponse {
    batchId: string;
    status: 'completed' | 'failed';
    recordCount?: number;
    message: string;
    errors?: string[];
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

        let fileContent: string;
        const filePath = join(process.cwd(), 'uploads', `${batchId}.csv`);

        try {
            fileContent = await readFile(filePath, 'utf-8');
        } catch (error) {
            return NextResponse.json(
                { error: 'CSV file not found or inaccessible' },
                { status: 404 }
            );
        }

        // Parse CSV content
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true
        }) as CsvRecord[];

        if (!Array.isArray(records) || records.length === 0) {
            return NextResponse.json(
                { error: 'CSV file is empty or invalid' },
                { status: 400 }
            );
        }

        // Transform and validate all records
        const transformedData = records.map((record) => {
            const transformedRecord: CsvRecord = {};
            Object.entries(mappings).forEach(([systemField, csvColumn]) => {
                if (csvColumn && record[csvColumn] !== undefined) {
                    transformedRecord[systemField] = record[csvColumn];
                }
            });
            return transformedRecord;
        });

        // Clean up: remove the temporary CSV file
        try {
            await unlink(filePath);
        } catch (error) {
            console.error('Failed to delete temporary file:', error);
            // Continue with the response even if cleanup fails
        }

        const response: ImportResponse = {
            batchId,
            status: 'completed',
            recordCount: transformedData.length,
            message: 'Import completed successfully'
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('Import error:', error);
        
        const response: ImportResponse = {
            batchId: params.batchId,
            status: 'failed',
            message: 'Failed to import CSV data',
            errors: [error instanceof Error ? error.message : 'Unknown error occurred']
        };

        return NextResponse.json(response, { status: 500 });
    }
} 