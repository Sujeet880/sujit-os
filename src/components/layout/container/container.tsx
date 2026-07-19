import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import "./container.css";

import type { ContainerProps } from "./container.types";

export const Container = forwardRef<
  HTMLDivElement,
  ContainerProps
>(
  (
    {
      size = "xl",
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
          "container",
          `container--${size}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";