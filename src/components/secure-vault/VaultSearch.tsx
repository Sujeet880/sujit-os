"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface VaultSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function VaultSearch({ value, onChange, placeholder = "Search documents..." }: VaultSearchProps) {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
        <Search size={16} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-11 pl-10 pr-10 rounded-xl border border-zinc-200 bg-white text-xs text-[var(--foreground)] placeholder-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all font-medium"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-[var(--foreground)] cursor-pointer"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
