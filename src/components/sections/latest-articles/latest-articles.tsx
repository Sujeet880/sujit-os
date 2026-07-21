"use client";

import { forwardRef, useEffect } from "react";
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("article-card--in-view");
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const items = document.querySelectorAll(".article-card");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="articles"
      ref={ref}
      className={cn("latest-articles", className)}
      {...props}
    >
      <Container>
        <SectionHeader
          badge="LATEST WRITING"
          title="Sharing ideas beyond the design files."
          description="Writing helps me organize my thinking. I enjoy documenting design decisions, product challenges and practical lessons from building digital products. These articles reflect how I approach product design beyond day-to-day project work."
          layout="split"
          action={
            <a 
              href="https://medium.com/@sujeetkt" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                View All Articles
              </Button>
            </a>
          }
        />

        <div className="latest-articles__grid">
          <ArticleCard
            title="Designing Enterprise Products Without Increasing Complexity"
            description="Enterprise software often grows faster than its usability. In this article, I share practical approaches to simplifying workflows, reducing cognitive load and creating scalable product experiences."
            category="Product Design"
            date=""
            readTime="8 min read"
            style={{ transitionDelay: "0ms" }}
            href="https://medium.com/@sujeetkt/mirari-surface-designing-a-smart-home-control-experience-c4071f72d102"
            image={
              <img 
                src="/article_design_systems.png" 
                alt="Designing Enterprise Products Without Increasing Complexity" 
                className="article-card__img" 
              />
            }
          />

          <ArticleCard
            title="Why Research Saves More Time Than It Costs"
            description="Skipping research often creates expensive product decisions later. This article explores lightweight research methods that improve design confidence without slowing delivery."
            category="UX Research"
            date=""
            readTime="6 min read"
            style={{ transitionDelay: "80ms" }}
            href="https://medium.com/@sujeetkt/revamping-and-scaling-a-white-label-loyalty-platform-serving-5m-channel-partners-8df8d41579e5"
            image={
              <img 
                src="/article_ux_research.png" 
                alt="Why Research Saves More Time Than It Costs" 
                className="article-card__img" 
              />
            }
          />

          <ArticleCard
            title="Building Design Systems That Teams Actually Use"
            description="A design system is more than a component library. Learn how governance, documentation and collaboration help teams build products faster while maintaining consistency."
            category="Design Systems"
            date=""
            readTime="10 min read"
            style={{ transitionDelay: "160ms" }}
            href="https://medium.com/@sujeetkt/designing-a-ca-operating-system-d172bbdde32e"
            image={
              <img 
                src="/article_wireframe_to_product.png" 
                alt="Building Design Systems That Teams Actually Use" 
                className="article-card__img" 
              />
            }
          />
        </div>
      </Container>
    </Section>
  );
});

LatestArticles.displayName = "LatestArticles";