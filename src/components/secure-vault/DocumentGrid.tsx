"use client";

import React from "react";
import { DocumentCard } from "./DocumentCard";
import { VaultDocument } from "@/data/vaultTypes";

interface DocumentGridProps {
  documents: VaultDocument[];
}

export function DocumentGrid({ documents }: DocumentGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {documents.map((doc) => (
        <DocumentCard key={doc.id} document={doc} />
      ))}
    </div>
  );
}
