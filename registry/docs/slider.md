---
name: slider
title: Slider
type: registry:ui
group: ui
description: "A value on a range: a 4px white at 20% track, white up to the value, and a white thumb with the small corner. It follows the hand without easing."
use_for: "A rough value where the range matters more than the digit: how long a project ran, a share, hours per week. Show the value beside it."
never:
  - "Exact values a person would rather type: use Input"
  - "A round, glowing or growing thumb"
  - "Animating the thumb: it follows the hand"
source: "shadcn's slider, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Slider.tsx
examples:
  - "Filter | As a filter | center"
  - "States | States | center"
---
