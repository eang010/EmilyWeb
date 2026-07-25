"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="h-full"
    >
      <Link
        href={`/works/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-muted"
      >
        <div className="flex aspect-video items-center justify-center bg-muted/40 text-sm text-foreground/40">
          Project image placeholder
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex flex-wrap gap-2 font-mono text-xs text-foreground/50">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="mt-1 mb-4 text-sm text-foreground/60">{project.blurb}</p>
          <span className="mt-auto w-fit self-start rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
            {project.type}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
