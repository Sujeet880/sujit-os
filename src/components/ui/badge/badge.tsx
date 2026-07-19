import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import "./badge.css";

import type { BadgeProps } from "./badge.types";

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "badge",
          `badge--${variant}`,
          `badge--${size}`,
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";