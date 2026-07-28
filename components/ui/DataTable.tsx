"use client";

import { DataTableColumn } from "@/lib/types";

interface DataTableProps {
  columns: DataTableColumn[];
  rows: Record<string, React.ReactNode>[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  footerExtra?: string;
}

function pageList(current: number, total: number): (number | "…")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set<number>([1, 2, 3, total]);
  pages.add(current);
  const sorted = Array.from(pages)
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);
  const result: (number | "…")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - (sorted[i - 1] as number) > 1) result.push("…");
    result.push(p);
  });
  return result;
}

export default function DataTable({
  columns,
  rows,
  currentPage,
  totalPages,
  onPageChange,
  footerExtra,
}: DataTableProps) {
  return (
    <div className="bg-navy-card border border-border rounded-[10px] overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-navy-mid">
          <tr>
            <th className="w-9" />
            {columns.map((col) => (
              <th
                key={col.key}
                style={col.width ? { width: col.width } : undefined}
                className="text-left text-xs font-bold text-text-muted border-b border-border whitespace-nowrap px-3.5 py-[11px] cursor-pointer select-none hover:text-text-body"
              >
                {col.label}
                {col.sortable !== false && (
                  <span className="text-text-subtle text-[10px] ml-[3px]">↕</span>
                )}
              </th>
            ))}
            <th className="w-10" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="cursor-pointer transition-colors hover:bg-navy-hover border-b border-border last:border-b-0"
            >
              <td className="w-8 text-text-subtle text-[11px] px-3.5 py-3 align-middle">›</td>
              {columns.map((col) => (
                <td key={col.key} className="text-[13px] px-3.5 py-3 align-middle">
                  {row[col.key]}
                </td>
              ))}
              <td className="px-3.5 py-3 align-middle">
                <span
                  className="text-text-subtle text-base cursor-pointer px-1.5 py-0.5 rounded-[6px] tracking-[2px] hover:bg-navy-row hover:text-text-body"
                  onClick={(e) => e.stopPropagation()}
                >
                  ···
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between px-5 py-3.5 border-t border-border text-[13px] text-text-muted">
        <span>
          Displaying page: {currentPage} of {totalPages}
          {footerExtra ? ` · ${footerExtra}` : ""}
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className="min-w-8 h-8 rounded-[6px] border border-border text-[13px] text-text-muted px-2 hover:border-border-lt hover:text-text-primary hover:bg-navy-hover transition-colors"
          >
            Previous
          </button>
          {pageList(currentPage, totalPages).map((p, i) =>
            p === "…" ? (
              <span key={`e${i}`} className="min-w-8 h-8 flex items-center justify-center text-text-muted">
                …
              </span>
            ) : (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                className={`min-w-8 h-8 rounded-[6px] border text-[13px] transition-colors ${
                  p === currentPage
                    ? "bg-orange text-white border-orange"
                    : "border-border text-text-muted hover:border-border-lt hover:text-text-primary hover:bg-navy-hover"
                }`}
              >
                {p}
              </button>
            )
          )}
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            className="min-w-8 h-8 rounded-[6px] border border-border text-[13px] text-text-muted px-2 hover:border-border-lt hover:text-text-primary hover:bg-navy-hover transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
