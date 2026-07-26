import React from "react";
import { Metadata } from "next";
import { LoginForm } from "@/components/secure-vault/LoginForm";

export const metadata: Metadata = {
  title: "Secure Vault Login | Sujit Kumar",
  description: "Private document storage access portal.",
  robots: {
    index: false,
    follow: false
  }
};

export default function SecureVaultLoginPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center p-6">
      <div className="w-full flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
