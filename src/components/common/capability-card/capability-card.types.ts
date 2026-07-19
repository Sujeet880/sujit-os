import { ReactNode } from "react";

/**
 * CapabilityCard highlights a core skill
 * or professional capability.
 */
export interface CapabilityCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
}