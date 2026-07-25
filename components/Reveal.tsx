"use client";

import { motion, useReducedMotion } from "motion/react";

const tags = { div: motion.div, li: motion.li };

export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof tags;
}) {
  const shouldReduceMotion = useReducedMotion();
  const y = shouldReduceMotion ? 0 : 28;
  const Tag = tags[as];

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
