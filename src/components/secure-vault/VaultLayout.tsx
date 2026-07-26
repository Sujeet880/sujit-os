"use client";

import React from "react";
import { VaultSidebar } from "./VaultSidebar";
import { VaultHeader } from "./VaultHeader";
import { ProtectedRoute } from "./ProtectedRoute";

interface VaultLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function VaultLayout({ children, title, subtitle }: VaultLayoutProps) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-[#FAFAF8] overflow-hidden font-sans text-sm">
        {/* Sidebar Left */}
        <VaultSidebar />

        {/* Main Content Pane Right */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
          {/* Header Top */}
          <VaultHeader title={title} subtitle={subtitle} />

          {/* Page Body Viewport */}
          <main className="flex-1 overflow-y-auto p-8">
            <div className="max-w-[1200px] mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
