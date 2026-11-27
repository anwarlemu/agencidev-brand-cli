---
name: accordion
title: Accordion
type: registry:ui
group: ui
description: "A stack of disclosures on black: neutral hairlines between the rows, an ABC Diatype question, a muted answer that opens in place and a chevron that turns. One open at a time, or several."
use_for: "Questions on a contact or help page, filters a person opens one by one, settings that would crowd a view."
never:
  - "Hiding the one thing a person came for: put it on the page"
  - "A #141414 card per row: rows are hairlines on black"
  - "A chevron that moves on hover"
source: "shadcn's accordion, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Accordion.tsx
  - react/components/ui/AccordionItem.tsx
examples:
  - "Faq | Questions | center"
  - "Multiple | Several open | center"
---
