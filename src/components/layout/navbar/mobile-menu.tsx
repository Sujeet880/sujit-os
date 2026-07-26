"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useActiveSection } from "@/hooks/use-active-section";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const activeSection = useActiveSection();
  const pathname = usePathname();

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
              activeSection === "work" && pathname === "/"
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            onClick={handleClose}
          >
            Work
          </Link>

          <Link
            href="/design-vault"
            className={
              pathname === "/design-vault"
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            onClick={handleClose}
          >
            Design Vault
          </Link>

          <Link
            href="/#about"
            className={
              activeSection === "about" && pathname === "/"
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
              activeSection === "articles" && pathname === "/"
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
              activeSection === "contact" && pathname === "/"
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