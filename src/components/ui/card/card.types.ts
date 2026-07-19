import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* ==========================================================================
   CARD VARIANTS
   ========================================================================== */

export type CardVariant =
  | "default"
  | "outlined"
  | "elevated"
  | "ghost";

/* ==========================================================================
   CARD PADDING
   ========================================================================== */

export type CardPadding =
  | "none"
  | "sm"
  | "md"
  | "lg";

/* ==========================================================================
   CARD PROPS
   ========================================================================== */

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style.
   *
   * @default "default"
   */
  variant?: CardVariant;

  /**
   * Internal spacing.
   *
   * @default "md"
   */
  padding?: CardPadding;

  /**
   * Expand to full width.
   *
   * @default true
   */
  fullWidth?: boolean;

  /**
   * Card content.
   */
  children: ReactNode;
}