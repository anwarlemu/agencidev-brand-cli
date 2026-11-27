---
name: progress
title: Progress
type: registry:ui
group: ui
description: "How far a task has got: a white bar on a 6px track of white at 20%, with round ends, sliding to each new value on transform. Without a value, a short bar sweeps across at a steady pace."
use_for: "An import, an upload or a scan that can be counted, with the number in text beside it; a long build with no known end."
never:
  - "Percentages with no label or number beside the bar"
  - "A striped, glowing or colored bar"
  - "Work that ends in under a second: show nothing"
source: "shadcn's progress, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Progress.tsx
examples:
  - "Import | Counted and open-ended | center"
---
