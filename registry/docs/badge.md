---
name: badge
title: Badge
type: registry:ui
group: ui
description: "A short label for a state or a kind in 12px capitals, square: the quiet fill (the site's chosen filter chip), the plate, a hairline, or a red wash. A small white or mid dot can lead it."
use_for: "A filter's chosen option, a role's department, a state beside a title."
never:
  - "A color as the badge's fill or dot: the brand is monochrome"
  - "Color alone for the meaning: the word says it"
  - "Sentences in a badge"
source: "The site's filter chips (components/careers-section.tsx, about-view.tsx: 12px capitals on white at 10%) and the 404 page's dot before its link. shadcn's badge for variants."
files:
  - react/components/ui/Badge.tsx
examples:
  - "Variants | Variants and dots | center"
---
