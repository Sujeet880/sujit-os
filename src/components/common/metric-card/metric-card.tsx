import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

import type { MetricCardProps } from "./metric-card.types";

import "./metric-card.css";

export function MetricCard({
  value,
  label,
  description,
  icon,
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("metric-card", className)}>
      {icon && (
        <div className="metric-card__icon">
          {icon}
        </div>
      )}

      <div className="metric-card__content">
        <p className="metric-card__value">
          {value}
        </p>

        <h3 className="metric-card__label">
          {label}
        </h3>

        {description && (
          <p className="metric-card__description">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}