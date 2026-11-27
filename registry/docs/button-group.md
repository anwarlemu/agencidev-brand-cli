---
name: button-group
title: Button group
type: registry:ui
group: ui
description: "Buttons that belong together, joined into one block: square corners on the outer corners only and a 1px black seam between them. A field with its button, a button with its menu arrow, or a vertical stack."
use_for: "Paging, a pair of views, share with its options, an email field with its Invite button."
never:
  - "Unrelated actions in one group"
  - "Two primary buttons in one group"
  - "A border around the whole group"
source: "shadcn's button group, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/ButtonGroup.tsx
examples:
  - "Toolbar | Toolbar | center"
  - "Field | A field and a stack | center"
---
