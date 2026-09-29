"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import GrowingTree from "@/components/GrowingTree";
import { experiences } from "@/data/experience";

export default function WorkExperienceTree() {
  const listRef = useRef<HTMLUListElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.4"],
  });
  // Reversed: full tree at the top (most recent role), seedling at the
  // bottom (oldest) — matches the descending, most-recent-first order.
  // Reads live off scroll position, so scrolling back up naturally reverses it.
  const progress = useTransform(scrollYProgress, [0, 1], [4, 0]);

  return (
    <div className="mt-16">
      <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
        Work experience
      </h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-[140px_1fr] sm:gap-10">
        <GrowingTree
          progress={progress}
          className="fixed bottom-6 left-4 z-30 w-20 sm:static sm:bottom-auto sm:left-auto sm:z-auto sm:w-28 sm:sticky sm:top-24"
        />
        <ul ref={listRef} className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.role}
              viewport={{ once: true, amount: 0.6 }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="border-b border-muted pb-8"
            >
              <div className="flex flex-wrap justify-between gap-2">
                <div>
                  <p className="font-medium">{exp.role}</p>
                  <p className="text-sm text-foreground/60">{exp.company}</p>
                </div>
                <p className="font-mono text-xs text-foreground/40">{exp.period}</p>
              </div>
              <p className="mt-3 max-w-xl text-sm text-foreground/60">
                {exp.description.map((part) => part.text).join("")}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
