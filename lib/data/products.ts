import { TrackerStep } from "@/lib/types";

export interface ProductRow {
  pim: string;
  productLine: string;
  tracker: TrackerStep[];
  status: string;
  product: string;
}

export const products: ProductRow[] = [
  { pim: "C006-2604-3004621", productLine: "—", tracker: ["empty", "empty", "empty", "empty", "empty"], status: "New", product: "—" },
  { pim: "7896-2604-3004621", productLine: "Medical Network", tracker: ["done", "empty", "empty", "empty", "empty"], status: "Fee Config", product: "API" },
  { pim: "444552604-3004621", productLine: "—", tracker: ["empty", "empty", "empty", "empty", "empty"], status: "Archived", product: "API" },
  { pim: "852lkjh-3004621", productLine: "Medical Network", tracker: ["done", "done", "done", "empty", "empty"], status: "In Review", product: "API" },
  { pim: "wer87-2604-3004621", productLine: "Clinical Exchange", tracker: ["done", "done", "done", "done", "empty"], status: "Ready for Review", product: "API" },
  { pim: "xcvbn-2604-3004621", productLine: "Medical Network", tracker: ["done", "done", "done", "done", "done"], status: "Published", product: "Service" },
  { pim: "567-2604-3004621", productLine: "Interqual", tracker: ["done", "done", "done", "done", "done"], status: "Approved", product: "API" },
  { pim: "sdfghsd-2604-3004621", productLine: "Revenue Performance Advisor", tracker: ["warn", "empty", "empty", "empty", "empty"], status: "Cancelled", product: "API" },
  { pim: "sdfg345-2604-3004621", productLine: "Revenue Performance Advisor", tracker: ["done", "empty", "empty", "empty", "empty"], status: "Draft", product: "API" },
  { pim: "C006-2604-3004621", productLine: "—", tracker: ["done", "empty", "empty", "empty", "empty"], status: "Pending Approval", product: "—" },
  { pim: "7896-2604-3004621", productLine: "Medical Network", tracker: ["done", "done", "done", "done", "empty"], status: "Under Revision", product: "API" },
  { pim: "444552604-3004621", productLine: "—", tracker: ["error", "empty", "empty", "empty", "empty"], status: "Rejected", product: "API" },
  { pim: "852lkjh-3004621", productLine: "Medical Network", tracker: ["done", "done", "done", "done", "empty"], status: "On Hold", product: "API" },
  { pim: "wer87-2604-3004621", productLine: "Clinical Exchange", tracker: ["done", "done", "done", "done", "done"], status: "Scheduled", product: "API" },
  { pim: "xcvbn-2604-3004621", productLine: "Medical Network", tracker: ["done", "done", "done", "done", "done"], status: "Completed", product: "Service" },
];
