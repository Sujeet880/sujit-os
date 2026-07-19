import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum container width.
   *
   * @default "xl"
   */
  size?: ContainerSize;

  /**
   * Container content.
   */
  children: ReactNode;
}