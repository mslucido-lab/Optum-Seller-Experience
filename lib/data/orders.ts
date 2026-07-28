import { PillVariant } from "@/lib/types";

export interface OrderRow {
  orderId: string;
  buyer: string;
  product: string;
  type: string;
  typeVariant: PillVariant;
  amount: string;
  orderDate: string;
  status: string;
}

export const orderRows: OrderRow[] = [
  { orderId: "#ORD-2025-0142", buyer: "North Shore Health System", product: "Eligibility API Pro", type: "API", typeVariant: "api", amount: "$48,000", orderDate: "Jul 1, 2025", status: "Completed" },
  { orderId: "#ORD-2025-0141", buyer: "Midwest Medical Group", product: "CPT® Data Licensing", type: "Data", typeVariant: "data", amount: "$12,500", orderDate: "Jun 30, 2025", status: "Processing" },
  { orderId: "#ORD-2025-0138", buyer: "Pacific Health Partners", product: "Revenue Performance Advisor", type: "Software", typeVariant: "software", amount: "$96,000", orderDate: "Jun 27, 2025", status: "Completed" },
  { orderId: "#ORD-2025-0134", buyer: "Regional Clinic Alliance", product: "Payer EDI Services", type: "API", typeVariant: "api", amount: "$24,000", orderDate: "Jun 22, 2025", status: "Completed" },
  { orderId: "#ORD-2025-0129", buyer: "Sunstate Healthcare", product: "Enhanced Eligibility API", type: "API", typeVariant: "api", amount: "$36,000", orderDate: "Jun 18, 2025", status: "Cancelled" },
  { orderId: "#ORD-2025-0122", buyer: "Tri-State Physicians Network", product: "Medical Network APIs", type: "API", typeVariant: "api", amount: "$72,000", orderDate: "Jun 10, 2025", status: "Completed" },
];
