export interface QuoteRow {
  quoteId: string;
  buyer: string;
  product: string;
  amount: string;
  submitted: string;
  expires: string;
  status: string;
}

export const quoteRows: QuoteRow[] = [
  { quoteId: "#QT-2025-0091", buyer: "North Shore Health System", product: "Eligibility API Pro", amount: "$48,000", submitted: "Jul 1, 2025", expires: "Jul 31, 2025", status: "Open" },
  { quoteId: "#QT-2025-0088", buyer: "Midwest Medical Group", product: "CPT® Data Licensing", amount: "$12,500", submitted: "Jun 28, 2025", expires: "Jul 28, 2025", status: "Under Review" },
  { quoteId: "#QT-2025-0085", buyer: "Pacific Health Partners", product: "Revenue Performance Advisor", amount: "$96,000", submitted: "Jun 25, 2025", expires: "Jul 25, 2025", status: "Open" },
  { quoteId: "#QT-2025-0079", buyer: "Regional Clinic Alliance", product: "Payer EDI Services", amount: "$24,000", submitted: "Jun 20, 2025", expires: "Jul 20, 2025", status: "Accepted" },
  { quoteId: "#QT-2025-0071", buyer: "Sunstate Healthcare", product: "Enhanced Eligibility API", amount: "$36,000", submitted: "Jun 10, 2025", expires: "Jul 10, 2025", status: "Expired" },
];
