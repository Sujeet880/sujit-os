import { forwardRef } from "react";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader, CapabilityCard } from "@/components/common";
import { cn } from "@/lib/cn";

import "./how-i-think.css";

import type { HowIThinkProps } from "./how-i-think.types";

export const HowIThink = forwardRef<HTMLElement, HowIThinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <Section
        ref={ref}
        className={cn("how-i-think", className)}
        {...props}
      >
        <Container>
          <SectionHeader
            eyebrow="Design Process"
            title="How I approach every product challenge."
            description="A structured process that helps me transform ideas into scalable, user-centered digital products."
          />

          <div className="how-i-think__grid">
            <CapabilityCard
              title="Understand"
              description="Research business goals, user problems, product metrics and technical constraints before exploring solutions."
            />

            <CapabilityCard
              title="Explore"
              description="Generate multiple concepts, validate assumptions and rapidly prototype promising directions."
            />

            <CapabilityCard
              title="Build"
              description="Collaborate closely with product managers and engineers to ship high-quality experiences."
            />

            <CapabilityCard
              title="Measure"
              description="Analyze feedback, usability insights and business metrics to continuously improve the product."
            />
          </div>
        </Container>
      </Section>
    );
  }
);

HowIThink.displayName = "HowIThink";