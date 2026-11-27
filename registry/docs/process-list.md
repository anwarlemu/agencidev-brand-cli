---
name: process-list
title: Process list
type: registry:ui
group: site
description: "The about page's process: numbered rows, each the number, a title, a white hairline at 10% and the body in mid; four columns from 1024, the body under the title below."
use_for: "How the work runs: principles, steps, phases."
never:
  - "Icons or big numerals: the number is the same size as the title"
  - "Cards around the rows"
source: "components/about-view.tsx (the process ol: grid-cols-[48px_1fr] then [48px_1fr_1fr_1fr] at lg, py-8 lg:py-10, h-px bg-white/10, text-md leading-relaxed text-mid)."
files:
  - react/components/site/ProcessList.tsx
examples:
  - "Process | Three rows | bleed"
---
