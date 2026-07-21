import Link from "next/link";
import { cn } from "@/lib/cn";
import "./social-buttons.css";

interface SocialButtonsProps {
  className?: string;
}

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sujitkt/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    name: "Medium",
    url: "https://sujeetkt.medium.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zM18 12c0-2.8.7-5 1.5-5s1.5 2.2 1.5 5-.7 5-1.5 5-1.5-2.2-1.5-5zM23 12c0-2.2.2-4 .5-4s.5 1.8.5 4-.2 4-.5 4-.5-1.8-.5-4z" />
      </svg>
    )
  },
  {
    name: "Figma",
    url: "https://www.figma.com/@sujeetkt",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3h3A2.5 2.5 0 0 1 13 5.5 2.5 2.5 0 0 1 10.5 8h-3A2.5 2.5 0 0 1 5 5.5z" />
        <path d="M5 12a2.5 2.5 0 0 1 2.5-2.5h3A2.5 2.5 0 0 1 13 12 2.5 2.5 0 0 1 10.5 14.5h-3A2.5 2.5 0 0 1 5 12z" />
        <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H10v3A2.5 2.5 0 0 1 7.5 21.5h-2.5A2.5 2.5 0 0 1 5 18.5z" />
        <path d="M10 3h2.5A2.5 2.5 0 0 1 15 5.5a2.5 2.5 0 0 1-2.5 2.5H10V3z" />
        <path d="M10 10h2.5a2.5 2.5 0 0 1 0 5H10v-5z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    url: "https://github.com/Sujeet880",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )
  },
  {
    name: "Email",
    url: "mailto:ktsujeet1997@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
];

export function SocialButtons({ className }: SocialButtonsProps) {
  return (
    <div className={cn("social-buttons", className)}>
      {socialLinks.map((link) => (
        <Link 
          key={link.name} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={link.name}
          className="social-buttons__btn"
        >
          <span className="social-buttons__icon">
            {link.icon}
          </span>
        </Link>
      ))}
    </div>
  );
}
