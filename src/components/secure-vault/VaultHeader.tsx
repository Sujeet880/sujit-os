"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { ShieldCheck, User } from "lucide-react";

interface VaultHeaderProps {
  title: string;
  subtitle?: string;
}

export function VaultHeader({ title, subtitle }: VaultHeaderProps) {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b border-[var(--border-muted)] h-20 px-8 flex items-center justify-between flex-shrink-0">
      <div>
        <h1 className="text-xl font-extrabold tracking-tight text-[var(--foreground)]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-[var(--foreground-subtle)] font-medium mt-0.5">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Connection Safety Indicator */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-100 rounded-full text-[10px] font-bold text-green-700 uppercase tracking-wider">
          <ShieldCheck size={12} />
          <span>Encrypted Session</span>
        </div>

        {/* User Info Avatar */}
        {user && (
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[var(--foreground-muted)]">
              <User size={16} />
            </div>
            <div className="hidden md:block text-left">
              <span className="text-xs font-bold text-[var(--foreground)] block">
                Sujit Kumar
              </span>
              <span className="text-[10px] text-[var(--foreground-subtle)] font-medium block">
                {user.email}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
