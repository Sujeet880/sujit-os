import { ReactNode } from "react";

/**
 * ProjectCard displays a featured product
 * design case study.
 */
export interface ProjectCardProps {
  image?: ReactNode;

  category?: string;

  year?: string;

  title: string;

  description: string;

  metrics?: string[];

  tags?: string[];

  action?: ReactNode;

  className?: string;
}