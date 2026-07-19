import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

import type { ArticleCardProps } from "./article-card.types";

import "./article-card.css";

export function ArticleCard({
  title,
  description,
  date,
  readTime,
  image,
  className,
}: ArticleCardProps) {
  return (
    <Card className={cn("article-card", className)}>
      {image && (
        <div className="article-card__image">
          {image}
        </div>
      )}

      <div className="article-card__content">
        {(date || readTime) && (
          <div className="article-card__meta">
            {date && <span>{date}</span>}

            {date && readTime && <span>•</span>}

            {readTime && <span>{readTime}</span>}
          </div>
        )}

        <h3 className="article-card__title">
          {title}
        </h3>

        <p className="article-card__description">
          {description}
        </p>
      </div>
    </Card>
  );
}