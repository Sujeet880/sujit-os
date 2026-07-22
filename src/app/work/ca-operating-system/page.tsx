import type { Metadata } from "next";
import { CaOperatingSystemCaseStudyClient } from "./ca-client";

export const metadata: Metadata = {
  title: "CA Operating System — Designing an OS for Modern CA Firms",
  description: "Enterprise SaaS case study on designing a connected operating system that transforms fragmented accounting workflows into one scalable SaaS ecosystem.",
  alternates: {
    canonical: "/work/ca-operating-system",
  },
  openGraph: {
    title: "CA Operating System — Designing an OS for Modern CA Firms",
    description: "Enterprise SaaS case study on designing a connected operating system that transforms fragmented accounting workflows into one scalable SaaS ecosystem.",
    url: "https://sujitkumar.design/work/ca-operating-system",
    siteName: "Sujit Kumar Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/doctor_platform.png",
        width: 1200,
        height: 630,
        alt: "CA Operating System - Enterprise accounting operations SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CA Operating System — Designing an OS for Modern CA Firms",
    description: "Enterprise SaaS case study on designing a connected operating system that transforms fragmented accounting workflows into one scalable SaaS ecosystem.",
    images: ["/doctor_platform.png"],
  },
};

export default function CaOperatingSystemCaseStudy() {
  return <CaOperatingSystemCaseStudyClient />;
}
