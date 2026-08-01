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
    slug: "invoice-loyalty-app",
    title: "Invoice Based Loyalty App",
    description: "A B2B loyalty application that enables channel partners to upload invoices, earn loyalty points, participate in reward schemes, and redeem rewards through bank transfers, gift vouchers, and exclusive offers.\n\nDesigned to simplify partner engagement by combining invoice verification, reward tracking, scheme participation, and redemption into one seamless mobile experience.",
    coverImage: "/invoice_loyalty_app.png",
    category: "Mobile App",
    status: "Featured",
    tags: ["Mobile App", "B2B", "Loyalty", "Rewards", "O4S"],
    prototypeUrl: "https://www.figma.com/proto/Sa8OcNxRMYF2pcNCvwDqCa/App-Portfolio?node-id=3-38698&viewport=5810%2C1130%2C0.38&t=xaBuwbPMbznNFjzz-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A38698&page-id=1%3A2&hide-ui=1"
  },
  {
    id: "2",
    slug: "mirari-surface-x",
    title: "Mirari Surface X",
    description: "An embedded smart home control interface designed to replace traditional switchboards with a premium touch-based experience for controlling lighting, appliances, automation, and smart home scenes.\n\nFocused on creating an intuitive embedded UX for automation, scheduling, brightness control, screensavers, and seamless smart device management within a single control panel.",
    coverImage: "/mirari_surface_x.png",
    category: "Embedded IoT",
    status: "Featured",
    tags: ["Embedded UX", "IoT", "Smart Home", "Automation", "ESP32"],
    prototypeUrl: "https://www.figma.com/proto/iEi8CtHQLKElqWUUJC4ThW/Mirari-GUI-2.0?node-id=112-913&viewport=516%2C283%2C0.22&t=orXQ71ZHaz0FmTqY-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=112%3A913&page-id=14%3A97&hide-ui=1"
  },
  {
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
