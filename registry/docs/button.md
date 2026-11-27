---
name: button
title: Button
type: registry:ui
group: ui
description: "The site's button: a white fill with a black ABC Diatype label for the one main action, the quiet secondary (the quiet fill in a white at 20% ring) for the rest, and a ghost for tools in rows; a white glow follows a mouse inside it. Three sizes and a square icon button."
use_for: "Any action: search, start a plan, explore the product, save. One primary button per view or asset; the rest secondary or ghost. 40px tall by default, 56px large (and 56px on the 1080 canvas)."
never:
  - "Two primary buttons in one view"
  - "A colors as a button fill"
  - "A faded button for \"not yet\": disabled is a the quiet fill fill with a white at 20% label"
  - "A press that scales the button: the site's buttons hold still"
  - "An icon that moves on hover, or a size change on hover"
source: "shadcn's button, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Button.tsx
examples:
  - "Variants | Variants | center"
  - "Sizes | Sizes | center"
  - "States | States and links | center"
---
