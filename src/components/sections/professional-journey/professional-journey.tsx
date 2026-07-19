import { forwardRef } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  SectionHeader,
  TimelineItem,
} from "@/components/common";
import { cn } from "@/lib/cn";

import "./professional-journey.css";

import type { ProfessionalJourneyProps } from "./professional-journey.types";

export const ProfessionalJourney = forwardRef<
  HTMLElement,
  ProfessionalJourneyProps
>(({ className, ...props }, ref) => {
  return (
    <Section
      ref={ref}
      className={cn(
        "professional-journey",
        className
      )}
      {...props}
    >
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="Five years of designing products that scale."
          description="From enterprise platforms to SaaS products, I've partnered with product managers, engineers, researchers, and stakeholders to build products that deliver measurable business outcomes."
        />

        <div className="professional-journey__timeline">
          <TimelineItem
            period="2025 – Present"
            title="Senior Product Designer"
            company="Mirari Surface"
            description="Leading product design for smart home IoT experiences across embedded devices and mobile applications."
          />

          <TimelineItem
            period="2025"
            title="Senior UX/UI Designer"
            company="Cooter Labs"
            description="Redesigned enterprise logistics workflows and built scalable design systems."
          />

          <TimelineItem
            period="2023 – 2025"
            title="Product Designer"
            company="O4S"
            description="Designed enterprise SaaS products used by millions of channel partners across multiple markets."
          />

          <TimelineItem
            period="2022 – 2023"
            title="UX/UI Designer"
            company="Oodles Studio"
            description="Worked on healthcare, sustainability, education and e-commerce products."
          />

          <TimelineItem
            period="2021 – 2022"
            title="UX/UI Designer"
            company="JoonWeb"
            description="Designed web applications and collaborated closely with founders and developers."
          />
        </div>
      </Container>
    </Section>
  );
});

ProfessionalJourney.displayName =
  "ProfessionalJourney";