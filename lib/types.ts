export type OpsSlug =
  | "products"
  | "pricing"
  | "pdp"
  | "intake"
  | "quotes"
  | "orders";

export interface OpsMenuItem {
  slug: OpsSlug;
  label: string;
  icon: string;
  iconBg: string;
  sub: string;
  badge?: number;
}

export interface FilterItem {
  label: string;
  count: number;
  checked?: boolean;
}

export interface FilterGroup {
  label: string;
  items: FilterItem[];
}

export type TrackerStep = "empty" | "done" | "warn" | "error";

export type PillVariant =
  | "api"
  | "data"
  | "software"
  | "bundle"
  | "services"
  | "package";

export interface DataTableColumn {
  key: string;
  label: string;
  width?: string;
  sortable?: boolean;
}
