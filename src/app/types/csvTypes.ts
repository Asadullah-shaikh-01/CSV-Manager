export type FileType = 'company' | 'people' | 'other';

export interface CsvFile {
    id: string;
    userId: string;
    fileName: string;
    originalName: string;
    uploadedAt: string;
    fileType: FileType;
    columnHeaders: string[];
    rowCount: number;
    fileSize: number;
    isArchived?: boolean;
    tags: string[];
    lastAccessed?: string;
}
  
export interface CsvRow {
    id: string;
    csvFileId: string;
    rowIndex: number;
    rowData: Record<string, any>;
}
  