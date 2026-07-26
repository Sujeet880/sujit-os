import { VaultDocument } from "./vaultTypes";

export const certificatesData: VaultDocument[] = [
  {
    id: "cert-1",
    title: "Google UX Design Professional Certificate",
    category: "certificates",
    type: "pdf",
    file: "/documents/google_ux_design.pdf",
    createdAt: "2024-05-15",
    updatedAt: "2024-05-15",
    description: "Google Professional Certificate on Coursera covering UX Design, User Research, Mobile and Web Prototyping."
  },
  {
    id: "cert-2",
    title: "Figma Advanced Interaction Design",
    category: "certificates",
    type: "pdf",
    file: "/documents/figma_interaction.pdf",
    createdAt: "2025-01-10",
    updatedAt: "2025-01-10",
    description: "Advanced certification covering responsive grid systems, compound auto layouts, interactive components, and token variables."
  }
];
