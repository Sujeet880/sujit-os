"use client";

import React from "react";
import { FileText, Eye, Download, Calendar } from "lucide-react";
import { VaultDocument } from "@/data/vaultTypes";

interface DocumentCardProps {
  document: VaultDocument;
}

export function DocumentCard({ document }: DocumentCardProps) {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Downloading ${document.title} (${document.file})...`);
  };

  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Opening ${document.title} in preview mode...`);
  };

  return (
    <div className="bg-white border border-[var(--border-muted)] rounded-[20px] p-5 flex flex-col justify-between h-full hover:shadow-md transition-all duration-200">
      <div>
        {/* Header Icon + File Type Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-[var(--primary)]">
            <FileText size={20} />
          </div>
          <span className="text-[9px] font-extrabold text-[var(--foreground-muted)] bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200 uppercase tracking-wider">
            {document.type}
          </span>
        </div>

        {/* Title & Description */}
        <h4 className="text-sm font-bold text-[var(--foreground)] mb-1.5 line-clamp-2">
          {document.title}
        </h4>
        <p className="text-xs text-[var(--foreground-subtle)] leading-relaxed line-clamp-3 mb-4 font-medium">
          {document.description}
        </p>
      </div>

      <div>
        {/* Date Row */}
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[var(--foreground-subtle)] mb-4 uppercase tracking-wider">
          <Calendar size={12} />
          <span>Uploaded {document.createdAt}</span>
        </div>

        {/* Actions grid layout */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={handleView}
            className="flex items-center justify-center gap-1.5 h-9 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-[11px] font-bold text-[var(--foreground-muted)] transition-all cursor-pointer"
          >
            <Eye size={12} />
            <span>View</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-1.5 h-9 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[11px] font-bold text-[var(--foreground)] transition-all cursor-pointer"
          >
            <Download size={12} />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
