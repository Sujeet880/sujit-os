import { forwardRef } from "react";
import Link from "next/link";
import { Mail, FileText, MapPin, Globe, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui";
import { RESUME_PATH } from "@/config/constants";

import "./footer.css";

import { SocialButtons } from "@/components/common";
import type { FooterProps } from "./footer.types";

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <Section
        ref={ref}
        className={cn("footer", className)}
        {...props}
      >
        <Container>
          <div className="footer__inner">
            <div className="footer__brand">
              <Link href="/">
                <img 
                  src="/logo.png" 
                  alt="Sujit Kumar" 
                  className="footer__logo-img" 
                />
              </Link>

              <p className="footer__text">
                Designing products that balance user needs, business goals and technical feasibility.
              </p>

              {/* Secure Vault Premium CTA Block */}
              <div className="footer__vault-cta mt-2 p-5 border border-zinc-200/60 rounded-[20px] bg-[#FCFCFA] text-left max-w-[320px]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] mb-1">
                  Secure Vault
                </h4>
                <p className="text-[11px] text-[var(--foreground-subtle)] font-medium leading-relaxed mb-4">
                  Private access to professional documents and career records.
                </p>
                <Link href="/secure-vault/login">
                  <Button variant="primary" className="!min-h-[40px] h-10 py-2.5 px-4 text-xs font-bold rounded-full">
                    Open Secure Vault
                  </Button>
                </Link>
              </div>

              <div className="footer__location mt-2">
                <MapPin size={12} className="footer__location-icon" />
                <span>Based in India • Open to Remote & Hybrid Opportunities</span>
              </div>
            </div>

            <div className="footer__nav-grid">
              <div className="footer__nav-col">
                <span className="footer__nav-title">Navigation</span>
                <nav className="footer__nav-links">
                  <a href="/#work" className="footer__link">Work</a>
                  <a href="/#experience" className="footer__link">Experience</a>
                  <a href="/#about" className="footer__link">About</a>
                  <a href="/#articles" className="footer__link">Articles</a>
                  <a href="/#contact" className="footer__link">Contact</a>
                  <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="footer__link">Resume</a>
                </nav>
              </div>

              <div className="footer__nav-col">
                <span className="footer__nav-title">Socials</span>
                <SocialButtons />
              </div>

              <div className="footer__nav-col">
                <span className="footer__nav-title">Contact</span>
                <nav className="footer__nav-links">
                  <a href="mailto:ktsujeet1997@gmail.com" className="footer__link">
                    <Mail size={12} className="inline-icon" /> Email
                  </a>
                  <a href="tel:+919288498199" className="footer__link">
                    <Phone size={12} className="inline-icon" /> +91 92884 98199
                  </a>
                  <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="footer__link">
                    <FileText size={12} className="inline-icon" /> Resume
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <span className="footer__copy">
              © 2026 Sujit Kumar. All rights reserved.
            </span>
          </div>
        </Container>
      </Section>
    );
  }
);

Footer.displayName = "Footer";