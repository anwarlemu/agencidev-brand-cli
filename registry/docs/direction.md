---
name: direction
title: Direction
type: registry:ui
group: ui
description: "Sets the reading direction for what is inside it, so logical spacing and the components follow right-to-left text. Code stays left to right."
use_for: "An interface in Arabic or Hebrew, or one block of right-to-left text inside a left-to-right page."
never:
  - "Mirroring the logo"
  - "Flipping code, IDs or numbers"
source: "shadcn's direction, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Direction.tsx
examples:
  - "Rtl | Left to right and right to left | center"
---
