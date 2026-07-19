import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import "./card.css";

import type { CardProps } from "./card.types";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      padding = "md",
      fullWidth = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "card",
          `card--${variant}`,
          `card--${padding}`,
          fullWidth && "card--full-width",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";