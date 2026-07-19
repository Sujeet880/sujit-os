"use client";

import { forwardRef, useState } from "react";

import { cn } from "@/lib/cn";

import "./avatar.css";

import type { AvatarProps } from "./avatar.types";

export const Avatar = forwardRef<
  HTMLImageElement,
  AvatarProps
>(
  (
    {
      size = "md",
      src,
      alt = "Avatar",
      fallback,
      className,
      containerProps,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);

    return (
      <div
        {...containerProps}
        className={cn(
          "avatar",
          `avatar--${size}`,
          containerProps?.className
        )}
      >
        {!hasError && src ? (
          <img
            ref={ref}
            src={src}
            alt={alt}
            className={cn(
              "avatar__image",
              className
            )}
            onError={() => setHasError(true)}
            {...props}
          />
        ) : (
          <span className="avatar__fallback">
            {fallback ?? "?"}
          </span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";