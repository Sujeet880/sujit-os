import { cn } from "@/lib/cn";

import type { CTASectionProps } from "./cta-section.types";

import "./cta-section.css";

export function CTASection({
  title,
  description,
  actions,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn("cta-section", className)}
    >
      <div className="cta-section__content">
        <h2 className="cta-section__title">
          {title}
        </h2>

        {description && (
          <p className="cta-section__description">
            {description}
          </p>
        )}
      </div>

      {actions && (
        <div className="cta-section__actions">
          {actions}
        </div>
      )}
    </section>
  );
}