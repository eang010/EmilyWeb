---
name: Emily Ang
description: A quiet project index — left rail, work grid, contact in the corner.
colors:
  ink: "#121212"
  paper: "#ffffff"
  quiet: "#595959"
  hairline: "#e6e6e6"
  plate-1: "#e8e8e8"
  plate-2: "#f3f3f3"
  plate-3: "#dcdcdc"
typography:
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  nav:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.01em"
  display:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  rail: "240px"
  inset: "36px"
  gutter: "36px"
components:
  nav-link:
    textColor: "{colors.quiet}"
    typography: "{typography.nav}"
    padding: "0"
  nav-link-active:
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    padding: "0"
  project-caption:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "10px 0 0"
---

# Design

## Direction contract

**THESIS:** The work is the homepage. A fixed left rail and a project grid carry the site, refusing the centered hero, floating pill nav, and a services pitch.

**OWN-WORLD:** White paper, black ink, IBM Plex Sans. A small EA monogram, Projects and About stacked in the rail, and LinkedIn plus a mail mark pinned bottom-left. The index is a 16:9 grid with the title under each frame.

**STORY:** A recruiter or client sees the work first, opens a case, and reaches Emily from the corner without hunting for a contact page.

**FIRST VIEWPORT:** Monogram and nav at the top of the left rail. Project covers fill the remaining width. LinkedIn and mail sit bottom-left; the mail mark slides the address out to the right.

**FORM:** Pinned to [pennybanks.com](https://pennybanks.com/). No concept roll. Sketchbook and Services are omitted.

## Overview

Emily Ang’s site is a project index in the manner of a studio portfolio: the interface stays still so the work can be scanned. Light is daylight on a white page. The only motion that matters is the mail mark opening to the address.

## Colors

Ink `#121212` on paper `#ffffff`. Quiet text `#595959` is for inactive nav and secondary lines. Hairline `#e6e6e6` separates case-study sections. Project plates are flat grays (`#e8e8e8`, `#f3f3f3`, `#dcdcdc`, `#ebebeb`, `#f6f6f6`, `#e3e3e3`) until real photographs replace them. No hue accent.

## Typography

IBM Plex Sans, 400 for reading and 500 for a section name. Nav is 14px. Captions and the revealed email are 13px. Body and case-study columns are 15px. One face everywhere, including dates.

## Layout

Fixed left rail, 240px, from the `lg` breakpoint up. Logo inset 40px from the top and left of the rail. Nav stacked under it: Projects, About. Main column is inset 36px from the rail and the viewport edges. The project index is 1 column, 2 from `sm`, 3 from `xl`, with a 36px gutter. Below `lg`, a top bar holds the monogram and Menu; the contact marks stay bottom-left.

Case studies place the title, then three columns (problem, role, decisions), then outcome, a hairline, and the cover. About is a single reading column: intro, experience, tools, education.

## Elevation & Depth

Flat. No shadows, no blur, no raised cards. Separation is whitespace and the hairline.

## Shapes

Square corners. Project frames are 16:9 and cropped flush. Icons are naked glyphs, not circled buttons.

## Components

- **Monogram:** geometric EA, ink, links home.
- **Nav:** inactive quiet, active ink. Projects is active on `/` and `/works/*`.
- **Project tile:** cover, then the title underneath. Hover drops the cover to 80% opacity.
- **Contact marks:** bottom-left. LinkedIn opens the profile. The mail glyph slides the address out to the right on hover, focus, or tap. The address is a mailto link.
- **Case study:** title, tags, optional live link, four written sections, cover.

## Do's and Don'ts

- Do keep the rail, the grid, and the corner contact as the whole chrome.
- Do leave real project photographs as the covers when they exist.
- Don't add Sketchbook, Services, a hero, a pill nav, or a floating theme toggle.
- Don't put the email behind a modal. It slides out beside the mail mark.
