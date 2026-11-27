---
name: radio-group
title: Radio Group
type: registry:ui
group: ui
description: "One of a few, all in view: round marks in a hairline, the picked one edged in white with a white dot. Arrows move the pick."
use_for: "A pick of one from two to five choices that each need a word of explanation: who can see a board, how often to send a digest."
never:
  - "More than five options: use Native Select or Select"
  - "Views of one thing: use Tabs"
  - "A colors for the picked mark"
source: "shadcn's radio group, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/RadioGroup.tsx
examples:
  - "Visibility | With hints"
  - "Inline | In a row | center"
---
