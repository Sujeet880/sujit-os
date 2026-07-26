"use client";

import React from "react";
import Link from "next/link";
import { FolderOpen, ArrowRight } from "lucide-react";

interface FolderCardProps {
  name: string;
  slug: string;
  description: string;
  logoLetter: string;
}

export function FolderCard({ name, slug, description, logoLetter }: FolderCardProps) {
  return (
    <Link href={`/secure-vault/company/${slug}`} className="group block">
      <div className="bg-white border border-[var(--border-muted)] rounded-[20px] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
        <div className="flex items-start gap-4">
          {/* Logo representation */}
          <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-[var(--primary)] text-lg font-extrabold flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-200">
            {logoLetter}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-sm font-extrabold tracking-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-200 truncate">
                {name}
              </h4>
              <FolderOpen size={14} className="text-[var(--foreground-subtle)] group-hover:text-[var(--primary)] transition-colors" />
            </div>
            <p className="text-xs text-[var(--foreground-subtle)] font-medium leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Action arrow line */}
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--primary)] mt-5 uppercase tracking-wider justify-end">
          <span>Open Folder</span>
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
