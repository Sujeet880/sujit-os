"use client";

import { forwardRef, useEffect } from "react";
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Users, Award, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/common";
import { cn } from "@/lib/cn";

import "./professional-journey.css";

import type { ProfessionalJourneyProps } from "./professional-journey.types";

interface ExperienceItem {
  company: string;
  logoText: string;
  role: string;
  duration: string;
  description?: string;
  projects?: { name: string; subtitle?: string; description: string }[];
  keyResponsibilities?: string[];
  businessImpact?: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Key Client Engagements",
    logoText: "KC",
    role: "Senior Product Designer (Freelance)",
    duration: "Jan 2026 – Present",
    description: "As a freelance designer, I led end-to-end product design and product strategy across multiple enterprise client engagements. This included designing the embedded IoT control panel for Mirari Surface and architecting the enterprise SaaS workflow engine for CA Operating System, driving cross-functional collaboration between product and engineering teams to translate complex requirements into intuitive experiences.",
    projects: [
      {
        name: "Mirari Surface",
        subtitle: "Embedded Smart Home Control Platform",
        description: "Designed an embedded touch panel and companion mobile application for controlling, monitoring and automating connected smart home devices while creating a consistent experience across hardware and mobile interfaces."
      },
      {
        name: "CA Operating System",
        subtitle: "Enterprise SaaS Platform for Chartered Accountant Firms",
        description: "Designed an end-to-end operating system that streamlined client onboarding, compliance workflows, document management, billing and internal operations into one connected enterprise platform."
      }
    ],
    skills: ["Enterprise IoT", "Embedded UX", "Product Strategy", "Cross-functional Collaboration", "Enterprise SaaS"]
  },
  {
    company: "Cooter:Labs",
    logoText: "CL",
    role: "Senior UX/UI Designer",
    duration: "Apr 2025 – Dec 2025",
    keyResponsibilities: [
      "Redesigned logistics ERP workflows after user research identified major usability challenges across critical operational tasks.",
      "Built reusable design systems and improved information architecture to simplify complex enterprise workflows."
    ],
    businessImpact: "Reduced manual workflow complexity while improving collaboration between design and engineering teams.",
    skills: ["Enterprise SaaS", "ERP", "Information Architecture", "Design Systems"]
  },
  {
    company: "O4S",
    logoText: "O4",
    role: "Product Designer",
    duration: "May 2023 – Mar 2025",
    keyResponsibilities: [
      "Led end-to-end product design across enterprise dashboards and white-label mobile applications used by global channel partners.",
      "Improved onboarding, accessibility and scalable design systems through research-driven product decisions."
    ],
    businessImpact: "Supported ₹7Cr+ business impact across 50+ enterprise brands and more than 5M channel partners.",
    skills: ["B2B SaaS", "White-label Products", "Accessibility", "Product Strategy"]
  },
  {
    company: "Oodles Studio",
    logoText: "OS",
    role: "UX/UI Designer",
    duration: "Apr 2022 – Apr 2023",
    keyResponsibilities: [
      "Designed web and mobile experiences across multiple industries including sustainability, education and e-commerce.",
      "Created user journeys, wireframes and high-fidelity interfaces while collaborating closely with engineering teams."
    ],
    businessImpact: "Delivered user-centered experiences that balanced business goals with technical feasibility.",
    skills: ["UX Research", "Wireframing", "Interaction Design", "Cross-functional Collaboration"]
  },
  {
    company: "JoonWeb",
    logoText: "JW",
    role: "UX/UI Designer",
    duration: "Oct 2021 – Mar 2022",
    keyResponsibilities: [
      "Designed intuitive web interfaces and reusable UI patterns for early-stage startup products.",
      "Worked directly with founders and developers to rapidly ship user-focused product experiences."
    ],
    businessImpact: "Helped startups launch usable products faster through simple, scalable interface design.",
    skills: ["UI Design", "Design Systems", "Startups", "Rapid Prototyping"]
  }
];

const bottomMessage = "Every project has strengthened my ability to transform complex business requirements into intuitive digital products that create measurable value for both users and organizations.";

export const ProfessionalJourney = forwardRef<
  HTMLElement,
  ProfessionalJourneyProps
>(({ className, ...props }, ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("professional-journey__item--in-view");
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const items = document.querySelectorAll(".professional-journey__item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="experience"
      ref={ref}
      className={cn("professional-journey", className)}
      {...props}
    >
      <Container>
        <SectionHeader
          badge="PROFESSIONAL JOURNEY"
          title="Five years of designing products that solve real business problems."
          description="My journey has been shaped by building enterprise software, simplifying complex workflows and collaborating with cross-functional teams to deliver products used across industries. Every role added new challenges, stronger product thinking and deeper business understanding."
          layout="stacked"
        />

        <div className="professional-journey__timeline">
          {/* Vertical line connector */}
          <div className="professional-journey__connector" />

          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="professional-journey__item"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Central connecting circle */}
              <div className="professional-journey__node">
                <div className="professional-journey__node-dot" />
              </div>

              <div className="professional-journey__card">
                {/* Header layout */}
                <div className="professional-journey__card-header">
                  <div className="professional-journey__header-details">
                    <h3 className="professional-journey__company-name">{exp.company}</h3>
                    <div className="professional-journey__role-meta">
                      <span className="professional-journey__role">
                        {exp.role}
                      </span>
                      <span className="professional-journey__duration">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience Summary (Description) */}
                {exp.description && (
                  <div className="professional-journey__context">
                    <p className="professional-journey__context-text">
                      {exp.description}
                    </p>
                  </div>
                )}

                {/* Key Engagements (Projects) */}
                {exp.projects && (
                  <div className="professional-journey__projects">
                    <h4 className="professional-journey__subtitle">Key Engagements</h4>
                    <div className="professional-journey__projects-list">
                      {exp.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="professional-journey__project-item">
                          <h5 className="professional-journey__project-name">{proj.name}</h5>
                          {proj.subtitle && (
                            <span className="professional-journey__project-subtitle">{proj.subtitle}</span>
                          )}
                          <p className="professional-journey__project-description">{proj.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Contributions */}
                {exp.keyResponsibilities && (
                  <div className="professional-journey__contributions">
                    <h4 className="professional-journey__subtitle">Key Contributions</h4>
                    <ul className="professional-journey__list">
                      {exp.keyResponsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="professional-journey__list-item">
                          <span className="professional-journey__list-bullet">→</span>
                          <span className="professional-journey__list-text">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Business Impact */}
                {exp.businessImpact && (
                  <div className="professional-journey__impact">
                    <h4 className="professional-journey__subtitle">Business Impact</h4>
                    <ul className="professional-journey__list">
                      <li className="professional-journey__list-item">
                        <span className="professional-journey__list-bullet">→</span>
                        <span className="professional-journey__list-text">{exp.businessImpact}</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Skill tags (supporting information) */}
                <div className="professional-journey__skills">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="professional-journey__skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="professional-journey__bottom-message">
          <p>{bottomMessage}</p>
        </div>
      </Container>
    </Section>
  );
});

ProfessionalJourney.displayName = "ProfessionalJourney";