"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";
import {
  CaseStudyHero,
  CaseStudySection,
  CaseStudyImage,
} from "@/components/case-study";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "mapping", label: "Discovery" },
  { id: "strategy", label: "Strategy" },
  { id: "architecture", label: "Architecture" },
  { id: "experience", label: "Experience" },
  { id: "reflection", label: "Reflection" },
];

const timelineStages = [
  "Website Inquiry",
  "Lead Qualification",
  "Client Consultation",
  "Document Collection",
  "Client Onboarding",
  "Service Assignment",
  "Payment Tracking",
  "Compliance Management",
  "Recurring Services",
  "Long-Term Relationship",
];

const userFlowStages = [
  "Website Enquiry",
  "Lead Created",
  "Consultation",
  "Client Onboarding",
  "Document Collection",
  "Task Assignment",
  "Compliance",
  "Payment Tracking",
  "Recurring Services",
  "Client Timeline",
];

const coreModules = [
  { name: "Website", icon: "🌐", desc: "Enables client self-service and leads capture" },
  { name: "Lead Management", icon: "📈", desc: "Qualifies and tracks potential clients" },
  { name: "Client Management", icon: "👥", desc: "A unified workspace for client data" },
  { name: "Service Management", icon: "💼", desc: "Configures client scopes and fees" },
  { name: "Document Management", icon: "📁", desc: "A centralized, secure document vault" },
  { name: "Payment Management", icon: "💳", desc: "Tracks invoices, recurring retainers, and payouts" },
  { name: "Compliance Management", icon: "📅", desc: "Automates regulatory tax filing timelines" },
  { name: "Task Management", icon: "✅", desc: "Distributes workload across accountants" },
  { name: "Notification Center", icon: "🔔", desc: "Aligns status updates for all stakeholders" },
  { name: "Reports & Analytics", icon: "📊", desc: "Surfaces operational KPIs and efficiency data" },
  { name: "Client Portal", icon: "🚪", desc: "Secures secure document uploads and approvals" },
  { name: "Organization Settings", icon: "⚙️", desc: "Manages roles, permissions, and templates" },
];

