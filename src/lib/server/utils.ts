import { mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function ensureUploadDir() {
    const uploadDir = join(process.cwd(), 'uploads');
    if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
    }
    return uploadDir;
} 