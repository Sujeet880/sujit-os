import { ReactNode } from "react";

export interface SectionHeaderProps {
  /**
   * Small label displayed above the title.
   */
  badge?: string;

  /**
   * Main section heading.
   */
  title: string;

  /**
   * Supporting description below the title.
   */
  description?: string;

  /**
   * Header alignment.
   * @default "left"
   */
  align?: "left" | "center";

  /**
   * Layout style.
   * stacked = Content above action
   * split = Content and action side by side
   *
   * @default "stacked"
   */
  layout?: "stacked" | "split";

  /**
   * Optional action element.
   */
  action?: ReactNode;

  /**
   * Additional custom classes.
   */
  className?: string;
}