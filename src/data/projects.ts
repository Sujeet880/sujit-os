export interface Project {
  category: string;
  title: string;
  description: string;
  role: string;
  timeline: string;
  businessImpact: string[];
  tags: string[];
  image: string;
  href: string;
}

export const featuredProjects: Project[] = [
  {
    category: "MIRARI SURFACE",
    title: "Smart Switchboard",
    description: "Led the end-to-end product design of an enterprise dashboard platform that simplified complex workflows, improved operational visibility and enabled faster decision-making through scalable product experiences.",
    role: "Senior Product Designer",
    timeline: "2025 – Present",
    businessImpact: [
      "Simplified complex enterprise workflows.",
      "Improved operational visibility across teams.",
      "Designed scalable dashboard experiences for business users."
    ],
    tags: [
      "Enterprise SaaS",
      "Dashboard Design",
      "Workflow Design",
      "Research",
      "Design System",
      "Cross-functional Collaboration"
    ],
    image: "/hotel_platform.png",
    href: "/case-studies/mirari-surface-dashboard"
  },
  {
    category: "ENTERPRISE LOYALTY PLATFORM",
    title: "Scaling a White-label Loyalty Platform",
    description: "Helped evolve a white-label enterprise loyalty platform serving 50+ brands and more than 5 million channel partners. Focused on scalable product experiences, reusable design systems and enterprise workflows across both the dashboard and mobile application.",
    role: "Product Designer",
    timeline: "2023 – 2025",
    businessImpact: [
      "Supported 50+ enterprise brands.",
      "Helped scale experiences for 5M+ channel partners.",
      "Contributed to reusable product systems that accelerated enterprise implementations."
    ],
    tags: [
      "Enterprise SaaS",
      "White-label Platform",
      "Dashboard",
      "Mobile Experience",
      "Design System",
      "Enterprise UX"
    ],
    image: "/digital_banking.png",
    href: "/case-studies/scaling-white-label-loyalty-platform"
  }
];