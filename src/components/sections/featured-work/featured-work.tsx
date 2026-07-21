import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

import { SectionHeader } from "@/components/common/section-header";

import { featuredProjects } from "@/data/projects";

import type { FeaturedWorkProps } from "./featured-work.types";

import "./featured-work.css";

export function FeaturedWork({
  className,
}: FeaturedWorkProps) {
  return (
    <Section
      id="work"
      className={cn("featured-work", className)}
    >
      <Container>
        <SectionHeader
          badge="FEATURED PRODUCT STORIES"
          title="Products I've helped shape from strategy to shipped experiences."
          description="Every project below represents a unique business challenge—from enterprise SaaS and ERP platforms to IoT ecosystems and consumer-facing products. My focus has always been the same: simplifying complexity, improving user experience and delivering measurable business outcomes through thoughtful product design."
          layout="stacked"
        />

        <div className="featured-work__list">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={project.title} 
                className={cn(
                  "featured-work__item",
                  isEven ? "featured-work__item--row" : "featured-work__item--row-reverse"
                )}
              >
                {/* Project Details */}
                <div className="featured-work__details">
                  <div className="featured-work__category">{project.category}</div>
                  <h3 className="featured-work__item-title">{project.title}</h3>
                  <p className="featured-work__summary">{project.description}</p>
                  
                  {/* Inline Role & Timeline metadata */}
                  <div className="featured-work__meta-row">
                    <div className="featured-work__meta-inline-item">
                      <span className="featured-work__meta-inline-label">Role:</span>
                      <span className="featured-work__meta-inline-value">{project.role}</span>
                    </div>
                    <span className="featured-work__meta-dot">•</span>
                    <div className="featured-work__meta-inline-item">
                      <span className="featured-work__meta-inline-label">Timeline:</span>
                      <span className="featured-work__meta-inline-value">{project.timeline}</span>
                    </div>
                  </div>
                  
                  {/* Visually separated Business Impact block */}
                  <div className="featured-work__impact-box">
                    <span className="featured-work__impact-label">Business Impact</span>
                    <ul className="featured-work__impact-list">
                      {project.businessImpact.map((point, pIdx) => (
                        <li key={pIdx}>
                          <span className="featured-work__impact-bullet">→</span>
                          <span className="featured-work__impact-point">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="featured-work__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="featured-work__tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={project.href} 
                    className="featured-work__cta-link"
                  >
                    <Button className="featured-work__cta-btn" rightIcon={<ArrowRight size={16} />}>
                      Read Case Study
                    </Button>
                  </Link>
                </div>

                {/* Project Visual Mockup */}
                <div className="featured-work__visual">
                  <div className="featured-work__canvas">
                    <div className="featured-work__canvas-inner">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="featured-work__canvas-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}