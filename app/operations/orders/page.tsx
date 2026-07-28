"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import DataTable from "@/components/ui/DataTable";
import StatusDot from "@/components/ui/StatusDot";
import Pill from "@/components/ui/Pill";
import { orderRows } from "@/lib/data/orders";
import { DataTableColumn } from "@/lib/types";

const columns: DataTableColumn[] = [
  { key: "orderId", label: "Order ID" },
  { key: "buyer", label: "Buyer" },
  { key: "product", label: "Product" },
  { key: "type", label: "Type" },
  { key: "amount", label: "Amount" },
  { key: "orderDate", label: "Order Date" },
  { key: "status", label: "Status" },
];

export default function OrdersPage() {
  const [page, setPage] = useState(1);

  const rows = orderRows.map((r) => ({
    orderId: <strong>{r.orderId}</strong>,
    buyer: r.buyer,
    product: r.product,
    type: <Pill variant={r.typeVariant}>{r.type}</Pill>,
    amount: r.amount,
    orderDate: r.orderDate,
    status: <StatusDot status={r.status} />,
  }));

  return (
    <>
      <div className="flex items-center gap-3.5 mb-[22px]">
        <h1 className="text-[22px] font-extrabold text-text-primary tracking-[-0.4px]">
          Order History
        </h1>
        <Button variant="ghost">Export CSV</Button>
      </div>

      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="text-[13px] text-text-muted">
          142 items | <a className="text-orange underline cursor-pointer">Last 6 months</a> | Last
          updated {new Date().toLocaleString()}
        </div>
        <SearchBar placeholder="Search orders…" />
      </div>

      <DataTable
        columns={columns}
        rows={rows}
        totalItems={142}
        currentPage={page}
        totalPages={24}
        onPageChange={setPage}
        footerExtra="Total: $1,432,800"
      />
    </>
  );
}
