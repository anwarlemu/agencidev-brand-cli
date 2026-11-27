---
name: toggle-group
title: Toggle Group
type: registry:ui
group: ui
description: "Buttons that stay pressed, side by side on one track with square corners. Each pressed one is a white block with black text. On a narrow screen the track scrolls with fading edges."
use_for: "Options that are on or off together in a filter row: which formats to show, a grid size. `multiple` for several at once."
never:
  - "Views of one thing: use Tabs"
  - "Actions: use Button"
  - "A colors or a glow on the pressed block"
source: "shadcn's toggle group, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/ToggleGroup.tsx
examples:
  - "Formats | Several or one | center"
---
