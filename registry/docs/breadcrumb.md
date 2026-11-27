---
name: breadcrumb
title: Breadcrumb
type: registry:ui
group: ui
description: "Where you are, in ABC Diatype: each step back a muted link that turns white under the pointer, a small chevron between, the page itself in white."
use_for: "A work inside a board, a setting inside a section: two or more levels deep."
never:
  - "A breadcrumb on a page one level deep"
  - "Spectrum colors for the links"
  - "Icons that move on hover"
source: "shadcn's breadcrumb, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Breadcrumb.tsx
examples:
  - "Board | A work in a board | center"
---
