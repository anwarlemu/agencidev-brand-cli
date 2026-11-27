---
name: toggle
title: Toggle
type: registry:ui
group: ui
description: "A button that stays pressed: no fill or a hairline at rest, the plate with white text while it is on. Sizes match the button's."
use_for: "One option that is on or off in a row of filters or tools: product only, saved only, show comments."
never:
  - "A setting saved at once: use Switch"
  - "A pick of one from several: use Toggle Group or Tabs"
  - "A color for the pressed state"
source: "shadcn's toggle, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Toggle.tsx
examples:
  - "Toolbar | Filters | center"
  - "Sizes | Sizes | center"
---
