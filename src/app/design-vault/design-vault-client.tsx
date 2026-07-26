"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, ExternalLink, ArrowUpRight, Folder, Mail, Download
} from "lucide-react";
import { designVaultProjects, VaultProject } from "@/data/designVault";
import { Button } from "@/components/ui";

// 1. DesignVaultHero
export function DesignVaultHero() {
  return (
    <div className="pt-24 pb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[var(--border)] mb-12">
      <div className="max-w-2xl">
        <span className="text-[10px] tracking-[0.2em] font-extrabold text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3 py-1 rounded-full border border-orange-100 inline-block mb-4">
          CURATED ARCHIVE
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] mb-6">
          Design Vault
        </h1>
        <p className="text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed max-w-[650px] mb-8">
          A collection of product concepts, enterprise dashboards, design systems, mobile experiences and interaction explorations created beyond my featured case studies.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0 w-full md:w-auto">
        <a href="#designs" className="w-full sm:w-auto">
          <Button variant="primary" fullWidth rightIcon={<ArrowRight size={16} />}>
            Browse Designs
          </Button>
        </a>
        <a 
          href="https://figma.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-auto"
        >
          <Button variant="outline" fullWidth rightIcon={<ArrowUpRight size={16} />}>
            Open Figma Profile
          </Button>
        </a>
      </div>
    </div>
  );
}

