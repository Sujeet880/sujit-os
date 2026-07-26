import React from "react";
import { Metadata } from "next";
import { VaultFolderClient } from "@/components/secure-vault/VaultFolderClient";
import { legalData } from "@/data/legal";

export const metadata: Metadata = {
  title: "Secure Vault Legal | Sujit Kumar",
  description: "Private government identity documents and personal legal records storage.",
  robots: {
    index: false,
    follow: false
  }
};

export default function LegalPage() {
  return (
    <VaultFolderClient
      title="Legal"
      subtitle="Identity documents, passport bio-page copies, national tax numbers, and personal records."
      initialDocuments={legalData}
    />
  );
}
