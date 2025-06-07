import { NextRequest, NextResponse } from "next/server";
import { parse } from "papaparse";
import prisma from "@/lib/prisma";
import { cookies } from 'next/headers';
import type { FileType } from "@/app/types/csvTypes";

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

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read file content
    const fileContent = await file.text();
    
    // Parse CSV
    const { data, errors } = parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    if (errors.length > 0) {
      return NextResponse.json(
        { error: "Invalid CSV format" },
        { status: 400 }
      );
    }

    // Get column headers from the first row
    const columnHeaders = Object.keys(data[0]);

    // Save file metadata to database
    const csvFile = await prisma.csvFile.create({
      data: {
        userId,
        fileName: file.name,
        originalName: file.name,
        fileType,
        columnHeaders,
        rowCount: data.length,
        fileSize: new Blob([fileContent]).size,
        mimeType: file.type || 'text/csv',
        tags: [], // Initialize with empty tags
        rows: {
          create: data.map((row: any, index: number) => ({
            rowIndex: index,
            rowData: row,
            isValid: true,
          })),
        },
      },
      include: {
        rows: true,
      },
    });

    return NextResponse.json({
      message: "File uploaded successfully",
      file: csvFile,
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
} 