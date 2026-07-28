import { OpsMenuItem } from "@/lib/types";

export const opsMenuItems: OpsMenuItem[] = [
  {
    slug: "products",
    label: "Products",
    icon: "🗂️",
    iconBg: "rgba(96,165,250,.12)",
    sub: "Catalog, offerings & status",
  },
  {
    slug: "pricing",
    label: "Pricing Pages",
    icon: "💲",
    iconBg: "rgba(34,197,94,.12)",
    sub: "Templates & JSON configs",
  },
  {
    slug: "pdp",
    label: "PDP Pages",
    icon: "📄",
    iconBg: "rgba(167,139,250,.12)",
    sub: "Product detail page content",
  },
  {
    slug: "intake",
    label: "Intake Forms",
    icon: "📋",
    iconBg: "rgba(245,158,11,.12)",
    sub: "Content intake & review",
    badge: 2,
  },
  {
    slug: "quotes",
    label: "Quotes",
    icon: "💬",
    iconBg: "rgba(246,139,30,.12)",
    sub: "Buyer quote requests",
    badge: 5,
  },
  {
    slug: "orders",
    label: "Order History",
    icon: "📦",
    iconBg: "rgba(239,68,68,.12)",
    sub: "Completed & active orders",
  },
];
