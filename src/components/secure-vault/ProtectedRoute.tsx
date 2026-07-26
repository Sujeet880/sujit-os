"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Spinner } from "@/components/ui";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/secure-vault/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center flex-col gap-4">
        <Spinner size="lg" className="text-[var(--primary)]" />
        <p className="text-sm text-[var(--foreground-muted)] font-medium animate-pulse">
          Securing session...
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Prevents flashes of protected content during redirect
  }

  return <>{children}</>;
}
