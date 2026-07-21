"use client";

import { useState } from "react";
import Link from "next/link";

import { useActiveSection } from "@/hooks/use-active-section";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const activeSection = useActiveSection();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar__mobile">
      <button
        className="navbar__hamburger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle Menu"
        aria-expanded={open}
      >
        ☰
      </button>

      {open && (
        <div className="navbar__mobile-panel">
          <Link
            href="/#work"
            className={
              activeSection === "work"
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            onClick={handleClose}
          >
            Work
          </Link>

          <Link
            href="/#about"
            className={
              activeSection === "about"
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            onClick={handleClose}
          >
            About
          </Link>

          <Link
            href="/#articles"
            className={
              activeSection === "articles"
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            onClick={handleClose}
          >
            Writing
          </Link>

          <Link
            href="/#contact"
            className={
              activeSection === "contact"
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            onClick={handleClose}
          >
            Contact
          </Link>

          <hr />

          <Link
            href="mailto:ktsujeet1997@gmail.com"
            onClick={handleClose}
          >
            <span className="navbar__cta-dot" />
            <span>Let's Talk</span>
          </Link>
        </div>
      )}
    </div>
  );
}