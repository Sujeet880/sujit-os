import Link from "next/link";

import { cn } from "@/lib/cn";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

import { SectionHeader } from "@/components/common/section-header";
import { ProjectCard } from "@/components/common/project-card";

import { featuredProjects } from "@/data/projects";

import type { FeaturedWorkProps } from "./featured-work.types";

import "./featured-work.css";

export function FeaturedWork({
  className,
}: FeaturedWorkProps) {
  return (
    <Section
      id="work"
      className={cn("featured-work", className)}
    >
      <Container>
        <SectionHeader
          badge="Featured Work"
          title="Selected case studies with measurable impact."
          description="A selection of projects where product thinking, user research, and design strategy delivered meaningful business outcomes."
          layout="split"
          action={
            <Link href="/work">
              <Button variant="outline">
                View All Projects
              </Button>
            </Link>
          }
        />

        <div className="featured-work__grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}