---
name: hover-card
title: Hover Card
type: registry:ui
group: ui
description: "More about a link while the pointer rests on it: the card's #141414 fill, a hairline and square corners. The pointer can cross into it; on touch the link just works."
use_for: "A preview of a brand, a creator or a board named in text, with a few numbers. The link must lead to the same thing on its own."
never:
  - "The only way to reach what it shows: the link must work on its own"
  - "Actions someone has to take: use Popover or Dropdown Menu"
  - "A shadow or a glow: the fill and the hairline set it apart"
source: "shadcn's hover card, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/HoverCard.tsx
examples:
  - "Brand | A brand in a sentence | center"
---
