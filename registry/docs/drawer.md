---
name: drawer
title: Drawer
type: registry:ui
group: ui
description: "A panel that slides in from an edge over a black scrim, on the overlay surface (#141414): from the bottom with square corners on its top edge and a grab handle, or from the left or right at full height. The body's edges fade while there is more to scroll."
use_for: "A choice or a short list on a phone (a discipline, a sort, the pages), where a dropdown would be cramped. The scrim, Escape and the close button close it."
never:
  - "A long form: use a page"
  - "A shadow on its edge: the hairline sets it apart"
  - "Corners on the edge it slides from"
source: "shadcn's drawer, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Drawer.tsx
examples:
  - "Format | From the bottom | center"
  - "Navigation | From the left | center"
---
