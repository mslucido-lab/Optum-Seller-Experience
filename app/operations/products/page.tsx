"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import ActiveFilterTags from "@/components/ui/ActiveFilterTags";
import DataTable from "@/components/ui/DataTable";
import TrackerCircles from "@/components/ui/TrackerCircles";
import StatusDot from "@/components/ui/StatusDot";
import { products } from "@/lib/data/products";
import { DataTableColumn } from "@/lib/types";

const columns: DataTableColumn[] = [
  { key: "pim", label: "PIM" },
  { key: "productLine", label: "Product line" },
  { key: "tracker", label: "Tracker" },
  { key: "status", label: "Status" },
  { key: "product", label: "Product" },
];

export default function ProductsPage() {
  const [page, setPage] = useState(1);

  const rows = products.map((p) => ({
    pim: p.pim,
    productLine: p.productLine,
    tracker: <TrackerCircles steps={p.tracker} />,
    status: <StatusDot status={p.status} />,
    product: p.product,
  }));

  return (
    <>
      <div className="flex items-center gap-3.5 mb-[22px]">
        <h1 className="text-[22px] font-extrabold text-text-primary tracking-[-0.4px]">Product</h1>
        <Button>Add New Product Offering</Button>
      </div>

      <div className="text-[15px] font-bold text-text-primary mb-3.5">Product Catalog</div>

      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="text-[13px] text-text-muted">
          50 items | <a className="text-orange underline cursor-pointer">Last 6 months</a> | Last
          updated {new Date().toLocaleString()}
        </div>
        <SearchBar placeholder="Search" />
      </div>

      <ActiveFilterTags tags={["Products – API", "Products – Services"]} />

      <DataTable
        columns={columns}
        rows={rows}
        totalItems={50}
        currentPage={page}
        totalPages={3}
        onPageChange={setPage}
      />
    </>
  );
}
