---
name: popover
title: Popover
type: registry:ui
group: ui
description: "A panel for any content, opened from a button: the card's #141414 fill on black, a hairline and square corners. It grows from its trigger and flips to the side with room."
use_for: "A short form or a few settings beside the button that opens them: save to a board, a filter with two fields. Focus moves into it; Escape closes it and returns focus."
never:
  - "A list of actions: use Dropdown Menu"
  - "Content someone must read to go on: put it on the page"
  - "A shadow or a glow: the fill and the hairline set it apart"
source: "shadcn's popover, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Popover.tsx
  - react/components/ui/PopoverPanel.tsx
  - react/hooks/usePopover.ts
examples:
  - "Board | Save to a board | center"
---
