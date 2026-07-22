import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";
import {
  CaseStudyHero,
  CaseStudyProgress,
  CaseStudySection,
  CaseStudyImage,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Gynger Loyalty Platform — Scaling Enterprise Loyalty",
  description: "Case study on evolving and scaling the Gynger Enterprise loyalty SaaS platform serving 50+ brands and 5M+ channel partners.",
  alternates: {
    canonical: "/work/gynger-loyalty",
  },
  openGraph: {
    title: "Gynger Loyalty Platform — Scaling Enterprise Loyalty",
    description: "Case study on evolving and scaling the Gynger Enterprise loyalty SaaS platform serving 50+ brands and 5M+ channel partners.",
    url: "https://sujitkumar.design/work/gynger-loyalty",
    siteName: "Sujit Kumar Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/digital_banking.png",
        width: 1200,
        height: 630,
        alt: "Gynger Loyalty Platform - Enterprise loyalty program systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gynger Loyalty Platform — Scaling Enterprise Loyalty",
    description: "Case study on evolving and scaling the Gynger Enterprise loyalty SaaS platform serving 50+ brands and 5M+ channel partners.",
    images: ["/digital_banking.png"],
  },
};

const sections = [
  { id: "scale", label: "The Product at Scale" },
  { id: "complexity", label: "Growth Created Complexity" },
  { id: "role", label: "My Role & Ownership" },
  { id: "ecosystem", label: "Understanding the Business Ecosystem" },
  { id: "turning-point", label: "The Turning Point" },
  { id: "design-scale", label: "Designing for Scale" },
  { id: "white-label", label: "Building a White-label System" },
  { id: "dashboard", label: "Enterprise Dashboard" },
  { id: "mobile", label: "Channel Partner Mobile Experience" },
  { id: "consistency", label: "Design System & Collaboration" },
  { id: "impact", label: "Business Impact" },
];

