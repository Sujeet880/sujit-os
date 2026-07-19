import type { HTMLAttributes } from "react";

export type SpinnerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg";

export interface SpinnerProps
  extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Spinner size.
   *
   * @default "md"
   */
  size?: SpinnerSize;
}