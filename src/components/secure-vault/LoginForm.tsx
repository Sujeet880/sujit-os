"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui";
import { ShieldAlert, Check } from "lucide-react";

export function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        // If remember me is true, store email in localStorage for pre-fill
        if (rememberMe) {
          localStorage.setItem("vault_remembered_email", email);
        } else {
          localStorage.removeItem("vault_remembered_email");
        }
        router.push("/secure-vault");
      } else {
        setError("Invalid email or password. Try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Check if we have a remembered email on mount
  React.useEffect(() => {
    const savedEmail = localStorage.getItem("vault_remembered_email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="w-full max-w-[420px] bg-white border border-[var(--border-muted)] rounded-[20px] p-8 md:p-10 shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/10 rounded-full text-[var(--primary)] mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight text-[var(--foreground)] mb-1">
          Secure Vault
        </h2>
        <p className="text-xs text-[var(--foreground-subtle)] font-medium uppercase tracking-wider">
          Private document storage
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 text-xs font-semibold p-3.5 rounded-xl border border-red-100 flex gap-2 items-start mb-6">
          <ShieldAlert size={16} className="flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)] mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-[#FCFCFA] text-sm text-[var(--foreground)] placeholder-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all font-medium"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)] mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-[#FCFCFA] text-sm text-[var(--foreground)] placeholder-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all font-medium"
          />
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 font-semibold text-[var(--foreground-muted)] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="sr-only"
            />
            <span className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
              rememberMe 
                ? "bg-[var(--primary)] border-[var(--primary)] text-white" 
                : "border-zinc-300 bg-white"
            }`}>
              {rememberMe && <Check size={10} strokeWidth={3} />}
            </span>
            <span>Remember Me</span>
          </label>

          <button
            type="button"
            className="font-bold text-[var(--primary)] hover:underline"
            onClick={() => alert("Please contact the administrator to reset your password.")}
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          loading={loading}
          className="mt-6 h-12 text-sm font-semibold rounded-xl"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
