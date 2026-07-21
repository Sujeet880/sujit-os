"use client";

import { useEffect } from "react";
import { Briefcase, ClipboardList, Grid, TrendingUp, Users } from "lucide-react";

import { cn } from "@/lib/cn";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/common/section-header";
import { MetricCard } from "@/components/common/metric-card";

import type { ProofOfImpactProps } from "./proof-of-impact.types";

import "./proof-of-impact.css";

const metrics = [
  {
    value: "₹7Cr+",
    label: "Platform Business Impact",
    description: "Design contributions supporting measurable business growth across enterprise platforms.",
    icon: <Briefcase size={24} />
  },
  {
    value: "5M+",
    label: "Users",
    description: "Product experiences used by more than five million users across enterprise and consumer products.",
    icon: <Users size={24} />
  },
  {
    value: "50+",
    label: "Enterprise Brands",
    description: "Worked on white-label and enterprise solutions delivered for multiple organizations.",
    icon: <Grid size={24} />
  },
  {
    value: "5 Years",
    label: "Product Design Experience",
    description: "Designing enterprise SaaS, ERP, IoT, logistics and consumer digital products.",
    icon: <TrendingUp size={24} />
  }
];

const tags = [
  "Enterprise SaaS",
  "ERP Platforms",
  "IoT Products",
  "Logistics",
  "Consumer Products",
  "Design Systems",
  "UX Research",
  "Accessibility",
  "Product Strategy",
  "Workflow Optimization"
];

export function ProofOfImpact({
  className,
}: ProofOfImpactProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("metric-card--in-view");
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const items = document.querySelectorAll(".metric-card");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      className={cn("proof-of-impact", className)}
    >
      <Container>
        <SectionHeader
          badge="PROOF OF IMPACT"
          title="Real outcomes. Real business impact."
          description="Design creates value when it solves meaningful business problems. From improving enterprise workflows to simplifying experiences used by millions of users, my work focuses on measurable outcomes—not just polished interfaces."
          layout="stacked"
        />

        <div className="proof-of-impact__grid">
          {metrics.map((metric, idx) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              icon={metric.icon}
              style={{ transitionDelay: `${idx * 80}ms` }}
            />
          ))}
        </div>

        <div className="proof-of-impact__tags" aria-label="Impact focus areas">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </Container>
    </Section>
  );
}