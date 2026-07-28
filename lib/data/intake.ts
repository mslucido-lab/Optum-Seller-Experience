import { PillVariant } from "@/lib/types";

export interface IntakeRow {
  product: string;
  submitter: string;
  type: string;
  typeVariant: PillVariant;
  submitted: string;
  goLive: string;
  completion: number;
  completionColor: string;
  status: string;
}

export const intakeRows: IntakeRow[] = [
  {
    product: "CPT® Data Licensing – Veradigm®",
    submitter: "Peter C / Terri",
    type: "Data",
    typeVariant: "data",
    submitted: "Aug 1, 2025",
    goLive: "Feb 2026",
    completion: 72,
    completionColor: "#60a5fa",
    status: "Legal Review",
  },
  {
    product: "Enhanced Eligibility API",
    submitter: "Peter C",
    type: "API",
    typeVariant: "api",
    submitted: "Jul 28, 2025",
    goLive: "Q4 2025",
    completion: 35,
    completionColor: "#f59e0b",
    status: "In Progress",
  },
  {
    product: "Medical Network APIs",
    submitter: "EDI Team",
    type: "API Bundle",
    typeVariant: "bundle",
    submitted: "Jun 15, 2025",
    goLive: "Q3 2025",
    completion: 88,
    completionColor: "#f68b1e",
    status: "Marketing Review",
  },
  {
    product: "Revenue Performance Advisor",
    submitter: "AIM Ops",
    type: "Software",
    typeVariant: "software",
    submitted: "Mar 2, 2025",
    goLive: "Live",
    completion: 100,
    completionColor: "#22c55e",
    status: "Published",
  },
];
