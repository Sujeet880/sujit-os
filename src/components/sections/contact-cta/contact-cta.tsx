import { forwardRef } from "react";
import Link from "next/link";
import { Mail, FileText, ArrowRight, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

import "./contact-cta.css";

import type { ContactCTAProps } from "./contact-cta.types";

export const ContactCTA = forwardRef<
  HTMLElement,
  ContactCTAProps
>(({ className, ...props }, ref) => {
  return (
    <Section
      id="contact"
      ref={ref}
      className={cn("contact-cta", className)}
      {...props}
    >
      <Container>
        <div className="contact-cta__card">
          <div className="contact-cta__content">
            <div className="contact-cta__header-badge">
              <span className="contact-cta__badge">LET'S CONNECT</span>
              <span className="contact-cta__status-badge">
                <span className="contact-cta__status-dot" />
                Available for Senior Product Designer Roles
              </span>
            </div>
            
            <h2 className="contact-cta__title">
              Let's build products people love to use.
            </h2>

            <p className="contact-cta__description">
              I'm currently open to Senior Product Designer opportunities where I can help teams solve complex product challenges, improve user experiences and build scalable digital products. If you're looking for someone who enjoys turning business problems into intuitive product experiences, I'd love to connect.
            </p>

            <div className="contact-cta__actions">
              <Link
                href="/resume/Sujit_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="contact-cta__btn contact-cta__btn--primary" rightIcon={<ArrowRight size={16} />}>
                  Download Resume
                </Button>
              </Link>

              <Link href="mailto:ktsujeet1997@gmail.com">
                <Button variant="outline" className="contact-cta__btn contact-cta__btn--secondary">
                  Chat with Me
                </Button>
              </Link>
            </div>

            {/* Premium quicklinks block */}
            <div className="contact-cta__quicklinks">
              <div className="contact-cta__links-row">
                <Link href="mailto:ktsujeet1997@gmail.com" className="contact-cta__link">
                  <Mail size={14} className="contact-cta__link-icon" />
                  <span>ktsujeet1997@gmail.com</span>
                </Link>
                <div className="contact-cta__divider" />
                <a href="tel:+919288498199" className="contact-cta__link">
                  <Phone size={14} className="contact-cta__link-icon" />
                  <span>+91 92884 98199</span>
                </a>
                <div className="contact-cta__divider" />
                <Link href="https://www.linkedin.com/in/sujitkt/" target="_blank" rel="noopener noreferrer" className="contact-cta__link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-cta__link-icon">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </Link>
                <div className="contact-cta__divider" />
                <Link href="https://medium.com/@sujeetkt" target="_blank" rel="noopener noreferrer" className="contact-cta__link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-cta__link-icon">
                    <path d="M4 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zM18 12c0-2.8.7-5 1.5-5s1.5 2.2 1.5 5-.7 5-1.5 5-1.5-2.2-1.5-5zM23 12c0-2.8.2-5 .5-5s.5 2.2.5 5-.2 5-.5 5-.5-2.2-.5-5z" />
                  </svg>
                  <span>Medium</span>
                </Link>
                <div className="contact-cta__divider" />
                <Link href="/resume/Sujit_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-cta__link">
                  <FileText size={14} className="contact-cta__link-icon" />
                  <span>Resume</span>
                </Link>
              </div>
              
              <div className="contact-cta__location">
                Based in India • Open to Remote & Hybrid Opportunities
              </div>
              
              <p className="contact-cta__small-message">
                Whether you're hiring, collaborating or simply want to discuss product design, my inbox is always open.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
});

ContactCTA.displayName = "ContactCTA";