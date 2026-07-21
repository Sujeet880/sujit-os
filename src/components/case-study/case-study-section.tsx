import { Container } from "@/components/layout/container";

import "./case-study-section.css";

interface CaseStudySectionProps {
  id: string;
  badge: string;
  title: string;
  introduction?: string;
  children?: React.ReactNode;
}

export function CaseStudySection({
  id,
  badge,
  title,
  introduction,
  children,
}: CaseStudySectionProps) {
  return (
    <section id={id} className="case-study-section">
      <Container>
        <div className="case-study-section__inner">
          {badge && <span className="case-study-section__badge">{badge}</span>}
          <h2 className="case-study-section__title">{title}</h2>
          {introduction && (
            <p className="case-study-section__intro">{introduction}</p>
          )}
          {children && (
            <div className="case-study-section__body">{children}</div>
          )}
        </div>
      </Container>
    </section>
  );
}
