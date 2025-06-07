import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { parse } from "papaparse";
import { CsvRow } from "@prisma/client";

interface CsvRowWithData extends CsvRow {
    rowData: {
        [key: string]: string;
    };
}

export async function POST(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const fileId = params.id;
        const searchParams = new URL(req.url).searchParams;
        const reportType = searchParams.get("type") as "summary" | "detailed" | "custom";

        // Get CSV data
        const csvFile = await prisma.csvFile.findUnique({
            where: { id: fileId },
            include: { rows: true },
        });

        if (!csvFile || !csvFile.rows.length) {
            return NextResponse.json({ error: "File not found or empty" }, { status: 404 });
        }

        const rows = csvFile.rows as CsvRowWithData[];
        let reportData: any[] = [];

        switch (reportType) {
            case "summary":
                // Generate summary statistics
                const numericColumns = Object.keys(rows[0].rowData).filter(
                    (key) => !isNaN(Number(rows[0].rowData[key]))
                );

                reportData = numericColumns.map((column) => {
                    const values = rows.map((row) => Number(row.rowData[column]));
                    const sum = values.reduce((a, b) => a + b, 0);
                    const avg = sum / values.length;
                    const max = Math.max(...values);
                    const min = Math.min(...values);

                    return {
                        Column: column,
                        Average: avg.toFixed(2),
                        Maximum: max,
                        Minimum: min,
                        Total: sum,
                    };
                });
                break;

            case "detailed":
                // Generate detailed analysis
                const columns = Object.keys(rows[0].rowData);
                reportData = columns.map((column) => {
                    const uniqueValues = new Set(
                        rows.map((row) => row.rowData[column])
                    );
                    return {
                        Column: column,
                        UniqueValues: uniqueValues.size,
                        MostCommonValue: getMostCommonValue(rows, column),
                        HasNulls: rows.some((row) => !row.rowData[column]),
                    };
                });
                break;

            case "custom":
                // Generate custom analysis (example: data distribution)
                const customColumns = Object.keys(rows[0].rowData);
                reportData = customColumns.map((column) => {
                    const valueFrequency = getValueFrequency(rows, column);
                    return {
                        Column: column,
                        Distribution: JSON.stringify(valueFrequency),
                        DataType: getDataType(rows, column),
                    };
                });
                break;
        }

        // Convert report data to CSV
        const csv = parse.unparse(reportData);
        
        return new NextResponse(csv, {
            headers: {
                "Content-Type": "text/csv",
                "Content-Disposition": `attachment; filename=${csvFile.fileName}-${reportType}-report.csv`,
            },
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

function getMostCommonValue(rows: CsvRowWithData[], column: string) {
    const frequency: { [key: string]: number } = {};
    rows.forEach((row) => {
        const value = row.rowData[column];
        frequency[value] = (frequency[value] || 0) + 1;
    });
    return Object.entries(frequency).reduce((a, b) => 
        a[1] > b[1] ? a : b
    )[0];
}

function getValueFrequency(rows: CsvRowWithData[], column: string) {
    const frequency: { [key: string]: number } = {};
    rows.forEach((row) => {
        const value = row.rowData[column];
        frequency[value] = (frequency[value] || 0) + 1;
    });
    return frequency;
}

function getDataType(rows: CsvRowWithData[], column: string) {
    const values = rows.map((row) => row.rowData[column]);
    if (values.every((v) => !isNaN(Number(v)))) return "numeric";
    if (values.every((v) => !isNaN(Date.parse(v)))) return "date";
    return "text";
} 