export interface PricingRow {
  productName: string;
  productLine: string;
  productType: string;
  offeringType: string;
  status: string;
  updated: string;
}

export const pricingRows: PricingRow[] = [
  { productName: "Institutional Claims", productLine: "Medical Network", productType: "API", offeringType: "Package", status: "New", updated: "06/03/2025" },
  { productName: "Professional Claims", productLine: "Medical Network", productType: "API", offeringType: "Package", status: "Configured", updated: "06/03/2025" },
  { productName: "Claims Responses & Reports (ERA)", productLine: "Medical Network", productType: "Bundle", offeringType: "Package", status: "New", updated: "06/03/2025" },
  { productName: "Claim Status", productLine: "Medical Network", productType: "API", offeringType: "Package", status: "Published", updated: "06/03/2025" },
  { productName: "Eligibility", productLine: "Medical Network", productType: "API", offeringType: "Package", status: "Archived", updated: "06/03/2025" },
  { productName: "Implementation Fee for Medical Network APIs", productLine: "Medical Network", productType: "Services", offeringType: "One-time fee", status: "Configured", updated: "06/03/2025" },
  { productName: "Attachment Submission", productLine: "Medical Network", productType: "API", offeringType: "Add-ons", status: "Published", updated: "06/03/2025" },
  { productName: "Integrated Rules Institutional", productLine: "Medical Network", productType: "API", offeringType: "Add-ons", status: "Published", updated: "06/03/2025" },
  { productName: "Integrated Rules Professional", productLine: "Medical Network", productType: "API", offeringType: "Add-ons", status: "Published", updated: "06/03/2025" },
  { productName: "Optum Financial Straight Through Processing (STP)", productLine: "Medical Network", productType: "API", offeringType: "Package", status: "Published", updated: "06/03/2025" },
  { productName: "SmartPay Plus", productLine: "Medical Network", productType: "Software", offeringType: "Package", status: "Archived", updated: "06/03/2025" },
  { productName: "Evergreen Innovations", productLine: "Medical Network", productType: "API", offeringType: "Package", status: "Inactive", updated: "06/03/2025" },
];

export interface PricingTemplate {
  name: string;
  status: string;
  type: string;
  dateCreated: string;
}

export const pricingTemplates: PricingTemplate[] = [
  { name: "Medical Network Pricing Page", status: "Published", type: "Public Pricing", dateCreated: "08/22/25" },
  { name: "Clinical Exchange Pricing Page", status: "New", type: "Private Quote", dateCreated: "08/22/25" },
  { name: "Revenue Performance Package Pricing…", status: "Configured", type: "Public Pricing", dateCreated: "08/22/25" },
];
