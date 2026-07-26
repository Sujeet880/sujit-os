"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { 
  LayoutDashboard, Award, GraduationCap, Building2, ShieldCheck, LogOut 
} from "lucide-react";

export function VaultSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const menuItems = [
    {
      label: "Dashboard",
      href: "/secure-vault",
      icon: <LayoutDashboard size={18} />
    },
    {
      label: "Certificates",
      href: "/secure-vault/certificates",
      icon: <Award size={18} />
    },
    {
      label: "Education",
      href: "/secure-vault/education",
      icon: <GraduationCap size={18} />
    },
    {
      label: "Company",
      href: "/secure-vault/company",
      icon: <Building2 size={18} />
    },
    {
      label: "Legal",
      href: "/secure-vault/legal",
      icon: <ShieldCheck size={18} />
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-[var(--border-muted)] flex flex-col justify-between h-full py-8 px-4 flex-shrink-0">
      <div>
        {/* Brand/Logo Area */}
        <div className="flex items-center gap-3 px-3 mb-10">
          <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-[var(--primary)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div>
            <span className="font-extrabold text-sm text-[var(--foreground)] tracking-tight block">
              SECURE VAULT
            </span>
            <span className="text-[9px] text-[var(--foreground-subtle)] font-bold uppercase tracking-wider block">
              Personal Storage
            </span>
          </div>
        </div>

        {/* Menu Navigation Links */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/secure-vault" && pathname.startsWith(item.href));
            return (
              <Link 
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                  isActive 
                    ? "bg-orange-50 text-[var(--primary)] bg-orange-50/60 border-l-[3px] border-[var(--primary)] rounded-l-none" 
                    : "text-[var(--foreground-muted)] hover:bg-zinc-50 hover:text-[var(--foreground)]"
                }`}
              >
                <span className={isActive ? "text-[var(--primary)]" : "text-[var(--foreground-subtle)]"}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Action Area */}
      <div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-all cursor-pointer"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
