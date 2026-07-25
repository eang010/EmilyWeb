"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Copy, Check } from "lucide-react";
import { press, easeOut as ease } from "@/lib/motion";

const EMAIL = "3mily.ang@gmail.com";

export default function GetInTouch({
  variant = "solid",
}: {
  variant?: "solid" | "outline";
}) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  async function handleCopy(e: React.MouseEvent) {
    e.stopPropagation();
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const styles =
    variant === "solid"
      ? "bg-foreground text-background"
      : "border border-muted";

  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease };

  return (
    <motion.div
      layout
      className={`inline-flex items-center overflow-hidden rounded-full text-sm font-medium ${styles}`}
      transition={transition}
    >
      <button
        onClick={() => setExpanded((v) => !v)}
        className={`relative whitespace-nowrap px-5 py-2.5 ${press}`}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={expanded ? "email" : "label"}
            initial={{ x: -14, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -14, opacity: 0 }}
            transition={transition}
            className={`block ${expanded ? "font-mono" : ""}`}
          >
            {expanded ? EMAIL : "Get in touch"}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.button
            key="copy"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={transition}
            onClick={handleCopy}
            aria-label="Copy email address"
            className={`flex items-center pr-4 pl-1 ${press}`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
