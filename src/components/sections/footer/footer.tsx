import { forwardRef } from "react";
import Link from "next/link";
import { Mail, FileText, MapPin, Globe, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/cn";

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

              <div className="footer__location">
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
                  <a href="/resume/Sujit_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="footer__link">Resume</a>
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
                  <a href="/resume/Sujit_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="footer__link">
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
            <div className="footer__note">
              Designed with curiosity. Built with Next.js. Focused on meaningful user experiences.
            </div>
          </div>
        </Container>
      </Section>
    );
  }
);

Footer.displayName = "Footer";