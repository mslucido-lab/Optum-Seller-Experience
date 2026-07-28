import { FilterGroup, OpsSlug } from "@/lib/types";

interface OpsScreenConfig {
  breadcrumbLabel: string;
  filterGroups: FilterGroup[];
}

export const opsScreenConfig: Record<OpsSlug, OpsScreenConfig> = {
  products: {
    breadcrumbLabel: "Product Dashboard",
    filterGroups: [
      {
        label: "Status",
        items: [
          { label: "New", count: 4 },
          { label: "Fee Config", count: 2 },
          { label: "Ready for Review", count: 3 },
          { label: "In Review", count: 2 },
          { label: "Approved", count: 5 },
          { label: "Published", count: 9 },
          { label: "Cancelled", count: 1 },
          { label: "Draft", count: 3 },
        ],
      },
      {
        label: "Products",
        items: [
          { label: "API", count: 12, checked: true },
          { label: "Data", count: 4 },
          { label: "Hardware", count: 1 },
          { label: "Services", count: 6, checked: true },
          { label: "Software", count: 5 },
        ],
      },
      {
        label: "Product Family",
        items: [
          { label: "Optum Real APIs", count: 3 },
          { label: "Optum Real Dental APIs", count: 2 },
          { label: "Optum Real Medical APIs", count: 4 },
          { label: "Medical Network", count: 8 },
          { label: "Clinical Exchange", count: 3 },
          { label: "Interqual", count: 2 },
          { label: "Revenue Performance Advisor", count: 1 },
        ],
      },
      {
        label: "Products",
        items: [
          { label: "Online", count: 14 },
          { label: "Sales Assisted", count: 8 },
          { label: "Offline", count: 3 },
        ],
      },
    ],
  },
  pricing: {
    breadcrumbLabel: "Pricing Pages",
    filterGroups: [
      {
        label: "Status",
        items: [
          { label: "Published", count: 6 },
          { label: "New", count: 3 },
          { label: "Configured", count: 4 },
          { label: "Draft", count: 2 },
          { label: "Archived", count: 1 },
        ],
      },
      {
        label: "Template Type",
        items: [
          { label: "Public Pricing", count: 8 },
          { label: "Private Quote", count: 4 },
          { label: "Custom", count: 2 },
        ],
      },
      {
        label: "Product Family",
        items: [
          { label: "Medical Network", count: 5 },
          { label: "Clinical Exchange", count: 3 },
          { label: "Revenue Performance", count: 2 },
          { label: "Optum Coding", count: 2 },
          { label: "Interqual", count: 1 },
        ],
      },
    ],
  },
  pdp: {
    breadcrumbLabel: "PDP Pages",
    filterGroups: [
      {
        label: "Stage",
        items: [
          { label: "Draft", count: 2 },
          { label: "In Progress", count: 3 },
          { label: "Legal Review", count: 2 },
          { label: "Marketing Review", count: 2 },
          { label: "Published", count: 6 },
          { label: "Archived", count: 1 },
        ],
      },
      {
        label: "Category",
        items: [
          { label: "Eligibility & Claims", count: 6 },
          { label: "Analytics & Insights", count: 3 },
          { label: "Data Access", count: 2 },
          { label: "Care Operations", count: 2 },
          { label: "Payment & Reimbursement", count: 1 },
        ],
      },
      {
        label: "Has AI",
        items: [
          { label: "Yes", count: 5 },
          { label: "No", count: 9 },
          { label: "Uncertain", count: 2 },
        ],
      },
    ],
  },
  intake: {
    breadcrumbLabel: "Intake Forms",
    filterGroups: [
      {
        label: "Status",
        items: [
          { label: "In Progress", count: 2 },
          { label: "Submitted", count: 3 },
          { label: "Legal Review", count: 2 },
          { label: "Marketing Review", count: 1 },
          { label: "Complete", count: 4 },
        ],
      },
      {
        label: "Product Type",
        items: [
          { label: "API", count: 6 },
          { label: "Data", count: 2 },
          { label: "Software", count: 2 },
          { label: "Services", count: 1 },
          { label: "Bundle", count: 1 },
        ],
      },
      {
        label: "Business Unit",
        items: [
          { label: "Optum Coding", count: 3 },
          { label: "Veradigm Health", count: 4 },
          { label: "Clinical Exchange", count: 2 },
          { label: "Medical Network", count: 3 },
        ],
      },
    ],
  },
  quotes: {
    breadcrumbLabel: "Quotes",
    filterGroups: [
      {
        label: "Status",
        items: [
          { label: "Open", count: 5 },
          { label: "Under Review", count: 3 },
          { label: "Accepted", count: 28 },
          { label: "Expired", count: 7 },
          { label: "Declined", count: 4 },
        ],
      },
      {
        label: "Product",
        items: [
          { label: "Eligibility API", count: 8 },
          { label: "CPT® Data Licensing", count: 5 },
          { label: "Revenue Performance", count: 6 },
          { label: "Payer EDI Services", count: 4 },
          { label: "Medical Network APIs", count: 5 },
        ],
      },
      {
        label: "Amount Range",
        items: [
          { label: "Under $25K", count: 9 },
          { label: "$25K–$75K", count: 14 },
          { label: "Over $75K", count: 5 },
        ],
      },
    ],
  },
  orders: {
    breadcrumbLabel: "Order History",
    filterGroups: [
      {
        label: "Status",
        items: [
          { label: "Completed", count: 98 },
          { label: "Processing", count: 12 },
          { label: "Pending", count: 8 },
          { label: "Cancelled", count: 14 },
          { label: "Refunded", count: 3 },
        ],
      },
      {
        label: "Product Type",
        items: [
          { label: "API", count: 72 },
          { label: "Data", count: 18 },
          { label: "Software", count: 24 },
          { label: "Services", count: 15 },
          { label: "Bundle", count: 13 },
        ],
      },
      {
        label: "Date Range",
        items: [
          { label: "Last 30 days", count: 24 },
          { label: "Last 90 days", count: 67 },
          { label: "Year to date", count: 142 },
        ],
      },
    ],
  },
};
