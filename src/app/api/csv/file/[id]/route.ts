import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from 'next/headers';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Get user ID from auth cookie
        const cookieStore = cookies();
        const authToken = cookieStore.get('auth_token');
        
        if (!authToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = authToken.value;
        const fileId = params.id;

        // Get the file with its rows
        const file = await prisma.csvFile.findFirst({
            where: {
                id: fileId,
                userId: userId
            },
            include: {
                rows: true
            }
        });

        if (!file) {
            return NextResponse.json({ error: "File not found" }, { status: 404 });
        }

        return NextResponse.json(file);
    } catch (err: any) {
        console.error("Fetch error:", err);
        return NextResponse.json({ error: err.message || "Fetch failed" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Get user ID from auth cookie
        const cookieStore = cookies();
        const authToken = cookieStore.get('auth_token');
        
        if (!authToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = authToken.value;
        const fileId = params.id;

        // First check if the file belongs to the user
        const file = await prisma.csvFile.findFirst({
            where: {
                id: fileId,
                userId: userId
            }
        });

        if (!file) {
            return NextResponse.json({ error: "File not found" }, { status: 404 });
        }

        // Delete the file and its associated rows
        await prisma.csvRow.deleteMany({ where: { csvFileId: fileId } });
        await prisma.csvFile.delete({ where: { id: fileId } });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("Delete error:", err);
        return NextResponse.json({ error: err.message || "Delete failed" }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Get user ID from auth cookie
        const cookieStore = cookies();
        const authToken = cookieStore.get('auth_token');
        
        if (!authToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = authToken.value;
        const fileId = params.id;
        const updateData = await req.json();

        // First check if the file belongs to the user
        const file = await prisma.csvFile.findFirst({
            where: {
                id: fileId,
                userId: userId
            }
        });

        if (!file) {
            return NextResponse.json({ error: "File not found" }, { status: 404 });
        }

        // Update the file
        const updatedFile = await prisma.csvFile.update({
            where: { id: fileId },
            data: {
                ...updateData,
                updatedAt: new Date(),
            }
        });

        return NextResponse.json(updatedFile);
    } catch (err: any) {
        console.error("Update error:", err);
        return NextResponse.json({ error: err.message || "Update failed" }, { status: 500 });
    }
} 