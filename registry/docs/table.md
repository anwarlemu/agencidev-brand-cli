---
name: table
title: Table
type: registry:ui
group: ui
description: "Rows of one kind of thing on black: heads as capital labels in muted ABC Diatype, cells in ABC Diatype 14px, a hairline (white at 20%) between rows and the ghost fill under the pointer. Framed, it sits in a hairline box with square corners. It scrolls sideways with fading edges inside the frame."
use_for: "Projects, clients, hours with a few columns to compare. Numbers right-aligned in tabular figures; a total in the footer; a caption under it."
never:
  - "A table for one record: use Item or a card"
  - "Zebra stripes, colored rows or shadows: the hairline separates"
  - "A scroll box a keyboard can't reach: give a framed table a label"
  - "Bold heads: labels are regular capitals"
source: "shadcn's table, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Table.tsx
examples:
  - "Projects | Boards with a total"
  - "Clients | Framed with actions"
---
