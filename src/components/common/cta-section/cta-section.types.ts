import { ReactNode } from "react";

/**
 * CTASection displays a call-to-action block
 * encouraging users to take the next step.
 */
export interface CTASectionProps {
  title: string;

  description?: string;

  actions?: ReactNode;

  className?: string;
}