import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="px-7 py-[10px] text-xs text-text-subtle flex items-center gap-1.5 border-b border-border">
      <Link href="/" className="text-blue no-underline hover:underline">
        Home
      </Link>
      <span className="text-[10px] text-text-subtle">›</span>
      <Link href="/operations/products" className="text-blue no-underline hover:underline">
        Operations
      </Link>
      <span className="text-[10px] text-text-subtle">›</span>
      <span className="text-text-body">{current}</span>
    </div>
  );
}
