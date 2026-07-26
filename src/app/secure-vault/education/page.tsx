import React from "react";
import { Metadata } from "next";
import { VaultFolderClient } from "@/components/secure-vault/VaultFolderClient";
import { educationData } from "@/data/education";

export const metadata: Metadata = {
  title: "Secure Vault Education | Sujit Kumar",
  description: "Private academic diplomas and records storage.",
  robots: {
    index: false,
    follow: false
  }
};

export default function EducationPage() {
  return (
    <VaultFolderClient
      title="Education"
      subtitle="Manage your degree credentials, transcripts, and official postgraduate diplomas."
      initialDocuments={educationData}
    />
  );
}
