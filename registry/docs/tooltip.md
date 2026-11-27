---
name: tooltip
title: Tooltip
type: registry:ui
group: ui
description: "A control's name, for icon buttons: a white fill with black caption text and the small corner. It waits 300ms under the pointer, shows at once on keyboard focus, and the next one in a row shows at once."
use_for: "Naming icon buttons in a row of tools: save, copy link, download. The button still carries its aria-label."
never:
  - "Anything someone needs to read or act on: put it on the page"
  - "A tooltip on a button that already shows its label"
  - "Showing on touch: a tap presses the button"
source: "shadcn's tooltip, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Tooltip.tsx
examples:
  - "Tools | Icon buttons in a row | center"
---
