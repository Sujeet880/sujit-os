import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

/* ==========================================================================
   INPUT VARIANTS
   ========================================================================== */

export type InputVariant =
  | "default"
  | "filled"
  | "ghost";

/* ==========================================================================
   INPUT SIZES
   ========================================================================== */

export type InputSize =
  | "sm"
  | "md"
  | "lg";

/* ==========================================================================
   INPUT PROPS
   ========================================================================== */

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Visual style.
   *
   * @default "default"
   */
  variant?: InputVariant;

  /**
   * Input size.
   *
   * @default "md"
   */
  size?: InputSize;

  /**
   * Label displayed above the input.
   */
  label?: string;

  /**
   * Helper text displayed below the input.
   */
  helperText?: string;

  /**
   * Error message.
   * When provided, the input enters the error state.
   */
  error?: string;

  /**
   * Leading icon.
   */
  startIcon?: ReactNode;

  /**
   * Trailing icon.
   */
  endIcon?: ReactNode;

  /**
   * Stretch to container width.
   *
   * @default true
   */
  fullWidth?: boolean;
}