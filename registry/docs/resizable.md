---
name: resizable
title: Resizable
type: registry:ui
group: ui
description: "Two panes and the hairline (white at 20%) between them. The hairline is the handle: it turns white under the pointer, while dragged and when focused, and can carry a small grip. Arrow keys move it too. A pane that overflows scrolls with fading edges."
use_for: "A list beside the thing that is open (boards and a work), or results over notes, where people want to choose how much room each gets."
never:
  - "A thick or colored divider: the hairline is the handle"
  - "Panes that can close to nothing: set a minimum"
  - "Easing on the drag: the split follows the hand"
source: "shadcn's resizable, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Resizable.tsx
examples:
  - "Panes | Side by side, with a grip | center"
  - "Vertical | One over the other | center"
---
