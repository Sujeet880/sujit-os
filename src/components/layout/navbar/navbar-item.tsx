import Link from "next/link";

import { cn } from "@/lib/cn";

interface NavbarItemProps {
  href: string;
  label: string;
  active?: boolean;
}

export function NavbarItem({
  href,
  label,
  active = false,
}: NavbarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "navbar__link",
        active && "navbar__link--active"
      )}
    >
      {label}
    </Link>
  );
}