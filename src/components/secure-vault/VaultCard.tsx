"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface VaultCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  count?: number;
}

export function VaultCard({ title, description, href, icon, count }: VaultCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="bg-white border border-[var(--border-muted)] rounded-[20px] p-6 md:p-8 flex flex-col justify-between h-full hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
        <div>
          {/* Header & Icon Area */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-200">
              {icon}
            </div>
            {count !== undefined && (
              <span className="text-[10px] font-extrabold text-[var(--foreground-subtle)] bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200 uppercase tracking-wider">
                {count} {count === 1 ? "File" : "Files"}
              </span>
            )}
          </div>

          {/* Text content */}
          <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-xs text-[var(--foreground-subtle)] leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* CTA indicator line */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] mt-6">
          <span>Open Folder</span>
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
