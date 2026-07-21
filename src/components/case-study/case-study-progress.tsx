"use client";

import { useEffect, useState } from "react";
import "./case-study-progress.css";

interface SectionItem {
  id: string;
  label: string;
}

interface CaseStudyProgressProps {
  sections: SectionItem[];
}

export function CaseStudyProgress({ sections }: CaseStudyProgressProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in the middle-top area of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="case-study-progress" aria-label="Case study progress">
      {sections.map((section, index) => {
        const numStr = String(index + 1).padStart(2, "0");
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`case-study-progress__item ${
              isActive ? "case-study-progress__item--active" : ""
            }`}
            aria-label={`Scroll to ${section.label}`}
          >
            <div className="case-study-progress__dot" />
            <span className="case-study-progress__label">
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
