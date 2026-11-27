---
name: select
title: Select
type: registry:ui
group: ui
description: "One choice from a short list, drawn as the field is: a black field, a hairline that turns white while open, a chevron. The list opens in the card's #141414 panel, the chosen row checked. A long list scrolls with fading edges."
use_for: "Picking one of a few known values in a form or a filter: a platform, an order, a plan. Label it as any field."
never:
  - "A list that needs a filter: use Combobox"
  - "Options that do something at once: use Dropdown Menu"
  - "A colored or glowing focus ring: the hairline turns white"
source: "shadcn's select, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Select.tsx
examples:
  - "Filters | Two filters"
---
