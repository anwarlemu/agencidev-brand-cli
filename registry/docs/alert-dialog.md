---
name: alert-dialog
title: Alert dialog
type: registry:ui
group: ui
description: "A question that needs an answer before anything else, on the overlay surface (#141414) over a black scrim: an Agencidev Sans title, one line saying what happens, Cancel and the action (red for what removes something)."
use_for: "Confirming what can't be undone: deleting a board, removing a teammate, canceling a plan. Say exactly what goes away."
never:
  - "Confirming what can be undone: do it and offer undo"
  - "A scrim that closes it: only a choice does"
  - "A vague action label (\"OK\", \"Yes\"): name the action (\"Delete board\")"
  - "A shadow around the window"
source: "shadcn's alert dialog, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/AlertDialog.tsx
examples:
  - "Delete | Delete a board | center"
---
