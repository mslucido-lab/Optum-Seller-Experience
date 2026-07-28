export interface PdpRow {
  productName: string;
  category: string;
  owner: string;
  goLive: string;
  completion: number;
  completionColor: string;
  stage: string;
}

export const pdpRows: PdpRow[] = [
  { productName: "Eligibility API", category: "Eligibility & Claims", owner: "AIM Ops", goLive: "Live", completion: 100, completionColor: "#22c55e", stage: "Published" },
  { productName: "CPT® Data Licensing – Veradigm®", category: "Data Access", owner: "Peter C / Terri", goLive: "Feb 2026", completion: 72, completionColor: "#60a5fa", stage: "Legal Review" },
  { productName: "Revenue Performance Advisor", category: "Analytics & Insights", owner: "AIM Ops", goLive: "Live", completion: 100, completionColor: "#22c55e", stage: "Published" },
  { productName: "Medical Network APIs", category: "Eligibility & Claims", owner: "EDI Team", goLive: "Q3 2025", completion: 88, completionColor: "#f68b1e", stage: "Marketing Review" },
  { productName: "Payer EDI Services", category: "Eligibility & Claims", owner: "EDI Team", goLive: "Live", completion: 100, completionColor: "#22c55e", stage: "Published" },
  { productName: "Enhanced Eligibility API", category: "Eligibility & Claims", owner: "Peter C", goLive: "Q4 2025", completion: 35, completionColor: "#f59e0b", stage: "Draft" },
];
