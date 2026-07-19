import { forwardRef } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/cn";

import "./footer.css";

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
              <h3 className="footer__title">
                Sujit Kumar
              </h3>

              <p className="footer__text">
                Product Designer crafting thoughtful digital
                experiences.
              </p>
            </div>

            <nav className="footer__nav">
              <a href="#work" className="footer__link">
                Work
              </a>

              <a href="#about" className="footer__link">
                About
              </a>

              <a href="#articles" className="footer__link">
                Articles
              </a>

              <a href="#contact" className="footer__link">
                Contact
              </a>
            </nav>
          </div>

          <div className="footer__bottom">
            © 2026 Sujit Kumar. All rights reserved.
          </div>
        </Container>
      </Section>
    );
  }
);

Footer.displayName = "Footer";