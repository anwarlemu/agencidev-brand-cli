---
name: spinner
title: Spinner
type: registry:ui
group: ui
description: "Work with no known end: a quarter arc in the color around it, white on black, turning on a white at 20% ring at a constant speed. With reduced motion it breathes instead of turning."
use_for: "A search, a save or a load that takes more than a moment, beside the words that say what is happening or inside the busy button."
never:
  - "A spinner where the shape of the content is known: use Skeleton"
  - "Progress that can be counted: use Progress"
  - "A colored or glowing spinner"
  - "A blank screen with only a spinner"
source: "shadcn's spinner, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Spinner.tsx
examples:
  - "States | Where it goes | center"
---
