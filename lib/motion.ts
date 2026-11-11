export const press = "transition-transform duration-100 active:scale-[0.97]";

export const glass =
  "border border-foreground/10 bg-background/50 shadow-lg shadow-black/10 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-inset ring-foreground/5";

/** Apple-style liquid glass — specular edge, deep blur, soft refraction tint. */
export const liquidGlass = "liquid-glass";

// Strong, intentional ease-out — the built-in CSS/tween easings are too weak.
export const easeOut = [0.23, 1, 0.32, 1] as const;
