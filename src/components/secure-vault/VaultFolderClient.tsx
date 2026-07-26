"use client";

import React, { useState, useMemo } from "react";
import { VaultLayout } from "./VaultLayout";
import { VaultSearch } from "./VaultSearch";
import { DocumentGrid } from "./DocumentGrid";
import { DocumentList } from "./DocumentList";
import { VaultDocument } from "@/data/vaultTypes";
import { Grid, List, ArrowUpDown, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface VaultFolderClientProps {
  title: string;
  subtitle: string;
  initialDocuments: VaultDocument[];
  backHref?: string;
}

export function VaultFolderClient({ title, subtitle, initialDocuments, backHref }: VaultFolderClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title-az" | "title-za">("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtered and Sorted list
  const filteredAndSortedDocs = useMemo(() => {
    let result = [...initialDocuments];

    // 1. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (doc) => 
          doc.title.toLowerCase().includes(q) || 
          doc.description.toLowerCase().includes(q)
      );
    }

    // 2. Sort Logic
    result.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (sortBy === "oldest") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      if (sortBy === "title-az") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "title-za") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

    return result;
  }, [initialDocuments, searchQuery, sortBy]);

  // Pagination bounds calculation
  const totalItems = filteredAndSortedDocs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const paginatedDocs = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedDocs.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredAndSortedDocs, currentPage]);

  const handleUploadPlaceholder = () => {
    alert("Upload Support: File upload integration ready. Frontend API structure is prepared for future DB connections.");
  };

  return (
    <VaultLayout title={title} subtitle={subtitle}>
      {/* Top Action Bars */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          {backHref && (
            <Link 
              href={backHref}
              className="w-10 h-10 border border-zinc-200 hover:bg-zinc-50 rounded-xl flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} />
            </Link>
          )}
          
          {/* Reusable Search component */}
          <VaultSearch value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* View, Sort, and Upload Tool Group */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Sort selection dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="h-11 pl-4 pr-10 rounded-xl border border-zinc-200 bg-white text-xs font-bold text-[var(--foreground-muted)] hover:border-zinc-300 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] appearance-none cursor-pointer"
            >
              <option value="newest">Sort: Newest</option>
              <option value="oldest">Sort: Oldest</option>
              <option value="title-az">Sort: Title (A-Z)</option>
              <option value="title-za">Sort: Title (Z-A)</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
              <ArrowUpDown size={12} />
            </div>
          </div>

          {/* Toggle buttons grid/list */}
          <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden bg-white h-11">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3.5 h-full flex items-center justify-center transition-colors cursor-pointer ${
                viewMode === "grid" 
                  ? "bg-zinc-100 text-[var(--foreground)] font-bold" 
                  : "text-zinc-400 hover:text-[var(--foreground)]"
              }`}
              title="Grid View"
            >
              <Grid size={16} />
            </button>
            <div className="w-[1px] h-4 bg-zinc-200" />
            <button
              onClick={() => setViewMode("list")}
              className={`px-3.5 h-full flex items-center justify-center transition-colors cursor-pointer ${
                viewMode === "list" 
                  ? "bg-zinc-100 text-[var(--foreground)] font-bold" 
                  : "text-zinc-400 hover:text-[var(--foreground)]"
              }`}
              title="List View"
            >
              <List size={16} />
            </button>
          </div>

          {/* Add Document placeholder trigger */}
          <button
            onClick={handleUploadPlaceholder}
            className="h-11 px-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-sm shadow-orange-500/10 cursor-pointer"
          >
            <Plus size={14} />
            <span>Add File</span>
          </button>
        </div>
      </div>

      {/* Viewport render Area */}
      <div className="min-h-[400px]">
        {paginatedDocs.length > 0 ? (
          viewMode === "grid" ? (
            <DocumentGrid documents={paginatedDocs} />
          ) : (
            <DocumentList documents={paginatedDocs} />
          )
        ) : (
          <div className="bg-white border border-[var(--border-muted)] rounded-[20px] p-16 text-center max-w-md mx-auto my-12">
            <p className="text-sm font-bold text-[var(--foreground)] mb-1">No matching documents</p>
            <p className="text-xs text-[var(--foreground-subtle)]">Try refining your search terms or filters.</p>
          </div>
        )}
      </div>

      {/* Pagination Ready layout blocks */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-[var(--border-muted)] pt-6 mt-8">
          <span className="text-xs text-[var(--foreground-subtle)] font-medium">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} items
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="h-9 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-bold text-[var(--foreground-muted)] hover:bg-zinc-50 disabled:opacity-50 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="h-9 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-bold text-[var(--foreground-muted)] hover:bg-zinc-50 disabled:opacity-50 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </VaultLayout>
  );
}
