"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Mail, QrCode } from "lucide-react";
import QrModal from "@/components/QrModal";
import { glass, press, easeOut } from "@/lib/motion";

// Placeholder — replace with the real LinkedIn profile URL.
const LINKEDIN_URL = "https://www.linkedin.com/in/emily-ang";

// lucide-react no longer ships brand/social icons, hence the inline glyph.
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.14.92-2.065 2.063-2.065 1.14 0 2.064.925 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactMenu() {
  const [open, setOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: easeOut };

  return (
    <>
      <motion.div
        layout
        transition={transition}
        className={`inline-flex items-center overflow-hidden rounded-full ${glass}`}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Contact options"
          aria-expanded={open}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${press}`}
        >
          <Mail size={18} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="options"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={transition}
              className="flex items-center gap-1 pr-1.5"
            >
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${press}`}
              >
                <LinkedinIcon size={16} />
              </a>
              <button
                onClick={() => setQrOpen(true)}
                aria-label="Show digital name card QR code"
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${press}`}
              >
                <QrCode size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <QrModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </>
  );
}
