import { ReactNode } from "react";

/**
 * TimelineItem displays a single milestone
 * in a chronological timeline.
 */
export interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
}