"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

interface EditableCellProps {
    value: string;
    row: any;
    column: any;
    onSave: (value: string) => void;
}

export function EditableCell({
    value: initialValue,
    row: { index },
    column: { id },
    onSave,
}: EditableCellProps) {
    const [value, setValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const onBlur = () => {
        setIsEditing(false);
        if (value !== initialValue) {
            onSave(value);
        }
    };

    if (!isEditing) {
        return (
            <div
                className="cursor-pointer p-2 -m-2 rounded hover:bg-gray-100"
                onClick={() => setIsEditing(true)}
            >
                {value}
            </div>
        );
    }

    return (
        <Input
            ref={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={onBlur}
            onKeyDown={e => {
                if (e.key === "Enter") {
                    onBlur();
                }
                if (e.key === "Escape") {
                    setIsEditing(false);
                    setValue(initialValue);
                }
            }}
            className="h-8 w-full"
        />
    );
} 