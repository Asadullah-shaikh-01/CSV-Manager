"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  pageIndex: number;
  setPageIndex: (page: number) => void;
  pageSize: number;
  totalCount: number;
};

export default function Pagination({ pageIndex, setPageIndex, pageSize, totalCount }: Props) {
  const pageCount = Math.ceil(totalCount / pageSize);

  return (
    <div className="flex items-center justify-between mt-4">
      <Button disabled={pageIndex <= 0} onClick={() => setPageIndex(pageIndex - 1)}>
        Previous
      </Button>
      <span>
        Page <strong>{pageIndex + 1}</strong> of <strong>{pageCount}</strong>
      </span>
      <Button disabled={pageIndex >= pageCount - 1} onClick={() => setPageIndex(pageIndex + 1)}>
        Next
      </Button>
    </div>
  );
}
