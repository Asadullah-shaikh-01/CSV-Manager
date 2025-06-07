"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import CsvUpload from "./CsvUpload";
import CsvFilter from "./CsvFilter";
import CsvTable from "./CsvTable";
import CsvViewer from "./CsvViewer";
import Pagination from "./Pagination";
import { csvService } from "@/services/csv";
import type { CsvFile } from "@/app/types/csvTypes";

export default function CsvManagerContent() {
    const [files, setFiles] = useState<CsvFile[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<CsvFile | null>(null);

    // Filter states
    const [filter, setFilter] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [showArchived, setShowArchived] = useState(false);
    const [selectedTag, setSelectedTag] = useState("");
    const [availableTags, setAvailableTags] = useState<string[]>([]);

    // Pagination states
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize] = useState(10);
    const [totalCount, setTotalCount] = useState(0);

    // Fetch files from backend API
    async function fetchFiles() {
        setLoading(true);
        setError(null);
        try {
            const response = await csvService.fetchFiles({
                page: pageIndex + 1,
                size: pageSize,
                filter,
                tag: selectedTag,
                startDate,
                endDate,
                archived: showArchived,
            });

            setFiles(response.files);
            setTotalCount(response.totalCount);

            // Update available tags
            const tags = new Set<string>();
            response.files.forEach(file => {
                file.tags.forEach(tag => tags.add(tag));
            });
            setAvailableTags(Array.from(tags));

        } catch (err: any) {
            setError(err.message || "Error fetching files");
            toast.error(err.message || "Error fetching files");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFiles();
    }, [pageIndex, filter, selectedTag, startDate, endDate, showArchived]);

    const handleUploadSuccess = () => {
        setPageIndex(0);
        fetchFiles();
        toast.success("File uploaded successfully");
    };

    const handleDelete = async (fileId: string) => {
        try {
            await csvService.deleteFile(fileId);
            fetchFiles();
            toast.success("File deleted successfully");
        } catch (err: any) {
            toast.error(err.message || "Error deleting file");
        }
    };

    const handleArchive = async (fileId: string, archive: boolean) => {
        try {
            await csvService.toggleArchive(fileId, archive);
            fetchFiles();
            toast.success(archive ? "File archived" : "File unarchived");
        } catch (err: any) {
            toast.error(err.message || "Error updating file");
        }
    };

    const handleAddTag = async (fileId: string, tag: string) => {
        try {
            await csvService.addTag(fileId, tag);
            fetchFiles();
            toast.success("Tag added successfully");
        } catch (err: any) {
            toast.error(err.message || "Error adding tag");
        }
    };

    const handleRemoveTag = async (fileId: string, tag: string) => {
        try {
            await csvService.removeTag(fileId, tag);
            fetchFiles();
            toast.success("Tag removed successfully");
        } catch (err: any) {
            toast.error(err.message || "Error removing tag");
        }
    };

    const handleFileSelect = (file: CsvFile) => {
        setSelectedFile(file);
    };

    return (
        <main className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">CSV Manager</h1>

            <CsvUpload
                onUploadSuccess={handleUploadSuccess}
                setError={setError}
                setLoading={setLoading}
            />

            <CsvFilter
                filter={filter}
                onFilterChange={setFilter}
                startDate={startDate}
                endDate={endDate}
                onDateChange={(start, end) => {
                    setStartDate(start);
                    setEndDate(end);
                    setPageIndex(0);
                }}
                showArchived={showArchived}
                onArchivedChange={(show) => {
                    setShowArchived(show);
                    setPageIndex(0);
                }}
                selectedTag={selectedTag}
                onTagChange={(tag) => {
                    setSelectedTag(tag);
                    setPageIndex(0);
                }}
                availableTags={availableTags}
            />

            {error && <p className="text-red-600 mb-4">{error}</p>}
            {loading && <p className="mb-4">Loading...</p>}

            {!loading && files.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                    No files found. Upload a CSV file to get started.
                </p>
            )}

            {files.length > 0 && (
                <>
                    <CsvTable
                        files={files}
                        onFileSelect={handleFileSelect}
                        onDelete={handleDelete}
                        onArchive={handleArchive}
                        onAddTag={handleAddTag}
                        onRemoveTag={handleRemoveTag}
                    />
                    <Pagination
                        pageIndex={pageIndex}
                        setPageIndex={setPageIndex}
                        pageSize={pageSize}
                        totalCount={totalCount}
                    />
                </>
            )}

            {selectedFile && (
                <CsvViewer
                    file={selectedFile}
                    onClose={() => setSelectedFile(null)}
                />
            )}
        </main>
    );
} 