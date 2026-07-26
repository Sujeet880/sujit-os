import type { Metadata } from "next";
import { DesignVaultPage } from "./design-vault-client";

export const metadata: Metadata = {
  title: "Design Vault — Curated Product Design Explorations",
  description: "Explore a curated collection of product design concepts, enterprise dashboards, design systems, mobile experiences, and haptic prototypes designed by Sujit Kumar.",
  alternates: {
    canonical: "/design-vault",
  },
  openGraph: {
    title: "Design Vault — Curated Product Design Explorations",
    description: "Explore a curated collection of product design concepts, enterprise dashboards, design systems, mobile experiences, and haptic prototypes designed by Sujit Kumar.",
    url: "https://sujitkumar.design/design-vault",
    siteName: "Sujit Kumar Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://sujitkumar.design/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Design Vault - Sujit Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Vault — Curated Product Design Explorations",
    description: "Explore a curated collection of product design concepts, enterprise dashboards, design systems, mobile experiences, and haptic prototypes designed by Sujit Kumar.",
    images: ["https://sujitkumar.design/opengraph-image.png"],
  },
};

export default function DesignVault() {
  return <DesignVaultPage />;
}
