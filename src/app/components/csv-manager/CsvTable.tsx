"use client";

import React, { useMemo } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { CsvFile, FileType } from "@/app/types/csvTypes";
import { EnhancedTable } from "./EnhancedTable";
import { ColumnDef } from "@tanstack/react-table";
import { EditableCell } from "./EditableCell";
import { csvService } from "@/services/csv";

type Props = {
    files: CsvFile[];
    onDelete: (id: string) => void;
    onArchive: (id: string, archive: boolean) => void;
    onAddTag: (id: string, tag: string) => void;
    onRemoveTag: (id: string, tag: string) => void;
    onFileSelect: (file: CsvFile) => void;
};

export default function CsvTable({ files, onDelete, onArchive, onAddTag, onRemoveTag, onFileSelect }: Props) {
    const columns = useMemo<ColumnDef<CsvFile>[]>(
        () => [
            {
                accessorKey: "fileName",
                header: "File Name",
                cell: (info) => (
                    <EditableCell
                        value={info.getValue() as string}
                        row={info.row}
                        column={info.column}
                        onSave={async (newValue) => {
                            await csvService.updateFile(info.row.original.id, {
                                fileName: newValue,
                            });
                        }}
                    />
                ),
            },
            {
                accessorKey: "fileType",
                header: "Type",
                cell: (info) => {
                    const fileType = info.getValue() as FileType;
                    return (
                        <Badge variant="outline">
                            {fileType ? fileType.charAt(0).toUpperCase() + fileType.slice(1) : '-'}
                        </Badge>
                    );
                },
            },
            {
                accessorKey: "uploadedAt",
                header: "Uploaded At",
                cell: (info) => format(new Date(info.getValue<string>()), "PPpp"),
            },
            {
                accessorKey: "rowCount",
                header: "Row Count",
                cell: (info) => info.getValue<number>().toLocaleString(),
            },
            {
                accessorKey: "fileSize",
                header: "Size",
                cell: (info) => formatFileSize(info.getValue<number>()),
            },
            {
                accessorKey: "lastAccessed",
                header: "Last Accessed",
                cell: (info) => format(new Date(info.getValue<string>()), "PPpp"),
            },
            {
                accessorKey: "tags",
                header: "Tags",
                cell: (info) => (
                    <div className="flex flex-wrap gap-1" onClick={(e) => e.stopPropagation()}>
                        {info.getValue<string[]>().map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="flex items-center gap-1"
                            >
                                {tag}
                                <button
                                    onClick={() => onRemoveTag(info.row.original.id, tag)}
                                    className="ml-1 text-xs hover:text-red-500"
                                >
                                    ×
                                </button>
                            </Badge>
                        ))}
                        <Input
                            type="text"
                            placeholder="Add tag"
                            className="h-6 w-20 text-xs"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    const input = e.currentTarget;
                                    if (input.value) {
                                        onAddTag(info.row.original.id, input.value);
                                        input.value = '';
                                    }
                                }
                            }}
                        />
                    </div>
                ),
            },
            {
                id: "actions",
                header: "Actions",
                cell: (info) => (
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onArchive(info.row.original.id, !info.row.original.isArchived)}
                        >
                            {info.row.original.isArchived ? "Unarchive" : "Archive"}
                        </Button>
                        <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => onDelete(info.row.original.id)}
                        >
                            Delete
                        </Button>
                    </div>
                ),
            },
        ],
        [onDelete, onArchive, onAddTag, onRemoveTag]
    );

    return <EnhancedTable data={files} columns={columns} onRowClick={onFileSelect} />;
}

function formatFileSize(bytes: number): string {
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(1)} ${units[unitIndex]}`;
}
