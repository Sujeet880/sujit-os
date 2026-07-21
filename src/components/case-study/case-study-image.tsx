import { cn } from "@/lib/cn";

import "./case-study-image.css";

interface CaseStudyImageProps {
  label: string;
  aspectRatio?: "16-9" | "4-3" | "3-2" | "1-1" | "auto";
  caption?: string;
  wide?: boolean;
  className?: string;
}

export function CaseStudyImage({
  label,
  aspectRatio = "16-9",
  caption,
  wide = false,
  className,
}: CaseStudyImageProps) {
  const imageElement = (
    <div
      className={cn(
        "case-study-image",
        `case-study-image--${aspectRatio}`,
        className
      )}
    >
      <span className="case-study-image__label">{label}</span>
    </div>
  );

  if (caption) {
    return (
      <div className={cn("case-study-image-wrapper", wide && "case-study-section__wide")}>
        {imageElement}
        <span className="case-study-image__caption">{caption}</span>
      </div>
    );
  }

  return (
    <div className={cn(wide && "case-study-section__wide")}>
      {imageElement}
    </div>
  );
}
