import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

import type { SectionHeaderProps } from "./section-header.types";

import "./section-header.css";

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  layout = "stacked",
  action,
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "section-header",
        `section-header--${align}`,
        `section-header--${layout}`,
        className
      )}
    >
      <div className="section-header__content">
        {badge && (
          <Badge className="section-header__badge">
            {badge}
          </Badge>
        )}

        <h2 className="section-header__title">
          {title}
        </h2>

        {description && (
          <p className="section-header__description">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="section-header__action">
          {action}
        </div>
      )}
    </header>
  );
}