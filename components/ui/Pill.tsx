import { PillVariant } from "@/lib/types";

const variantClass: Record<PillVariant, string> = {
  api: "bg-blue/[.14] text-blue",
  data: "bg-orange/[.12] text-orange",
  software: "bg-purple/[.14] text-purple",
  bundle: "bg-blue/[.14] text-blue",
  services: "bg-text-muted/[.12] text-text-muted",
  package: "bg-text-muted/[.12] text-text-muted",
};

export default function Pill({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: PillVariant;
}) {
  return (
    <span
      className={`inline-block px-[9px] py-0.5 rounded-full text-[11px] font-semibold ${variantClass[variant]}`}
    >
      {children}
    </span>
  );
}
