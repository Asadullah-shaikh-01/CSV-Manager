import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const fileId = params.id;

        // Get the file to verify it exists and get column headers
        const file = await prisma.csvFile.findUnique({
            where: { id: fileId },
            include: {
                rows: {
                    orderBy: { rowIndex: 'asc' },
                    select: {
                        rowData: true,
                    },
                },
            },
        });

        if (!file) {
            return NextResponse.json(
                { error: "File not found" },
                { status: 404 }
            );
        }

        // Update last accessed timestamp
        await prisma.csvFile.update({
            where: { id: fileId },
            data: { lastAccessed: new Date() },
        });

        // Return the rows data
        return NextResponse.json({
            rows: file.rows.map(row => row.rowData),
            columnHeaders: file.columnHeaders,
        });
    } catch (error) {
        console.error("Error fetching file contents:", error);
        return NextResponse.json(
            { error: "Failed to fetch file contents" },
            { status: 500 }
        );
    }
} 