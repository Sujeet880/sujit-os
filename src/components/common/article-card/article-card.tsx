import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
  category,
  href,
  className,
  ...props
}: ArticleCardProps) {
  const content = (
    <Card className={cn("article-card", className)} {...props}>
      {image && (
        <div className="article-card__image">
          {image}
        </div>
      )}

      <div className="article-card__content">
        <div className="article-card__top">
          {category && <span className="article-card__category">{category}</span>}

          {(date || readTime) && (
            <div className="article-card__meta">
              {date && <span>{date}</span>}
              {date && readTime && <span>•</span>}
              {readTime && <span>{readTime}</span>}
            </div>
          )}
        </div>

        <h3 className="article-card__title">
          {title}
        </h3>

        <p className="article-card__description">
          {description}
        </p>

        <div className="article-card__footer">
          <span className="article-card__cta">
            Read Article
            <ArrowRight size={15} className="article-card__cta-icon" />
          </span>
        </div>
      </div>
    </Card>
  );

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", textDecoration: "none", color: "inherit", height: "100%" }}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        style={{ display: "block", textDecoration: "none", color: "inherit", height: "100%" }}
      >
        {content}
      </Link>
    );
  }

  return content;
}