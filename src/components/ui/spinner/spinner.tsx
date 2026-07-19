import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import "./spinner.css";

import type { SpinnerProps } from "./spinner.types";

export const Spinner = forwardRef<
  HTMLSpanElement,
  SpinnerProps
>(
  (
    {
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(
          "spinner",
          `spinner--${size}`,
          className
        )}
        {...props}
      >
        <span className="sr-only">
          Loading...
        </span>
      </span>
    );
  }
);

Spinner.displayName = "Spinner";