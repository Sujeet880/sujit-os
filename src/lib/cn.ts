import { clsx, type ClassValue } from "clsx";

/**
 * Combines class names into a single string.
 *
 * Supports:
 * - strings
 * - arrays
 * - objects
 * - conditional classes
 * - undefined / null / false values
 */

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}