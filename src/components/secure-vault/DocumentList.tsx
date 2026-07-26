"use client";

import React from "react";
import { FileText, Eye, Download, Calendar } from "lucide-react";
import { VaultDocument } from "@/data/vaultTypes";

interface DocumentListProps {
  documents: VaultDocument[];
}

export function DocumentList({ documents }: DocumentListProps) {
  const handleDownload = (e: React.MouseEvent, doc: VaultDocument) => {
    e.preventDefault();
    alert(`Downloading ${doc.title} (${doc.file})...`);
  };

  const handleView = (e: React.MouseEvent, doc: VaultDocument) => {
    e.preventDefault();
    alert(`Opening ${doc.title} in preview mode...`);
  };

  return (
    <div className="bg-white border border-[var(--border-muted)] rounded-[20px] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-zinc-100 bg-[#FCFCFA] text-[10px] font-extrabold uppercase tracking-wider text-[var(--foreground-muted)]">
              <th className="py-4 px-6">Name</th>
              <th className="py-4 px-6">Description</th>
              <th className="py-4 px-6">Date Added</th>
              <th className="py-4 px-6">Type</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-zinc-50/50 transition-colors">
                {/* Name */}
                <td className="py-4 px-6 font-bold text-[var(--foreground)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                      <FileText size={16} />
                    </div>
                    <span className="truncate max-w-[200px]">{doc.title}</span>
                  </div>
                </td>
                
                {/* Description */}
                <td className="py-4 px-6 text-[var(--foreground-subtle)] font-medium max-w-xs truncate">
                  {doc.description}
                </td>

                {/* Date */}
                <td className="py-4 px-6 text-[var(--foreground-subtle)] font-semibold whitespace-nowrap">
                  {doc.createdAt}
                </td>

                {/* Type */}
                <td className="py-4 px-6 whitespace-nowrap">
                  <span className="text-[9px] font-extrabold text-[var(--foreground-muted)] bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200 uppercase tracking-wider">
                    {doc.type}
                  </span>
                </td>

                {/* Actions */}
                <td className="py-4 px-6 text-right whitespace-nowrap">
                  <div className="inline-flex items-center gap-2">
                    <button
                      onClick={(e) => handleView(e, doc)}
                      className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 text-zinc-500 hover:text-[var(--foreground)] transition-colors cursor-pointer"
                      title="View Document"
                    >
                      <Eye size={14} />
                    </button>
                    <button
                      onClick={(e) => handleDownload(e, doc)}
                      className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-[var(--foreground)] transition-colors cursor-pointer"
                      title="Download Document"
                    >
                      <Download size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
