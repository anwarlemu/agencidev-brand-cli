---
name: alert
title: Alert
type: registry:ui
group: ui
description: "A note or a problem in a #141414 box on black: a Lucide icon, the subject in ABC Diatype, a muted line under it and the button that goes with it. Red for what broke."
use_for: "A plan note, a failed payment, a search that needs a change: one box per message, with the action that settles it."
never:
  - "A colors fill or a glow"
  - "A border or a shadow around the box"
  - "Red for anything that did not break"
  - "Several messages in one box"
source: "shadcn's alert, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Alert.tsx
examples:
  - "Variants | Variants | center"
---
