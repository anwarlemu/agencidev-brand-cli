---
name: carousel
title: Carousel
type: registry:ui
group: ui
description: "Slides in a row on the black ground, 16px apart, one to three in view, with ghost arrow buttons and the place in tabular figures. Native scroll snap: a swipe, a trackpad, the arrows and the arrow keys all move it. It never plays on its own. The track's edges fade while there are slides past them."
use_for: "A row of recent work or quotes that would crowd the page side by side. One slide in view on phones."
never:
  - "Autoplay"
  - "Icons that move when the arrows are hovered"
  - "Dots in colors: the place reads in figures"
  - "Hiding the only copy of something important on a later slide"
source: "shadcn's carousel, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Carousel.tsx
examples:
  - "Work | Saved work, three in view"
  - "Quotes | One at a time | center"
---