export default function GyngerLoyaltyCaseStudy() {
  return (
    <>
      <CaseStudyProgress sections={sections} />

      {/* 01 Hero */}
      <CaseStudyHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/#work" },
          { label: "Scaling a White-Label Loyalty Platform" },
        ]}
        category="Enterprise SaaS • White-label Platform • Product Design"
        title="Scaling a White-Label Loyalty Platform Across 50+ Enterprise Brands"
        subtitle="How I helped evolve an enterprise loyalty platform used by 50+ brands and more than 5 million channel partners by improving scalability, simplifying operations and building reusable product systems."
        description="When I joined the project, the platform was already trusted by enterprise brands to power channel partner loyalty programs across multiple industries.\n\nAs the business expanded, new clients, increasing customization requests and growing operational complexity made it harder to scale efficiently.\n\nOver the next two years, I worked as the Product Designer responsible for evolving the product experience across both the enterprise dashboard and the channel partner mobile application. My focus was not to redesign the platform from scratch, but to help an already successful product scale through better systems, reusable patterns and thoughtful product decisions."
        metadata={[
          { label: "Role", values: ["Product Designer"] },
          { label: "Duration", values: ["2 Years"] },
          {
            label: "Platforms",
            values: ["Enterprise Dashboard", "Channel Partner Mobile App"],
          },
          {
            label: "Scale",
            values: ["50+ Enterprise Brands", "5M+ Channel Partners"],
          },
          {
            label: "Focus",
            values: ["White-label Systems", "Enterprise Workflows", "Scalable UX"],
          },
          {
            label: "Team",
            values: ["Product Managers", "Engineers", "Operations", "Sales"],
          },
        ]}
        primaryTargetId="scale"
        secondaryTargetId="impact"
        primaryCtaLabel="Explore the Case Study"
        secondaryCtaLabel="View Final Outcomes"
        imageLabel="Enterprise Dashboard • Mobile Application • White-label Brand Variations • Loyalty Journey"
        imageCaption="A scalable enterprise loyalty ecosystem serving global brands and millions of channel partners."
      />

      {/* 02 The Product at Scale */}
      <CaseStudySection
        id="scale"
        badge=""
        title="The Product at Scale"
        introduction="Before solving the challenges of scale, it was important to understand the ecosystem behind the product."
      >
        <p>
          The platform was designed to help enterprise brands build stronger relationships with their channel partners through loyalty programs, rewards and engagement experiences.
        </p>
        <p>
          Instead of serving a single audience, the product supported an entire business ecosystem that connected brands with retailers, dealers, distributors, painters and other channel partners.
        </p>
        <p>
          As the platform expanded across industries and regions, it evolved into a white-label enterprise solution capable of supporting multiple brands while adapting to different business requirements.
        </p>
        <p>
          At its core, the ecosystem consisted of two connected products working together to deliver one unified loyalty experience.
        </p>

        <div className="case-study-ecosystem__grid">
          {/* Left card */}
          <div style={{ padding: "28px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "12px" }}>
              Channel Partner Mobile App
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
              Used daily by retailers, dealers, painters and other channel partners to participate in loyalty programs, scan products, earn rewards, redeem points and track their progress.
            </p>
          </div>
          {/* Right card */}
          <div style={{ padding: "28px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "12px" }}>
              Enterprise Dashboard
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
              Used by enterprise teams to configure loyalty programs, manage campaigns, monitor performance, create reward structures, segment users and oversee day-to-day platform operations.
            </p>
          </div>
        </div>

        {/* Ecosystem Diagram */}
        <div className="case-study-ecosystem__diagram" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBlock: "48px 32px", padding: "32px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          <div style={{ fontWeight: 700, color: "#111111", fontSize: "1rem" }}>Enterprise Brand</div>
          <div style={{ color: "#fc8019", fontWeight: 700 }}>↓</div>
          <div style={{ fontWeight: 700, color: "#111111", fontSize: "1rem" }}>Enterprise Dashboard</div>
          <div style={{ color: "#fc8019", fontWeight: 700 }}>↓</div>
          <div style={{ fontWeight: 800, color: "#fc8019", fontSize: "1.0625rem", padding: "8px 24px", border: "2px solid #fc8019", borderRadius: "30px" }}>Loyalty Platform</div>
          <div style={{ color: "#fc8019", fontWeight: 700 }}>↓</div>
          <div style={{ fontWeight: 700, color: "#111111", fontSize: "1rem" }}>Channel Partner Mobile App</div>
          <div style={{ color: "#fc8019", fontWeight: 700 }}>↓</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", fontWeight: 600, color: "#4b5563" }}>
            {["Retailers", "Dealers", "Painters", "Distributors"].map(role => (
              <span key={role} style={{ padding: "6px 12px", background: "#ffffff", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "8px", fontSize: "0.875rem" }}>
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            The real challenge wasn't designing two separate products.
            <br /><br />
            It was creating one connected ecosystem that worked seamlessly for every stakeholder.
          </p>
        </div>

        <CaseStudyImage
          label="Product Ecosystem Overview"
          caption="The platform connected enterprise teams and millions of channel partners through one scalable loyalty ecosystem."
          wide
        />
      </CaseStudySection>

      {/* 03 Growth Created Complexity */}
      <CaseStudySection
        id="complexity"
        badge=""
        title="Growth Created Complexity"
        introduction="The platform wasn't struggling because it lacked users—it was struggling because it was growing faster than its existing systems."
      >
        <p>
          By the time I joined the project, the platform had already established itself as a trusted enterprise loyalty solution.
        </p>
        <p>
          As more enterprise brands adopted the platform, the business continued to grow across industries, bringing new opportunities as well as new operational challenges.
        </p>
        <p>
          Every new client introduced unique branding requirements, workflow variations and configuration requests. At the same time, new features increased product complexity, while expanding operations made consistency and speed increasingly difficult to maintain.
        </p>
        <p>
          The challenge was not to redesign a successful product.
        </p>
        <p>
          The challenge was to help an existing platform evolve without slowing down the business.
        </p>

        <div className="case-study-complexity__grid">
          {/* Card 01 */}
          <div className="case-study-complexity__card">
            <h4 className="case-study-complexity__card-title">Growing Client Base</h4>
            <p className="case-study-complexity__card-text">
              More enterprise brands meant more implementation requests and increasing operational complexity.
            </p>
          </div>
          {/* Card 02 */}
          <div className="case-study-complexity__card">
            <h4 className="case-study-complexity__card-title">White-label Expansion</h4>
            <p className="case-study-complexity__card-text">
              Every client required branding adaptations and business-specific configurations.
            </p>
          </div>
          {/* Card 03 */}
          <div className="case-study-complexity__card">
            <h4 className="case-study-complexity__card-title">Product Complexity</h4>
            <p className="case-study-complexity__card-text">
              As features grew over time, navigation and workflows became harder to maintain.
            </p>
          </div>
          {/* Card 04 */}
          <div className="case-study-complexity__card">
            <h4 className="case-study-complexity__card-title">Design Delivery</h4>
            <p className="case-study-complexity__card-text">
              Repeated customization increased design effort and slowed implementation.
            </p>
          </div>
          {/* Card 05 */}
          <div className="case-study-complexity__card">
            <h4 className="case-study-complexity__card-title">Consistency</h4>
            <p className="case-study-complexity__card-text">
              Different modules had evolved independently, creating inconsistencies across the product experience.
            </p>
          </div>
          {/* Card 06 */}
          <div className="case-study-complexity__card">
            <h4 className="case-study-complexity__card-title">Scalability</h4>
            <p className="case-study-complexity__card-text">
              The existing design approach could no longer support the pace of business growth efficiently.
            </p>
          </div>
        </div>

        {/* Visual Progression */}
        <div className="case-study-progression__diagram" style={{ marginBlock: "48px 32px", padding: "32px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            {["Business Growth", "More Clients", "More Customization", "More Complexity", "Need for a Scalable System"].map((step, idx) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: "160px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fc8019", letterSpacing: "0.12em", textTransform: "uppercase" }}>Step 0{idx + 1}</span>
                  <span style={{ fontWeight: 700, color: "#111111", fontSize: "0.9375rem" }}>{step}</span>
                </div>
                {idx < 4 && <div style={{ color: "#fc8019", fontWeight: 700, fontSize: "1.25rem" }}>→</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            The problem wasn't product adoption.
            <br /><br />
            The problem was making continued growth sustainable.
          </p>
        </div>

        <CaseStudyImage
          label="Growth vs Complexity"
          caption="Business growth introduced operational complexity that demanded a more scalable product approach."
          wide
        />
      </CaseStudySection>

      {/* 04 My Role & Ownership */}
      <CaseStudySection
        id="role"
        badge=""
        title="My Role & Ownership"
        introduction="As the platform evolved, my responsibility extended beyond designing interfaces—I helped improve how the product scaled across multiple brands, teams and business needs."
      >
        <p>
          I worked as the Product Designer across the loyalty ecosystem, partnering closely with Product Managers, Engineers, Operations teams and Sales stakeholders throughout the product lifecycle.
        </p>
        <p>
          Rather than focusing on isolated features, my work centered on improving the overall product experience across both the enterprise dashboard and the channel partner mobile application.
        </p>
        <p>
          As new enterprise clients joined the platform, I contributed to simplifying complex workflows, improving usability, supporting white-label implementations and building reusable design foundations that could scale with the business.
        </p>
        <p>
          Alongside product development, I also collaborated with the Sales team by creating tailored product experiences that helped enterprise clients visualize how the platform could support their specific business requirements before implementation.
        </p>

        <div className="case-study-role__grid">
          {/* Card 01 */}
          <div className="case-study-role__card">
            <h4 className="case-study-role__card-title">Product Discovery</h4>
            <p className="case-study-role__card-text">
              Understanding business goals, stakeholder needs and product opportunities.
            </p>
          </div>
          {/* Card 02 */}
          <div className="case-study-role__card">
            <h4 className="case-study-role__card-title">UX Research</h4>
            <p className="case-study-role__card-text">
              Identifying workflow improvements and usability challenges across the ecosystem.
            </p>
          </div>
          {/* Card 03 */}
          <div className="case-study-role__card">
            <h4 className="case-study-role__card-title">Information Architecture</h4>
            <p className="case-study-role__card-text">
              Organising complex enterprise workflows into clear product structures.
            </p>
          </div>
          {/* Card 04 */}
          <div className="case-study-role__card">
            <h4 className="case-study-role__card-title">Interaction Design</h4>
            <p className="case-study-role__card-text">
              Designing efficient experiences for both mobile and dashboard users.
            </p>
          </div>
          {/* Card 05 */}
          <div className="case-study-role__card">
            <h4 className="case-study-role__card-title">White-label Design</h4>
            <p className="case-study-role__card-text">
              Creating scalable experiences adaptable across multiple enterprise brands.
            </p>
          </div>
          {/* Card 06 */}
          <div className="case-study-role__card">
            <h4 className="case-study-role__card-title">Design Systems</h4>
            <p className="case-study-role__card-text">
              Building reusable patterns that improved consistency and accelerated delivery.
            </p>
          </div>
          {/* Card 07 */}
          <div className="case-study-role__card">
            <h4 className="case-study-role__card-title">Developer Handoff</h4>
            <p className="case-study-role__card-text">
              Working closely with engineering to ensure practical implementation.
            </p>
          </div>
          {/* Card 08 */}
          <div className="case-study-role__card">
            <h4 className="case-study-role__card-title">Cross-functional Collaboration</h4>
            <p className="case-study-role__card-text">
              Partnering with Product, Engineering, Operations and Sales throughout the project lifecycle.
            </p>
          </div>
        </div>

        {/* Collaboration Strip */}
        <div className="case-study-collaboration__strip" style={{ marginBlock: "32px", padding: "24px 32px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", fontWeight: 700, color: "#111111" }}>
            {["Product", "Design", "Engineering", "Operations", "Sales"].map((dept, idx) => (
              <div key={dept} style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, justifyContent: "center", minWidth: "120px" }}>
                <span style={{ fontSize: "1rem" }}>{dept}</span>
                {idx < 4 && <span style={{ color: "#fc8019", fontSize: "1.25rem" }}>↔</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            "My role wasn't limited to designing screens.
            <br /><br />
            I helped transform recurring design work into scalable product systems that supported both business growth and operational efficiency."
          </p>
        </div>

        <CaseStudyImage
          label="Cross-functional Product Collaboration"
          caption="Design served as the bridge between business goals, engineering feasibility and user experience."
          wide
        />
      </CaseStudySection>

      {/* 05 Understanding the Business Ecosystem */}
      <CaseStudySection
        id="ecosystem"
        badge=""
        title="Understanding the Business Ecosystem"
        introduction="This wasn't a single application—it was a connected ecosystem where every stakeholder played a different role."
      >
        <p>
          The platform connected enterprise brands with thousands of retailers, dealers, distributors, painters and other channel partners through a shared loyalty ecosystem.
        </p>
        <p>
          While channel partners interacted with the mobile application to scan products, earn rewards and track their progress, enterprise teams relied on the dashboard to configure loyalty programs, launch campaigns, manage users and monitor business performance.
        </p>
        <p>
          Although these experiences served different audiences, they depended on the same product foundation. Decisions made in one part of the ecosystem directly influenced workflows in the other.
        </p>
        <p>
          Designing for this environment required thinking beyond individual screens and understanding how every stakeholder interacted with the broader system.
        </p>

        <div className="case-study-stakeholder__grid">
          {/* Card 01 */}
          <div className="case-study-stakeholder__card">
            <h4 className="case-study-stakeholder__card-title">Enterprise Brands</h4>
            <p className="case-study-stakeholder__card-text">
              Configure loyalty programs and business rules.
            </p>
          </div>
          {/* Card 02 */}
          <div className="case-study-stakeholder__card">
            <h4 className="case-study-stakeholder__card-title">Operations Teams</h4>
            <p className="case-study-stakeholder__card-text">
              Manage day-to-day program execution.
            </p>
          </div>
          {/* Card 03 */}
          <div className="case-study-stakeholder__card">
            <h4 className="case-study-stakeholder__card-title">Sales Teams</h4>
            <p className="case-study-stakeholder__card-text">
              Support enterprise onboarding and business growth.
            </p>
          </div>
          {/* Card 04 */}
          <div className="case-study-stakeholder__card">
            <h4 className="case-study-stakeholder__card-title">Channel Partners</h4>
            <p className="case-study-stakeholder__card-text">
              Earn rewards through participation and product verification.
            </p>
          </div>
          {/* Card 05 */}
          <div className="case-study-stakeholder__card">
            <h4 className="case-study-stakeholder__card-title">Product Team</h4>
            <p className="case-study-stakeholder__card-text">
              Define product direction and feature priorities.
            </p>
          </div>
          {/* Card 06 */}
          <div className="case-study-stakeholder__card">
            <h4 className="case-study-stakeholder__card-title">Engineering</h4>
            <p className="case-study-stakeholder__card-text">
              Transform product decisions into scalable implementations.
            </p>
          </div>
        </div>

        {/* Centered System Diagram */}
        <div className="case-study-ecosystem-centered__diagram" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", marginBlock: "48px 32px", padding: "32px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          {["Enterprise Brand", "Enterprise Dashboard", "Loyalty Platform", "Channel Partner Mobile App", "Retailers", "Dealers", "Painters", "Distributors"].map((step, idx) => (
            <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <div style={{
                fontWeight: step === "Loyalty Platform" ? 800 : 700,
                color: step === "Loyalty Platform" ? "#fc8019" : "#111111",
                fontSize: "0.9375rem",
                padding: step === "Loyalty Platform" ? "8px 24px" : "6px 16px",
                border: step === "Loyalty Platform" ? "2px solid #fc8019" : "none",
                background: step === "Loyalty Platform" ? "rgba(252, 128, 25, 0.04)" : "none",
                borderRadius: step === "Loyalty Platform" ? "30px" : "none"
              }}>
                {step}
              </div>
              {idx < 7 && <div style={{ color: "#fc8019", fontWeight: 700, fontSize: "1.25rem" }}>↓</div>}
            </div>
          ))}
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            The challenge wasn't optimizing one interface.
            <br /><br />
            It was creating a connected experience that worked across an entire business ecosystem.
          </p>
        </div>

        <CaseStudyImage
          label="Business Ecosystem Overview"
          caption="A connected loyalty ecosystem serving enterprise teams and millions of channel partners."
          wide
        />
      </CaseStudySection>

      {/* 06 The Turning Point */}
      <CaseStudySection
        id="turning-point"
        badge=""
        title="The Turning Point"
        introduction="The more enterprise implementations we completed, the clearer one pattern became. Every client looked different. But the underlying product problems were remarkably similar."
      >
        <p>
          As new enterprise brands adopted the platform, every implementation introduced new branding requests, workflow adjustments and business-specific requirements.
        </p>
        <p>
          Initially, these were approached as individual design problems. Each new client required fresh thinking, new layouts and repeated design effort.
        </p>
        <p>
          However, after working across multiple implementations, a consistent pattern started to emerge.
        </p>
        <p>
          Although brands differed in identity and business rules, the majority of user journeys, administrative workflows and operational requirements followed the same fundamental structure.
        </p>
        <p>
          That observation shifted the design approach.
        </p>
        <p>
          Instead of designing for individual clients, the focus moved toward designing reusable product foundations that could adapt across implementations while preserving flexibility where it genuinely mattered.
        </p>
        <p>
          Rather than solving the same problems repeatedly, the objective became creating solutions that could scale with every future client.
        </p>

        {/* Pattern Comparison */}
        <div className="case-study-ecosystem__grid">
          {/* Before */}
          <div style={{ padding: "28px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "16px" }}>Before</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "16px", margin: 0, color: "#4b5563", fontSize: "0.9375rem" }}>
              <li>Every client treated as a unique design project</li>
              <li>Repeated design effort</li>
              <li>Inconsistent experiences</li>
              <li>Slower implementation</li>
              <li>Growing maintenance effort</li>
            </ul>
          </div>
          {/* After */}
          <div style={{ padding: "28px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "16px" }}>After</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "16px", margin: 0, color: "#4b5563", fontSize: "0.9375rem" }}>
              <li>Shared product foundations</li>
              <li>Reusable UX patterns</li>
              <li>Consistent experiences</li>
              <li>Faster implementation</li>
              <li>Easier long-term scalability</li>
            </ul>
          </div>
        </div>

        {/* Process Visual */}
        <div className="case-study-progression__diagram" style={{ marginBlock: "48px 32px", padding: "32px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            {["Repeated Client Requests", "Pattern Recognition", "Reusable UX Patterns", "Scalable Product Foundations", "Faster Enterprise Delivery"].map((step, idx) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: "160px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fc8019", letterSpacing: "0.12em", textTransform: "uppercase" }}>Stage 0{idx + 1}</span>
                  <span style={{ fontWeight: 700, color: "#111111", fontSize: "0.9375rem" }}>{step}</span>
                </div>
                {idx < 4 && <div style={{ color: "#fc8019", fontWeight: 700, fontSize: "1.25rem" }}>→</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            The biggest design challenge wasn't creating new interfaces.
            <br />
            It was recognizing which problems should only be solved once.
          </p>
        </div>

        <div className="case-study-section__callout" style={{ marginTop: "24px", background: "#FFF9F4" }}>
          <p className="case-study-section__callout-text" style={{ fontStyle: "normal" }}>
            "The project changed the way I think about Product Design.
            <br /><br />
            I stopped designing for individual implementations and started designing for repeatable systems."
          </p>
        </div>

        <CaseStudyImage
          label="Pattern Recognition"
          caption="Recognizing recurring patterns transformed the design approach from feature delivery to scalable product thinking."
          wide
        />
      </CaseStudySection>

      {/* 07 Designing for Scale */}
      <CaseStudySection
        id="design-scale"
        badge=""
        title="Designing for Scale"
        introduction="Once recurring patterns became visible, the design approach shifted from solving individual requests to building solutions that could support future growth."
      >
        <p>
          Instead of approaching every enterprise implementation as a separate design project, I established a set of product principles that guided future decisions across the platform.
        </p>
        <p>
          Every design decision was evaluated against one central question:
        </p>
        <p style={{ fontStyle: "italic", fontWeight: 600, color: "#111111" }}>
          Would this solve today's problem while making tomorrow's implementation easier?
        </p>
        <p>
          This shift reduced repetitive design work, improved consistency across products and created a stronger foundation for future enterprise clients.
        </p>

        <div className="case-study-design-scale__grid">
          {/* Card 01 */}
          <div className="case-study-design-scale__card">
            <h4 className="case-study-design-scale__card-title">Consistency Before Customization</h4>
            <p className="case-study-design-scale__card-text">
              Build shared experiences before introducing client-specific variations.
            </p>
          </div>
          {/* Card 02 */}
          <div className="case-study-design-scale__card">
            <h4 className="case-study-design-scale__card-title">Reuse Before Redesign</h4>
            <p className="case-study-design-scale__card-text">
              Leverage proven interaction patterns wherever possible.
            </p>
          </div>
          {/* Card 03 */}
          <div className="case-study-design-scale__card">
            <h4 className="case-study-design-scale__card-title">Scalable Workflows</h4>
            <p className="case-study-design-scale__card-text">
              Design flows that could support both current and future enterprise requirements.
            </p>
          </div>
          {/* Card 04 */}
          <div className="case-study-design-scale__card">
            <h4 className="case-study-design-scale__card-title">Flexibility with Structure</h4>
            <p className="case-study-design-scale__card-text">
              Allow business customization without compromising usability.
            </p>
          </div>
          {/* Card 05 */}
          <div className="case-study-design-scale__card">
            <h4 className="case-study-design-scale__card-title">Reduce Cognitive Load</h4>
            <p className="case-study-design-scale__card-text">
              Simplify complex enterprise workflows through clear information hierarchy.
            </p>
          </div>
          {/* Card 06 */}
          <div className="case-study-design-scale__card">
            <h4 className="case-study-design-scale__card-title">Business Alignment</h4>
            <p className="case-study-design-scale__card-text">
              Balance user experience with operational efficiency and implementation speed.
            </p>
          </div>
        </div>

        {/* Decision Framework */}
        <div className="case-study-progression__diagram" style={{ marginBlock: "48px 32px", padding: "32px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            {["Business Need", "User Problem", "Design Principle", "Scalable Solution", "Future Reusability"].map((step, idx) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: "160px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fc8019", letterSpacing: "0.12em", textTransform: "uppercase" }}>Stage 0{idx + 1}</span>
                  <span style={{ fontWeight: 700, color: "#111111", fontSize: "0.9375rem" }}>{step}</span>
                </div>
                {idx < 4 && <div style={{ color: "#fc8019", fontWeight: 700, fontSize: "1.25rem" }}>→</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            Scalability wasn't achieved by designing more screens.
            <br /><br />
            It was achieved by making every design decision reusable.
          </p>
        </div>

        <CaseStudyImage
          label="Design Strategy Framework"
          caption="A principle-driven approach helped the platform scale across enterprise implementations."
          wide
        />
      </CaseStudySection>

      {/* 08 Building a White-label System */}
      <CaseStudySection
        id="white-label"
        badge=""
        title="Building a White-label System"
        introduction="As more enterprise clients adopted the platform, repeating the same design work became unsustainable. Instead of creating new experiences for every client, the focus shifted toward configurable product foundations that could adapt without redesigning the entire platform."
      >
        {/* Comparison */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBlock: "32px", padding: "32px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "center" }}>
            <div>
              <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "16px" }}>Custom Design</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "16px", margin: 0, color: "#4b5563", fontSize: "0.9375rem" }}>
                <li>Client-specific screens</li>
                <li>Repeated design effort</li>
                <li>Slower delivery</li>
              </ul>
            </div>
            <div style={{ borderLeft: "1px solid rgba(17, 17, 17, 0.06)", paddingLeft: "32px" }}>
              <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fc8019", marginBottom: "16px" }}>Configurable System</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "16px", margin: 0, color: "#4b5563", fontSize: "0.9375rem" }}>
                <li>Shared components</li>
                <li>Configurable branding</li>
                <li>Faster implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="case-study-white-label__grid">
          <div className="case-study-white-label__card">
            <h4 className="case-study-white-label__card-title">Brand Configuration</h4>
            <p className="case-study-white-label__card-text">
              Adapting logo configurations, typography, and visual themes dynamically across client instances.
            </p>
          </div>
          <div className="case-study-white-label__card">
            <h4 className="case-study-white-label__card-title">Reusable Components</h4>
            <p className="case-study-white-label__card-text">
              Sharing primary navigation modules, input layouts, tables, and buttons across programs.
            </p>
          </div>
          <div className="case-study-white-label__card">
            <h4 className="case-study-white-label__card-title">Flexible Business Rules</h4>
            <p className="case-study-white-label__card-text">
              Supporting customizable campaign multipliers, segment tiers, and redemption criteria.
            </p>
          </div>
        </div>

        <CaseStudyImage
          label="White-Label UI System Mockups"
          caption="Highlight: Logo change, Theme change, Reward configuration, Navigation reuse."
          wide
        />

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text">
            Scalability came from designing flexible foundations—not separate products.
          </p>
        </div>
      </CaseStudySection>

      {/* 09 Enterprise Dashboard */}
      <CaseStudySection
        id="dashboard"
        badge=""
        title="Enterprise Dashboard"
        introduction="Show how complex administrative workflows were simplified by focusing on core operations."
      >
        <CaseStudyImage
          label="Enterprise Dashboard Mockup"
          wide
        />

        {/* Five Numbered Annotations */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBlock: "32px 40px" }}>
          {[
            { title: "Navigation hierarchy", desc: "Consolidated nested menus into a persistent sidebar navigation to improve access speed." },
            { title: "Campaign management", desc: "Created a central dashboard view to launch, schedule, and edit partner campaigns easily." },
            { title: "Reward management", desc: "Simplified complex conditional point structures into intuitive form templates." },
            { title: "Analytics", desc: "Surfaced critical transaction metrics, conversion speeds, and registration trends upfront." },
            { title: "User management", desc: "Provided support teams with inline verification tools to quickly manage partner claims." }
          ].map((item, idx) => (
            <div key={item.title} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fc8019", minWidth: "24px" }}>0{idx + 1}</span>
              <div>
                <h5 style={{ fontSize: "1rem", fontWeight: 700, color: "#111111", margin: "0 0 4px 0" }}>{item.title}</h5>
                <p style={{ fontSize: "0.875rem", color: "#4b5563", margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Three Decision Cards */}
        <div className="case-study-dashboard__grid">
          <div className="case-study-dashboard__card">
            <h4 className="case-study-dashboard__card-title">Reduced navigation complexity</h4>
          </div>
          <div className="case-study-dashboard__card">
            <h4 className="case-study-dashboard__card-title">Improved discoverability</h4>
          </div>
          <div className="case-study-dashboard__card">
            <h4 className="case-study-dashboard__card-title">Prioritized high-frequency actions</h4>
          </div>
        </div>

        {/* Before / After */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBlock: "48px 32px" }}>
          <div>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "16px" }}>Old Dashboard</h4>
            <CaseStudyImage label="Old Dashboard Layout Mockup" wide />
          </div>
          <div>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fc8019", marginBottom: "16px" }}>New Dashboard (Optimized Layout)</h4>
            <CaseStudyImage label="New Dashboard Annotated Layout Mockup" wide />
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            The dashboard became easier to operate without sacrificing enterprise capabilities.
          </p>
        </div>
      </CaseStudySection>

      {/* 10 Channel Partner Mobile Experience */}
      <CaseStudySection
        id="mobile"
        badge=""
        title="Channel Partner Mobile Experience"
        introduction="Show how the mobile experience supported daily engagement for channel partners in different environments."
      >
        <div style={{ display: "flex", justifyContent: "center", marginBlock: "32px" }}>
          <CaseStudyImage label="Channel Partner Mobile App Screens" aspectRatio="auto" />
        </div>

        {/* Journey Flow */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", marginBlock: "32px 40px", padding: "24px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          {["Login", "Scan Product", "Earn Points", "Track Rewards", "Redeem"].map((step, idx) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: "120px", justifyContent: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fc8019", letterSpacing: "0.12em", textTransform: "uppercase" }}>0{idx + 1}</span>
                <span style={{ fontWeight: 700, color: "#111111", fontSize: "0.9375rem" }}>{step}</span>
              </div>
              {idx < 4 && <span style={{ color: "#fc8019", fontWeight: 700, fontSize: "1.25rem" }}>→</span>}
            </div>
          ))}
        </div>

        {/* Annotations */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBlock: "32px" }}>
          {[
            { title: "QR Scan", desc: "Instant scanning capabilities built to process product codes on-site in low-network conditions." },
            { title: "Reward Balance", desc: "Prominent point balances and redemption eligibility displayed directly on dashboard." },
            { title: "Campaigns", desc: "Contextual promotion banners incentivizing partner participation during peak seasons." },
            { title: "Notifications", desc: "Direct transaction confirmations and milestone updates keeping users informed." },
            { title: "Redemption", desc: "Direct link to local partner bank transfers, gift vouchers, and physical rewards catalogue." }
          ].map((item) => (
            <div key={item.title} style={{ padding: "16px 24px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "12px" }}>
              <strong style={{ color: "#111111" }}>{item.title}:</strong> <span style={{ color: "#4b5563", fontSize: "0.9375rem" }}>{item.desc}</span>
            </div>
          ))}
        </div>

        {/* Key Improvements */}
        <div className="case-study-mobile-improvements__grid">
          <div className="case-study-mobile-improvements__card">
            <h4 className="case-study-mobile-improvements__card-title">Reduced friction</h4>
          </div>
          <div className="case-study-mobile-improvements__card">
            <h4 className="case-study-mobile-improvements__card-title">Clear reward visibility</h4>
          </div>
          <div className="case-study-mobile-improvements__card">
            <h4 className="case-study-mobile-improvements__card-title">Faster redemption flow</h4>
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            The mobile experience encouraged repeat engagement through simple and intuitive interactions.
          </p>
        </div>
      </CaseStudySection>

      {/* 11 Design System & Collaboration */}
      <CaseStudySection
        id="consistency"
        badge=""
        title="Design System & Collaboration"
        introduction="Demonstrate how reusable design assets improved collaboration and delivery across product squads."
      >
        {/* Component Showcase List */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBlock: "32px" }}>
          {["Buttons", "Cards", "Tables", "Forms", "Navigation", "Status", "Charts"].map((item) => (
            <span key={item} style={{ padding: "8px 16px", background: "#FFF9F4", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "30px", fontSize: "0.875rem", fontWeight: 600, color: "#fc8019" }}>
              {item}
            </span>
          ))}
        </div>

        <CaseStudyImage label="Design System Component Tokens" wide />

        {/* Collaboration Timeline */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", marginBlock: "48px 32px", padding: "24px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          {["Design", "Review", "Engineering", "QA", "Release"].map((step, idx) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: "120px", justifyContent: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fc8019", letterSpacing: "0.12em", textTransform: "uppercase" }}>Phase 0{idx + 1}</span>
                <span style={{ fontWeight: 700, color: "#111111", fontSize: "0.9375rem" }}>{step}</span>
              </div>
              {idx < 4 && <span style={{ color: "#fc8019", fontWeight: 700, fontSize: "1.25rem" }}>→</span>}
            </div>
          ))}
        </div>

        {/* Impact Cards */}
        <div className="case-study-design-system__grid">
          <div className="case-study-design-system__card">
            <h4 className="case-study-design-system__card-title">Consistency</h4>
          </div>
          <div className="case-study-design-system__card">
            <h4 className="case-study-design-system__card-title">Faster Handoff</h4>
          </div>
          <div className="case-study-design-system__card">
            <h4 className="case-study-design-system__card-title">Reduced Rework</h4>
          </div>
          <div className="case-study-design-system__card">
            <h4 className="case-study-design-system__card-title">Shared Language</h4>
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            A shared design language improved both product consistency and cross-functional collaboration.
          </p>
        </div>
      </CaseStudySection>

      {/* 12 Business Impact */}
      <CaseStudySection
        id="impact"
        badge=""
        title="Business Impact"
        introduction="End the case study with measurable outcomes across enterprise adoption, operational efficiency, and revenue."
      >
        {/* Six Metric Cards */}
        <div className="case-study-impact__grid">
          {[
            { value: "50+", label: "Enterprise Brands" },
            { value: "5M+", label: "Channel Partners" },
            { value: "12+", label: "Enterprise Clients" },
            { value: "75%", label: "Faster Go-live" },
            { value: "25%", label: "YoY Secondary Sales" },
            { value: "₹7Cr+", label: "FY24–25 Revenue Contribution" }
          ].map((metric) => (
            <div key={metric.label} style={{ padding: "28px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fc8019", marginBottom: "8px" }}>{metric.value}</div>
              <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#111111" }}>{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline Progress */}
        <div className="case-study-progression__diagram" style={{ marginBlock: "48px 32px", padding: "32px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", background: "#FFF9F4" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            {["System Design", "White-label Beta", "Multi-brand Rollout", "Scale Adoption"].map((step, idx) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: "160px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fc8019", letterSpacing: "0.12em", textTransform: "uppercase" }}>Phase 0{idx + 1}</span>
                  <span style={{ fontWeight: 700, color: "#111111", fontSize: "0.9375rem" }}>{step}</span>
                </div>
                {idx < 3 && <div style={{ color: "#fc8019", fontWeight: 700, fontSize: "1.25rem" }}>→</div>}
              </div>
            ))}
          </div>
        </div>

        <CaseStudyImage label="Final Loyalty Ecosystem Visual Showcase" wide />

        {/* Final Reflection Card */}
        <div className="case-study-section__callout" style={{ marginTop: "40px", background: "#FFF9F4" }}>
          <p className="case-study-section__callout-text" style={{ fontStyle: "normal" }}>
            "This project fundamentally changed how I approach Product Design.
            <br /><br />
            Rather than designing isolated interfaces, I learned to build scalable product foundations that balance business goals, user needs and long-term growth."
          </p>
        </div>
      </CaseStudySection>

      {/* 13 Next Case Study CTA */}
      <section className="case-study-section" style={{ paddingBlock: "120px 80px", background: "#FFF9F4", borderTop: "1px solid rgba(17, 17, 17, 0.06)" }}>
        <Container>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }} className="case-study-next__card">
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fc8019", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>
              Next Project
            </span>
            <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111111", margin: "0 0 20px 0", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Mirari Surface
            </h3>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginBottom: "40px", maxWidth: "600px", lineHeight: 1.6 }}>
              Interested in seeing another product challenge?
              <br /><br />
              Explore how we designed a connected smart home experience spanning embedded touch panel interfaces and companion mobile applications.
            </p>
            <Link href="/work/mirari-surface">
              <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                Next Case Study
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
