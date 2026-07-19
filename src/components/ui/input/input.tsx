import { forwardRef, useId } from "react";

import { cn } from "@/lib/cn";

import "./input.css";

import type { InputProps } from "./input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      size = "md",
      label,
      helperText,
      error,
      startIcon,
      endIcon,
      fullWidth = true,
      className,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const helperTextId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const describedBy = error
      ? errorId
      : helperText
        ? helperTextId
        : undefined;

    return (
      <div
        className={cn(
          "input-root",
          fullWidth && "input-root--full-width"
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="input-label"
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            "input-wrapper",
            `input-wrapper--${variant}`,
            `input-wrapper--${size}`,
            error && "input-wrapper--error",
            disabled && "input-wrapper--disabled",
            className
          )}
        >
          {startIcon && (
            <span className="input-icon">
              {startIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className="input"
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            {...props}
          />

          {endIcon && (
            <span className="input-icon">
              {endIcon}
            </span>
          )}
        </div>

        {error ? (
          <p
            id={errorId}
            className="input-error"
          >
            {error}
          </p>
        ) : (
          helperText && (
            <p
              id={helperTextId}
              className="input-helper"
            >
              {helperText}
            </p>
          )
        )}
      </div>
    );
  }
);

Input.displayName = "Input";