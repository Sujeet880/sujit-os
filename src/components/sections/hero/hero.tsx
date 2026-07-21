import { forwardRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SocialButtons } from "@/components/common";
import { cn } from "@/lib/cn";

import "./hero.css";

import type { HeroProps } from "./hero.types";

export const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ className, ...props }, ref) => {
    return (
      <Section
        id="home"
        ref={ref}
        className={cn("hero", className)}
        {...props}
      >
        <Container>
          <div className="hero__inner">
            <div className="hero__content">
              <div className="hero__intro">
                <span className="hero__eyebrow">Enterprise Product Design</span>
                <div className="hero__status">
                  <span className="hero__status-indicator" />
                  <span className="hero__status-text">Available for Senior Product Design Roles</span>
                </div>
              </div>

              <h1 className="hero__title">
                Sujit <span className="hero__title-accent">Kumar.</span>
              </h1>

              <div className="hero__description">
                <p>
                  I design premium digital products for ambitious teams building complex platforms across enterprise SaaS, ERP, IoT, logistics, and consumer experiences.
                </p>
                <p>
                  My work has contributed to more than ₹7Cr+ in platform business impact, shaped products used by over 5+ million people, and supported more than 50+ enterprise brands with a calm, systems-minded approach.
                </p>
              </div>

              <div className="hero__actions">
                <Link
                  href="/resume/Sujit_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="hero__btn hero__btn--primary"
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Download Resume
                  </Button>
                </Link>
                <SocialButtons />
              </div>
            </div>

            <div className="hero__visual">
              <div className="hero__canvas">
                <div className="hero__canvas-inner">
                  <img
                    src="/sujit.png"
                    alt="Sujit Kumar"
                    className="hero__canvas-img"
                  />
                </div>

                <div className="hero__cursor">
                  <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__cursor-icon">
                    <path d="M0 0V18.1568L4.85694 13.3364H13.1428L0 0Z" fill="#FC8019" />
                  </svg>
                  <span className="hero__cursor-label">Sujit</span>
                </div>

                <div className="hero__token">
                  <span className="hero__token-color" />
                  <span className="hero__token-text">Product / Design</span>
                </div>
              </div>

              <div className="hero__metric-card hero__metric-card--1">
                <span className="hero__metric-icon" aria-hidden="true">
                  ✦
                </span>
                <span className="hero__metric-text">5 Years Experience</span>
              </div>

              <div className="hero__metric-card hero__metric-card--2">
                <span className="hero__metric-icon" aria-hidden="true">
                  ↗
                </span>
                <span className="hero__metric-text">₹7Cr+ Business Impact</span>
              </div>

              <div className="hero__metric-card hero__metric-card--3">
                <span className="hero__metric-icon" aria-hidden="true">
                  ◎
                </span>
                <span className="hero__metric-text">5M+ Users</span>
              </div>

              <div className="hero__canvas-blueprint" />
            </div>
          </div>
        </Container>
      </Section>
    );
  }
);

Hero.displayName = "Hero";