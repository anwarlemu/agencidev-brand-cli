---
name: button
title: Button
type: registry:ui
group: ui
description: "The site's button: the plate (#252525) with white 12px capitals and the 4px corner for the one main action, mid with black ink under the pointer; the quiet button, bare dim capitals that turn white, for the rest; a ghost for tools in rows. Sizes and a square icon button."
use_for: "Any action: book a call, see the work, send an enquiry, save. One plate per view or asset; the rest quiet or ghost. 48px tall, as the site sets it (40px in the bar)."
never:
  - "Two primary buttons in one view"
  - "A color as a button fill"
  - "A faded button for \"not yet\": disabled keeps its fill and dims the label"
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
