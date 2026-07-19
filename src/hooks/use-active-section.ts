"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "work",
  "about",
  "articles",
  "contact",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(
        (
          section
        ): section is HTMLElement => section !== null
      );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )[0];

        if (visibleSection?.target.id) {
          setActiveSection(
            visibleSection.target.id
          );
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => {
      sections.forEach((section) =>
        observer.unobserve(section)
      );
    };
  }, []);

  return activeSection;
}