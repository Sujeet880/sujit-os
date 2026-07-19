import { cn } from "@/lib/cn";

import { SectionHeader } from "@/components/common/section-header";
import { MetricCard } from "@/components/common/metric-card";

import type { ProofOfImpactProps } from "./proof-of-impact.types";

import "./proof-of-impact.css";

const metrics = [
  {
    value: "5+",
    label: "Years Experience",
    description:
      "Designing digital products across startups and enterprise teams.",
  },
  {
    value: "20+",
    label: "Products Shipped",
    description:
      "From concept to launch with measurable business outcomes.",
  },
  {
    value: "5M+",
    label: "Users Reached",
    description:
      "Experiences used daily across multiple industries.",
  },
  {
    value: "₹7Cr+",
    label: "Business Impact",
    description:
      "Revenue and efficiency improvements through design decisions.",
  },
];

export function ProofOfImpact({
  className,
}: ProofOfImpactProps) {
  return (
    <section
      className={cn("proof-of-impact", className)}
    >
      <SectionHeader
        badge="Proof of Impact"
        title="Design decisions backed by measurable outcomes."
        description="Every project is driven by user research, business goals, and measurable results that improve product performance."
        align="center"
      />

      <div className="proof-of-impact__grid">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
            description={metric.description}
          />
        ))}
      </div>
    </section>
  );
}