"use client";

import { motion, useReducedMotion, useTransform, type MotionValue } from "motion/react";

// 4 stages, evenly spaced across the scroll range 0-4.
const anchors = [0, 4 / 3, 8 / 3, 4];

function useStageStyle(progress: MotionValue<number>, index: number) {
  const opacityOutput = anchors.map((_, i) => (i === index ? 1 : 0));
  const scaleOutput = anchors.map((_, i) => (i === index ? 1 : 0.92));
  const opacity = useTransform(progress, anchors, opacityOutput);
  const scale = useTransform(progress, anchors, scaleOutput);
  return { opacity, scale };
}

function Seedling() {
  return (
    <>
      <path d="M60,200 C59,192 58,185 60,178" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M60,182 C54,178 50,180 47,186" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M60,182 C66,178 70,180 73,186" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  );
}

function SmallPlant() {
  return (
    <>
      <path d="M60,200 C58,175 57,150 59,120" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M59,165 C50,158 44,160 40,168" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M59,165 C68,158 74,160 78,168" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M59,135 C52,130 47,132 44,138" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M59,135 C66,130 71,132 74,138" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  );
}

function BuddingPlant() {
  return (
    <>
      <path d="M60,200 C58,160 56,120 58,80" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M58,150 C46,142 38,144 32,152" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M58,150 C70,142 78,144 84,152" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M58,110 C48,104 42,106 38,112" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M58,110 C68,104 74,106 78,112" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />

      <circle cx="32" cy="150" r="4" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="24" cy="146" r="2.2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="38" cy="144" r="2.2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="30" cy="142" r="2.2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="36" cy="154" r="2.2" fill="currentColor" fillOpacity="0.7" />

      <circle cx="78" cy="110" r="4" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="70" cy="106" r="2.2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="84" cy="104" r="2.2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="76" cy="102" r="2.2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="82" cy="114" r="2.2" fill="currentColor" fillOpacity="0.7" />
    </>
  );
}

function SmallTree() {
  return (
    <>
      <path d="M60,200 C58,150 55,90 58,45" stroke="currentColor" strokeWidth="3.2" fill="none" strokeLinecap="round" />

      <path d="M58,120 C45,110 30,100 25,88" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="86" r="7" fill="currentColor" fillOpacity="0.75" />
      <circle cx="14" cy="80" r="5" fill="currentColor" fillOpacity="0.55" />
      <circle cx="30" cy="76" r="5" fill="currentColor" fillOpacity="0.55" />
      <circle cx="20" cy="96" r="4.5" fill="currentColor" />

      <path d="M58,95 C70,85 82,78 90,66" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="91" cy="64" r="7" fill="currentColor" fillOpacity="0.75" />
      <circle cx="100" cy="58" r="5" fill="currentColor" fillOpacity="0.55" />
      <circle cx="86" cy="54" r="5" fill="currentColor" fillOpacity="0.55" />
      <circle cx="96" cy="74" r="4.5" fill="currentColor" />

      <path d="M58,62 C50,58 46,52 45,46" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="45" cy="44" r="4" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="39" cy="41" r="2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="49" cy="39" r="2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="42" cy="38" r="2" fill="currentColor" fillOpacity="0.7" />
    </>
  );
}

export default function GrowingTree({
  progress,
  className,
}: {
  // 0 -> seedling, 4 -> small tree with flowers and fruit.
  progress: MotionValue<number>;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const seedling = useStageStyle(progress, 0);
  const smallPlant = useStageStyle(progress, 1);
  const budding = useStageStyle(progress, 2);
  const tree = useStageStyle(progress, 3);

  return (
    <svg
      viewBox="0 0 120 200"
      className={className}
      aria-hidden="true"
      style={{ color: "var(--foreground)" }}
    >
      <line
        x1="30"
        y1="200"
        x2="90"
        y2="200"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeLinecap="round"
      />

      {shouldReduceMotion ? (
        <SmallTree />
      ) : (
        <>
          <motion.g style={seedling}>
            <Seedling />
          </motion.g>
          <motion.g style={smallPlant}>
            <SmallPlant />
          </motion.g>
          <motion.g style={budding}>
            <BuddingPlant />
          </motion.g>
          <motion.g style={tree}>
            <SmallTree />
          </motion.g>
        </>
      )}
    </svg>
  );
}
