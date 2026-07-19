import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

/* ==========================================================================
   BUTTON VARIANTS
   ========================================================================== */

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

/* ==========================================================================
   BUTTON SIZES
   ========================================================================== */

export type ButtonSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

/* ==========================================================================
   BUTTON PROPS
   ========================================================================== */

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style.
   *
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Button size.
   *
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Show loading state.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Expands button to full container width.
   *
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Icon displayed before the label.
   */
  leftIcon?: ReactNode;

  /**
   * Icon displayed after the label.
   */
  rightIcon?: ReactNode;

  /**
   * Icon-only button.
   *
   * Useful for icon buttons.
   *
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Button content.
   */
  children?: ReactNode;
}