export function CaOperatingSystemCaseStudyClient() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeNav, setActiveNav] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  // Scroll Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for Active TOC Nav
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for lightbox overlay
  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  return (
    <>
      {/* Reading Progress Indicator Bar */}
      <div
        style={{
          position: "fixed",
          top: "60px", // fits immediately below the standard header navbar
          left: 0,
          width: `${scrollPercent}%`,
          height: "3px",
          background: "var(--primary)",
          zIndex: 100,
          transition: "width 80ms ease-out",
        }}
        aria-hidden="true"
      />

      {/* Sticky Table of Contents Navigation (Desktop) */}
      <nav className="desktop-toc" aria-label="Table of contents" style={{
        position: "fixed",
        top: "50%",
        left: "clamp(20px, 3vw, 60px)",
        transform: "translateY(-50%)",
        flexDirection: "column",
        gap: "16px",
        zIndex: 50,
      }}>
        {navItems.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "6px 0",
                transition: "all 200ms ease",
              }}
              aria-current={isActive ? "location" : undefined}
            >
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: isActive ? "var(--primary)" : "var(--border)",
                transform: isActive ? "scale(1.3)" : "scale(1)",
                boxShadow: isActive ? "0 0 0 3px var(--selection-background)" : "none",
                transition: "all 200ms ease",
              }} />
              <span style={{
                fontSize: "0.75rem",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "var(--foreground)" : "var(--foreground-subtle)",
                transition: "all 200ms ease",
              }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Floating Collapsible TOC Button */}
      <div className="mobile-toc" style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 90,
      }}>
        {mobileMenuOpen && (
          <div style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "16px",
            marginBottom: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            minWidth: "180px",
          }}>
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--primary)" : "var(--foreground-muted)",
                    transition: "color 150ms ease",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "var(--primary)",
            color: "#ffffff",
            border: "none",
            boxShadow: "0 4px 12px rgba(252, 128, 25, 0.3)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
          aria-label="Toggle section navigation"
        >
          ☰
        </button>
      </div>

      {/* 01 Hero Section */}
      <div id="overview">
        <CaseStudyHero
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/#work" },
            { label: "CA Operating System" },
          ]}
          category="Enterprise SaaS • Product Strategy • Systems Thinking"
          title="Designing an Operating System for Modern Chartered Accountant Firms"
          subtitle="Instead of building another CRM or compliance tool, I designed a connected operating system that transforms fragmented accounting workflows into one scalable SaaS ecosystem."
          description={`Chartered Accountant firms rely on multiple disconnected tools to manage clients, compliance, documents, payments, and communication.\n\nWhile each tool solves a specific problem, together they create operational complexity, duplicated work, and fragmented workflows.\n\nThis project explores how these disconnected experiences can be unified into one intelligent operating system that simplifies operations, reduces manual effort, and supports business growth.`}
          metadata={[
            { label: "Role", values: ["Product Designer"] },
            { label: "Timeline", values: ["Concept Project"] },
            { label: "Platform", values: ["Responsive Web Application"] },
            { label: "Industry", values: ["Accounting & FinTech"] },
            {
              label: "Focus",
              values: [
                "Product Strategy",
                "Systems Thinking",
                "UX Design",
              ],
            },
          ]}
          primaryTargetId="overview"
          secondaryTargetId="research"
          primaryCtaLabel="Explore Case Study"
          secondaryCtaLabel="Read Process"
          imageLabel="CA Operating System Hero Preview"
          imageCaption="A connected operating system transforming fragmented accounting compliance and client workflows."
        />
      </div>

      {/* 29 Case Study Quick Overview */}
      <div style={{ marginBlock: "32px 56px" }}>
        <Container>
          <div style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "36px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.01), 0 8px 24px -12px rgba(0, 0, 0, 0.03)",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}>
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--foreground-subtle)", letterSpacing: "0.05em" }}>Project</span>
                <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--foreground)", marginTop: "4px" }}>CA Operating System</div>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--foreground-subtle)", letterSpacing: "0.05em" }}>Role</span>
                <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--foreground)", marginTop: "4px" }}>Product Designer</div>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--foreground-subtle)", letterSpacing: "0.05em" }}>Duration</span>
                <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--foreground)", marginTop: "4px" }}>Concept Project</div>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--foreground-subtle)", letterSpacing: "0.05em" }}>Platform</span>
                <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--foreground)", marginTop: "4px" }}>Enterprise SaaS</div>
              </div>
            </div>
            
            <div style={{ borderTop: "1px solid var(--border)", marginBlock: "24px", paddingTop: "24px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--foreground-subtle)", letterSpacing: "0.05em" }}>Responsibilities</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                {["Research", "Product Strategy", "Information Architecture", "UX Design", "Systems Thinking", "Wireframing", "UI Design"].map((r) => (
                  <span key={r} style={{
                    fontSize: "0.8125rem",
                    fontWeight: "600",
                    color: "var(--primary)",
                    background: "var(--primary-light)",
                    padding: "6px 12px",
                    borderRadius: "50px",
                  }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--foreground-subtle)", letterSpacing: "0.05em" }}>Outcome</span>
              <p style={{ fontSize: "1rem", color: "var(--foreground-muted)", marginTop: "8px", lineHeight: "1.6" }}>
                Designed a connected operating system that unifies fragmented accounting workflows into one scalable product ecosystem.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* 02 Research Before Design */}
      <CaseStudySection
        id="research"
        badge="Research"
        title="Understanding the Business Before Designing the Product"
        introduction="One of the biggest mistakes product teams make is designing solutions before fully understanding the environment they are designing for."
      >
        <p>I wanted to avoid that.</p>
        <p>
          Before opening Figma or creating a single wireframe, I focused on understanding how Chartered Accountant firms actually operate.
        </p>
        <p>
          Rather than thinking in terms of pages or screens, I thought in terms of business workflows.
        </p>
        <ul>
          <li>{"How does a potential client become a long-term client?"}</li>
          <li>{"How are documents collected?"}</li>
          <li>{"Who manages compliance?"}</li>
          <li>{"How are payments tracked?"}</li>
          <li>{"How does information move between different people?"}</li>
        </ul>
        <p>Those questions became the starting point of the product.</p>

        <div 
          className="case-study-section__wide" 
          style={{ marginTop: "24px", cursor: "zoom-in" }}
          onClick={() => setLightboxImage({
            src: "/doctor_platform.png",
            caption: "Workflow Discovery Diagram mapping the complex operational dependencies within accounting firms.",
          })}
        >
          <CaseStudyImage
            label="Workflow Discovery Diagram"
            caption="Workflow Discovery Diagram mapping the complex operational dependencies within accounting firms."
          />
        </div>
      </CaseStudySection>

      {/* 03 Mapping Existing Workflows */}
      <CaseStudySection
        id="mapping"
        badge=""
        title="Looking Beyond Individual Screens"
        introduction="Instead of analyzing isolated features, I mapped complete operational journeys."
      >
        <p>Every workflow revealed another dependency.</p>

        <div className="workflow-timeline">
          {timelineStages.map((stage, idx) => (
            <div key={idx} className="workflow-timeline__item">
              <div className="workflow-timeline__node">
                <span className="workflow-timeline__number">{idx + 1}</span>
              </div>
              <div className="workflow-timeline__content">
                <h4 className="workflow-timeline__title">{stage}</h4>
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "24px" }}>
          Each stage relied on different tools, different people, and different processes.
        </p>
        <p>
          The more workflows I mapped, the clearer the operational complexity became.
        </p>
      </CaseStudySection>

      {/* 04 Research Insights */}
      <CaseStudySection
        id="insights"
        badge=""
        title="Key Insights"
        introduction="Insights derived from workflow mapping and operational research."
      >
        <div className="case-study-insights__grid">
          <div className="case-study-insights__card">
            <span className="case-study-snapshot__card-title">Insight 01</span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px" }}>
              Information entered the business once but was manually copied multiple times.
            </h3>
          </div>
          <div className="case-study-insights__card">
            <span className="case-study-snapshot__card-title">Insight 02</span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px" }}>
              Different teams worked on the same client using disconnected tools.
            </h3>
          </div>
          <div className="case-study-insights__card">
            <span className="case-study-snapshot__card-title">Insight 03</span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px" }}>
              Operational knowledge depended heavily on people instead of systems.
            </h3>
          </div>
          <div className="case-study-insights__card">
            <span className="case-study-snapshot__card-title">Insight 04</span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px" }}>
              Every new client increased operational complexity.
            </h3>
          </div>
          <div className="case-study-insights__card" style={{ gridColumn: "span 2" }}>
            <span className="case-study-snapshot__card-title">Insight 05</span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px" }}>
              {"The real bottleneck wasn't accounting."}
            </h3>
            <p style={{ color: "var(--foreground-muted)", marginTop: "4px" }}>
              It was fragmented operations.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 05 The Pattern I Couldn't Ignore */}
      <CaseStudySection
        id="pattern"
        badge=""
        title="One Pattern Appeared Everywhere"
        introduction="Across every workflow, the same problem repeated itself."
      >
        <p>
          Information constantly moved between spreadsheets, messaging apps, cloud storage, emails, calendars, and accounting software.
        </p>
        <p>The same client data was recreated multiple times.</p>
        <p>The same documents were shared repeatedly.</p>
        <p>The same reminders were manually recreated every month.</p>
        <p>{"The problem wasn't missing software."}</p>
        <p>The problem was that every tool operated independently.</p>

        <div 
          className="case-study-section__wide" 
          style={{ marginTop: "24px", cursor: "zoom-in" }}
          onClick={() => setLightboxImage({
            src: "/hotel_platform.png",
            caption: "Systems Fragmentation Diagram demonstrating the flow of data across disconnected applications.",
          })}
        >
          <CaseStudyImage
            label="Systems Fragmentation Diagram"
            caption="Diagram showing the fragmented manual transfer of client data across disconnected SaaS tools."
          />
        </div>
      </CaseStudySection>

      {/* 06 Reframing the Problem */}
      <CaseStudySection
        id="reframing"
        badge=""
        title="The Problem Was Never Accounting"
        introduction="A fundamental realization that changed the design perspective."
      >
        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            {"\"I wasn't designing software for Chartered Accountants. I was designing operations.\""}
          </p>
        </div>
        <p>That realization completely changed the direction of the project.</p>
        <p>
          Instead of designing another collection of features, I started exploring how an entire operational ecosystem could work as one connected system.
        </p>
      </CaseStudySection>

      {/* 07 Design Opportunity */}
      <CaseStudySection
        id="opportunity"
        badge=""
        title="From Fragmented Tools to One Connected Ecosystem"
        introduction="The opportunity wasn't to improve one workflow."
      >
        <p>It was to redesign how information flows across the entire organization.</p>
        <p>{"Instead of asking:"}</p>
        <p style={{ fontStyle: "italic", fontWeight: "600", paddingLeft: "12px" }}>
          {"\"How can this screen be better?\""}
        </p>
        <p>{"The project evolved into a much bigger question:"}</p>
        <p style={{ fontStyle: "italic", fontWeight: "600", paddingLeft: "12px" }}>
          {"\"How can every operational workflow naturally connect with the next?\""}
        </p>
        <p>That became the foundation for the product strategy.</p>
      </CaseStudySection>

      {/* 08 Product Strategy */}
      <CaseStudySection
        id="strategy"
        badge="Strategy"
        title="Thinking Beyond Individual Features"
        introduction="As I continued mapping workflows, one realization became increasingly clear."
      >
        <p>{"I wasn't designing another business application."}</p>
        <p>I was designing how an entire organization operates.</p>
        <p>Most existing products solved one problem at a time.</p>
        <ul>
          <li>CRM software managed leads.</li>
          <li>Document platforms stored files.</li>
          <li>Payment systems tracked invoices.</li>
          <li>Compliance software managed deadlines.</li>
        </ul>
        <p>Each product solved its own responsibility well.</p>
        <p>The real challenge was connecting them into one continuous operational experience.</p>
        <p>Instead of designing another module, I started designing relationships between them.</p>

        <div className="case-study-strategy__grid" style={{ marginTop: "32px" }}>
          <div className="case-study-insights__card">
            <span className="case-study-snapshot__card-title">Disconnected Tools</span>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", paddingLeft: "20px" }}>
              <li style={{ color: "var(--foreground-muted)" }}>CRM</li>
              <li style={{ color: "var(--foreground-muted)" }}>Documents</li>
              <li style={{ color: "var(--foreground-muted)" }}>Payments</li>
              <li style={{ color: "var(--foreground-muted)" }}>Compliance</li>
              <li style={{ color: "var(--foreground-muted)" }}>Communication</li>
              <li style={{ color: "var(--foreground-muted)" }}>Calendar</li>
            </ul>
          </div>
          <div className="case-study-insights__card" style={{ borderLeft: "4px solid var(--primary)" }}>
            <span className="case-study-snapshot__card-title" style={{ color: "var(--primary)" }}>
              One Connected Operating System
            </span>
            <p className="case-study-challenge__card-title" style={{ marginTop: "12px" }}>
              Everything connected through one ecosystem.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 09 Systems Thinking */}
      <CaseStudySection
        id="systems"
        badge=""
        title="Designing Relationships Instead of Screens"
        introduction="The project shifted from interface design to systems design."
      >
        <p>Rather than asking how individual pages should look, I focused on how information should move.</p>
        <p>Every action inside the platform should naturally trigger the next.</p>
        <ul>
          <li>A lead should become a client.</li>
          <li>A client should generate document requests.</li>
          <li>Documents should trigger operational tasks.</li>
          <li>Tasks should activate compliance workflows.</li>
          <li>Compliance should create recurring schedules.</li>
          <li>Payments should update the client timeline.</li>
        </ul>
        <p>Every interaction should contribute to one connected operational system.</p>

        <div 
          className="case-study-section__wide" 
          style={{ marginTop: "24px", cursor: "zoom-in" }}
          onClick={() => setLightboxImage({
            src: "/digital_banking.png",
            caption: "Ecosystem Diagram showing interactions across billing, compliance, CRM, and files.",
          })}
        >
          <CaseStudyImage
            label="Ecosystem Diagram"
            caption="Ecosystem Diagram demonstrating the flow of automated actions and status triggers across leads, client onboarding, compliance, and billing."
          />
        </div>
      </CaseStudySection>

      {/* 10 Design Principles */}
      <CaseStudySection
        id="principles"
        badge=""
        title="Principles That Guided Every Decision"
        introduction="Core system requirements translated into design parameters."
      >
        <div className="case-study-principles__grid">
          <div className="case-study-principles__card">
            <span className="case-study-snapshot__card-title" style={{ color: "var(--primary)" }}>
              Principle 01
            </span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px", fontSize: "1.15rem" }}>
              Systems Before Screens
            </h3>
            <p style={{ color: "var(--foreground-muted)", fontSize: "0.9375rem", marginTop: "4px" }}>
              Design workflows before interfaces.
            </p>
          </div>
          <div className="case-study-principles__card">
            <span className="case-study-snapshot__card-title" style={{ color: "var(--primary)" }}>
              Principle 02
            </span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px", fontSize: "1.15rem" }}>
              Single Source of Truth
            </h3>
            <p style={{ color: "var(--foreground-muted)", fontSize: "0.9375rem", marginTop: "4px" }}>
              Every piece of information should exist only once.
            </p>
          </div>
          <div className="case-study-principles__card">
            <span className="case-study-snapshot__card-title" style={{ color: "var(--primary)" }}>
              Principle 03
            </span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px", fontSize: "1.15rem" }}>
              Reduce Manual Work
            </h3>
            <p style={{ color: "var(--foreground-muted)", fontSize: "0.9375rem", marginTop: "4px" }}>
              Eliminate repetitive tasks through automation.
            </p>
          </div>
          <div className="case-study-principles__card">
            <span className="case-study-snapshot__card-title" style={{ color: "var(--primary)" }}>
              Principle 04
            </span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px", fontSize: "1.15rem" }}>
              Design for Scale
            </h3>
            <p style={{ color: "var(--foreground-muted)", fontSize: "0.9375rem", marginTop: "4px" }}>
              Support growing firms without increasing complexity.
            </p>
          </div>
          <div className="case-study-principles__card" style={{ gridColumn: "span 2" }}>
            <span className="case-study-snapshot__card-title" style={{ color: "var(--primary)" }}>
              Principle 05
            </span>
            <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px", fontSize: "1.15rem" }}>
              Connected Experiences
            </h3>
            <p style={{ color: "var(--foreground-muted)", fontSize: "0.9375rem", marginTop: "4px" }}>
              Every workflow should naturally connect with the next.
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* 11 Designing for Scale */}
      <CaseStudySection
        id="scale"
        badge=""
        title="Building for Tomorrow, Not Just Today"
        introduction="Throughout the project, I continuously asked one question: 'If this firm doubles its clients next year, will the product still work?'"
      >
        <p>Rather than designing for one accountant, I designed for growing organizations.</p>
        <p>
          This influenced decisions around role-based access, recurring workflows, centralized notifications, shared timelines, and organization-level scalability.
        </p>
        <p>{"Scalability wasn't treated as a technical requirement."}</p>
        <p>It became a product design principle.</p>

        <div className="case-study-section__wide" style={{ marginTop: "24px" }}>
          <CaseStudyImage
            label="Scalability Flow Illustration"
            caption="Visual schema showing structural transition from small boutique accounting firms to high-volume enterprise organizations."
          />
        </div>
      </CaseStudySection>

      {/* 12 Automation Strategy */}
      <CaseStudySection
        id="automation"
        badge=""
        title="Automation Should Remove Work, Not Add Features"
        introduction="Automation wasn't introduced to make the product appear intelligent."
      >
        <p>It was introduced to eliminate invisible operational effort.</p>
        <p>Instead of asking users to remember recurring work, the system should remember it.</p>
        <ul>
          <li>Recurring services generate recurring compliance tasks.</li>
          <li>Payment reminders are scheduled automatically.</li>
          <li>Document requests are generated based on selected services.</li>
          <li>Notifications are triggered at the right moment.</li>
        </ul>
        <p>The best automation is the one users never notice.</p>
        <p>Because the work simply gets done.</p>

        <div className="case-study-section__wide" style={{ marginTop: "24px" }}>
          <CaseStudyImage
            label="Automation Flow Diagram"
            caption="Flow diagram mapping how a recurring client compliance task triggers automated document verification and automatic payment scheduling."
          />
        </div>
      </CaseStudySection>

      {/* 13 Product Vision */}
      <CaseStudySection
        id="vision"
        badge=""
        title="Not Another CRM"
        introduction="A traditional CRM focuses on customer relationships. This platform focuses on business operations."
      >
        <p>
          Instead of ending when a lead becomes a client, the experience continues throughout the complete operational lifecycle.
        </p>
        <p style={{ display: "flex", flexWrap: "wrap", gap: "8px", fontWeight: "600", color: "var(--primary)", marginBlock: "16px" }}>
          <span>Lead</span>
          <span>→</span>
          <span>Client</span>
          <span>→</span>
          <span>Documents</span>
          <span>→</span>
          <span>Services</span>
          <span>→</span>
          <span>Payments</span>
          <span>→</span>
          <span>Compliance</span>
          <span>→</span>
          <span>Communication</span>
          <span>→</span>
          <span>Recurring Operations</span>
          <span>→</span>
          <span>Historical Timeline</span>
        </p>
        <p>
          Rather than replacing one software category, the goal was to unify multiple categories into one connected operating system.
        </p>

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text">
            {"\"The goal wasn't to build better software. It was to build a better way for Chartered Accountant firms to work.\""}
          </p>
        </div>
      </CaseStudySection>

      {/* 14 Information Architecture */}
      <CaseStudySection
        id="architecture"
        badge="Architecture"
        title="Organizing Complexity Through Information Architecture"
        introduction="As the product vision expanded, the biggest challenge wasn't adding more functionality. It was organizing complexity."
      >
        <p>
          Rather than grouping features based on technical implementation, I structured the platform around how Chartered Accountant firms naturally work.
        </p>
        <p>{"Users don't think in terms of modules. They think in terms of tasks."}</p>
        <p>
          The information architecture was designed to minimize navigation, reduce context switching, and ensure every workflow felt connected from start to finish.
        </p>
        <p>{"The goal wasn't to expose every feature. The goal was to surface the right information at the right time."}</p>

        <div 
          className="case-study-section__wide" 
          style={{ marginTop: "24px", cursor: "zoom-in" }}
          onClick={() => setLightboxImage({
            src: "/doctor_platform.png",
            caption: "Information Architecture Diagram of CA Operating System.",
          })}
        >
          <CaseStudyImage
            label="Information Architecture Diagram"
            caption="Information Architecture mapping: Dashboard leading to Leads, Clients, Services, Documents, Payments, Compliance, Notifications, and Reports."
            wide
          />
        </div>
      </CaseStudySection>

      {/* 15 Product Architecture */}
      <CaseStudySection
        id="product-architecture"
        badge=""
        title="Designing the Product as a Connected Ecosystem"
        introduction="Instead of designing isolated modules, I designed a connected product ecosystem."
      >
        <p>
          Every module had a clear responsibility, while remaining tightly integrated with the rest of the platform.
        </p>
        <p>Each action created context for the next.</p>
        <ul>
          <li>A website enquiry became a lead.</li>
          <li>A lead became a client.</li>
          <li>Clients generated services.</li>
          <li>Services generated document requests.</li>
          <li>Documents triggered operational tasks.</li>
          <li>Tasks initiated compliance workflows.</li>
          <li>Payments updated timelines.</li>
          <li>Notifications kept every stakeholder aligned.</li>
        </ul>
        <p>Rather than creating independent features, I focused on creating continuous operational relationships.</p>

        <div 
          className="case-study-section__wide" 
          style={{ marginTop: "24px", cursor: "zoom-in" }}
          onClick={() => setLightboxImage({
            src: "/hotel_platform.png",
            caption: "Product Ecosystem Diagram mapping data connections across compliance, CRM, and files.",
          })}
        >
          <CaseStudyImage
            label="Product Ecosystem Diagram"
            caption="Interconnected modules displaying relational data flows between CRM, Compliance, Document Vault, Billing, and Team Tasks."
          />
        </div>
      </CaseStudySection>

      {/* 16 Core Product Modules */}
      <CaseStudySection
        id="modules"
        badge=""
        title="The Building Blocks of the Platform"
        introduction="Standard modular modules built as a responsive grid experience."
      >
        <div className="case-study-white-label__grid">
          {coreModules.map((m) => (
            <div key={m.name} className="case-study-white-label__card">
              <h3 className="case-study-white-label__card-title" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.0625rem" }}>
                <span>{m.icon}</span>
                <span>{m.name}</span>
              </h3>
              <p className="case-study-white-label__card-text" style={{ marginTop: "4px" }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 17 Designing User Flows */}
      <CaseStudySection
        id="flows"
        badge=""
        title="Designing Workflows Instead of Features"
        introduction="Every workflow was designed to reduce unnecessary decisions and manual effort."
      >
        <p>
          Instead of requiring users to remember what should happen next, the platform guides every stage automatically.
        </p>
        <p>The focus shifted from individual features to complete operational journeys.</p>
        <p>Every interaction moves the user one step closer to completing meaningful work.</p>

        <div className="workflow-timeline">
          {userFlowStages.map((stage, idx) => (
            <div key={idx} className="workflow-timeline__item">
              <div className="workflow-timeline__node">
                <span className="workflow-timeline__number">{idx + 1}</span>
              </div>
              <div className="workflow-timeline__content">
                <h4 className="workflow-timeline__title">{stage}</h4>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 18 Entity Relationships */}
      <CaseStudySection
        id="database"
        badge=""
        title="Creating a Single Source of Truth"
        introduction="One of the biggest architectural decisions was ensuring that information exists only once."
      >
        <p>
          Instead of duplicating client data across different modules, every workflow references a single source of truth.
        </p>
        <p>The client becomes the center of the ecosystem. Everything connects back to it.</p>

        <div className="case-study-section__wide" style={{ display: "flex", justifyContent: "center", marginBlock: "32px" }}>
          <div style={{
            border: "1px solid var(--border)",
            borderRadius: "24px",
            background: "var(--surface)",
            padding: "40px",
            maxWidth: "600px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.01), 0 8px 24px -12px rgba(0, 0, 0, 0.03)",
          }}>
            {/* Central Node */}
            <div style={{
              background: "var(--primary-light)",
              border: "2px solid var(--primary)",
              color: "var(--primary)",
              padding: "16px 32px",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "1.25rem",
              boxShadow: "0 0 0 4px var(--selection-background)",
            }}>
              Client (Center Node)
            </div>
            
            {/* Connected nodes grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              width: "100%",
              marginTop: "12px",
            }}>
              {[
                "Documents", "Payments", "Services",
                "Compliance", "Timeline", "Notes",
                "Tasks", "Communication", "Notifications",
              ].map((node) => (
                <div key={node} style={{
                  background: "var(--surface-secondary)",
                  border: "1px solid var(--border)",
                  padding: "12px",
                  borderRadius: "12px",
                  textAlign: "center",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "var(--foreground-muted)",
                }}>
                  {node}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>This approach simplifies navigation, improves consistency, and reduces operational errors.</p>
      </CaseStudySection>

      {/* 19 Navigation Strategy */}
      <CaseStudySection
        id="navigation"
        badge=""
        title="Navigation Designed Around Daily Work"
        introduction="Rather than organizing navigation around software modules, I designed it around the daily priorities of a Chartered Accountant."
      >
        <p>{"Users shouldn't search for information. The product should naturally surface what matters most."}</p>
        <ul>
          <li>Upcoming compliance.</li>
          <li>Pending documents.</li>
          <li>Outstanding payments.</li>
          <li>Active client work.</li>
          <li>Critical notifications.</li>
        </ul>
        <p>Good navigation reduces effort before users even begin interacting with the product.</p>

        <div className="case-study-section__wide" style={{ marginTop: "24px" }}>
          <CaseStudyImage
            label="Navigation Concept Diagram"
            caption="Navigation schema showcasing sidebar hierarchy grouped by task workflows instead of features."
          />
        </div>
      </CaseStudySection>

      {/* 20 Transition */}
      <CaseStudySection
        id="design-transition"
        badge=""
        title="Translating Strategy to Interfaces"
        introduction="With the architecture defined, the next step was translating strategy into interfaces."
      >
        <p>
          Only after understanding the business, organizing the information, and defining the workflows did visual design begin.
        </p>
        <p>
          The next phase explores how these decisions evolved into user experiences, components, and interface design.
        </p>
      </CaseStudySection>

      {/* 21 From Strategy to Interface */}
      <CaseStudySection
        id="experience"
        badge="Experience Design"
        title="Translating Product Strategy into User Experience"
        introduction="Only after understanding the business, mapping workflows, defining the product architecture, and organizing information did interface design begin."
      >
        <p>Every screen was designed to solve a specific operational problem.</p>
        <p>
          Rather than decorating dashboards, I focused on helping users make faster decisions, reduce manual work, and move naturally from one workflow to the next.
        </p>
        <p>The interface became a visual representation of the product strategy rather than an isolated collection of screens.</p>

        <div 
          className="case-study-section__wide" 
          style={{ marginTop: "24px", cursor: "zoom-in" }}
          onClick={() => setLightboxImage({
            src: "/doctor_platform.png",
            caption: "Product Overview Mockup showcasing the full application workspace.",
          })}
        >
          <CaseStudyImage
            label="Product Overview Mockup"
            caption="High-fidelity interface preview showing the CA Operating System SaaS application dashboard and workspaces."
            wide
          />
        </div>
      </CaseStudySection>

      {/* 22 Dashboard Experience */}
      <CaseStudySection
        id="dashboard-section"
        badge=""
        title="A Dashboard Designed for Decisions"
        introduction="Enterprise dashboards often become overloaded with widgets, reports, and shortcuts."
      >
        <p>I wanted the dashboard to answer three simple questions immediately.</p>
        <ul>
          <li>What needs attention?</li>
          <li>What has changed?</li>
          <li>What should happen next?</li>
        </ul>
        <p>Rather than displaying everything, the interface prioritizes information based on urgency and business impact.</p>

        <div 
          className="case-study-section__wide" 
          style={{ marginTop: "24px", cursor: "zoom-in" }}
          onClick={() => setLightboxImage({
            src: "/hotel_platform.png",
            caption: "Annotated Dashboard Interface showcasing priorities, files, tasks, and alerts.",
          })}
        >
          <CaseStudyImage
            label="Annotated Dashboard Interface"
            caption="Full-width dashboard design showing prioritizations for compliance calendars, pending document actions, invoice updates, and team tasks."
            wide
          />
        </div>
      </CaseStudySection>

      {/* 23 Client Workspace */}
      <CaseStudySection
        id="workspace"
        badge=""
        title="Making the Client the Center of the Product"
        introduction="Instead of scattering client information across multiple modules, every interaction connects back to one central client profile."
      >
        <p>Documents. Payments. Services. Compliance. Communication. Activity history.</p>
        <p>Everything lives in one place.</p>
        <p>This dramatically reduces navigation while giving teams complete operational visibility.</p>

        <div 
          className="case-study-section__wide" 
          style={{ marginTop: "24px", cursor: "zoom-in" }}
          onClick={() => setLightboxImage({
            src: "/digital_banking.png",
            caption: "Client Workspace dashboard with central metadata tabs.",
          })}
        >
          <CaseStudyImage
            label="Client Workspace Workspace Interface"
            caption="Client Workspace dashboard with central metadata tabs for Documents, Compliance, and Billing history."
            wide
          />
        </div>
      </CaseStudySection>

      {/* 24 Workflow Automation */}
      <CaseStudySection
        id="automation-design"
        badge=""
        title="Designing Invisible Automation"
        introduction="Automation wasn't introduced to impress users. It was introduced to remove repetitive work."
      >
        <p>
          Recurring compliance schedules. Automatic document requests. Payment reminders. Task creation. Smart notifications.
        </p>
        <p>The product quietly handles routine operations so teams can focus on higher-value work.</p>

        <div className="case-study-section__wide" style={{ marginTop: "24px" }}>
          <CaseStudyImage
            label="Automation Settings & Flows"
            caption="Automation setup displaying service-driven rules and document collection flows."
          />
        </div>
      </CaseStudySection>

      {/* 25 Navigation System */}
      <CaseStudySection
        id="navigation-design"
        badge=""
        title="Navigation That Mirrors Daily Work"
        introduction="Navigation was designed around how Chartered Accountant firms actually work—not around software modules."
      >
        <p>Users can move naturally between related tasks without unnecessary context switching.</p>
        <p>This keeps workflows predictable, efficient, and easy to learn.</p>

        <div className="case-study-section__wide" style={{ marginTop: "24px" }}>
          <CaseStudyImage
            label="Sidebar Navigation Interface"
            caption="High-fidelity layout of the sidebar navigation system tailored around user priority workflows."
          />
        </div>
      </CaseStudySection>

      {/* 26 Design System */}
      <CaseStudySection
        id="system-design"
        badge=""
        title="Building a Consistent Enterprise Experience"
        introduction="As the platform expanded, consistency became just as important as functionality."
      >
        <p>
          A shared design system ensured that components, interactions, spacing, typography, colors, and patterns behaved consistently across every module.
        </p>
        <p>This reduced cognitive load, improved usability, and created a scalable foundation for future product growth.</p>

        <div className="case-study-section__wide" style={{ marginTop: "24px" }}>
          <CaseStudyImage
            label="Enterprise Design System Specs"
            caption="Central design system documentation highlighting UI components, grid spacing, input fields, state variants, and color palettes."
            wide
          />
        </div>
      </CaseStudySection>

      {/* 27 Key UX Decisions */}
      <CaseStudySection
        id="design-decisions"
        badge=""
        title="Design Decisions That Reduced Complexity"
        introduction="Core choices that defined the platform usability parameters."
      >
        <div className="case-study-insights__grid">
          {[
            { num: "Decision 01", text: "Prioritize actions over information." },
            { num: "Decision 02", text: "Reduce manual data entry." },
            { num: "Decision 03", text: "Create one source of truth." },
            { num: "Decision 04", text: "Design workflows instead of isolated features." },
            { num: "Decision 05", text: "Support scalability from day one." },
          ].map((d, idx) => (
            <div key={d.num} className="case-study-insights__card" style={idx === 4 ? { gridColumn: "span 2" } : undefined}>
              <span className="case-study-snapshot__card-title">{d.num}</span>
              <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px" }}>
                {d.text}
              </h3>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* ==========================================
         PHASE 6: Premium Experience & Final Polish
         ========================================== */}

      {/* 32 Expected Product Impact */}
      <CaseStudySection
        id="impact"
        badge="Outcomes"
        title="Expected Business Outcomes"
        introduction="Qualitative goals mapped to strategic product modifications."
      >
        <div className="case-study-insights__grid">
          {[
            { title: "Reduce manual coordination", desc: "Unifies documents and notifications in one shared workspace." },
            { title: "Improve workflow visibility", desc: "Visualizes upcoming compliance calendars across entire teams." },
            { title: "Centralize client information", desc: "Maintains a single workspace profile for billing, compliance, and files." },
            { title: "Reduce repetitive data entry", desc: "Stores data once and references it globally without copying." },
            { title: "Improve operational consistency", desc: "Uses consistent components and reusable workflow templates." },
            { title: "Support scalable firm growth", desc: "Ensures systems scale automatically as client databases double." },
          ].map((item) => (
            <div key={item.title} className="case-study-insights__card">
              <h3 className="case-study-challenge__card-title" style={{ color: "var(--primary)" }}>
                {item.title}
              </h3>
              <p className="case-study-snapshot__card-content" style={{ marginTop: "4px", color: "var(--foreground-muted)", fontSize: "0.9375rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 33 Design Constraints */}
      <CaseStudySection
        id="constraints"
        badge=""
        title="Design Constraints"
        introduction="Every product operates within constraints. This concept project required balancing operational complexity with interface simplicity."
      >
        <p>Important considerations included:</p>
        <ul>
          <li>Supporting firms of different sizes.</li>
          <li>Maintaining flexibility across multiple services.</li>
          <li>Reducing learning effort for new users.</li>
          <li>Keeping workflows scalable without overwhelming the interface.</li>
          <li>Designing for future expansion.</li>
        </ul>
      </CaseStudySection>

      {/* 34 Trade-offs */}
      <CaseStudySection
        id="tradeoffs"
        badge=""
        title="Important Design Trade-offs"
        introduction="Conscious design trade-offs made to prioritize product integrity."
      >
        <div className="case-study-insights__grid">
          {[
            { num: "Trade-off 01", text: "Simplified navigation over exposing every feature." },
            { num: "Trade-off 02", text: "Automation over manual flexibility." },
            { num: "Trade-off 03", text: "Progressive disclosure instead of information overload." },
            { num: "Trade-off 04", text: "Consistency over module-specific customization." },
          ].map((t) => (
            <div key={t.num} className="case-study-insights__card">
              <span className="case-study-snapshot__card-title">{t.num}</span>
              <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px" }}>
                {t.text}
              </h3>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 35 Future Vision */}
      <CaseStudySection
        id="future"
        badge=""
        title="Future Opportunities"
        introduction="If this product continued beyond the concept stage, future exploration could include:"
      >
        <ul>
          <li>AI-powered compliance assistant.</li>
          <li>Predictive workload planning.</li>
          <li>Document intelligence.</li>
          <li>Workflow recommendations.</li>
          <li>Smart notifications.</li>
          <li>Client self-service portal.</li>
          <li>Business analytics.</li>
          <li>Multi-office collaboration.</li>
        </ul>
      </CaseStudySection>

      {/* 36 Working With Engineering */}
      <CaseStudySection
        id="engineering"
        badge=""
        title="Designing for Implementation"
        introduction="Throughout the project, product decisions considered implementation feasibility."
      >
        <p>Our operational strategies focused on:</p>
        <ul>
          <li>Clear workflows.</li>
          <li>Consistent interaction patterns.</li>
          <li>Reusable components.</li>
          <li>Scalable information architecture.</li>
          <li>Design system thinking.</li>
        </ul>
        <p>{"The objective wasn't only designing beautiful interfaces. It was designing something development teams could realistically build and scale."}</p>
      </CaseStudySection>

      {/* 37 Accessibility Considerations */}
      <CaseStudySection
        id="accessibility"
        badge=""
        title="Designing for Everyone"
        introduction="Core options considered to support inclusive interactions."
      >
        <div className="case-study-insights__grid">
          {[
            "Clear visual hierarchy",
            "Readable typography",
            "Accessible color contrast",
            "Keyboard accessibility",
            "Meaningful component states",
            "Consistent interaction patterns",
          ].map((a, idx) => (
            <div key={idx} className="case-study-insights__card">
              <span className="case-study-snapshot__card-title" style={{ color: "var(--primary)" }}>Access Spec 0{idx + 1}</span>
              <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px" }}>
                {a}
              </h3>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 38 What I Would Improve */}
      <CaseStudySection
        id="improvements"
        badge=""
        title="If I Continued This Project"
        introduction="Given additional time, I would validate assumptions through user research with Chartered Accountant firms, conduct usability testing on critical workflows, refine automation behaviors based on real usage, and measure operational impact using qualitative and quantitative feedback."
      >
        <p>
          This project established a strong strategic foundation, but real-world validation would shape the next iteration.
        </p>
      </CaseStudySection>

      {/* 39 Key Learnings */}
      <CaseStudySection
        id="learnings"
        badge=""
        title="Key Learnings"
        introduction="Valuable insights that carry forward to future design challenges."
      >
        <div className="case-study-insights__grid">
          {[
            "Products are systems.",
            "Research creates better interfaces.",
            "Architecture reduces complexity.",
            "Automation should remove effort.",
            "Business understanding drives product decisions.",
            "Consistency scales products.",
          ].map((l, idx) => (
            <div key={idx} className="case-study-insights__card">
              <span className="case-study-snapshot__card-title">Learning 0{idx + 1}</span>
              <h3 className="case-study-challenge__card-title" style={{ marginTop: "8px" }}>
                {l}
              </h3>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* 40 Closing Reflection */}
      <CaseStudySection
        id="reflection"
        badge=""
        title="Final Reflection"
        introduction="Designing this project reinforced one important belief."
      >
        <p>{"Great products aren't created by adding more features."}</p>
        <p>
          They are created by deeply understanding how people work, identifying unnecessary complexity, and designing systems that make everyday tasks feel effortless.
        </p>
        <p>
          This project strengthened my ability to connect business goals, operational workflows, user experience, and scalable product thinking into one cohesive solution.
        </p>

        <div className="case-study-section__callout" style={{ marginTop: "40px" }}>
          <p className="case-study-section__callout-text">
            {"\"The best product experiences don't ask users to adapt to software. They adapt software to the way people naturally work.\""}
          </p>
        </div>
      </CaseStudySection>

      {/* Next Case Study CTA */}
      <section className="case-study-section" style={{ paddingBlock: "120px 80px", background: "var(--primary-light)", borderTop: "1px solid var(--border)" }}>
        <Container>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }} className="case-study-next__card">
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>
              Continue Exploring My Work
            </span>
            <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--foreground)", margin: "0 0 20px 0", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              See how the same product thinking was applied to another real-world design challenge.
            </h3>
            <p style={{ fontSize: "1.125rem", color: "var(--foreground-muted)", marginBottom: "40px", maxWidth: "600px", lineHeight: 1.6 }}>
              Mirari Surface is a connected smart home experience spanning embedded touch panel interfaces and companion mobile applications.
            </p>
            <Link href="/work/mirari-surface">
              <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                View Next Case Study
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Image Lightbox Modal Overlay (Premium Feature) */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            cursor: "zoom-out",
          }}
        >
          <img 
            src={lightboxImage.src} 
            alt={lightboxImage.caption} 
            style={{ 
              maxWidth: "90%", 
              maxHeight: "80vh", 
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }} 
          />
          <p style={{ color: "#a3a3a3", marginTop: "20px", fontSize: "0.9375rem", textAlign: "center" }}>
            {lightboxImage.caption}
          </p>
          <button 
            onClick={() => setLightboxImage(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}
