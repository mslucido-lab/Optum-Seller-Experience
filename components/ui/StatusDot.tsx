const statusColor: Record<string, string> = {
  New: "green",
  Published: "green",
  Completed: "green",
  Accepted: "green",

  "In Review": "blue",
  Approved: "blue",
  Configured: "blue",
  Scheduled: "blue",
  "Under Revision": "blue",
  "Legal Review": "blue",
  "Under Review": "blue",

  "Ready for Review": "yellow",
  "On Hold": "yellow",
  Processing: "yellow",
  "In Progress": "yellow",

  "Fee Config": "orange",
  "Marketing Review": "orange",
  Open: "orange",

  Draft: "gray",
  Archived: "gray",
  Inactive: "gray",
  Expired: "gray",

  Cancelled: "red",
  Rejected: "red",

  "Pending Approval": "purple",
};

const dotClass: Record<string, string> = {
  green: "bg-green shadow-[0_0_6px_#22c55e]",
  blue: "bg-blue shadow-[0_0_6px_#60a5fa]",
  yellow: "bg-yellow shadow-[0_0_6px_#f59e0b]",
  orange: "bg-orange",
  gray: "bg-text-subtle",
  red: "bg-red shadow-[0_0_6px_#ef4444]",
  purple: "bg-purple",
};

export default function StatusDot({ status }: { status: string }) {
  const color = statusColor[status] ?? "gray";
  return (
    <div className="inline-flex items-center gap-1.5 text-[13px]">
      <div className={`w-2 h-2 rounded-full shrink-0 ${dotClass[color]}`} />
      {status}
    </div>
  );
}
