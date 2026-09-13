"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";
import { easeOut, press } from "@/lib/motion";

function orderProjects(projects: Project[]) {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);
  const lead = featured.find((project) => project.slug === "chope") ?? featured[0];
  if (!lead) return projects;
  return [lead, ...featured.filter((project) => project.slug !== lead.slug), ...rest];
}

function chipLabel(project: Project) {
  if (project.slug === "stb-attraction-pass") return "Attraction Pass";
  return project.title;
}

function hasFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export default function WorksShowcase({ projects }: { projects: Project[] }) {
  const ordered = orderProjects(projects);
  const [activeSlug, setActiveSlug] = useState(ordered[0]?.slug ?? "");
  const [instant, setInstant] = useState(true);
  const [fromKeyboard, setFromKeyboard] = useState(false);
  const hasInspected = useRef(false);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const chipsReady = useRef(false);
  const chipsScroller = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const active = ordered.find((project) => project.slug === activeSlug) ?? ordered[0];

  function select(slug: string, source: "pointer" | "keyboard") {
    if (slug === activeSlug) return;

    if (source === "keyboard" || shouldReduceMotion) {
      setInstant(true);
    } else if (hasInspected.current) {
      setInstant(true);
    } else {
      setInstant(false);
      hasInspected.current = true;
    }

    setFromKeyboard(source === "keyboard");
    setActiveSlug(slug);
  }

  useEffect(() => {
    if (!chipsReady.current) {
      chipsReady.current = true;
      return;
    }
    const chip = chipRefs.current[activeSlug];
    if (!chip) return;
    chip.scrollIntoView({
      behavior: shouldReduceMotion ? "instant" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeSlug, shouldReduceMotion]);

  useEffect(() => {
    const el = chipsScroller.current;
    if (!el || shouldReduceMotion) return;

    let cancelled = false;
    let rewind = 0;
    const stop = () => {
      cancelled = true;
    };
    el.addEventListener("pointerdown", stop, { passive: true });

    const peek = window.setTimeout(() => {
      if (cancelled || el.clientWidth < 8) return;
      const extra = el.scrollWidth - el.clientWidth;
      if (extra < 16) return;
      el.scrollTo({ left: Math.min(64, extra), behavior: "smooth" });
      rewind = window.setTimeout(() => {
        if (cancelled) return;
        el.scrollTo({ left: 0, behavior: "smooth" });
      }, 520);
    }, 700);

    return () => {
      cancelled = true;
      window.clearTimeout(peek);
      window.clearTimeout(rewind);
      el.removeEventListener("pointerdown", stop);
    };
  }, [shouldReduceMotion]);

  if (!active) return null;

  const stageDuration = shouldReduceMotion || instant ? 0 : 0.2;
  const indicatorTransition =
    shouldReduceMotion || fromKeyboard
      ? { duration: 0 }
      : { type: "spring" as const, bounce: 0.15, duration: 0.3 };

  const index = ordered.findIndex((project) => project.slug === active.slug) + 1;

  return (
    <div className="mt-14 lg:mt-16">
      <div className="sticky top-3 z-20 -mx-6 mb-6 bg-background/80 px-6 py-2 backdrop-blur-xl lg:hidden">
        <div
          ref={chipsScroller}
          role="tablist"
          aria-label="Cases"
          className="works-chips"
        >
          {ordered.map((project, i) => {
            const isActive = project.slug === active.slug;

            return (
              <button
                key={project.slug}
                ref={(node) => {
                  chipRefs.current[project.slug] = node;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="works-stage"
                className={`works-chip relative rounded-full px-3.5 py-2 text-sm font-medium ${press} ${
                  isActive ? "" : "text-foreground/55"
                }`}
                style={isActive ? { color: "var(--background)" } : undefined}
                onClick={() => select(project.slug, "pointer")}
              >
                {isActive && (
                  <motion.span
                    layoutId="works-chip"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", bounce: 0.15, duration: 0.3 }
                    }
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">
                  <span className="mr-1.5 font-mono text-[0.65rem] tabular-nums opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {chipLabel(project)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-[18.5rem_minmax(0,1fr)] lg:gap-16">
        <ol className="hidden space-y-1 lg:block">
          {ordered.map((project, i) => {
            const isActive = project.slug === active.slug;

            return (
              <li key={project.slug} className="works-index-row">
                <Link
                  href={`/works/${project.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  onPointerEnter={() => {
                    if (hasFinePointer()) select(project.slug, "pointer");
                  }}
                  onFocus={() => select(project.slug, "keyboard")}
                  className={`group relative flex w-full items-baseline gap-3 rounded-xl px-3 py-3 text-left ${press}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="works-index"
                      className="absolute inset-0 -z-10 rounded-xl bg-foreground/[0.045]"
                      transition={indicatorTransition}
                    />
                  )}
                  <span className="w-5 shrink-0 font-mono text-xs tabular-nums text-foreground/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block truncate text-sm font-medium transition-colors duration-150 [transition-timing-function:var(--ease-out)] ${
                        isActive
                          ? "text-foreground"
                          : "text-foreground/50 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-foreground/80"
                      }`}
                    >
                      {project.title}
                    </span>
                    <span className="mt-0.5 block truncate font-mono text-xs text-foreground/35">
                      {project.type}
                      {project.featured ? " · Spotlight" : ""}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>

        <div
          id="works-stage"
          role="tabpanel"
          className="relative overflow-hidden rounded-2xl border border-muted px-6 py-8 sm:px-10 sm:py-12 lg:min-h-[32rem]"
          aria-live="polite"
          aria-labelledby={`works-case-${active.slug}`}
        >
          <motion.div
            key={active.slug}
            initial={
              shouldReduceMotion || instant
                ? false
                : { opacity: 0, filter: "blur(2px)", transform: "scale(0.98)" }
            }
            animate={{ opacity: 1, filter: "blur(0px)", transform: "scale(1)" }}
            transition={{ duration: stageDuration, ease: easeOut }}
            className="relative"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 -right-2 font-mono text-[6.5rem] leading-none font-medium text-foreground/[0.055] select-none sm:text-[8.5rem]"
            >
              {String(index).padStart(2, "0")}
            </span>

            <p className="font-mono text-xs uppercase tracking-widest text-foreground/45">
              {active.type}
            </p>
            <h2
              id={`works-case-${active.slug}`}
              className="mt-3 max-w-lg text-3xl font-medium tracking-tight text-balance sm:text-4xl"
            >
              {active.title}
            </h2>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-foreground/40">
              {active.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className="mt-8 max-w-lg text-pretty text-foreground/70">{active.problem}</p>
            <p className="mt-4 max-w-lg text-pretty text-sm text-foreground/50">{active.outcome}</p>
            <Link
              href={`/works/${active.slug}`}
              className={`group/cta mt-10 inline-flex items-center gap-1.5 text-sm font-medium ${press}`}
            >
              Read the case
              <span
                aria-hidden
                className="transition-transform duration-160 [transition-timing-function:var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:group-hover/cta:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
