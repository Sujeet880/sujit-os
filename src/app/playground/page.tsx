import type { Metadata } from "next";
import { ArrowRight, Plus } from "lucide-react";
 
import { Button } from "@/components/ui/button";
 
export const metadata: Metadata = {
  title: "Playground — Sujit Kumar Design",
  description: "Playground page to test design system components.",
  alternates: {
    canonical: "/playground",
  },
};
 
export default function PlaygroundPage() {
  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>

      <Button variant="destructive">
        Delete
      </Button>

      <Button size="xs">XS</Button>

      <Button size="sm">SM</Button>

      <Button size="md">MD</Button>

      <Button size="lg">LG</Button>

      <Button size="xl">XL</Button>

      <Button leftIcon={<Plus size={18} />}>
        Create
      </Button>

      <Button rightIcon={<ArrowRight size={18} />}>
        Continue
      </Button>

      <Button loading>
        Saving...
      </Button>

      <Button disabled>
        Disabled
      </Button>

      <Button fullWidth>
        Full Width
      </Button>

      <Button iconOnly aria-label="Add">
        <Plus size={18} />
      </Button>
    </main>
  );
}