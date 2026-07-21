"use client";

import { forwardRef, useEffect } from "react";
import { Layers, Zap, Users } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/cn";

import "./about.css";

import type { AboutProps } from "./about.types";

const coreValues = [
  {
    icon: <Layers size={16} className="about__value-icon" />,
    title: "Curiosity",
    description: "I enjoy exploring how people think, work and interact with technology. Curiosity helps me uncover insights that often lead to better product decisions."
  },
  {
    icon: <Zap size={16} className="about__value-icon" />,
    title: "Continuous Learning",
    description: "Technology evolves quickly, and so do I. I actively learn new tools, design methods and product strategies to stay relevant and improve my craft."
  },
  {
    icon: <Users size={16} className="about__value-icon" />,
    title: "Collaboration",
    description: "Great products are never built alone. I value open communication, constructive feedback and working closely with cross-functional teams to achieve shared goals."
  },
  {
    icon: <Layers size={16} className="about__value-icon" />,
    title: "Attention to Detail",
    description: "Small design decisions often create the biggest impact. From interaction states to content hierarchy, I focus on creating polished and consistent experiences."
  },
  {
    icon: <Zap size={16} className="about__value-icon" />,
    title: "Problem Solving",
    description: "I enjoy breaking down complex business challenges into simple, intuitive experiences that users can understand with confidence."
  },
  {
    icon: <Users size={16} className="about__value-icon" />,
    title: "Growth Mindset",
    description: "Every project teaches something new. I believe that listening, experimenting and reflecting are essential parts of becoming a better product designer."
  }
];

const skills = [
  "Product Thinking",
  "UX Strategy",
  "Design Systems",
  "Enterprise SaaS",
  "Research",
  "Accessibility",
  "Collaboration",
  "Continuous Learning",
  "Problem Solving",
  "Business Impact"
];

export const About = forwardRef<HTMLElement, AboutProps>(
  ({ className, ...props }, ref) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("about__value-card--in-view");
              observer.unobserve(entry.target); // Trigger only once
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      const items = document.querySelectorAll(".about__value-card");
      items.forEach((item) => observer.observe(item));

      return () => observer.disconnect();
    }, []);

    return (
      <Section
        id="about"
        ref={ref}
        className={cn("about", className)}
        {...props}
      >
        <Container>
          <SectionHeader
            badge="BEYOND DESIGN"
            title="The person behind the products."
            description="For me, product design is about understanding people before designing interfaces. Every project is an opportunity to simplify complexity, solve meaningful problems and create experiences that make someone's work or life a little easier. I enjoy collaborating with diverse teams, asking the right questions and turning ideas into products that deliver measurable value."
            layout="stacked"
          />

          <div className="about__content">
            {/* Left Column: Portrait photo visual frame */}
            <div className="about__image-column">
              <div className="about__canvas">
                <div className="about__canvas-inner">
                  <img
                    src="/sujit_about_new.jpg"
                    alt="Sujit Kumar"
                    className="about__canvas-img"
                  />
                </div>
                <div className="about__canvas-blueprint" />
              </div>
            </div>

            {/* Right Column: Story & Philosophy */}
            <div className="about__text-column">
              <div className="about__story">
                <h3 className="about__subtitle">Personal Story</h3>
                <p className="about__paragraph">
                  Outside of design, I enjoy learning about product strategy, emerging technologies and how businesses scale through great user experiences. I believe the best designers understand not only users, but also business objectives, engineering constraints and market realities.
                </p>
              </div>

              <div className="about__philosophy">
                <h3 className="about__subtitle">Design Philosophy</h3>
                <p className="about__paragraph">
                  "Great design isn't about adding more. It's about removing everything that stands between users and their goals."
                </p>
              </div>

              <div className="about__values">
                <h3 className="about__subtitle font-semibold">How I Work with Teams</h3>
                <div className="about__values-grid">
                  {coreValues.map((val, idx) => (
                    <div 
                      key={val.title} 
                      className="about__value-card"
                      style={{ transitionDelay: `${idx * 80}ms` }}
                    >
                      {val.icon}
                      <div>
                        <h4 className="about__value-title">{val.title}</h4>
                        <p className="about__value-text">{val.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about__skills-block">
                <h3 className="about__subtitle">Core Skills</h3>
                <div className="about__skills-list">
                  {skills.map((skill) => (
                    <span key={skill} className="about__skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="about__skills-block" style={{ marginTop: "24px" }}>
                <h3 className="about__subtitle">Tools & Technologies</h3>
                <div className="about__tools-tech-list" style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                  <p className="about__paragraph" style={{ fontSize: "0.9375rem", lineHeight: "1.5", color: "#4b5563" }}>
                    <strong>Design:</strong> Figma, Figma Make, Adobe XD, Illustrator, Photoshop
                  </p>
                  <p className="about__paragraph" style={{ fontSize: "0.9375rem", lineHeight: "1.5", color: "#4b5563" }}>
                    <strong>AI-Assisted Workflow:</strong> Use ChatGPT and Claude to synthesize raw research notes into thematic insights, and Figma AI for rapid low-fidelity variant generation during early exploration — speeding up initial concepting while keeping evaluation and final design decisions manual.
                  </p>
                  <p className="about__paragraph" style={{ fontSize: "0.9375rem", lineHeight: "1.5", color: "#4b5563" }}>
                    <strong>Collaboration:</strong> Notion, Slack, Asana
                  </p>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="about__edu-certs-block" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "24px" }}>
                <div className="about__education">
                  <h3 className="about__subtitle">Education</h3>
                  <div style={{ marginTop: "8px" }}>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#111111", margin: "0" }}>B.Com in Accounting</h4>
                    <span style={{ fontSize: "0.8125rem", color: "#9ca3af", fontWeight: "500" }}>Babasaheb Bhimrao Ambedkar University, Bihar (2018)</span>
                    <p className="about__paragraph" style={{ fontSize: "0.875rem", lineHeight: "1.5", color: "#6b7280", marginTop: "8px" }}>
                      Background in accounting and business analysis informs a data- and process-driven approach to design — evident in ERP, logistics, and B2B SaaS work where operational logic and business rules shape the interface.
                    </p>
                  </div>
                </div>

                <div className="about__certifications">
                  <h3 className="about__subtitle">Certifications</h3>
                  <div style={{ marginTop: "8px" }}>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#111111", margin: "0" }}>Google UX Design Certificate</h4>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#111111", margin: "8px 0 0 0" }}>Graphic Elements of Design</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    );
  }
);

About.displayName = "About";