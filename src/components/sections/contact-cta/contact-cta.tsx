import { forwardRef } from "react";
import Link from "next/link";

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
            <h2 className="contact-cta__title">
              Let's build something meaningful together.
            </h2>

            <p className="contact-cta__description">
              I'm always interested in discussing product
              design, design systems, UX strategy and exciting
              opportunities. If you have an idea or a product
              to build, let's connect.
            </p>

            <div className="contact-cta__actions">
              <Link href="mailto:hello@example.com">
                <Button>
                  Get In Touch
                </Button>
              </Link>

              <Link href="/resume.pdf">
                <Button variant="secondary">
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
});

ContactCTA.displayName = "ContactCTA";