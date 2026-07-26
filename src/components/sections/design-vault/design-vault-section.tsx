import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";

import { designVaultProjects } from "@/data/designVault";
import { ProjectCard } from "@/app/design-vault/design-vault-client";

export function DesignVaultSection() {
  // Only display exactly the first four featured/curated projects
  const previewProjects = designVaultProjects.slice(0, 4);

  return (
    <Section id="design-vault-preview" className="border-t border-[var(--border)] py-20">
      <Container>
        <SectionHeader
          badge="CURATED ARCHIVE"
          title="Design Vault"
          description="A curated collection of product concepts, interface explorations, design systems and interactive prototypes beyond my featured case studies."
          layout="split"
          action={
            <Link href="/design-vault">
              <Button variant="outline">
                <span>View All</span>
                <span className="ml-1">→</span>
              </Button>
            </Link>
          }
        />

        {/* Project Preview Grid: 4 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 items-stretch">
          {previewProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
