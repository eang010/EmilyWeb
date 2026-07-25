# Design

## Direction contract

**THESIS:** Restraint is the pitch — a calm, minimal surface where the work and the writing carry all the weight, refusing the loud gradient/glass/bento-grid default of AI-generated portfolios.

**OWN-WORLD:** Pure grayscale (revised — no color anywhere). Near-black/off-white neutrals; "accent" emphasis comes from full-opacity foreground vs. muted lower-opacity text, and from solid foreground-on-background fills (active nav state), never from hue. Geist Sans for text, Geist Mono for small meta labels (dates, tags). Generous whitespace, calm section rhythm. Persistent bottom-floating pill nav (segmented-control shape, Telegram-style), the one recurring piece of "interface" personality on an otherwise quiet page.

**STORY:** A visitor — recruiter, prospective client, or collaborator — quickly understands who Emily Ang is, sees BA case studies with real rigor (problem, role, decisions, outcome), and finds a real way to reach out or grab her CV. One moment of humor (the "Trusted by" joke marquee) breaks the seriousness without undercutting credibility.

**FIRST VIEWPORT:** Full-height hero: name, role, one-line positioning, generous top/bottom padding, nothing else competing for attention. Pill nav floats bottom-center, fixed, over a blurred backdrop, visible from the first scroll.

**FORM:** Brief was precisely specified (bottom pill nav, exact page skeleton, tone) — shaped directly, no concept tournament.

## Tokens

- **Background:** `#FAFAF9` light / `#0A0A0A` dark
- **Foreground:** `#111111` light / `#F5F5F4` dark
- **Muted/border:** `#E5E5E0` light / `#262626` dark
- **Accent:** `var(--foreground)` — grayscale, not a hue. Used as a solid fill (active nav pill/icon, inverted text) and as full-opacity text for small emphasis labels, contrasting against lower-opacity (50–70%) body copy nearby
- **Type:** Geist Sans (body/display), Geist Mono (meta labels, dates, tags)
- **Content width:** `max-w-5xl`, centered
- **Section rhythm:** generous vertical padding (`py-24 md:py-32`), one spacing scale throughout

## Nav

Fixed, bottom-center, rounded-full pill container, `backdrop-blur` + subtle border/shadow. Items: Home, About, Works, Services, Contact. Active item's background slides between segments via a shared Framer Motion `layoutId` (segmented-control feel), not a hard swap.

## Motion

- Nav active-segment: `layoutId` spring transition.
- Cards (Works grid): subtle lift/scale on hover.
- Trusted-by marquee: CSS keyframe infinite scroll, duplicated list for a seamless loop, pauses on hover, static fallback under `prefers-reduced-motion`.
- Section entrances: light fade/slide on scroll into view, once, no repeated replay.

## Content rules

All page content is placeholder until Emily supplies real copy, images, resume PDF, and contact details. Placeholders are clearly generic (no invented clients, employers, testimonials, or metrics) so nothing reads as a real claim.
