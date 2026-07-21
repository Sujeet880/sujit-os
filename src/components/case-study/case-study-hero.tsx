"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CaseStudyImage } from "./case-study-image";

import "./case-study-hero.css";

interface MetadataItem {
  label: string;
  values: string[];
}

interface CaseStudyHeroProps {
  breadcrumb: { label: string; href?: string }[];
  category?: string;
  title: string;
  subtitle: string;
  description: string;
  metadata: MetadataItem[];
  primaryTargetId: string;
  secondaryTargetId: string;
  imageLabel: string;
  imageCaption: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
}

export function CaseStudyHero({
  breadcrumb,
  category,
  title,
  subtitle,
  description,
  metadata,
  primaryTargetId,
  secondaryTargetId,
  imageLabel,
  imageCaption,
  primaryCtaLabel = "View Final Designs",
  secondaryCtaLabel = "Read Process",
}: CaseStudyHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Stagger fade-up trigger on mount
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="case-study-hero">
      <Container>
        <div className="case-study-hero__inner">
          {/* Breadcrumb Navigation */}
          <nav 
            className={`case-study-hero__breadcrumb case-study-hero__animate ${
              mounted ? "case-study-hero__animate--visible" : ""
            }`}
            aria-label="Breadcrumb"
          >
            {breadcrumb.map((item, idx) => {
              const isLast = idx === breadcrumb.length - 1;
              return (
                <div key={item.label} className="case-study-hero__breadcrumb-item">
                  {item.href && !isLast ? (
                    <Link href={item.href} className="case-study-hero__breadcrumb-link">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="case-study-hero__breadcrumb-current">
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <ChevronRight size={12} className="case-study-hero__breadcrumb-separator" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Project Category */}
          {category && (
            <div 
              className={`case-study-hero__category-badge case-study-hero__animate ${
                mounted ? "case-study-hero__animate--visible" : ""
              }`}
              style={{ transitionDelay: "80ms" }}
            >
              {category}
            </div>
          )}

          {/* Project Title & Subtitle */}
          <h1 
            className={`case-study-hero__title case-study-hero__animate ${
              mounted ? "case-study-hero__animate--visible" : ""
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p 
              className={`case-study-hero__subtitle case-study-hero__animate ${
                mounted ? "case-study-hero__animate--visible" : ""
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              {subtitle}
            </p>
          )}

          <div 
            className={`case-study-hero__description case-study-hero__animate ${
              mounted ? "case-study-hero__animate--visible" : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {description.split("\n\n").map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </div>

          {/* Project Metadata Grid */}
          <div className="case-study-hero__metadata-grid">
            {metadata.map((item, idx) => (
              <div 
                key={item.label} 
                className={`case-study-hero__meta-card case-study-hero__animate ${
                  mounted ? "case-study-hero__animate--visible" : ""
                }`}
                style={{ transitionDelay: `${250 + idx * 50}ms` }}
              >
                <span className="case-study-hero__meta-label">{item.label}</span>
                <ul className="case-study-hero__meta-values">
                  {item.values.map((val, vIdx) => (
                    <li key={vIdx} className="case-study-hero__meta-value">
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div 
            className={`case-study-hero__actions case-study-hero__animate ${
              mounted ? "case-study-hero__animate--visible" : ""
            }`}
            style={{ transitionDelay: `${250 + metadata.length * 50}ms` }}
          >
            <Button
              className="case-study-hero__btn case-study-hero__btn--primary"
              onClick={() => handleScroll(primaryTargetId)}
            >
              {primaryCtaLabel}
            </Button>
            <Button
              variant="outline"
              className="case-study-hero__btn case-study-hero__btn--secondary"
              onClick={() => handleScroll(secondaryTargetId)}
            >
              {secondaryCtaLabel}
            </Button>
          </div>

          {/* Hero Responsive Placeholder Image */}
          <div 
            className={`case-study-hero__image-wrapper case-study-hero__animate ${
              mounted ? "case-study-hero__animate--visible" : ""
            }`}
            style={{ transitionDelay: `${350 + metadata.length * 50}ms` }}
          >
            <CaseStudyImage 
              label={imageLabel} 
              caption={imageCaption} 
              wide 
              aspectRatio="16-9" 
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
