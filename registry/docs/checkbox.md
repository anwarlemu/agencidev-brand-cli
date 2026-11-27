---
name: checkbox
title: Checkbox
type: registry:ui
group: ui
description: "A yes or no that is part of a form: a 16px box in a hairline (white at 20%) on black that fills white with a black check, a bar for a group partly on, and an ABC Diatype label beside it. Form-associated."
use_for: "Filters a person combines, consent in a form, picking rows. A setting that takes effect at once is a switch."
never:
  - "A color for the checked box"
  - "A checkbox that acts at once without a form or an apply step"
  - "Faded labels for disabled: they go to the faint neutral"
source: "shadcn's checkbox, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Checkbox.tsx
examples:
  - "States | States | center"
  - "Group | A filter group | center"
---
