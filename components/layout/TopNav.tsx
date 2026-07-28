"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import OpsDropdown from "./OpsDropdown";
import { opsMenuItems } from "@/lib/data/nav";
import { OpsSlug } from "@/lib/types";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);

  const activeSlug = (opsMenuItems.find((item) =>
    pathname.startsWith(`/operations/${item.slug}`)
  )?.slug ?? null) as OpsSlug | null;

  const triggerLabel =
    opsMenuItems.find((item) => item.slug === activeSlug)?.label ?? "Operations";

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <nav className="h-[54px] shrink-0 sticky top-0 z-[200] flex items-center px-7 bg-[#0a0c19] border-b border-border">
      <Link href="/operations/products" className="flex items-center gap-2.5 no-underline">
        <span className="text-[18px] font-extrabold text-orange tracking-[-0.5px]">Optum</span>
        <span className="text-[15px] font-semibold text-text-primary tracking-[-0.2px]">
          AI Marketplace
        </span>
      </Link>

      <div className="flex-1" />

      <div className="flex items-center gap-0.5">
        <div className="relative" ref={rootRef}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpen((o) => !o);
            }}
            className={`flex items-center gap-1.5 px-3.5 py-[7px] text-sm font-semibold text-text-primary cursor-pointer rounded-[6px] border border-[rgba(246,139,30,.25)] bg-[rgba(246,139,30,.10)] hover:bg-[rgba(246,139,30,.16)] transition-colors`}
          >
            <span>{triggerLabel}</span>
            <span
              className={`text-[10px] text-text-muted transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>

            <OpsDropdown
              open={open}
              activeSlug={activeSlug}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>

        <div className="w-px h-5 bg-border mx-2" />
        <span
          onClick={() => router.push("/")}
          className="text-[13px] text-text-muted cursor-pointer hover:text-text-primary transition-colors px-1"
        >
          Sign out
        </span>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-text-muted text-base cursor-pointer hover:bg-white/[.07] hover:text-text-primary transition-colors">
          ✦
        </div>
      </div>
    </nav>
  );
}
