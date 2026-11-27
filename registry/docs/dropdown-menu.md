---
name: dropdown-menu
title: Dropdown menu
type: registry:ui
group: ui
description: "A button that opens a short list of actions or choices on the overlay surface (#141414): a neutral hairline, square corners, rows that take a #141414 fill under the pointer. Arrows, Home, End, Escape and Tab are handled."
use_for: "A project's actions, a sort order, account actions: a handful of choices that don't need to stay on screen. Radio rows for one choice from a few."
never:
  - "Writing your own outside-click or arrow handling"
  - "A shadow under the panel: the hairline and the #141414 fill set it apart"
  - "A color for a row or its marker"
  - "Two or three views of one thing (use tabs)"
source: "shadcn's dropdown menu, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/DropdownMenu.tsx
  - react/components/ui/MenuItem.tsx
  - react/components/ui/MenuLabel.tsx
  - react/components/ui/MenuSeparator.tsx
examples:
  - "Actions | A work's actions | center"
  - "Sort | Radio rows | center"
---

`MenuItem`, `MenuLabel` and `MenuSeparator` are the rows of every menu here (the context menu uses them too); they are
also exported under shadcn's names (`DropdownMenuItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`).
