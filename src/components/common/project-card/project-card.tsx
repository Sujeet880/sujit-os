import { cn } from "@/lib/cn";

import type { ProjectCardProps } from "./project-card.types";

import "./project-card.css";

export function ProjectCard({
  image,
  category,
  year,
  title,
  description,
  metrics,
  tags,
  action,
  className,
}: ProjectCardProps) {
  return (
    <article className={cn("project-card", className)}>
      {image && (
        <div className="project-card__image">
          {image}
        </div>
      )}

      <div className="project-card__content">
        {(category || year) && (
          <div className="project-card__meta">
            {category && (
              <span className="project-card__category">
                {category}
              </span>
            )}

            {category && year && (
              <span className="project-card__separator">
                •
              </span>
            )}

            {year && (
              <span className="project-card__year">
                {year}
              </span>
            )}
          </div>
        )}

        <h3 className="project-card__title">
          {title}
        </h3>

        <p className="project-card__description">
          {description}
        </p>

        {metrics && metrics.length > 0 && (
          <div className="project-card__metrics">
            {metrics.map((metric) => (
              <span
                key={metric}
                className="project-card__metric"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="project-card__tags">
            {tags.map((tag) => (
              <span
                key={tag}
                className="project-card__tag"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {action && (
          <div className="project-card__action">
            {action}
          </div>
        )}
      </div>
    </article>
  );
}