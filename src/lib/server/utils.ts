import { mkdir } from 'fs/promises';
import { join } from 'path';
import { randomBytes } from 'crypto';

export interface FileValidationResult {
    isValid: boolean;
    error?: string;
}

export interface FileMetadata {
    originalName: string;
    size: number;
    mimeType: string;
    extension: string;
}

export async function ensureUploadDir(): Promise<string> {
    const uploadDir = join(process.cwd(), 'uploads');
    await mkdir(uploadDir, { recursive: true });
    return uploadDir;
}

export function validateFile(file: File, options: {
    maxSize?: number;
    allowedTypes?: string[];
}): FileValidationResult {
    const { maxSize = 10 * 1024 * 1024, allowedTypes = ['.csv'] } = options;

    if (!file) {
        return { isValid: false, error: 'No file provided' };
    }

    if (file.size > maxSize) {
        return { isValid: false, error: `File size exceeds ${maxSize / (1024 * 1024)}MB limit` };
    }

    const extension = file.name.toLowerCase().split('.').pop();
    if (!extension || !allowedTypes.includes(`.${extension}`)) {
        return { isValid: false, error: `Only ${allowedTypes.join(', ')} files are allowed` };
    }

    return { isValid: true };
}

export function generateSecureFileName(originalName: string): string {
    const extension = originalName.toLowerCase().split('.').pop() || '';
    const randomString = randomBytes(16).toString('hex');
    const timestamp = Date.now();
    return `${timestamp}-${randomString}.${extension}`;
}

export function getFileMetadata(file: File): FileMetadata {
    return {
        originalName: file.name,
        size: file.size,
        mimeType: file.type || 'application/octet-stream',
        extension: file.name.toLowerCase().split('.').pop() || '',
    };
}

export function sanitizeFileName(fileName: string): string {
    // Remove any path components
    const baseName = fileName.split(/[\\/]/).pop() || '';
    
    // Remove any non-alphanumeric characters except dots and dashes
    return baseName.replace(/[^a-zA-Z0-9.-]/g, '_');
} 