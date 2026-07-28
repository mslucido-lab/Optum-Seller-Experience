import { PricingTemplate } from "@/lib/data/pricing";

const statusColor: Record<string, string> = {
  Published: "bg-green/[.14] text-green",
  New: "bg-green/[.14] text-green",
  Configured: "bg-blue/[.14] text-blue",
};

export default function TemplateCard({ template }: { template: PricingTemplate }) {
  return (
    <div className="bg-navy-card border border-border rounded-[10px] p-4 cursor-pointer transition-colors relative hover:border-border-lt hover:bg-navy-hover">
      <div className="mb-2.5">
        <span
          className={`inline-block px-[9px] py-0.5 rounded-full text-[11px] font-semibold ${
            statusColor[template.status] ?? "bg-text-muted/[.12] text-text-muted"
          }`}
        >
          {template.status}
        </span>
      </div>
      <span className="absolute top-3 right-3 text-text-subtle text-base cursor-pointer w-6 h-6 flex items-center justify-center rounded-[6px] hover:bg-navy-row hover:text-text-body">
        ···
      </span>
      <div className="text-sm font-bold text-text-primary mb-2">{template.name}</div>
      <div className="bg-navy-row rounded-[6px] px-2.5 py-2 text-xs text-text-muted">
        <div>Type: {template.type}</div>
        <div>Date created: {template.dateCreated}</div>
      </div>
    </div>
  );
}
