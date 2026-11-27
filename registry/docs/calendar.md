---
name: calendar
title: Calendar
type: registry:ui
group: ui
description: "A month to pick a day from: 40px day cells with square corners, the picked day on the plate with a white figure, today in a neutral hairline ring, the months either side faint. Arrows, Home, End and Page Up and Down move; Enter picks."
use_for: "Picking a kickoff, a launch day or a review on a page with room for the month. In a field, use the date picker."
never:
  - "A color for the picked day or today"
  - "Animating the change of month: it is pressed many times in a row"
  - "A calendar where a typed date would do (a birthday)"
source: "shadcn's calendar, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Calendar.tsx
examples:
  - "Single | A launch day | center"
  - "Window | Bounds, Monday start and blocked days | center"
---
