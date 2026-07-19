import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import "./section.css";

import type { SectionProps } from "./section.types";

export const Section = forwardRef<
  HTMLElement,
  SectionProps
>(
  (
    {
      variant = "default",
      spacing = "lg",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "section",
          `section--${variant}`,
          `section--${spacing}`,
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";