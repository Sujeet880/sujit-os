import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

import type { TimelineItemProps } from "./timeline-item.types";

import "./timeline-item.css";

export function TimelineItem({
  year,
  title,
  company,
  description,
  icon,
  className,
}: TimelineItemProps) {
  return (
    <Card className={cn("timeline-item", className)}>
      {icon && (
        <div className="timeline-item__icon">
          {icon}
        </div>
      )}

      <div className="timeline-item__content">
        <span className="timeline-item__year">
          {year}
        </span>

        <h3 className="timeline-item__title">
          {title}
        </h3>

        <p className="timeline-item__company">
          {company}
        </p>

        {description && (
          <p className="timeline-item__description">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}