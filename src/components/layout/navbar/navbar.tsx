"use client";

import Link from "next/link";
import { forwardRef } from "react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/hooks/use-active-section";

import { NavbarItem } from "./navbar-item";
import { MobileMenu } from "./mobile-menu";

import "./navbar.css";

import type { NavbarProps } from "./navbar.types";

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ className, ...props }, ref) => {
    const activeSection = useActiveSection();

    return (
      <header
        ref={ref}
        className={cn("navbar", className)}
        {...props}
      >
        <div className="navbar__wrapper">
          {/* Logo */}
          <div className="navbar__brand">
            <Link href="#home">
              <span className="navbar__logo">
                SUJIT
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="navbar__center"
            aria-label="Primary Navigation"
          >
            <NavbarItem
              href="#work"
              label="Work"
              active={activeSection === "work"}
            />

            <NavbarItem
              href="#about"
              label="About"
              active={activeSection === "about"}
            />

            <NavbarItem
              href="#articles"
              label="Articles"
              active={activeSection === "articles"}
            />

            <NavbarItem
              href="#contact"
              label="Contact"
              active={activeSection === "contact"}
            />
          </nav>

          {/* Desktop CTA */}
          <div className="navbar__right">
            <Link href="/resume.pdf">
              <Button variant="secondary">
                Resume
              </Button>
            </Link>

            <Link href="mailto:hello@example.com">
              <Button>
                Let's Talk
              </Button>
            </Link>
          </div>

          {/* Mobile */}
          <div className="navbar__mobile-toggle">
            <MobileMenu />
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = "Navbar";