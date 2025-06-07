"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

type Props = {
  filter: string;
  onFilterChange: (val: string) => void;
  startDate: Date | null;
  endDate: Date | null;
  onDateChange: (start: Date | null, end: Date | null) => void;
  showArchived: boolean;
  onArchivedChange: (show: boolean) => void;
  selectedTag: string;
  onTagChange: (tag: string) => void;
  availableTags: string[];
};

export default function CsvFilter({
  filter,
  onFilterChange,
  startDate,
  endDate,
  onDateChange,
  showArchived,
  onArchivedChange,
  selectedTag,
  onTagChange,
  availableTags,
}: Props) {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex flex-wrap gap-4">
        <Input
          placeholder="Search files..."
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="max-w-sm"
        />

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              {startDate && endDate
                ? `${format(startDate, "PP")} - ${format(endDate, "PP")}`
                : "Select Date Range"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex gap-2" align="start">
            <div>
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={(date) => onDateChange(date, endDate)}
                initialFocus
              />
            </div>
            <div>
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={(date) => onDateChange(startDate, date)}
                initialFocus
              />
            </div>
          </PopoverContent>
        </Popover>

        <select
          value={selectedTag}
          onChange={(e) => onTagChange(e.target.value)}
          className="border rounded-md px-3 py-2"
        >
          <option value="">All Tags</option>
          {availableTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <Button
          variant={showArchived ? "default" : "outline"}
          onClick={() => onArchivedChange(!showArchived)}
        >
          {showArchived ? "Hide Archived" : "Show Archived"}
        </Button>
      </div>
    </div>
  );
}
