---
name: empty
title: Empty
type: registry:ui
group: ui
description: "What shows where a list has nothing in it yet: a dashed hairline with square corners, a Lucide icon in a #141414 tile, an Agencidev Sans title, one muted line and the actions that fill it."
use_for: "A new board, a search with no results, a list before the first item."
never:
  - "Illustrations or the no-signal static inside it"
  - "An empty state with no way forward"
  - "A colors for the icon"
source: "shadcn's empty, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Empty.tsx
examples:
  - "Board | An empty board | center"
  - "Search | No results | center"
---
