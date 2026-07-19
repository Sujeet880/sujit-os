import { forwardRef } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/cn";

import "./about.css";

import type { AboutProps } from "./about.types";

export const About = forwardRef<HTMLElement, AboutProps>(
  ({ className, ...props }, ref) => {
    return (
      <Section
        id="about"
        ref={ref}
        className={cn("about", className)}
        {...props}
      >
        <Container>
          <SectionHeader
            eyebrow="About Me"
            title="Designing products that solve real business problems."
            description="I combine product thinking, UX strategy and visual design to create digital experiences that users love and businesses value."
          />

          <div className="about__content">
            <div className="about__text">
              <h3 className="about__title">
                Product Designer with 5+ years of experience.
              </h3>

              <p className="about__description">
                I specialize in turning complex workflows into
                simple, intuitive experiences. My work spans
                SaaS platforms, enterprise products, mobile
                apps and design systems, always balancing user
                needs with business goals.
              </p>

              <div className="about__highlights">
                <div className="about__highlight">
                  <strong>5+</strong>
                  <p>Years Experience</p>
                </div>

                <div className="about__highlight">
                  <strong>20+</strong>
                  <p>Products Designed</p>
                </div>

                <div className="about__highlight">
                  <strong>5M+</strong>
                  <p>Users Reached</p>
                </div>

                <div className="about__highlight">
                  <strong>₹7Cr+</strong>
                  <p>Business Impact</p>
                </div>
              </div>
            </div>

            <div className="about__image">
              <div className="about__placeholder">
                Profile Image
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
);

About.displayName = "About";