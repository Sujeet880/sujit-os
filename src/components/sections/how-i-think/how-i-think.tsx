"use client";

import { forwardRef, useEffect } from "react";
import { Search, Compass, Target, Lightbulb, Layers, CheckSquare } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/common";
import { cn } from "@/lib/cn";

import "./how-i-think.css";

import type { HowIThinkProps } from "./how-i-think.types";

const steps = [
  {
    icon: <Search size={20} />,
    title: "Research First",
    description: "Understand target users, core business goals, and technical constraints before designing any product solutions."
  },
  {
    icon: <Compass size={20} />,
    title: "Systems Thinking",
    description: "Design scalable, consistent user experiences that work effectively across multiple products, teams, and future growth."
  },
  {
    icon: <Target size={20} />,
    title: "Business Impact",
    description: "Ensure that every design decision directly contributes to delivering measurable business value and customer outcomes."
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Rapid Iteration",
    description: "Ship functional prototypes early, learn continuously, and iterate quickly based on direct feedback from real users."
  },
  {
    icon: <Layers size={20} />,
    title: "Cross-functional Collaboration",
    description: "Partner closely with Product Managers, Engineering teams, and business stakeholders to build better products together."
  },
  {
    icon: <CheckSquare size={20} />,
    title: "Design Systems",
    description: "Build reusable design systems that significantly improve product consistency, web accessibility, and developer delivery speed."
  }
];

export const HowIThink = forwardRef<HTMLElement, HowIThinkProps>(
  ({ className, ...props }, ref) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("how-i-think__step--in-view");
              observer.unobserve(entry.target); // Trigger only once
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      const items = document.querySelectorAll(".how-i-think__step");
      items.forEach((item) => {
        // Dynamically add animation preparation class on the client to ensure progressive enhancement visibility!
        item.classList.add("how-i-think__step--animate-prep");
        observer.observe(item);
      });

      return () => observer.disconnect();
    }, []);

    return (
      <Section
        ref={ref}
        className={cn("how-i-think", className)}
        {...props}
      >
        <Container>
          <SectionHeader
            badge="HOW I THINK"
            title="Every design decision starts with product thinking."
            description="A repeatable framework that helps me solve business problems, align teams and create intuitive product experiences."
            layout="stacked"
          />

          <div className="how-i-think__journey">
            {/* Horizontal flow line indicator */}
            <div className="how-i-think__flow-line" />

            <div className="how-i-think__steps">
              {steps.map((step, idx) => {
                const isHighlighted = step.title === "Research First" || step.title === "Systems Thinking";
                const stepClasses = `how-i-think__step ${isHighlighted ? "how-i-think__step--highlighted" : ""}`;
                return (
                  <div 
                    key={step.title} 
                    className={stepClasses}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <div className="how-i-think__step-header">
                      <div className="how-i-think__step-node">
                        <div className="how-i-think__step-icon">{step.icon}</div>
                        <div className="how-i-think__step-number">{idx + 1}</div>
                      </div>
                    </div>

                    <div className="how-i-think__step-content">
                      <h3 className="how-i-think__step-title">{step.title}</h3>
                      <p className="how-i-think__step-description">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    );
  }
);

HowIThink.displayName = "HowIThink";