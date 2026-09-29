"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LayoutGrid, Mail, User } from "lucide-react";
import { glass } from "@/lib/motion";

const EMAIL = "3mily.ang@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/emilyang20/";

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
                aria-label={link.label}
                aria-current={active ? "page" : undefined}
                className="relative z-10 flex items-center rounded-full px-3 py-2 text-sm"
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
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.span
                      key="label"
                      initial={shouldReduceMotion ? false : { width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? undefined : { width: 0, opacity: 0 }}
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
                      className="ml-2 overflow-hidden whitespace-nowrap"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </li>
          );
        })}
        <MobileContact />
      </ul>
    </nav>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8h.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 0 0-4 0" />
    </svg>
  );
}

function MobileContact() {
  return (
    <li>
      <div className="mobile-contact">
        <input id="mobile-contact-toggle" type="checkbox" className="email-toggle" />
        <label htmlFor="mobile-contact-toggle" className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full">
          <Mail size={16} strokeWidth={1.75} />
          <span className="sr-only">Contact</span>
        </label>
        <div className="mobile-contact-reveal">
          <div className="mobile-contact-clip">
            <div className="mobile-contact-row">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-9 w-9 shrink-0 items-center justify-center"
              >
                <LinkedinIcon />
              </a>
              <button type="button" data-copy-email={EMAIL} aria-label="Copy email address" className="mobile-email">
                {EMAIL}
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
