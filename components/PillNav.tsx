"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { LayoutGrid, User } from "lucide-react";
import { glass } from "@/lib/motion";

const links = [
  { href: "/", label: "Projects", icon: LayoutGrid },
  { href: "/about", label: "About", icon: User },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/works");
  return pathname.startsWith(href);
}

export default function PillNav() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 flex justify-center px-4 lg:hidden"
    >
      <ul className={`flex items-center gap-1 rounded-full p-1 ${glass}`}>
        {links.map((link) => {
          const active = isActive(pathname, link.href);
          const Icon = link.icon;

          return (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className="relative z-10 flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                style={{ color: active ? "var(--background)" : "var(--foreground)" }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-foreground"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", bounce: 0.15, duration: 0.3 }
                    }
                  />
                )}
                <Icon size={16} strokeWidth={1.75} className="shrink-0" />
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
