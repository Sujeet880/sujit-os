"use client";

import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/hooks/use-active-section";

import { NavbarItem } from "./navbar-item";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

import "./navbar.css";

import type { NavbarProps } from "./navbar.types";

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ className, ...props }, ref) => {
    const activeSection = useActiveSection();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 8);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header
        ref={ref}
        className={cn("navbar", className, isScrolled && "navbar--scrolled")}
        {...props}
      >
        <div className="navbar__wrapper">
          {/* Logo */}
          <div className="navbar__brand">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Sujit Kumar" 
                className="navbar__logo-img" 
              />
            </Link>
          </div>

          <nav
            className="navbar__center"
            aria-label="Primary Navigation"
          >
            <NavbarItem
              href="/#work"
              label="Work"
              active={activeSection === "work"}
            />

            <NavbarItem
              href="/#about"
              label="About"
              active={activeSection === "about"}
            />

            <NavbarItem
              href="/#articles"
              label="Writing"
              active={activeSection === "articles"}
            />

            <NavbarItem
              href="/#contact"
              label="Contact"
              active={activeSection === "contact"}
            />
          </nav>
 
          <div className="navbar__right">
            <ThemeToggle />
            <Link href="mailto:ktsujeet1997@gmail.com">
              <Button className="navbar__cta">
                <span className="navbar__cta-dot" />
                <span>Chat with Me</span>
              </Button>
            </Link>
          </div>
 
          {/* Mobile */}
          <div className="navbar__mobile-toggle">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = "Navbar";