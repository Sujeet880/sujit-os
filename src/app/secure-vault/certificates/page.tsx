import React from "react";
import { Metadata } from "next";
import { VaultFolderClient } from "@/components/secure-vault/VaultFolderClient";
import { certificatesData } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Secure Vault Certificates | Sujit Kumar",
  description: "Private professional certificates storage.",
  robots: {
    index: false,
    follow: false
  }
};

export default function CertificatesPage() {
  return (
    <VaultFolderClient
      title="Certificates"
      subtitle="View and download your professional course completion slips and vendor certificates."
      initialDocuments={certificatesData}
    />
  );
}
