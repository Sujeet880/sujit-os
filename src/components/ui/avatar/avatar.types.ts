import type {
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";

export type AvatarSize =
  | "xs"
  | "sm"
  | "md"
  | "lg";

export interface AvatarProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "size"
  > {
  /**
   * Avatar size.
   *
   * @default "md"
   */
  size?: AvatarSize;

  /**
   * Fallback text (usually initials).
   */
  fallback?: string;

  /**
   * Additional classes for the wrapper.
   */
  containerProps?: HTMLAttributes<HTMLDivElement>;
}