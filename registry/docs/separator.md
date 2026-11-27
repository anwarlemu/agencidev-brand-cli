---
name: separator
title: Separator
type: registry:ui
group: ui
description: "The hairline: 1px in the edge (white at 10%), across or down. Agencidev separates with a fill or a hairline, never a shadow."
use_for: "Splitting a card's head from its body, or links in a row. Decorative by default; mark it semantic when it splits content a screen reader should hear as split."
never:
  - "A shadow or a thicker rule to separate"
  - "A rule where spacing already separates"
  - "A colored or glowing line: the brand is monochrome"
source: "shadcn's separator, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Separator.tsx
examples:
  - "Profile | Across and down | center"
---
