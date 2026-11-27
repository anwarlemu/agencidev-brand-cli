---
name: statement
title: Statement
type: registry:ui
group: site
description: "The homepage statement: a stat line in white with its figure in mid, then one statement at the display step in two tones, the lead in white running on into the rest in mid, left aligned across the page."
use_for: "The foot of a home page's first screen (under the work rail), or a section's argument in one sentence."
never:
  - "A second size for the rest: one size, two tones"
  - "Bold or italic for emphasis"
source: "app/page.tsx and lib/home-content.ts (HOME_STATEMENT lead and rest), the stat line over it (text-sml, its figure in mid), globals.css --text-size-lg (28, 36 from 640)."
files:
  - react/components/site/Statement.tsx
examples:
  - "Home | With the stat line | bleed"
---
