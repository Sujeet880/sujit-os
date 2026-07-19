import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

import type { CapabilityCardProps } from "./capability-card.types";

import "./capability-card.css";

export function CapabilityCard({
  title,
  description,
  icon,
  className,
}: CapabilityCardProps) {
  return (
    <Card className={cn("capability-card", className)}>
      {icon && (
        <div className="capability-card__icon">
          {icon}
        </div>
      )}

      <div className="capability-card__content">
        <h3 className="capability-card__title">
          {title}
        </h3>

        {description && (
          <p className="capability-card__description">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}