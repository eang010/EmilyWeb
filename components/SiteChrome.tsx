"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Copy, Mail } from "lucide-react";
import Logo from "@/components/Logo";

const EMAIL = "3mily.ang@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/emily-ang";

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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.14.92-2.065 2.063-2.065 1.14 0 2.064.925 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
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
              onClick={onNavigate}
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
      <label htmlFor="email-toggle" className="flex h-8 w-8 cursor-pointer items-center justify-center text-foreground">
        <Mail size={16} strokeWidth={1.75} />
        <span className="sr-only">Show email address</span>
      </label>
      <div id="email-reveal" className="email-reveal">
        <div className="email-reveal-clip">
          <div className="email-reveal-text">
            <a href={`mailto:${EMAIL}`} className="email-address">
              {EMAIL}
            </a>
            <button
              type="button"
              data-copy-email={EMAIL}
              aria-label="Copy email address"
              className="email-copy"
            >
              <span className="copy-icon" aria-hidden="true">
                <Copy size={14} strokeWidth={1.75} />
              </span>
              <span className="copied-icon" aria-hidden="true">
                <Check size={14} strokeWidth={1.75} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactMarks() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-1 bg-paper lg:bottom-8 lg:left-10">
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="flex h-8 w-8 items-center justify-center text-foreground"
      >
        <LinkedinIcon />
      </a>
      <EmailMark />
    </div>
  );
}

export default function SiteChrome() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

      <div className="sticky top-0 z-30 bg-paper lg:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Emily Ang, home" className="text-foreground">
            <Logo />
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-[14px] text-foreground"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-nav" aria-label="Primary" className="px-6 pb-4">
            <NavLinks onNavigate={() => setMenuOpen(false)} />
          </nav>
        )}
      </div>

      <ContactMarks />
    </>
  );
}
