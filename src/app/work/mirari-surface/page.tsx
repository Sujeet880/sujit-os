import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";
import {
  CaseStudyHero,
  CaseStudyImage,
  CaseStudyProgress,
  CaseStudySection,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Mirari Surface — Designing a Smart Home Control Experience",
  description: "Flagship case study on designing a smart home control experience for Mirari Surface.",
};

const sections = [
  { id: "context", label: "Why This Product Exists" },
  { id: "challenge", label: "The Design Challenge" },
  { id: "role", label: "My Role & Ownership" },
  { id: "constraints", label: "Engineering Constraints" },
  { id: "research", label: "Research & Insights" },
  { id: "principles", label: "Design Principles" },
  { id: "strategy", label: "Experience Strategy" },
  { id: "architecture", label: "Information Architecture" },
  { id: "flow", label: "User Flows" },
  { id: "exploration", label: "Design Exploration" },
  { id: "patterns", label: "Interaction Patterns" },
  { id: "embedded", label: "Embedded Experience" },
  { id: "mobile", label: "Companion Mobile Experience" },
  { id: "system", label: "Building One Design System" },
  { id: "solution", label: "Final Product" },
  { id: "outcomes", label: "Impact & Reflection" },
];

export default function MirariSurfaceCaseStudy() {
  return (
    <>
      <CaseStudyProgress sections={sections} />

      {/* 01 Hero */}
      <CaseStudyHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/#work" },
          { label: "Mirari Surface" },
        ]}
        category="Embedded UX • Smart Home • IoT Platform"
        title="Designing a Smart Home Experience That Feels as Familiar as a Traditional Switchboard."
        subtitle=""
        description="Mirari Surface is a smart home platform designed to simplify how people interact with their living spaces.\n\nInstead of replacing familiar wall switches with complex digital interfaces, the product combines an embedded touch panel and a companion mobile application into one connected experience that feels intuitive from the very first interaction.\n\nAs the Product Designer, I led the end-to-end user experience across both platforms, balancing usability, hardware limitations and engineering feasibility while creating a scalable foundation for future smart home experiences."
        metadata={[
          { label: "Role", values: ["Senior Product Designer"] },
          { label: "Duration", values: ["2026"] },
          {
            label: "Platforms",
            values: ["Embedded Touch Panel", "Companion Mobile App"],
          },
          { label: "Industry", values: ["Smart Home", "Internet of Things"] },
          {
            label: "Responsibilities",
            values: [
              "UX Research",
              "Product Strategy",
              "Interaction Design",
              "UI Design",
              "Design System",
              "Developer Handoff",
            ],
          },
          {
            label: "Collaboration",
            values: [
              "Product",
              "Frontend",
              "Firmware",
              "Hardware",
            ],
          },
        ]}
        primaryTargetId="solution"
        secondaryTargetId="context"
        imageLabel="Mirari Surface Hero Image"
        imageCaption="Mirari Surface connects embedded hardware and mobile experiences into one unified smart home ecosystem."
      />

      {/* 02 Why This Product Exists */}
      <CaseStudySection
        id="context"
        badge=""
        title="Why This Product Exists"
        introduction="Smart homes are becoming more intelligent, but everyday interactions are becoming more complicated."
      >
        <p>
          Traditional wall switches are simple, reliable and familiar. They require no learning, respond instantly and have remained virtually unchanged for decades.
        </p>
        <p>
          Modern smart home solutions offer significantly more functionality, including remote control, automation and personalization. However, many of these experiences rely heavily on mobile applications, forcing users to navigate complex interfaces for actions that should feel effortless.
        </p>
        <p>
          Mirari Surface was created to bridge this gap.
        </p>
        <p>
          The vision was not to replace the traditional switchboard—it was to evolve it.
        </p>
        <p>
          By combining an embedded touch interface with a companion mobile application, the product aimed to deliver the familiarity of physical controls while unlocking the flexibility of a connected smart home ecosystem.
        </p>

        <div className="case-study-section__callout">
          <span className="case-study-section__callout-title">Design Principle</span>
          <p className="case-study-section__callout-text">
            "The best smart home experience should feel invisible, not complicated."
          </p>
        </div>

        <CaseStudyImage
          label="Traditional Switchboard → Mirari Surface"
          caption="Reimagining a familiar interaction instead of replacing it."
          wide
          aspectRatio="16-9"
        />
      </CaseStudySection>

      {/* 03 The Design Challenge */}
      <CaseStudySection
        id="challenge"
        badge=""
        title="The Design Challenge"
        introduction="How might we introduce powerful smart home capabilities without asking users to relearn everyday interactions?"
      >
        <p>
          The challenge extended far beyond designing attractive interfaces.
        </p>
        <p>
          Users needed to control lighting, fans, scenes and automations through an interface that felt immediately understandable, regardless of their technical experience.
        </p>
        <p>
          At the same time, every interaction had to operate within the limitations of an embedded hardware platform powered by the ESP32-S3. Memory, rendering performance and processing resources were shared across the interface, networking and hardware control, making every design decision directly influence system performance.
        </p>
        <p>
          The goal was to create one consistent experience across both the embedded touch panel and the companion mobile application without sacrificing simplicity, responsiveness or engineering feasibility.
        </p>

        <div className="case-study-challenge__grid">
          {/* Card 01 */}
          <div className="case-study-challenge__card">
            <h4 className="case-study-challenge__card-title">Familiar Interactions</h4>
            <p className="case-study-challenge__card-text">Design an experience that feels immediately recognizable.</p>
          </div>

          {/* Card 02 */}
          <div className="case-study-challenge__card">
            <h4 className="case-study-challenge__card-title">Embedded Performance</h4>
            <p className="case-study-challenge__card-text">Balance usability with memory and rendering constraints.</p>
          </div>

          {/* Card 03 */}
          <div className="case-study-challenge__card">
            <h4 className="case-study-challenge__card-title">Cross-platform Consistency</h4>
            <p className="case-study-challenge__card-text">Create one unified experience across embedded and mobile.</p>
          </div>

          {/* Card 04 */}
          <div className="case-study-challenge__card">
            <h4 className="case-study-challenge__card-title">Engineering Feasibility</h4>
            <p className="case-study-challenge__card-text">Design solutions that could be implemented efficiently on real hardware.</p>
          </div>
        </div>

        <CaseStudyImage
          label="Design Challenge Diagram"
          wide
          aspectRatio="16-9"
        />

        {/* Merged Goals Section */}
        <p style={{ marginTop: "40px" }}>
          Success for the Mirari Surface was measured across three major categories:
        </p>
        <ul>
          <li><strong>Task Efficiency:</strong> Reducing the time required to perform everyday controls (lighting presets, climate changes) by 40%.</li>
          <li><strong>System Speed:</strong> Standardizing components to allow engineering teams to build and ship new interfaces 75% faster.</li>
          <li><strong>Usability:</strong> Improving overall system accessibility score to meet modern design standards.</li>
        </ul>
      </CaseStudySection>

      {/* 04 My Role & Ownership */}
      <CaseStudySection
        id="role"
        badge=""
        title="My Role & Ownership"
        introduction="From product thinking to implementation support, I was responsible for shaping the experience across both embedded and mobile platforms."
      >
        <p>
          I led the end-to-end product design process, working closely with product managers, firmware engineers, hardware engineers and frontend developers throughout the project lifecycle.
        </p>
        <p>
          My work focused on understanding user needs, simplifying complex interactions and ensuring that every design decision remained practical within the technical constraints of embedded hardware.
        </p>
        <p>
          Beyond interface design, I contributed to product strategy, information architecture, interaction design, reusable design systems and developer handoff to maintain consistency across the entire ecosystem.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginTop: "32px" }} className="case-study-role__grid">
          <div>
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#9ca3af", marginBottom: "12px" }}>
              Responsibilities
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Product Strategy", "UX Research", "Information Architecture", "User Flows", "Interaction Design", "Visual Design", "Design System", "Prototype", "Developer Handoff", "Cross-functional Collaboration"].map((resp) => (
                <li key={resp} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9375rem", color: "#4b5563" }}>
                  <span style={{ color: "#fc8019", fontWeight: 700 }}>→</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#9ca3af", marginBottom: "12px" }}>
              Collaborated With
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Product Managers", "Frontend Engineers", "Firmware Engineers", "Hardware Engineers"].map((collab) => (
                <li key={collab} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9375rem", color: "#4b5563" }}>
                  <span style={{ color: "#fc8019", fontWeight: 700 }}>→</span>
                  {collab}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text" style={{ fontStyle: "normal" }}>
            This project required balancing user experience, business goals and hardware feasibility rather than optimizing for interface aesthetics alone.
          </p>
        </div>
      </CaseStudySection>

      {/* 05 Engineering Constraints */}
      <CaseStudySection
        id="constraints"
        badge=""
        title="Engineering Constraints"
        introduction="Great user experiences are not created by ignoring constraints—they are created by designing within them."
      >
        <p>
          Unlike traditional web and mobile products, Mirari Surface was built for an embedded hardware platform where every design decision had technical consequences.
        </p>
        <p>
          The interface had to run on an ESP32-S3 powered touch display while sharing processing power and memory with Wi-Fi connectivity, relay control, sensors and background system tasks. Unlike modern smartphones, hardware resources were finite, making performance an active design consideration rather than an engineering optimization.
        </p>
        <p>
          These constraints influenced everything—from component complexity and animation behaviour to icon design, typography and screen transitions. Instead of designing without limits, every interaction was evaluated through the lens of usability, responsiveness and implementation feasibility.
        </p>
        <p>
          Rather than treating these limitations as obstacles, they became design principles that shaped a faster, more focused and more reliable product experience.
        </p>

        <div className="case-study-constraints__grid">
          {/* Card 01 */}
          <div className="case-study-constraints__card">
            <h4 className="case-study-constraints__card-title">Limited Hardware Resources</h4>
            <p className="case-study-constraints__card-text">Every interface element shared memory and processing power with core device functionality.</p>
          </div>

          {/* Card 02 */}
          <div className="case-study-constraints__card">
            <h4 className="case-study-constraints__card-title">Performance First</h4>
            <p className="case-study-constraints__card-text">Animations, rendering and interactions had to remain responsive within embedded system limitations.</p>
          </div>

          {/* Card 03 */}
          <div className="case-study-constraints__card">
            <h4 className="case-study-constraints__card-title">Design for Implementation</h4>
            <p className="case-study-constraints__card-text">Every component was designed to be practical for firmware implementation instead of purely visual.</p>
          </div>

          {/* Card 04 */}
          <div className="case-study-constraints__card">
            <h4 className="case-study-constraints__card-title">One Unified Experience</h4>
            <p className="case-study-constraints__card-text">Both the embedded interface and companion app needed to feel like one connected product despite different technical environments.</p>
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            "Constraints didn't limit creativity—they gave every design decision a clear purpose."
          </p>
        </div>

        <CaseStudyImage
          label="Engineering Constraints Diagram"
          caption="Balancing usability, performance and implementation across embedded hardware."
          wide
          aspectRatio="16-9"
        />
      </CaseStudySection>

      {/* 06 Research & Insights */}
      <CaseStudySection
        id="research"
        badge=""
        title="Research & Insights"
        introduction="Before designing interfaces, I focused on understanding how people already interacted with their homes."
      >
        <p>
          Instead of starting with screens, I started by understanding existing behaviour.
        </p>
        <p>
          Traditional switchboards have remained largely unchanged for decades because they are immediate, predictable and require almost no learning. Smart home products often improve functionality but introduce additional cognitive effort through complex navigation and unfamiliar interaction patterns.
        </p>
        <p>
          This insight shaped the direction of the project.
        </p>
        <p>
          Rather than replacing familiar behaviour, the design focused on extending it. Physical interactions became the foundation for digital experiences, ensuring that scenes, automations and device management felt like natural extensions of everyday habits instead of completely new workflows.
        </p>
        <p>
          Throughout the design process, every feature was evaluated using one simple question:
        </p>
        <p style={{ fontStyle: "italic", fontWeight: 600, color: "#111111" }}>
          "Will this feel obvious to someone using it for the first time?"
        </p>

        <div className="case-study-insights__grid">
          {/* Card 01 */}
          <div className="case-study-insights__card">
            <h4 className="case-study-insights__card-title">Insight 01</h4>
            <p className="case-study-insights__card-text">Users already understand how physical switchboards work.</p>
          </div>

          {/* Card 02 */}
          <div className="case-study-insights__card">
            <h4 className="case-study-insights__card-title">Insight 02</h4>
            <p className="case-study-insights__card-text">Frequently used actions should require the fewest interactions.</p>
          </div>

          {/* Card 03 */}
          <div className="case-study-insights__card">
            <h4 className="case-study-insights__card-title">Insight 03</h4>
            <p className="case-study-insights__card-text">Advanced automation should remain discoverable without overwhelming everyday users.</p>
          </div>

          {/* Card 04 */}
          <div className="case-study-insights__card">
            <h4 className="case-study-insights__card-title">Insight 04</h4>
            <p className="case-study-insights__card-text">Consistency between embedded hardware and mobile reduces learning effort.</p>
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            "The goal wasn't to teach users a new system—it was to make a smarter system feel instantly familiar."
          </p>
        </div>

        <CaseStudyImage
          label="Research Notes"
          caption="Design decisions were driven by existing behaviour rather than assumptions."
          wide
        />
      </CaseStudySection>

      {/* 07 Design Principles */}
      <CaseStudySection
        id="principles"
        badge=""
        title="Design Principles"
        introduction="These principles guided every product decision—from navigation and interaction to implementation."
      >
        <div className="case-study-principles__grid">
          {/* Card 01 */}
          <div className="case-study-principles__card">
            <h4 className="case-study-principles__card-title">Familiar Before Innovative</h4>
            <p className="case-study-principles__card-text">Users should immediately understand the interface without needing instructions.</p>
          </div>

          {/* Card 02 */}
          <div className="case-study-principles__card">
            <h4 className="case-study-principles__card-title">Performance is Part of UX</h4>
            <p className="case-study-principles__card-text">Smooth interactions are impossible without respecting hardware limitations.</p>
          </div>

          {/* Card 03 */}
          <div className="case-study-principles__card">
            <h4 className="case-study-principles__card-title">Reduce Cognitive Load</h4>
            <p className="case-study-principles__card-text">Frequently used actions should always be faster than advanced configuration.</p>
          </div>

          {/* Card 04 */}
          <div className="case-study-principles__card">
            <h4 className="case-study-principles__card-title">Design One Ecosystem</h4>
            <p className="case-study-principles__card-text">Embedded hardware and mobile should behave like one connected product rather than two separate interfaces.</p>
          </div>

          {/* Card 05 */}
          <div className="case-study-principles__card">
            <h4 className="case-study-principles__card-title">Build for Scale</h4>
            <p className="case-study-principles__card-text">Reusable components and consistent patterns should support future features without redesigning the experience.</p>
          </div>

          {/* Card 06 */}
          <div className="case-study-principles__card">
            <h4 className="case-study-principles__card-title">Collaborate Early</h4>
            <p className="case-study-principles__card-text">Design decisions should be validated with engineering throughout the project instead of during handoff.</p>
          </div>
        </div>

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text" style={{ fontStyle: "normal" }}>
            These principles became the foundation for every screen, interaction and design decision throughout the project.
          </p>
        </div>
      </CaseStudySection>

      {/* Experience Strategy */}
      <CaseStudySection
        id="strategy"
        badge=""
        title="Experience Strategy"
        introduction="Research alone doesn't create products. Decisions do."
      >
        <p>
          The research phase made one thing clear: users didn't need another feature-rich smart home interface—they needed an experience that felt immediately familiar.
        </p>
        <p>
          Instead of designing around technology, the product experience was structured around everyday behaviour. Common actions such as controlling lights, fans and scenes were prioritised, while advanced settings remained accessible without interrupting primary workflows.
        </p>
        <p>
          This strategy ensured that first-time users could perform essential tasks confidently while experienced users could gradually discover more powerful capabilities over time.
        </p>
        <p>
          Every interaction was evaluated against one simple principle:
        </p>
        <p style={{ fontStyle: "italic", fontWeight: 600, color: "#111111" }}>
          "Does this make everyday living simpler?"
        </p>

        <div className="case-study-strategy__grid">
          {/* Card 01 */}
          <div className="case-study-strategy__card">
            <h4 className="case-study-strategy__card-title">Prioritize Everyday Tasks</h4>
          </div>

          {/* Card 02 */}
          <div className="case-study-strategy__card">
            <h4 className="case-study-strategy__card-title">Reduce Cognitive Load</h4>
          </div>

          {/* Card 03 */}
          <div className="case-study-strategy__card">
            <h4 className="case-study-strategy__card-title">Progressive Disclosure</h4>
          </div>

          {/* Card 04 */}
          <div className="case-study-strategy__card">
            <h4 className="case-study-strategy__card-title">Consistency Across Platforms</h4>
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            "The product experience was designed around user behaviour—not around technology."
          </p>
        </div>
      </CaseStudySection>

      {/* Information Architecture */}
      <CaseStudySection
        id="architecture"
        badge=""
        title="Information Architecture"
        introduction="A clear structure makes every interaction feel effortless."
      >
        <p>
          The information architecture was designed to minimise navigation while keeping the growing smart home ecosystem organised.
        </p>
        <p>
          Frequently used controls were surfaced immediately, while secondary features such as automations, room management and settings remained easy to discover without overwhelming the primary experience.
        </p>
        <p>
          The structure was intentionally kept shallow to reduce decision-making time and improve usability on both embedded hardware and the companion mobile application.
        </p>

        <CaseStudyImage
          label="Information Architecture"
          caption="High-level product architecture showing how users navigate between core smart home experiences."
          wide
        />

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text" style={{ fontStyle: "normal" }}>
            The architecture prioritised speed of access over feature depth.
          </p>
        </div>
      </CaseStudySection>

      {/* User Flows */}
      <CaseStudySection
        id="flow"
        badge=""
        title="User Flows"
        introduction="Every flow was designed to reduce unnecessary decisions."
      >
        <p>
          The interaction flows focused on helping users complete common tasks with the fewest possible steps.
        </p>
        <p>
          Whether controlling a single device, activating a scene or managing multiple rooms, each flow prioritised clarity, predictability and speed.
        </p>
        <p>
          Rather than exposing every available option upfront, the experience progressively revealed additional functionality only when required, keeping everyday interactions simple while still supporting advanced use cases.
        </p>

        <CaseStudyImage
          label="User Flow"
          caption="User flow flowcharts mapping lighting scenes setup, guest mode activation, and system configuration."
          wide
        />

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text" style={{ fontStyle: "normal" }}>
            The shortest path was always reserved for the most frequent user actions.
          </p>
        </div>
      </CaseStudySection>

      {/* Design Exploration */}
      <CaseStudySection
        id="exploration"
        badge=""
        title="Design Exploration"
        introduction="The first solution is rarely the best one."
      >
        <p>
          Multiple concepts were explored before arriving at the final experience.
        </p>
        <p>
          Navigation models, information density, component hierarchy and interaction patterns were continuously evaluated against usability, engineering feasibility and hardware performance.
        </p>
        <p>
          Rather than selecting solutions based solely on visual preference, every iteration was measured by how effectively it reduced complexity while remaining practical for implementation.
        </p>
        <p>
          Each design review generated new insights that refined the overall experience and strengthened consistency across embedded and mobile platforms.
        </p>

        <div className="case-study-exploration__flow" style={{ display: "flex", flexDirection: "column", gap: "48px", marginTop: "40px" }}>
          {/* Concept A */}
          <div className="case-study-exploration__step" style={{ border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", padding: "28px" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "16px" }}>Concept A: Ultra-Minimal Widgets</h4>
            <CaseStudyImage label="Concept A Layout" aspectRatio="16-9" />
            <p style={{ marginTop: "16px", fontSize: "0.9375rem", color: "#4b5563" }}>
              <strong>Rationale:</strong> Explored a clean dashboard with massive buttons for light and fan controls.
            </p>
            <p style={{ fontSize: "0.9375rem", color: "#4b5563" }}>
              <strong>Why it evolved:</strong> High information density proved difficult to interact with in passing (standing posture).
            </p>
          </div>

          {/* Concept B */}
          <div className="case-study-exploration__step" style={{ border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", padding: "28px" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "16px" }}>Concept B: Nested Rooms Layout</h4>
            <CaseStudyImage label="Concept B Layout" aspectRatio="16-9" />
            <p style={{ marginTop: "16px", fontSize: "0.9375rem", color: "#4b5563" }}>
              <strong>Rationale:</strong> Organized devices strictly by room categories (Living Room, Kitchen).
            </p>
            <p style={{ fontSize: "0.9375rem", color: "#4b5563" }}>
              <strong>Why it evolved:</strong> Required too many taps to perform simple everyday actions (e.g., turning off the fan).
            </p>
          </div>

          {/* Concept C */}
          <div className="case-study-exploration__step" style={{ border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", padding: "28px" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "16px" }}>Concept C: Swipeable Room Cards</h4>
            <CaseStudyImage label="Concept C Layout" aspectRatio="16-9" />
            <p style={{ marginTop: "16px", fontSize: "0.9375rem", color: "#4b5563" }}>
              <strong>Rationale:</strong> Introduced horizontal swipe gestures to switch between rooms instantly.
            </p>
            <p style={{ fontSize: "0.9375rem", color: "#4b5563" }}>
              <strong>Why it evolved:</strong> Swipe gestures were too resource-intensive for the ESP32 microcontroller, introducing rendering lag.
            </p>
          </div>

          {/* Final Direction */}
          <div className="case-study-exploration__step" style={{ border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", padding: "28px", background: "#FFF9F4" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111111", marginBottom: "16px" }}>Final Direction: Dynamic Split Panel</h4>
            <CaseStudyImage label="Final Direction Layout" aspectRatio="16-9" />
            <p style={{ marginTop: "16px", fontSize: "0.9375rem", color: "#4b5563" }}>
              <strong>Rationale:</strong> A static, high-contrast dashboard with instant one-tap control widgets on one half, and contextual rooms on the other.
            </p>
            <p style={{ fontSize: "0.9375rem", color: "#4b5563" }}>
              <strong>Why it evolved:</strong> Successfully reduced touch steps while rendering smoothly under the 80KB memory footprint of the display microcontroller.
            </p>
          </div>
        </div>

        <div className="case-study-section__callout" style={{ marginTop: "40px" }}>
          <p className="case-study-section__callout-text">
            "Every iteration answered a product question—not just a visual one."
          </p>
        </div>
      </CaseStudySection>

      {/* Interaction Patterns */}
      <CaseStudySection
        id="patterns"
        badge=""
        title="Interaction Patterns"
        introduction="Consistency isn't created by repeating components—it's created by repeating behaviours."
      >
        <p>
          To create a cohesive experience across embedded hardware and mobile, interaction patterns were standardised throughout the product.
        </p>
        <p>
          Navigation, touch targets, feedback states, confirmation behaviours and visual hierarchy followed a consistent interaction language, allowing users to transfer their understanding naturally between platforms.
        </p>
        <p>
          These reusable patterns reduced learning effort while simplifying implementation and future scalability.
        </p>

        <div className="case-study-patterns__grid">
          <div className="case-study-patterns__card">
            <h4 className="case-study-patterns__card-title">Touch Feedback</h4>
          </div>
          <div className="case-study-patterns__card">
            <h4 className="case-study-patterns__card-title">Navigation</h4>
          </div>
          <div className="case-study-patterns__card">
            <h4 className="case-study-patterns__card-title">Cards</h4>
          </div>
          <div className="case-study-patterns__card">
            <h4 className="case-study-patterns__card-title">Status Indicators</h4>
          </div>
          <div className="case-study-patterns__card">
            <h4 className="case-study-patterns__card-title">Primary Actions</h4>
          </div>
          <div className="case-study-patterns__card">
            <h4 className="case-study-patterns__card-title">Confirmation Patterns</h4>
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            "Reusable interaction patterns helped create one product experience across multiple platforms."
          </p>
        </div>
      </CaseStudySection>

      {/* Embedded Experience */}
      <CaseStudySection
        id="embedded"
        badge=""
        title="Embedded Experience"
        introduction="The wall panel became the primary touchpoint for everyday interactions."
      >
        <p>
          The embedded interface was designed around speed, clarity and familiarity.
        </p>
        <p>
          Frequently used controls such as lights, fans and scenes remained immediately accessible, allowing users to perform common actions with minimal interaction.
        </p>
        <p>
          Large touch targets, clear visual hierarchy and simplified navigation reduced cognitive effort while respecting the performance limitations of the embedded platform.
        </p>
        <p>
          Every screen was designed to feel responsive, predictable and easy to understand—even for first-time users.
        </p>

        <div className="case-study-embedded__gallery" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginTop: "40px" }}>
          <div className="case-study-embedded__item" style={{ border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", padding: "24px" }}>
            <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#111111", marginBottom: "8px" }}>Home Dashboard</h4>
            <CaseStudyImage label="Dashboard Screen" aspectRatio="16-9" />
            <p style={{ marginTop: "12px", fontSize: "0.875rem", color: "#4b5563", marginInline: 0 }}>
              <strong>Explanation:</strong> The default idle screen surfacing the current time, outdoor temperature, and active scene status.
            </p>
            <p style={{ fontSize: "0.875rem", color: "#4b5563", marginInline: 0 }}>
              <strong>Rationale:</strong> Allows homeowners to verify system state instantly from a viewing distance of up to 10 feet.
            </p>
          </div>
          <div className="case-study-embedded__item" style={{ border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", padding: "24px" }}>
            <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#111111", marginBottom: "8px" }}>Quick Controls Panel</h4>
            <CaseStudyImage label="Quick Controls Screen" aspectRatio="16-9" />
            <p style={{ marginTop: "12px", fontSize: "0.875rem", color: "#4b5563", marginInline: 0 }}>
              <strong>Explanation:</strong> Direct toggle access for lights, fan speeds, and security shortcuts.
            </p>
            <p style={{ fontSize: "0.875rem", color: "#4b5563", marginInline: 0 }}>
              <strong>Rationale:</strong> Utilizes large 64px hit targets to accommodate variable approach angles and passing touch gestures.
            </p>
          </div>
        </div>

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text">
            Every interaction was designed to feel as immediate as pressing a physical switch.
          </p>
        </div>
      </CaseStudySection>

      {/* Companion Mobile Experience */}
      <CaseStudySection
        id="mobile"
        badge=""
        title="Companion Mobile Experience"
        introduction="The mobile application extended the experience beyond the home."
      >
        <p>
          While the embedded panel supported everyday interactions inside the home, the companion application enabled users to stay connected from anywhere.
        </p>
        <p>
          The mobile experience focused on remote access, personalization, automation management and device monitoring while maintaining the same interaction language established on the embedded interface.
        </p>
        <p>
          Consistency across platforms reduced learning effort and strengthened confidence throughout the ecosystem.
        </p>

        <div className="case-study-mobile__groups" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginTop: "40px" }}>
          <div style={{ border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", padding: "24px" }}>
            <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#111111", marginBottom: "12px" }}>Device Setup & Provisioning</h4>
            <CaseStudyImage label="Mobile Setup Screen" aspectRatio="auto" />
            <p style={{ marginTop: "12px", fontSize: "0.9375rem", color: "#4b5563", marginInline: 0 }}>
              Simplifies adding new smart bulbs, switches, or thermostats to rooms using QR code scanning and direct Wi-Fi configuration.
            </p>
          </div>
          <div style={{ border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "18px", padding: "24px" }}>
            <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#111111", marginBottom: "12px" }}>Automations & Scenes Editor</h4>
            <CaseStudyImage label="Mobile Automation Screen" aspectRatio="auto" />
            <p style={{ marginTop: "12px", fontSize: "0.9375rem", color: "#4b5563", marginInline: 0 }}>
              Allows users to chain device triggers together based on schedules, occupancy sensors, or sunrise/sunset timestamps.
            </p>
          </div>
        </div>

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text">
            One ecosystem. One interaction language.
          </p>
        </div>
      </CaseStudySection>

      {/* Building One Design System */}
      <CaseStudySection
        id="system"
        badge=""
        title="Building One Design System"
        introduction="Consistency was built into the system—not added afterwards."
      >
        <p>
          A reusable design system ensured visual and interaction consistency across embedded hardware and the companion application.
        </p>
        <p>
          Shared components, typography, spacing, colour tokens and interaction patterns reduced duplication, improved implementation efficiency and created a scalable foundation for future features.
        </p>
        <p>
          The system evolved alongside the product, allowing new functionality to integrate without compromising consistency.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "32px" }}>
          {["Typography", "Grid", "Spacing", "Buttons", "Cards", "Navigation", "Icons", "Colours", "States", "Components"].map((item) => (
            <span key={item} style={{ padding: "8px 16px", background: "#FFF9F4", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "30px", fontSize: "0.875rem", fontWeight: 600, color: "#fc8019" }}>
              {item}
            </span>
          ))}
        </div>

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text">
            Reusable systems scale products faster than individual screens.
          </p>
        </div>
      </CaseStudySection>

      {/* Accessibility & Usability */}
      <CaseStudySection
        id="accessibility"
        badge=""
        title="Accessibility & Usability"
        introduction="Good design works for everyone—not just experienced users."
      >
        <p>
          Accessibility considerations influenced component sizing, typography, contrast and touch interactions throughout the product.
        </p>
        <p>
          Large touch targets, readable typography and predictable interaction patterns reduced friction while improving usability across different environments and user abilities.
        </p>
        <p>
          Rather than treating accessibility as a checklist, usability became a continuous design principle throughout the project.
        </p>

        <div className="case-study-accessibility__grid">
          <div className="case-study-accessibility__card">
            <h4 className="case-study-accessibility__card-title">Touch Targets</h4>
          </div>
          <div className="case-study-accessibility__card">
            <h4 className="case-study-accessibility__card-title">Contrast</h4>
          </div>
          <div className="case-study-accessibility__card">
            <h4 className="case-study-accessibility__card-title">Typography</h4>
          </div>
          <div className="case-study-accessibility__card">
            <h4 className="case-study-accessibility__card-title">Feedback</h4>
          </div>
          <div className="case-study-accessibility__card">
            <h4 className="case-study-accessibility__card-title">Consistency</h4>
          </div>
          <div className="case-study-accessibility__card">
            <h4 className="case-study-accessibility__card-title">Error Prevention</h4>
          </div>
        </div>
      </CaseStudySection>

      {/* Engineering Collaboration */}
      <CaseStudySection
        id="collaboration"
        badge=""
        title="Engineering Collaboration"
        introduction="The strongest product decisions emerged through close collaboration with engineering."
      >
        <p>
          Design and engineering worked together throughout the project rather than in isolated phases.
        </p>
        <p>
          Regular discussions with firmware, hardware and frontend teams helped validate interaction patterns, simplify implementation and ensure that design decisions aligned with technical realities.
        </p>
        <p>
          This collaborative process reduced implementation risk while improving overall product quality.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "32px" }} className="case-study-collaboration__workflow">
          {["Design", "Review", "Prototype", "Engineering Validation", "Implementation"].map((step, idx) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fc8019", color: "#ffffff", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", fontWeight: 700 }}>
                {idx + 1}
              </div>
              <div style={{ flex: 1, padding: "16px 24px", border: "1px solid rgba(17, 17, 17, 0.06)", borderRadius: "12px", background: idx % 2 !== 0 ? "#FFF9F4" : "#ffffff", fontWeight: 600, color: "#111111" }}>
                {step}
              </div>
            </div>
          ))}
        </div>

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text">
            Collaboration transformed technical constraints into better product decisions.
          </p>
        </div>
      </CaseStudySection>

      {/* Final Product */}
      <CaseStudySection
        id="solution"
        badge=""
        title="Final Product"
        introduction="The result was a connected smart home experience designed around familiarity, performance and simplicity."
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <CaseStudyImage label="Embedded Screens Showcase" wide />
          <CaseStudyImage label="Mobile Screens Showcase" wide />
          <CaseStudyImage label="Interactive Prototypes" wide />
        </div>

        <div className="case-study-section__callout" style={{ marginTop: "32px" }}>
          <p className="case-study-section__callout-text" style={{ fontStyle: "normal" }}>
            A unified smart home ecosystem spanning embedded hardware and mobile platforms.
          </p>
        </div>
      </CaseStudySection>

      {/* Project Outcomes */}
      <CaseStudySection
        id="outcomes"
        badge=""
        title="Project Outcomes"
        introduction="The success of the project wasn't measured by beautiful interfaces—it was measured by creating a practical, scalable smart home experience."
      >
        <p>
          Mirari Surface established a consistent product experience across embedded hardware and the companion mobile application while balancing usability, technical feasibility and future scalability.
        </p>
        <p>
          The project introduced reusable interaction patterns, a scalable design system and a shared visual language that reduced design inconsistency across the ecosystem.
        </p>
        <p>
          Close collaboration with engineering ensured that the final experience remained practical to implement while maintaining the intended user experience.
        </p>

        <div className="case-study-outcomes__grid">
          <div className="case-study-outcomes__card">
            <h4 className="case-study-outcomes__card-title">Reusable Design System</h4>
          </div>
          <div className="case-study-outcomes__card">
            <h4 className="case-study-outcomes__card-title">Cross-platform Consistency</h4>
          </div>
          <div className="case-study-outcomes__card">
            <h4 className="case-study-outcomes__card-title">Engineering-ready Components</h4>
          </div>
          <div className="case-study-outcomes__card">
            <h4 className="case-study-outcomes__card-title">Scalable Product Foundation</h4>
          </div>
          <div className="case-study-outcomes__card">
            <h4 className="case-study-outcomes__card-title">Simplified User Experience</h4>
          </div>
          <div className="case-study-outcomes__card">
            <h4 className="case-study-outcomes__card-title">Collaborative Design Process</h4>
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            The outcome was not just a collection of screens—it was a scalable product foundation.
          </p>
        </div>
      </CaseStudySection>

      {/* Reflection */}
      <CaseStudySection
        id="reflection"
        badge=""
        title="Reflection"
        introduction="Every project changes the way you design the next one."
      >
        <p>
          Working on Mirari Surface reinforced an important lesson: designing for constrained hardware requires a fundamentally different mindset than designing for modern web or mobile platforms.
        </p>
        <p>
          Every decision carries technical implications, making collaboration with engineering an essential part of the design process rather than a final handoff activity.
        </p>
        <p>
          This project strengthened my ability to balance product thinking, user experience and implementation feasibility while building systems that can evolve over time.
        </p>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text" style={{ fontStyle: "normal" }}>
            Great product design isn't about removing constraints.
            <br /><br />
            It's about making better decisions because of them.
          </p>
        </div>
      </CaseStudySection>

      {/* What I'd Improve Today */}
      <CaseStudySection
        id="improvements"
        badge=""
        title="What I'd Improve Today"
        introduction="Every shipped product is a snapshot in time."
      >
        <p>
          Looking back, there are several areas I would continue exploring if the project evolved further.
        </p>
        <p>
          I would validate more interaction patterns through usability testing with first-time users, expand personalization capabilities, strengthen accessibility for diverse user groups and measure long-term engagement through product analytics.
        </p>
        <p>
          I would also collaborate even earlier with engineering to prototype complex interactions before high-fidelity design exploration.
        </p>
        <p>
          These improvements are not corrections—they represent the natural evolution of a growing product.
        </p>

        <div className="case-study-improvements__grid">
          <div className="case-study-improvements__card">
            <h4 className="case-study-improvements__card-title">Usability Testing</h4>
          </div>
          <div className="case-study-improvements__card">
            <h4 className="case-study-improvements__card-title">Product Analytics</h4>
          </div>
          <div className="case-study-improvements__card">
            <h4 className="case-study-improvements__card-title">Advanced Personalization</h4>
          </div>
          <div className="case-study-improvements__card">
            <h4 className="case-study-improvements__card-title">Accessibility</h4>
          </div>
          <div className="case-study-improvements__card">
            <h4 className="case-study-improvements__card-title">Earlier Engineering Validation</h4>
          </div>
          <div className="case-study-improvements__card">
            <h4 className="case-study-improvements__card-title">Future Automation</h4>
          </div>
        </div>

        <div className="case-study-section__callout">
          <p className="case-study-section__callout-text">
            The best designers continue improving products even after they ship.
          </p>
        </div>
      </CaseStudySection>

      {/* Next Case Study CTA */}
      <section className="case-study-section" style={{ paddingBlock: "120px 80px", background: "#FFF9F4", borderTop: "1px solid rgba(17, 17, 17, 0.06)" }}>
        <Container>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }} className="case-study-next__card">
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fc8019", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>
              Next Project
            </span>
            <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111111", margin: "0 0 20px 0", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Explore Another Project
            </h3>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginBottom: "40px", maxWidth: "600px", lineHeight: 1.6 }}>
              Interested in seeing another product challenge?
              <br /><br />
              Explore how I approached a different problem, balanced business goals with user needs and designed another end-to-end product experience.
            </p>
            <Link href="/#work">
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
