import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type SectionVariant =
  | "default"
  | "muted"
  | "transparent";

export type SectionSpacing =
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface SectionProps
  extends HTMLAttributes<HTMLElement> {
  /**
   * Background style.
   *
   * @default "default"
   */
  variant?: SectionVariant;

  /**
   * Vertical spacing.
   *
   * @default "lg"
   */
  spacing?: SectionSpacing;

  /**
   * Section content.
   */
  children: ReactNode;
}