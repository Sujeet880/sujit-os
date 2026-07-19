import { ReactNode } from "react";

/**
 * ArticleCard displays a blog article preview.
 */
export interface ArticleCardProps {
  title: string;

  description: string;

  date?: string;

  readTime?: string;

  image?: ReactNode;

  href?: string;

  className?: string;
}