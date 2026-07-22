"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/common/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by rendering a placeholder button of identical dimensions first
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="theme-toggle-placeholder" 
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <div className="theme-toggle__icon-container">
        <Sun className="theme-toggle__icon theme-toggle__icon--sun" size={20} />
        <Moon className="theme-toggle__icon theme-toggle__icon--moon" size={20} />
      </div>
    </button>
  );
}
