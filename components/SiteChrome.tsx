"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Copy, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import PillNav from "@/components/PillNav";

const EMAIL = "3mily.ang@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/emilyang20/";

const links = [
  { href: "/", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/works");
  return pathname.startsWith(href);
}

function LinkedinIcon() {
  return (
    <svg
      width="22"
      height="22"
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

function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {links.map((link) => {
        const active = isActive(pathname, link.href);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`block py-1 text-[14px] leading-tight tracking-[0.01em] ${
                active ? "text-foreground" : "text-quiet hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function EmailMark() {
  return (
    <div className="email-slot">
      <input id="email-toggle" type="checkbox" className="email-toggle" />
      <label htmlFor="email-toggle" className="contact-mark">
        <span className="contact-glyph">
          <Mail size={22} strokeWidth={1.75} />
        </span>
        <span className="sr-only">Show email address</span>
      </label>
      <div id="email-reveal" className="email-reveal">
        <div className="email-reveal-clip">
          <div className="email-reveal-text">
            <button
              type="button"
              data-copy-email={EMAIL}
              aria-label="Copy email address"
              className="email-address"
            >
              {EMAIL}
              <span className="email-copy">
                <span className="copy-icon" aria-hidden="true">
                  <Copy size={14} strokeWidth={1.75} />
                </span>
                <span className="copied-icon" aria-hidden="true">
                  <Check size={14} strokeWidth={1.75} />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <span className="copied-note" aria-live="polite">
        <span className="copied-note-text" />
      </span>
    </div>
  );
}

function ContactMarks() {
  return (
    <div className="fixed bottom-8 left-10 z-40 hidden items-center gap-1 bg-paper lg:flex">
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="contact-mark"
      >
        <span className="contact-glyph">
          <LinkedinIcon />
        </span>
      </a>
      <EmailMark />
    </div>
  );
}

export default function SiteChrome() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col bg-paper px-10 pt-16 lg:flex">
        <Link href="/" aria-label="Emily Ang, home" className="text-foreground">
          <Logo />
        </Link>
        <nav className="mt-8" aria-label="Primary">
          <NavLinks />
        </nav>
      </aside>

      <div className="sticky top-0 z-30 bg-paper px-6 py-4 lg:hidden">
        <Link href="/" aria-label="Emily Ang, home" className="text-foreground">
          <Logo />
        </Link>
      </div>

      <PillNav />
      <ContactMarks />
    </>
  );
}
