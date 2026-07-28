"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import DataTable from "@/components/ui/DataTable";
import StatusDot from "@/components/ui/StatusDot";
import ProgressBar from "@/components/ui/ProgressBar";
import { pdpRows } from "@/lib/data/pdp";
import { DataTableColumn } from "@/lib/types";

const columns: DataTableColumn[] = [
  { key: "productName", label: "Product Name" },
  { key: "category", label: "Category" },
  { key: "owner", label: "Owner" },
  { key: "goLive", label: "Go-Live" },
  { key: "completion", label: "Completion" },
  { key: "stage", label: "Stage" },
];

export default function PdpPage() {
  const [page, setPage] = useState(1);

  const rows = pdpRows.map((r) => ({
    productName: <strong>{r.productName}</strong>,
    category: r.category,
    owner: r.owner,
    goLive: r.goLive,
    completion: <ProgressBar percent={r.completion} color={r.completionColor} />,
    stage: <StatusDot status={r.stage} />,
  }));

  return (
    <>
      <div className="flex items-center gap-3.5 mb-[22px]">
        <h1 className="text-[22px] font-extrabold text-text-primary tracking-[-0.4px]">
          PDP Pages
        </h1>
        <Button>+ New PDP</Button>
      </div>

      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="text-[13px] text-text-muted">
          16 items | <a className="text-orange underline cursor-pointer">Last 6 months</a> | Last
          updated {new Date().toLocaleString()}
        </div>
        <SearchBar placeholder="Search PDPs…" />
      </div>

      <DataTable
        columns={columns}
        rows={rows}
        totalItems={16}
        currentPage={page}
        totalPages={2}
        onPageChange={setPage}
      />
    </>
  );
}
