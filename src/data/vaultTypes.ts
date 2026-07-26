export interface VaultDocument {
  id: string;
  title: string;
  category: "certificates" | "education" | "legal" | "company";
  type: "pdf" | "image" | "doc";
  file: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  companyId?: string; // Links to a specific company slug
  subcategory?: "payslip" | "document"; // Links to Payslips or Documents
}

export interface CompanyInfo {
  id: string;
  slug: string;
  name: string;
  logo: string;
  description: string;
}
