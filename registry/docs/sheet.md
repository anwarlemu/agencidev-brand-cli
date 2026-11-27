---
name: sheet
title: Sheet
type: registry:ui
group: ui
description: "A modal panel at an edge of the screen: the card's #141414 fill with a hairline on its inner edge, an Agencidev Sans title, the body scrolling on its own and buttons at the foot. It slides in on the drawer curve; Escape closes it at once. The body's edges fade while there is more to scroll."
use_for: "Details, filters or settings beside what someone is doing: a list's filters, a client's details. Right is the default; left, top and bottom when the layout asks for it."
never:
  - "A short question or a confirmation: use Dialog or Alert Dialog"
  - "A shadow or a glow: the fill, the hairline and the scrim set it apart"
  - "Two sheets open at once"
source: "shadcn's sheet, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Sheet.tsx
examples:
  - "Filters | Filters at the right edge"
  - "Sides | The four sides"
---
