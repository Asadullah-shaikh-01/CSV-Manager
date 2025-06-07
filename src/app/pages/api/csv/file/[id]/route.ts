import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const fileId = params.id;

    const file = await prisma.csvFile.findUnique({
      where: { id: fileId },
      include: {
        rows: {
          orderBy: { rowIndex: 'asc' },
        },
      },
    });

    if (!file) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    return NextResponse.json(file);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
