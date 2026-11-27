---
name: input
title: Input
type: registry:ui
group: ui
description: "A text field on black: a hairline (white at 20%) that turns white on focus, ABC Diatype, a mid (#909090) placeholder and square corners. Sizes match the button's."
use_for: "Free text in forms and filters: an email, a company, a project name. Label every field (a visible label, or aria-label)."
never:
  - "A placeholder as the only label"
  - "A colored or glowing focus ring: the hairline turns white"
  - "A filled or gray field on black"
source: "shadcn's input, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Input.tsx
examples:
  - "Field | With a label | center"
  - "Sizes | Sizes | center"
  - "Invalid | Invalid | center"
---
