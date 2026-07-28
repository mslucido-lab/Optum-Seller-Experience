"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import DataTable from "@/components/ui/DataTable";
import StatusDot from "@/components/ui/StatusDot";
import ProgressBar from "@/components/ui/ProgressBar";
import Pill from "@/components/ui/Pill";
import { intakeRows } from "@/lib/data/intake";
import { DataTableColumn } from "@/lib/types";

const columns: DataTableColumn[] = [
  { key: "product", label: "Product" },
  { key: "submitter", label: "Submitter" },
  { key: "type", label: "Type" },
  { key: "submitted", label: "Submitted" },
  { key: "goLive", label: "Go-Live" },
  { key: "completion", label: "Completion" },
  { key: "status", label: "Status" },
];

export default function IntakePage() {
  const [page, setPage] = useState(1);

  const rows = intakeRows.map((r) => ({
    product: <strong>{r.product}</strong>,
    submitter: r.submitter,
    type: <Pill variant={r.typeVariant}>{r.type}</Pill>,
    submitted: r.submitted,
    goLive: r.goLive,
    completion: <ProgressBar percent={r.completion} color={r.completionColor} />,
    status: <StatusDot status={r.status} />,
  }));

  return (
    <>
      <div className="flex items-center gap-3.5 mb-[22px]">
        <h1 className="text-[22px] font-extrabold text-text-primary tracking-[-0.4px]">
          Intake Forms
        </h1>
        <Button>+ New Intake</Button>
      </div>

      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="text-[13px] text-text-muted">
          12 items | <a className="text-orange underline cursor-pointer">Last 6 months</a> | Last
          updated {new Date().toLocaleString()}
        </div>
        <SearchBar placeholder="Search intake forms…" />
      </div>

      <DataTable
        columns={columns}
        rows={rows}
        totalItems={12}
        currentPage={page}
        totalPages={2}
        onPageChange={setPage}
      />
    </>
  );
}
