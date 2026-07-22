import type { Metadata } from "next";
import { CaOperatingSystemCaseStudyClient } from "./ca-client";

export const metadata: Metadata = {
  title: "CA Operating System — Designing an OS for Modern CA Firms",
  description: "Enterprise SaaS case study on designing a connected operating system that transforms fragmented accounting workflows into one scalable SaaS ecosystem.",
};

export default function CaOperatingSystemCaseStudy() {
  return <CaOperatingSystemCaseStudyClient />;
}
