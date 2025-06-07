import type { CsvFile, FileType } from "@/app/types/csvTypes";

interface FetchFilesParams {
  page?: number;
  size?: number;
  filter?: string;
  tag?: string;
  startDate?: Date;
  endDate?: Date;
  archived?: boolean;
  fileType?: FileType;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

interface FetchFilesResponse {
  files: CsvFile[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
}

export const csvService = {
  // Upload CSV file
  async uploadFile(file: File, fileType: FileType): Promise<{ message: string; file: CsvFile }> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileType", fileType);

    const response = await fetch("/api/upload-csv", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Upload failed");
    }

    return response.json();
  },

  // Fetch CSV files with filtering and pagination
  async fetchFiles(params: FetchFilesParams = {}): Promise<FetchFilesResponse> {
    const searchParams = new URLSearchParams();
    
    if (params.page) searchParams.set("page", params.page.toString());
    if (params.size) searchParams.set("size", params.size.toString());
    if (params.filter) searchParams.set("filter", params.filter);
    if (params.tag) searchParams.set("tag", params.tag);
    if (params.fileType) searchParams.set("fileType", params.fileType);
    if (params.startDate) searchParams.set("startDate", params.startDate.toISOString());
    if (params.endDate) searchParams.set("endDate", params.endDate.toISOString());
    if (params.archived !== undefined) searchParams.set("archived", params.archived.toString());
    if (params.sortBy) searchParams.set("sortBy", params.sortBy);
    if (params.sortOrder) searchParams.set("sortOrder", params.sortOrder);

    const response = await fetch(`/api/csv/files?${searchParams.toString()}`);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch files");
    }

    return response.json();
  },

  // Delete a CSV file
  async deleteFile(fileId: string): Promise<void> {
    const response = await fetch(`/api/csv/file/${fileId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to delete file");
    }
  },

  // Update file (archive/unarchive, add/remove tags)
  async updateFile(fileId: string, data: Partial<CsvFile>): Promise<CsvFile> {
    const response = await fetch(`/api/csv/file/${fileId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to update file");
    }

    return response.json();
  },

  // Add tag to file
  async addTag(fileId: string, tag: string): Promise<CsvFile> {
    return this.updateFile(fileId, {
      tags: [...(await this.getFile(fileId)).tags, tag],
    });
  },

  // Remove tag from file
  async removeTag(fileId: string, tagToRemove: string): Promise<CsvFile> {
    const file = await this.getFile(fileId);
    return this.updateFile(fileId, {
      tags: file.tags.filter(tag => tag !== tagToRemove),
    });
  },

  // Get single file
  async getFile(fileId: string): Promise<CsvFile> {
    const response = await fetch(`/api/csv/file/${fileId}`);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch file");
    }

    return response.json();
  },

  // Archive/Unarchive file
  async toggleArchive(fileId: string, archive: boolean): Promise<CsvFile> {
    return this.updateFile(fileId, { isArchived: archive });
  },
}; 