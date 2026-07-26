"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Home, User, Briefcase, Sparkles } from "lucide-react";
import ContactMenu from "@/components/ContactMenu";
import { glass, press } from "@/lib/motion";

const homeItem = { href: "/", label: "Home", icon: Home };

const middleItems = [
  { href: "/about", label: "About", icon: User },
  { href: "/works", label: "Works", icon: Briefcase },
  { href: "/services", label: "Services", icon: Sparkles },
] as const;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function PillNav() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 flex justify-center gap-2 px-3 sm:bottom-6 sm:gap-3 sm:px-4">
      <IconLink item={homeItem} active={isActive(pathname, homeItem.href)} />

      <ul className={`flex items-center gap-1 rounded-full p-1 ${glass}`}>
        {middleItems.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;

          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                aria-label={item.label}
                className={`relative z-10 flex items-center rounded-full px-3 py-2 text-sm font-medium sm:gap-2 sm:px-4 ${press}`}
                style={{ color: active ? "var(--background)" : "var(--foreground)" }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", bounce: 0.15, duration: 0.3 }
                    }
                  />
                )}
                <Icon size={16} className="shrink-0" />
                <span className="hidden sm:inline">{item.label}</span>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.span
                      key="label"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
                      className="ml-2 overflow-hidden whitespace-nowrap sm:hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </li>
          );
        })}
      </ul>

      <ContactMenu />
    </nav>
  );
}

function IconLink({
  item,
  active,
}: {
  item: { href: string; label: string; icon: typeof Home };
  active: boolean;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      aria-label={item.label}
      className={`flex h-11 w-11 items-center justify-center rounded-full ${press} ${
        active ? "bg-accent text-background" : `${glass} text-foreground`
      }`}
    >
      <Icon size={18} />
    </Link>
  );
}
