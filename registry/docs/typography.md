---
name: typography
title: Typography
type: registry:ui
group: ui
description: "The brand's type scale as one part. Agencidev Sans for titles, ABC Diatype for text, Medium for small, labels in regular capitals, the system mono for code. Every variant is a type utility from the tokens."
use_for: "Any text: page and card titles, a lead under a hero, body copy, captions, the capital label over a field or a list, inline code. Pick the step by role, not by look."
never:
  - "A size, weight or line height outside the scale: every step comes from tokens.css"
  - "Bold or semibold: Agencidev Sans runs at Regular, ABC Diatype at Regular and Medium"
  - "Capitals anywhere but labels and buttons, or tracking on them: the site's capitals are not tracked"
  - "Agencidev Sans for body text, or ABC Diatype for titles"
  - "Colors on text: type is white on black, muted in the neutral steps"
source: "shadcn's typography, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Text.tsx
examples:
  - "Scale | The scale"
  - "Article | An article"
---
