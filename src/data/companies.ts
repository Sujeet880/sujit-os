import { CompanyInfo, VaultDocument } from "./vaultTypes";

export const companiesData: CompanyInfo[] = [
  {
    id: "comp-1",
    slug: "joon-web",
    name: "Joon Web",
    logo: "J",
    description: "Full-stack client web design and custom application experiences."
  },
  {
    id: "comp-2",
    slug: "oodles",
    name: "Oodles",
    logo: "O",
    description: "Enterprise software services, UI design, and platform integrations."
  },
  {
    id: "comp-3",
    slug: "o4s",
    name: "O4S",
    logo: "4",
    description: "SaaS supply chain automation, capacity planning, and logistics solutions."
  },
  {
    id: "comp-4",
    slug: "cooter-labs",
    name: "Cooter Labs",
    logo: "C",
    description: "Embedded system interfaces, IoT switchboards, and hardware dashboard designs."
  },
  {
    id: "comp-5",
    slug: "pixel-decode",
    name: "Pixel Decode",
    logo: "P",
    description: "Bespoke digital design, editorial portfolios, and Vercel hosting implementations."
  }
];

export const companyDocumentsData: VaultDocument[] = [
  // Joon Web
  {
    id: "doc-jw-1",
    title: "Payslip - June 2025",
    category: "company",
    companyId: "joon-web",
    subcategory: "payslip",
    type: "pdf",
    file: "/documents/payslips/jw_payslip_june_2025.pdf",
    createdAt: "2025-06-30",
    updatedAt: "2025-06-30",
    description: "Salary credit slip for June 2025 from Joon Web."
  },
  {
    id: "doc-jw-2",
    title: "Relieving Letter",
    category: "company",
    companyId: "joon-web",
    subcategory: "document",
    type: "pdf",
    file: "/documents/jw_relieving_letter.pdf",
    createdAt: "2025-07-15",
    updatedAt: "2025-07-15",
    description: "Official relieving letter and experience statement from Joon Web."
  },

  // Oodles
  {
    id: "doc-ol-1",
    title: "Payslip - October 2025",
    category: "company",
    companyId: "oodles",
    subcategory: "payslip",
    type: "pdf",
    file: "/documents/payslips/ol_payslip_oct_2025.pdf",
    createdAt: "2025-10-31",
    updatedAt: "2025-10-31",
    description: "Salary slip for October 2025 from Oodles."
  },

  // O4S
  {
    id: "doc-o4s-1",
    title: "Payslip - December 2025",
    category: "company",
    companyId: "o4s",
    subcategory: "payslip",
    type: "pdf",
    file: "/documents/payslips/o4s_payslip_dec_2025.pdf",
    createdAt: "2025-12-31",
    updatedAt: "2025-12-31",
    description: "Salary slip for December 2025 from O4S."
  },
  {
    id: "doc-o4s-2",
    title: "Employment Contract",
    category: "company",
    companyId: "o4s",
    subcategory: "document",
    type: "pdf",
    file: "/documents/o4s_contract.pdf",
    createdAt: "2025-04-10",
    updatedAt: "2025-04-10",
    description: "Signed job offer contract and non-disclosure agreement."
  },

  // Cooter Labs
  {
    id: "doc-cl-1",
    title: "Payslip - February 2026",
    category: "company",
    companyId: "cooter-labs",
    subcategory: "payslip",
    type: "pdf",
    file: "/documents/payslips/cl_payslip_feb_2026.pdf",
    createdAt: "2026-02-28",
    updatedAt: "2026-02-28",
    description: "Salary credit slip for February 2026 from Cooter Labs."
  },

  // Pixel Decode
  {
    id: "doc-pd-1",
    title: "Payslip - April 2026",
    category: "company",
    companyId: "pixel-decode",
    subcategory: "payslip",
    type: "pdf",
    file: "/documents/payslips/pd_payslip_april_2026.pdf",
    createdAt: "2026-04-30",
    updatedAt: "2026-04-30",
    description: "Salary slip for April 2026 from Pixel Decode."
  }
];
