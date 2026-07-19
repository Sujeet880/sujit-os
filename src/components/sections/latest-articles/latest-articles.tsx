import { forwardRef } from "react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  SectionHeader,
  ArticleCard,
} from "@/components/common";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

import "./latest-articles.css";

import type { LatestArticlesProps } from "./latest-articles.types";

export const LatestArticles = forwardRef<
  HTMLElement,
  LatestArticlesProps
>(({ className, ...props }, ref) => {
  return (
    <Section
      id="articles"
      ref={ref}
      className={cn("latest-articles", className)}
      {...props}
    >
      <Container>
        <SectionHeader
          eyebrow="Insights"
          title="Sharing what I learn while designing products."
          description="Thoughts on product design, UX strategy, design systems, research and building better digital experiences."
          action={
            <Link href="/articles">
              <Button variant="outline">
                View All Articles
              </Button>
            </Link>
          }
        />

        <div className="latest-articles__grid">
          <ArticleCard
            title="Design Systems That Scale"
            description="How a scalable design system improves consistency, speed and collaboration."
            category="Design System"
            date="Coming Soon"
          />

          <ArticleCard
            title="Why UX Research Saves Money"
            description="Understanding users early prevents expensive redesigns later."
            category="UX Research"
            date="Coming Soon"
          />

          <ArticleCard
            title="From Wireframe to Product"
            description="My complete workflow from product discovery to final delivery."
            category="Product Design"
            date="Coming Soon"
          />
        </div>
      </Container>
    </Section>
  );
});

LatestArticles.displayName = "LatestArticles";