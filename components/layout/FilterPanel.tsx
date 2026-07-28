import { FilterGroup } from "@/lib/types";

export default function FilterPanel({ groups }: { groups: FilterGroup[] }) {
  return (
    <aside className="w-[210px] shrink-0 border-r border-border py-5 overflow-y-auto">
      <div className="mb-1">
        <div className="text-[11px] font-bold uppercase tracking-[.7px] text-text-muted px-[18px] pt-2 pb-1.5">
          Filtering
        </div>
      </div>
      {groups.map((group, i) => (
        <div key={`${group.label}-${i}`}>
          <div className="mb-1">
            <div className="text-[11px] font-bold uppercase tracking-[.7px] text-text-muted px-[18px] pt-2 pb-1.5">
              {group.label}
            </div>
            {group.items.map((item) => (
              <label
                key={item.label}
                className="flex items-center justify-between px-[18px] py-[5px] cursor-pointer text-[13px] text-text-body hover:bg-navy-hover transition-colors"
              >
                <span className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={item.checked}
                    className="accent-orange mr-2"
                  />
                  {item.label}
                </span>
                <span className="text-[11px] text-text-subtle bg-navy-row rounded-full px-[7px] py-px min-w-[22px] text-center">
                  {item.count}
                </span>
              </label>
            ))}
          </div>
          {i < groups.length - 1 && <div className="h-px bg-border my-2.5" />}
        </div>
      ))}
    </aside>
  );
}
