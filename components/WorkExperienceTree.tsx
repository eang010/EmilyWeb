"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import GrowingTree from "@/components/GrowingTree";

// Descending order — most recent role first. NCS's combined
// "Application Consultant/Software Engineer" title is split into its two
// halves to fill out 4 entries; the Jan 2021 split date is an estimate —
// confirm/adjust the actual transition date.
const experiences = [
  {
    role: "Digital Business Analyst (II)",
    company: "GovTech",
    period: "Apr 2025 — Present",
    description:
      "Bridging business needs with technical solutions, driving digital transformation through user-centric design and low-code development. Own end-to-end project lifecycles — stakeholder engagement, requirements gathering, prototyping, testing, and implementation. Guide stakeholders through user and service journey mapping to surface pain points and evaluate product-market fit.",
  },
  {
    role: "Digital Business Analyst (I)",
    company: "GovTech",
    period: "Feb 2023 — Apr 2025",
    description:
      "Supported the Marketing Group across high-impact, front-facing projects including VisitSingapore.com, the Singapore Tourism Awards site, and the Data Management Platform — including the GCC 2.0 cloud migration and the VS.com 3.0 revamp and launch. Led a vendor audit with zero findings, and managed vendor compliance and cross-stakeholder alignment throughout delivery.",
  },
  {
    role: "Application Consultant",
    company: "NCS Group",
    period: "Jan 2021 — Jan 2023",
    description:
      "Led cross-functional discussions to analyse business needs, assess impact and cost, and prioritise system enhancements for bespoke client systems. Used visual aids and mock-ups to bridge communication between clients and internal teams, while managing project timelines and facilitating training, UAT, and briefings.",
  },
  {
    role: "Software Engineer",
    company: "NCS Group",
    period: "Jul 2019 — Jan 2021",
    description:
      "Built full-stack features (ASP.NET C#, HTML, JavaScript, SQL) for bespoke enterprise systems, including on-premise server coordination and deployment. Reviewed code and mentored junior developers to support consistent delivery quality.",
  },
];

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
        <GrowingTree progress={progress} className="w-28 sm:sticky sm:top-24" />
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
                {exp.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
