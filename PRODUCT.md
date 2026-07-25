# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: prospective clients/employers and professional contacts (recruiters, collaborators) evaluating Emily Ang, a digital business analyst, by browsing her work and services. Secondary: Emily herself, as a personal brand/portfolio presence.

## Product Purpose

A personal website for Emily Ang to share who she is, the work she's done (case studies), and the services she offers. Revised (supersedes earlier "just browse" framing): the site has three concrete jobs — (1) let businesses/individuals reach out for business engagements, (2) showcase work for recruiters and prospective employers, (3) serve as a digital CV/resume. Credibility and memorability still matter, but there is now a real action the site must support: getting in touch and being assessed as a hire/vendor.

## Positioning

Inferred, please confirm: a business analyst who treats aesthetics and user experience as a core deliverable of the work itself, not an afterthought — the site's own design taste is meant to demonstrate this.

## Operating Context

Single personal site with five main surfaces: Landing, About, Works, Services, Contact. Persistent bottom-floating "pill" navigation (Telegram-style) across all pages. Emily will supply real content (case study text, images, work history, tools, education, resume file, contact details) later; until then, all content is placeholder. Emily returns to Claude Code for future edits (not a self-service CMS).

## Capabilities and Constraints

- Stack: Next.js + Tailwind CSS + Framer Motion, hosted on Vercel (confirmed).
- No CMS/markdown content layer — content lives in code, edited via Claude Code on request.
- Case study entries (Works page) each need: product & problem, role & contribution, key design decisions, outcome.
- Services page distinguishes two offering types: a fixed-scope productized package ("something ready") vs. a bespoke/custom engagement ("something customized").
- About page doubles as a digital CV/resume: work experience, tools, education, plus a resume download affordance (placeholder file until Emily supplies the real PDF).
- Contact surface: real reachability for business inquiries and recruiters (email/link placeholder for now) — no backend form submission built unless Emily asks for one; a mailto/contact-details approach is the lazy-correct default at this stage.

## Brand Commitments

- Name: Emily Ang. Role: Digital Business Analyst.
- Tone: minimalistic, modern, user-centric; visual taste is itself part of the pitch.
- Deliberate personality/humor is welcome in specific spots — e.g. the footer "Trusted by" section is a playful logo-carousel parody (e.g. "My best friend", "My lunch kakis") instead of real client logos.

## Evidence on Hand

Confirmed from Emily's resume (`/Users/emily/Documents/CV:Resume/EmilyAng_Resume.pdf`): contact email 3mily.ang@gmail.com; profile photo (`components/images/me-hs.jpg`); real work history and 5 real case studies on the Works page (MerliMUSE, Digital Concierge, Corporate Attraction Pass Booking System, Bill Splitter, Save the Date — the latter two have live URLs). NCS Group's combined "Application Consultant/Software Engineer" title was split into two entries to fill 4 work-experience slots; the Jan 2021 split date is estimated, not from the resume — confirm with Emily if precision matters. Resume also lists Education (NTU, ACC Institute of Human Services, Ngee Ann Polytechnic) and Skills (PSM I, AZ-900, full-stack/low-code dev, business analysis) — not yet ported into the About page's Education/Tools sections, which still show placeholder content. Project images, the actual "trusted by" list, and resume PDF download are still pending from Emily.

## Product Principles

1. Aesthetic/UX craft is treated as evidence of BA skill, not decoration — restraint over noise.
2. Minimalist, modern, calm visual language.
3. Personality-forward moments (the joke "trusted by" list) are deliberate, contained, and contrast against otherwise professional case-study rigor.
4. No pressure to convert; success is being remembered, not capturing leads.
