export interface VaultProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  status: "Featured" | "New" | "Concept" | "Live";
  tags: string[];
  prototypeUrl?: string;
  figmaUrl?: string;
}

export const designVaultProjects: VaultProject[] = [
  {
    id: "1",
    slug: "executive-dashboard",
    title: "Executive Operations Dashboard",
    description: "End-to-end product design of an enterprise dashboard platform simplifying complex operations, revenue tracking, and capacity planning.",
    coverImage: "/digital_banking.png",
    category: "Dashboard",
    status: "Featured",
    tags: ["Dashboard", "Web App", "Enterprise UX", "Figma"],
    prototypeUrl: "https://figma.com",
    figmaUrl: "https://figma.com"
  },
  {
    id: "2",
    slug: "client-portal",
    title: "Client Portal & Documents Vault",
    description: "A secure workspace enabling clients to self-onboard, upload documents, track compliances, and communicate directly with auditors.",
    coverImage: "/article_design_systems.png",
    category: "Web App",
    status: "New",
    tags: ["Web App", "Prototype", "Design System"],
    prototypeUrl: "https://figma.com",
    figmaUrl: "https://figma.com"
  },
  {
    id: "3",
    slug: "smart-switchboard",
    title: "Mirari Smart Switchboard App",
    description: "Mobile companion application for IoT smart switchboard control, mapping complex hardware configurations to simple gestures.",
    coverImage: "/article_wireframe_to_product.png",
    category: "Mobile App",
    status: "Live",
    tags: ["Mobile App", "Prototype", "Figma", "Interaction"],
    prototypeUrl: "https://figma.com",
    figmaUrl: "https://figma.com"
  },
  {
    id: "4",
    slug: "ai-tax-assistant",
    title: "AI Tax Intelligence Assistant",
    description: "A conversational interface helper analyzing tax compliance notices, suggesting resolutions, and drafting responses.",
    coverImage: "/images/ca-operating-system/product_vision_framework.png",
    category: "AI Product",
    status: "Concept",
    tags: ["AI Product", "Figma", "Concept"],
    prototypeUrl: "https://figma.com",
    figmaUrl: "https://figma.com"
  },
  {
    id: "5",
    slug: "design-tokens",
    title: "Enterprise Core Design Tokens",
    description: "Standardizing semantic variable hierarchies, dark mode mapping, spacing systems, and components for a white-label dashboard.",
    coverImage: "/article_ux_research.png",
    category: "Design System",
    status: "New",
    tags: ["Design System", "Figma", "Responsive"],
    prototypeUrl: "https://figma.com",
    figmaUrl: "https://figma.com"
  },
  {
    id: "6",
    slug: "canvas-motion",
    title: "Micro-interactions & Canvas Motion",
    description: "Exploring animated canvas transitions, contextual actions, and haptic suggestions using Figma smart animate mechanics.",
    coverImage: "/og-image.png",
    category: "Interaction",
    status: "Concept",
    tags: ["Prototype", "Figma", "Experiments"],
    prototypeUrl: "https://figma.com",
    figmaUrl: "https://figma.com"
  }
];
