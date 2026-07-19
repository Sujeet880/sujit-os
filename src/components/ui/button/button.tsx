import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import "./button.css";

import type { ButtonProps } from "./button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          "button",
          `button--${variant}`,
          `button--${size}`,
          fullWidth && "button--full-width",
          iconOnly && "button--icon-only",
          loading && "button--loading",
          className
        )}
        {...props}
      >
        {leftIcon && (
          <span className="button__icon">
            {leftIcon}
          </span>
        )}

        {children && (
          <span className="button__label">
            {children}
          </span>
        )}

        {rightIcon && (
          <span className="button__icon">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";