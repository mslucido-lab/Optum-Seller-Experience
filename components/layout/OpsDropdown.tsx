"use client";

import { useRouter } from "next/navigation";
import { opsMenuItems } from "@/lib/data/nav";
import { OpsSlug } from "@/lib/types";

interface OpsDropdownProps {
  open: boolean;
  activeSlug: OpsSlug | null;
  onNavigate: (slug: OpsSlug) => void;
}

export default function OpsDropdown({ open, activeSlug, onNavigate }: OpsDropdownProps) {
  const router = useRouter();

  return (
    <div
      className={`absolute top-[calc(100%+8px)] left-0 min-w-[260px] rounded-[10px] border border-border bg-navy-card shadow-[0_4px_20px_rgba(0,0,0,.4)] z-[500] overflow-hidden ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="px-4 py-[10px] text-[10px] font-bold uppercase tracking-[.9px] text-text-subtle border-b border-border bg-navy-mid">
        Operations Portal
      </div>
      {opsMenuItems.map((item, i) => (
        <div
          key={item.slug}
          onClick={() => {
            router.push(`/operations/${item.slug}`);
            onNavigate(item.slug);
          }}
          className={`flex items-center gap-3 px-4 py-[11px] cursor-pointer transition-colors duration-100 hover:bg-navy-hover ${
            i !== opsMenuItems.length - 1 ? "border-b border-border" : ""
          } ${activeSlug === item.slug ? "bg-[rgba(246,139,30,0.12)]" : ""}`}
        >
          <div
            className="w-[30px] h-[30px] rounded-[6px] flex items-center justify-center text-sm shrink-0"
            style={{ background: item.iconBg }}
          >
            {item.icon}
          </div>
          <div className="flex-1">
            <div className="text-[13px] font-semibold text-text-primary">{item.label}</div>
            <div className="text-[11px] text-text-muted mt-px">{item.sub}</div>
          </div>
          {item.badge != null && (
            <span className="text-[10px] font-bold px-[7px] py-0.5 rounded-full bg-orange text-white">
              {item.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
