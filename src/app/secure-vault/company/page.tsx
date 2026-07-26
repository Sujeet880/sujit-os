import React from "react";
import { Metadata } from "next";
import { VaultLayout } from "@/components/secure-vault/VaultLayout";
import { FolderCard } from "@/components/secure-vault/FolderCard";
import { companiesData } from "@/data/companies";

export const metadata: Metadata = {
  title: "Secure Vault Company Folders | Sujit Kumar",
  description: "Private employment documents organized by company folders.",
  robots: {
    index: false,
    follow: false
  }
};

export default function CompanyFolderIndexPage() {
  return (
    <VaultLayout title="Company Folders" subtitle="Employment documentation organized by company history. Select a folder to view your payslips and contracts.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companiesData.map((company) => (
          <FolderCard
            key={company.id}
            name={company.name}
            slug={company.slug}
            description={company.description}
            logoLetter={company.logo}
          />
        ))}
      </div>
    </VaultLayout>
  );
}
