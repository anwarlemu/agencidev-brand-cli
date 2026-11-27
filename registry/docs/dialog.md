---
name: dialog
title: Dialog
type: registry:ui
group: ui
description: "A modal window on the overlay surface (#141414) over a black scrim: an Agencidev Sans title, a line under it, a ghost close button, a short form or a partnership, and buttons at the foot."
use_for: "A short task that needs the whole attention for a moment: naming a new project, a partnership, a setting with a few fields. Escape, the close button and the scrim close it."
never:
  - "A long flow or a whole page in a window"
  - "Two primary buttons in the foot"
  - "A shadow or a glow around the window"
  - "Opening one with the page"
source: "shadcn's dialog, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Dialog.tsx
examples:
  - "NewProject | A short form | center"
  - "Partnership | Buttons at the foot | center"
---
