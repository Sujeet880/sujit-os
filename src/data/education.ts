import { VaultDocument } from "./vaultTypes";

export const educationData: VaultDocument[] = [
  {
    id: "edu-1",
    title: "Bachelor of Science in Design",
    category: "education",
    type: "pdf",
    file: "/documents/bs_design_degree.pdf",
    createdAt: "2019-06-30",
    updatedAt: "2019-06-30",
    description: "Official Degree Certificate and transcripts."
  },
  {
    id: "edu-2",
    title: "Postgraduate Diploma in Interaction Design",
    category: "education",
    type: "pdf",
    file: "/documents/postgrad_diploma.pdf",
    createdAt: "2021-07-15",
    updatedAt: "2021-07-15",
    description: "Interaction Design and Product Management certification."
  }
];
