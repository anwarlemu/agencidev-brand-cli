---
name: data-table
title: Data table
type: registry:ui
group: ui
description: "A table people filter, sort and page through: a dropdown per filter, heads in capitals that sort, 40px rows on neutral hairlines that take the #141414 fill under the pointer, numbers in tabular figures, Previous and Next under it. It scrolls sideways with fading edges inside the frame."
use_for: "A studio's projects, a client's screens, a team's hours: rows of one kind of thing that people narrow and order."
never:
  - "Zebra stripes or a shadow: hairlines separate rows"
  - "Bold heads: ABC Diatype capitals, not tracked"
  - "A color for a sorted column or a picked filter"
  - "A table wider than the page without its own scroll"
source: "shadcn's data table, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/DataTable.tsx
examples:
  - "Projects | A studio's projects"
---
