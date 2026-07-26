import React from "react";
import { Metadata } from "next";
import { VaultLayout } from "@/components/secure-vault/VaultLayout";
import { VaultCard } from "@/components/secure-vault/VaultCard";
import { Award, GraduationCap, Building2, ShieldCheck } from "lucide-react";

import { certificatesData } from "@/data/certificates";
import { educationData } from "@/data/education";
import { legalData } from "@/data/legal";
import { companiesData } from "@/data/companies";

export const metadata: Metadata = {
  title: "Secure Vault Dashboard | Sujit Kumar",
  description: "Private document storage and organization dashboard.",
  robots: {
    index: false,
    follow: false
  }
};

export default function SecureVaultDashboardPage() {
  const categories = [
    {
      title: "Certificates",
      description: "Professional course completions, vendor certifications, and training credentials.",
      href: "/secure-vault/certificates",
      icon: <Award size={24} />,
      count: certificatesData.length
    },
    {
      title: "Education",
      description: "Academic degrees, official university transcripts, diplomas, and records.",
      href: "/secure-vault/education",
      icon: <GraduationCap size={24} />,
      count: educationData.length
    },
    {
      title: "Company",
      description: "Employment documentation, salary payslips, offer letters, and relieving statements.",
      href: "/secure-vault/company",
      icon: <Building2 size={24} />,
      count: companiesData.length
    },
    {
      title: "Legal",
      description: "Government-issued identity cards, passport copies, taxation, and personal records.",
      href: "/secure-vault/legal",
      icon: <ShieldCheck size={24} />,
      count: legalData.length
    }
  ];

  return (
    <VaultLayout title="Dashboard" subtitle="Securely manage and organize your professional credentials and identity documentation.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <VaultCard
            key={cat.title}
            title={cat.title}
            description={cat.description}
            href={cat.href}
            icon={cat.icon}
            count={cat.count}
          />
        ))}
      </div>
    </VaultLayout>
  );
}
