"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Grid, List, ArrowUpDown, Plus, ArrowLeft, FileText } from "lucide-react";

import { VaultLayout } from "@/components/secure-vault/VaultLayout";
import { VaultSearch } from "@/components/secure-vault/VaultSearch";
import { DocumentGrid } from "@/components/secure-vault/DocumentGrid";
import { DocumentList } from "@/components/secure-vault/DocumentList";
import { Button } from "@/components/ui";

import { companiesData, companyDocumentsData } from "@/data/companies";

export default function CompanyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [activeTab, setActiveTab] = useState<"payslip" | "document">("payslip");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title-az" | "title-za">("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Find the company metadata
  const company = useMemo(() => {
    return companiesData.find((c) => c.slug === slug);
  }, [slug]);

  // Find all documents for this company
  const companyDocs = useMemo(() => {
    return companyDocumentsData.filter((doc) => doc.companyId === slug);
  }, [slug]);

  // Filter based on active section/tab: Payslips vs Documents
  const activeTabDocs = useMemo(() => {
    return companyDocs.filter((doc) => doc.subcategory === activeTab);
  }, [companyDocs, activeTab]);

  // Apply search query & sorting
  const filteredAndSortedDocs = useMemo(() => {
    let result = [...activeTabDocs];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (doc) => 
          doc.title.toLowerCase().includes(q) || 
          doc.description.toLowerCase().includes(q)
      );
    }

    // Sort order
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
  }, [activeTabDocs, searchQuery, sortBy]);

  // Pagination indexing
  const totalItems = filteredAndSortedDocs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const paginatedDocs = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedDocs.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredAndSortedDocs, currentPage]);

  const handleUploadPlaceholder = () => {
    alert(`Upload Support: File upload integration for ${company?.name} ${activeTab === "payslip" ? "payslips" : "documents"} is prepared.`);
  };

  if (!company) {
    return (
      <VaultLayout title="Folder Not Found" subtitle="Private directory metadata does not exist.">
        <div className="text-center py-16 bg-white border border-[var(--border-muted)] rounded-[20px]">
          <h2 className="text-lg font-bold text-[var(--foreground)] mb-2">Company folder not found</h2>
          <Link href="/secure-vault/company">
            <Button variant="primary">
              Back to Company Folders
            </Button>
          </Link>
        </div>
      </VaultLayout>
    );
  }

  return (
    <VaultLayout title={company.name} subtitle={company.description}>
      {/* Navigation and Tab Selector Panel */}
      <div className="flex flex-col gap-6 mb-8 border-b border-[var(--border-muted)] pb-4">
        <div className="flex items-center gap-3">
          <Link 
            href="/secure-vault/company"
            className="w-10 h-10 border border-zinc-200 hover:bg-zinc-550 hover:bg-zinc-50 rounded-xl flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
          </Link>
          <span className="text-xs font-bold text-[var(--foreground-subtle)]">
            Company Folders / {company.name}
          </span>
        </div>

        {/* Payslips vs Documents exactly */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              setActiveTab("payslip");
              setCurrentPage(1);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "payslip"
                ? "bg-[var(--primary)] text-white shadow-sm shadow-orange-500/10"
                : "bg-white border border-zinc-200 text-[var(--foreground-muted)] hover:bg-zinc-50"
            }`}
          >
            Payslips
          </button>
          <button
            onClick={() => {
              setActiveTab("document");
              setCurrentPage(1);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "document"
                ? "bg-[var(--primary)] text-white shadow-sm shadow-orange-500/10"
                : "bg-white border border-zinc-200 text-[var(--foreground-muted)] hover:bg-zinc-50"
            }`}
          >
            Documents
          </button>
        </div>
      </div>

      {/* Grid, Sort, & Search Action Group */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <VaultSearch value={searchQuery} onChange={setSearchQuery} />

        <div className="flex flex-wrap items-center gap-3">
          {/* Sorting drop-down */}
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

          {/* Add file trigger */}
          <button
            onClick={handleUploadPlaceholder}
            className="h-11 px-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-sm shadow-orange-500/10 cursor-pointer"
          >
            <Plus size={14} />
            <span>Add File</span>
          </button>
        </div>
      </div>

      {/* Render list of documents */}
      <div className="min-h-[300px]">
        {paginatedDocs.length > 0 ? (
          viewMode === "grid" ? (
            <DocumentGrid documents={paginatedDocs} />
          ) : (
            <DocumentList documents={paginatedDocs} />
          )
        ) : (
          <div className="bg-white border border-[var(--border-muted)] rounded-[20px] p-16 text-center max-w-md mx-auto my-12">
            <div className="w-12 h-12 bg-zinc-100 text-zinc-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={24} />
            </div>
            <p className="text-sm font-bold text-[var(--foreground)] mb-1">
              No {activeTab === "payslip" ? "payslips" : "documents"} found
            </p>
            <p className="text-xs text-[var(--foreground-subtle)] font-medium">
              Use the upload button or adjust filter queries.
            </p>
          </div>
        )}
      </div>

      {/* Pagination Ready footer */}
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
