"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import DataTable from "@/components/ui/DataTable";
import StatusDot from "@/components/ui/StatusDot";
import { quoteRows } from "@/lib/data/quotes";
import { DataTableColumn } from "@/lib/types";

const columns: DataTableColumn[] = [
  { key: "quoteId", label: "Quote ID" },
  { key: "buyer", label: "Buyer" },
  { key: "product", label: "Product" },
  { key: "amount", label: "Amount" },
  { key: "submitted", label: "Submitted" },
  { key: "expires", label: "Expires" },
  { key: "status", label: "Status" },
];

export default function QuotesPage() {
  const [page, setPage] = useState(1);

  const rows = quoteRows.map((r) => ({
    quoteId: <strong>{r.quoteId}</strong>,
    buyer: r.buyer,
    product: r.product,
    amount: r.amount,
    submitted: r.submitted,
    expires: r.expires,
    status: <StatusDot status={r.status} />,
  }));

  return (
    <>
      <div className="flex items-center gap-3.5 mb-[22px]">
        <h1 className="text-[22px] font-extrabold text-text-primary tracking-[-0.4px]">Quotes</h1>
        <Button>+ Create Quote</Button>
      </div>

      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="text-[13px] text-text-muted">
          43 items | <a className="text-orange underline cursor-pointer">Last 6 months</a> | Last
          updated {new Date().toLocaleString()}
        </div>
        <SearchBar placeholder="Search quotes…" />
      </div>

      <DataTable
        columns={columns}
        rows={rows}
        totalItems={43}
        currentPage={page}
        totalPages={3}
        onPageChange={setPage}
      />
    </>
  );
}
