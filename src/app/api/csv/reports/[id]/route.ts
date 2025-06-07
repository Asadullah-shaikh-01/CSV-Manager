import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { parse } from "papaparse";

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

        if (!csvFile) {
            return NextResponse.json({ error: "File not found" }, { status: 404 });
        }

        let reportData: any[] = [];

        switch (reportType) {
            case "summary":
                // Generate summary statistics
                const numericColumns = Object.keys(csvFile.rows[0].data).filter(
                    (key) => !isNaN(Number(csvFile.rows[0].data[key]))
                );

                reportData = numericColumns.map((column) => {
                    const values = csvFile.rows.map((row) => Number(row.data[column]));
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
                const columns = Object.keys(csvFile.rows[0].data);
                reportData = columns.map((column) => {
                    const uniqueValues = new Set(
                        csvFile.rows.map((row) => row.data[column])
                    );
                    return {
                        Column: column,
                        UniqueValues: uniqueValues.size,
                        MostCommonValue: getMostCommonValue(csvFile.rows, column),
                        HasNulls: csvFile.rows.some((row) => !row.data[column]),
                    };
                });
                break;

            case "custom":
                // Generate custom analysis (example: data distribution)
                const customColumns = Object.keys(csvFile.rows[0].data);
                reportData = customColumns.map((column) => {
                    const valueFrequency = getValueFrequency(csvFile.rows, column);
                    return {
                        Column: column,
                        Distribution: JSON.stringify(valueFrequency),
                        DataType: getDataType(csvFile.rows, column),
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

function getMostCommonValue(rows: any[], column: string) {
    const frequency: { [key: string]: number } = {};
    rows.forEach((row) => {
        const value = row.data[column];
        frequency[value] = (frequency[value] || 0) + 1;
    });
    return Object.entries(frequency).reduce((a, b) => 
        a[1] > b[1] ? a : b
    )[0];
}

function getValueFrequency(rows: any[], column: string) {
    const frequency: { [key: string]: number } = {};
    rows.forEach((row) => {
        const value = row.data[column];
        frequency[value] = (frequency[value] || 0) + 1;
    });
    return frequency;
}

function getDataType(rows: any[], column: string) {
    const values = rows.map((row) => row.data[column]);
    if (values.every((v) => !isNaN(Number(v)))) return "numeric";
    if (values.every((v) => !isNaN(Date.parse(v)))) return "date";
    return "text";
} 