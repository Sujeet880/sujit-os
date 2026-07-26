import { VaultDocument } from "./vaultTypes";

export const legalData: VaultDocument[] = [
  {
    id: "legal-1",
    title: "Passport Information",
    category: "legal",
    type: "pdf",
    file: "/documents/passport_copy.pdf",
    createdAt: "2023-04-12",
    updatedAt: "2023-04-12",
    description: "Scan of passport bio-data pages for proof of identity and international travel."
  },
  {
    id: "legal-2",
    title: "National Identity Card",
    category: "legal",
    type: "image",
    file: "/documents/national_id.jpg",
    createdAt: "2022-09-05",
    updatedAt: "2022-09-05",
    description: "National card scan showing identification number and verification info."
  }
];
