---
name: textarea
title: Textarea
type: registry:ui
group: ui
description: "Several lines of text, drawn as the input is: a hairline (white at 20%) on black that turns white on focus, ABC Diatype, square corners. It grows by hand downward."
use_for: "Text longer than a line: a project brief, a note on a screen, feedback. Label it, and say under it what the text is for."
never:
  - "A one-line answer: use Input"
  - "A red hairline before anything is wrong"
  - "Under 16px on phones (it switches to 16px there)"
source: "shadcn's textarea, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Textarea.tsx
examples:
  - "Brief | With a label | center"
  - "Invalid | Invalid | center"
---
