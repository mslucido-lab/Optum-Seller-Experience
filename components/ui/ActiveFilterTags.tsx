"use client";

import { useState } from "react";

export default function ActiveFilterTags({ tags }: { tags: string[] }) {
  const [active, setActive] = useState(tags);

  if (active.length === 0) return null;

  return (
    <div className="flex items-center gap-2 mb-3 flex-wrap">
      <span className="text-xs text-text-subtle">Active Filters</span>
      {active.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1.5 px-2.5 py-[3px] rounded-full bg-orange/[.12] border border-orange/[.3] text-xs text-orange"
        >
          {tag}
          <span
            className="cursor-pointer text-sm leading-none"
            onClick={() => setActive((prev) => prev.filter((t) => t !== tag))}
          >
            ×
          </span>
        </span>
      ))}
      <span
        className="text-xs text-blue cursor-pointer"
        onClick={() => setActive([])}
      >
        Clear
      </span>
    </div>
  );
}
