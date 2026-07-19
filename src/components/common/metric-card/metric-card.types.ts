import { ReactNode } from "react";

export interface MetricCardProps {
  /**
   * Primary metric value.
   * Example: ₹7Cr+, 5M+, 50+
   */
  value: string;

  /**
   * Metric title.
   * Example: Business Impact
   */
  label: string;

  /**
   * Optional supporting text.
   */
  description?: string;

  /**
   * Optional icon.
   */
  icon?: ReactNode;

  /**
   * Additional custom classes.
   */
  className?: string;
}