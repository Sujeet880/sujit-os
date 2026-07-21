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
  projects?: { name: string; subtitle?: string; description?: string; bullets?: string[] }[];
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
        subtitle: "Smart Home IoT Platform",
        bullets: [
          "Led end-to-end design of a smart-home IoT ecosystem spanning an embedded touch-panel interface and companion mobile app; chose a shared interaction language across both surfaces so users would not need to relearn controls when switching between panel and app.",
          "Designed onboarding and device-management flows within ESP32-S3 hardware constraints, prioritizing a small set of high-frequency actions over exhaustive configuration screens to keep the interface usable on limited hardware.",
          "Designed scene-creation flows enabling users to group and automate multiple devices, balancing flexibility for advanced users against simplicity for first-time setup.",
          "Partnered directly with hardware and firmware teams from early discovery so technical constraints surfaced before high-fidelity design work began — contributing to a 75% faster go-live timeline versus the team's prior integration cycle."
        ]
      },
      {
        name: "CA Operating System",
        subtitle: "SaaS Platform for Chartered Accountant Firms",
        bullets: [
          "Led product strategy and UX for a SaaS platform reimagining fragmented Chartered Accountant firm operations into one connected ecosystem, replacing 6–7 disconnected tools (spreadsheets, WhatsApp, personal calendars, manual reminders) with a single connected system.",
          "Conducted end-to-end operational research across lead management, client onboarding, document collection, compliance, and payments; identified that operational fragmentation — not accounting complexity — was the root usability problem, reframing the product from a dashboard into a full operating system.",
          "Defined product architecture and information model before visual design, mapping relationships across leads, clients, documents, payments, and compliance around a single client profile ('Client Timeline') and restructuring navigation around user tasks to reduce cross-module context switching.",
          "Architected for scale from day one — role-based permissions, multi-tenant structure, and organization-level settings — and designed automation workflows (recurring compliance reminders, payment follow-ups, auto-generated document requests) to remove repetitive manual coordination across the client lifecycle."
        ]
      }
    ],
    skills: ["Enterprise IoT", "Embedded UX", "Product Strategy", "Cross-functional Collaboration", "Enterprise SaaS"]
  },
  {
    company: "Cooter:Labs",
    logoText: "CL",
    role: "Senior UX/UI Designer (Contract)",
    duration: "Apr 2025 – Dec 2025",
    keyResponsibilities: [
      "Redesigned logistics ERP workflows after research surfaced usability issues affecting 70%+ of surveyed users; prioritized the top friction points over a full rebuild to ship measurable improvement within the contract timeline.",
      "Restructured information architecture and task flows based on task-analysis sessions with active users, cutting redundant manual steps across core logistics operations.",
      "Built and scaled a modular design system on Atomic Design principles, choosing reusable components over one-off screens to reduce design-to-dev handoff time; ran agile sprints with product, engineering, and business stakeholders."
    ],
    skills: ["Enterprise SaaS", "ERP", "Information Architecture", "Design Systems"]
  },
  {
    company: "O4S",
    logoText: "O4",
    role: "Product Designer",
    duration: "May 2023 – Mar 2025",
    keyResponsibilities: [
      "Owned end-to-end product design for a white-label loyalty platform spanning mobile and enterprise dashboard experiences across multiple markets, with design contributions supporting ₹7Cr+ in platform business impact and 25% YoY growth across 50+ enterprise brands and 5M+ channel partners.",
      "Identified high drop-off in a single long-form onboarding flow; chose to split it into three logical sections (general details, business information, address) with save-and-resume — over a single-page redesign — after interviews showed users often completed onboarding across multiple sessions. Validated the change through A/B testing and secured buy-in from product managers and operations before rollout.",
      "Mentored junior and peer designers through design reviews and structured feedback; separately mentored aspiring designers outside the organization — 3 of 4 mentees are now working professionally as junior designers.",
      "Built scalable white-label design frameworks with Product, Engineering, Operations, and Sales, choosing token-based theming over per-client custom builds; ran accessibility audits across the dashboard and white-label app, prioritizing WCAG fixes that reduced onboarding time and downstream development rework."
    ],
    skills: ["B2B SaaS", "White-label Products", "Accessibility", "Product Strategy"]
  },
  {
    company: "Oodles Studio",
    logoText: "OS",
    role: "UX/UI Designer",
    duration: "Apr 2022 – Apr 2023",
    keyResponsibilities: [
      "Delivered end-to-end UX for web and mobile products across waste management, ed-tech, e-commerce, and sustainability domains, adapting research and design approach per domain rather than applying a single playbook given how different each user base's context and constraints were.",
      "Defined user journeys, information architecture, wireframes, and high-fidelity interfaces, prioritizing the flows with the highest user drop-off first when timelines were tight.",
      "Worked closely with engineering to keep designs buildable within sprint constraints, flagging scope trade-offs early rather than after handoff."
    ],
    skills: ["UX Research", "Wireframing", "Interaction Design", "Cross-functional Collaboration"]
  },
  {
    company: "JoonWeb",
    logoText: "JW",
    role: "UX/UI Designer",
    duration: "Oct 2021 – Mar 2022",
    keyResponsibilities: [
      "Designed wireframes, UI screens, and front-end style guides for early-stage web products, establishing simple, reusable interaction patterns so founders could self-serve new pages without ongoing design support.",
      "Worked directly with founders and developers in a fast-paced startup environment, prioritizing shipping usable interfaces quickly over polish given limited resources."
    ],
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
                          {proj.description && (
                            <p className="professional-journey__project-description">{proj.description}</p>
                          )}
                          {proj.bullets && (
                            <ul className="professional-journey__list" style={{ marginTop: "8px" }}>
                              {proj.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="professional-journey__list-item">
                                  <span className="professional-journey__list-bullet">→</span>
                                  <span className="professional-journey__list-text">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
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