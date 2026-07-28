"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import DataTable from "@/components/ui/DataTable";
import StatusDot from "@/components/ui/StatusDot";
import TemplateCard from "@/components/ui/TemplateCard";
import { pricingRows, pricingTemplates } from "@/lib/data/pricing";
import { DataTableColumn } from "@/lib/types";

const columns: DataTableColumn[] = [
  { key: "productName", label: "Product Name" },
  { key: "productLine", label: "Product Line" },
  { key: "productType", label: "Product Type" },
  { key: "offeringType", label: "Offering Type" },
  { key: "status", label: "Status" },
  { key: "updated", label: "Updated" },
];

export default function PricingPage() {
  const [page, setPage] = useState(1);

  const rows = pricingRows.map((r) => ({
    productName: r.productName,
    productLine: r.productLine,
    productType: r.productType,
    offeringType: r.offeringType,
    status: <StatusDot status={r.status} />,
    updated: r.updated,
  }));

  return (
    <>
      <div className="flex items-center gap-3.5 mb-[22px]">
        <h1 className="text-[22px] font-extrabold text-text-primary tracking-[-0.4px]">
          Pricing Pages
        </h1>
        <Button>Create Pricing Template</Button>
      </div>

      <div className="flex items-center justify-between mb-3.5">
        <div className="text-[15px] font-bold text-text-primary">Pricing templates</div>
      </div>
      <div className="grid grid-cols-3 gap-3.5 mb-7">
        {pricingTemplates.map((t) => (
          <TemplateCard key={t.name} template={t} />
        ))}
      </div>

      <div className="text-[15px] font-bold text-text-primary mb-3.5">Product catalog</div>

      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="text-[13px] text-text-muted">
          50 items | <a className="text-orange underline cursor-pointer">Last 6 months</a> | Last
          updated {new Date().toLocaleString()}
        </div>
        <SearchBar placeholder="Search" />
      </div>

      <DataTable
        columns={columns}
        rows={rows}
        totalItems={50}
        currentPage={page}
        totalPages={4}
        onPageChange={setPage}
      />
    </>
  );
}
