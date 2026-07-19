import { forwardRef } from "react";
import Link from "next/link";

import { Avatar, Badge, Button } from "@/components/ui";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/cn";

import "./hero.css";

import type { HeroProps } from "./hero.types";

export const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ className, ...props }, ref) => {
    return (
      <Section
        id="home"
        ref={ref}
        className={cn("hero", className)}
        {...props}
      >
        <Container>
          <div className="hero__inner">
            <div className="hero__content">
              <Badge
                variant="success"
                className="hero__badge"
              >
                ● Available for Work
              </Badge>

              <h1 className="hero__title">
                Hi, I'm Sujit Kumar
              </h1>

              <p className="hero__description">
                Senior Product Designer crafting
                intuitive digital experiences that
                blend business goals with user
                needs.
              </p>

              <div className="hero__actions">
                <Link href="#work">
                  <Button>
                    View Projects
                  </Button>
                </Link>

                <Link href="/resume.pdf">
                  <Button variant="outline">
                    Download Resume
                  </Button>
                </Link>
              </div>

              <div className="hero__skills">
                <Badge variant="secondary">
                  React
                </Badge>

                <Badge variant="secondary">
                  Next.js
                </Badge>

                <Badge variant="secondary">
                  TypeScript
                </Badge>

                <Badge variant="secondary">
                  AI
                </Badge>
              </div>
            </div>

            <div className="hero__image">
              <Avatar
                size="lg"
                fallback="SK"
              />
            </div>
          </div>
        </Container>
      </Section>
    );
  }
);

Hero.displayName = "Hero";