---
name: label
title: Label
type: registry:ui
group: ui
description: "A field's label: ABC Diatype in capitals, in the soft gray, over the control it names. A muted hint can follow it."
use_for: "Naming a field or a control when Field's layout does not fit: a label beside a switch, over a slider, over a group of radios."
never:
  - "A placeholder in place of a label"
  - "Bold, color or a spectrum accent on a label"
  - "Sentence case or long text in a label: say it in two or three words, and put the rest in a hint under the field"
source: "shadcn's label, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Label.tsx
examples:
  - "Fields | Over fields | center"
---
