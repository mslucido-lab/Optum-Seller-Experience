"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FilterPanel from "@/components/layout/FilterPanel";
import Footer from "@/components/layout/Footer";
import { opsScreenConfig } from "@/lib/data/opsScreens";
import { OpsSlug } from "@/lib/types";

const slugs = Object.keys(opsScreenConfig) as OpsSlug[];

export default function OperationsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const slug = slugs.find((s) => pathname.startsWith(`/operations/${s}`)) ?? "products";
  const config = opsScreenConfig[slug];

  return (
    <div className="flex-1 flex flex-col">
      <Breadcrumb current={config.breadcrumbLabel} />
      <div className="flex-1 flex">
        <FilterPanel groups={config.filterGroups} />
        <main className="flex-1 px-7 py-6 min-w-0">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