// 2. CategoryFilter
interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory
}: CategoryFilterProps) {
  return (
    <div className="sticky top-[59px] z-40 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] py-4 mb-10 overflow-x-auto pb-2 md:pb-4 scrollbar-none">
      <div className="flex items-center gap-2 max-w-[1280px] mx-auto px-4 md:px-0">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive 
                  ? "bg-[#F97316] text-white border border-[#F97316] shadow-sm shadow-orange-500/20" 
                  : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)] hover:border-[var(--foreground-subtle)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 3. ProjectGrid
interface ProjectGridProps {
  projects: VaultProject[];
  loading: boolean;
  gridColsClass?: string;
}

export function ProjectGrid({ 
  projects, 
  loading, 
  gridColsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
}: ProjectGridProps) {
  if (loading) {
    return (
      <div className={`grid ${gridColsClass} gap-8`}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse bg-[var(--surface)] rounded-[20px] border border-[var(--border)] overflow-hidden h-[380px] flex flex-col">
            <div className="aspect-[16/9] bg-zinc-200 dark:bg-zinc-800" />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mb-3" />
                <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-full mb-2" />
                <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6 mb-4" />
              </div>
              <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <div id="designs" className={`grid ${gridColsClass} gap-8 items-stretch`}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

// 4. ProjectCard
export function ProjectCard({ project }: { project: VaultProject }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group/card bg-[var(--surface)] rounded-[20px] border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-md transition-all duration-[250ms] ease-out flex flex-col h-full cursor-default relative w-full"
      style={{ transform: isHovered ? "translateY(-6px)" : "translateY(0)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cover Image Wrapper (Compact 16:9) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-[var(--border)] rounded-t-[20px]">
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
            transform: isHovered ? "scale(1.03)" : "scale(1.0)"
          }}
        />

        {/* Hover overlay showing buttons */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-4 transition-opacity duration-250 ease-out pointer-events-none"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          {/* Top right external indicator */}
          <div className="self-end bg-white/15 backdrop-blur-md rounded-full p-2 border border-white/10 text-white shadow-sm">
            <ArrowUpRight size={14} />
          </div>

          {/* Center Overlay Text */}
          <div className="flex gap-2 justify-center items-center flex-grow -mt-2">
            <span className="text-[9px] bg-white/95 text-black font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm">
              View Prototype
            </span>
            <span className="text-[9px] bg-black/60 text-white font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm border border-white/10">
              Open Figma
            </span>
          </div>

          <div className="text-zinc-300 text-[9px] font-bold">
            Explore concepts & design files
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] tracking-wider font-extrabold text-[var(--foreground)] bg-white/90 backdrop-blur-md border border-[var(--border)] px-2.5 py-1 rounded-md uppercase">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className={`text-[9px] tracking-wider font-extrabold px-2.5 py-1 rounded-md uppercase ${
            project.status === "Featured" || project.status === "Live"
              ? "bg-[#FC8019] text-white border border-[#FC8019]"
              : "bg-black/80 text-white dark:bg-white/90 dark:text-black border border-transparent"
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content (Reduced padding for compact size) */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[var(--foreground)] mb-1.5 group-hover/card:text-[var(--primary)] transition-colors duration-200 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-xs text-[var(--foreground-subtle)] line-clamp-2 leading-relaxed mb-3">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <ProjectTags tags={project.tags} />

          {/* Simple Divider Line */}
          <hr className="border-[var(--border)] mt-4 mb-0" />

          {/* Reusable Action Buttons */}
          <ProjectButtons 
            prototypeUrl={project.prototypeUrl} 
            figmaUrl={project.figmaUrl} 
          />
        </div>
      </div>
    </div>
  );
}

// 5. ProjectTags
export function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1 mb-1">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="text-[9px] font-extrabold tracking-wider text-[var(--foreground-subtle)] bg-[var(--surface-secondary)] border border-[var(--border)] px-2.5 py-0.5 rounded-full uppercase transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// 6. ProjectButtons
interface ProjectButtonsProps {
  prototypeUrl?: string;
  figmaUrl?: string;
}

export function ProjectButtons({ prototypeUrl, figmaUrl }: ProjectButtonsProps) {
  return (
    <div className="flex flex-row items-center gap-[16px] mt-6">
      {prototypeUrl && (
        <a 
          href={prototypeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary">
            Prototype
          </Button>
        </a>
      )}
      {figmaUrl && (
        <a 
          href={figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            Figma
          </Button>
        </a>
      )}
    </div>
  );
}

// 7. BottomCTA
export function BottomCTA() {
  return (
    <div className="border border-[var(--border)] rounded-[24px] bg-[var(--surface)] p-8 md:p-16 text-center max-w-4xl mx-auto mt-20 relative overflow-hidden">
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-orange-500/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-orange-500/5 blur-3xl rounded-full" />

      <span className="text-[10px] tracking-[0.2em] font-extrabold text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3 py-1 rounded-full border border-orange-100 inline-block mb-6">
        COLLABORATION
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mb-6">
        Let's Build Great Products Together
      </h2>
      <p className="text-sm md:text-base text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed mb-8">
        I am always open to exploring new product design challenges, dynamic interface prototyping, and consulting collaborations. Reach out to get started.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:ktsujeet1997@gmail.com" className="w-full sm:w-auto">
          <Button variant="primary" fullWidth leftIcon={<Mail size={16} />}>
            Get In Touch
          </Button>
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="w-full sm:w-auto"
        >
          <Button variant="outline" fullWidth leftIcon={<Download size={16} />}>
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="border-2 border-dashed border-[var(--border)] rounded-[20px] p-12 text-center max-w-md mx-auto my-12 bg-[var(--surface)]">
      <Folder className="mx-auto text-[var(--foreground-subtle)] mb-4" size={40} />
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">More explorations coming soon</h3>
      <p className="text-sm text-[var(--foreground-muted)]">
        No projects match the selected category right now. Check back soon.
      </p>
    </div>
  );
}

// DesignVaultPage client component wrapper
export function DesignVaultPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<VaultProject[]>(designVaultProjects);
  const [loading, setLoading] = useState<boolean>(true);

  // Categories list per requirements
  const categories = [
    "All", "Dashboard", "Web App", "Mobile App", "Enterprise SaaS", 
    "Design System", "AI Product", "Interaction", "Experiments", "Responsive"
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = designVaultProjects.filter((project) => {
        return activeCategory === "All" || project.category === activeCategory;
      });
      setFilteredProjects(filtered);
      setLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <DesignVaultHero />

        {/* Sticky Filters */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Project Grid */}
        <ProjectGrid projects={filteredProjects} loading={loading} />

        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </div>
  );
}
