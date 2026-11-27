---
name: input-group
title: Input Group
type: registry:ui
group: ui
description: "A field with an icon, a prefix, a unit or a small button inside its hairline, drawn and sized as the input is. The hairline turns white while the field has focus."
use_for: "Fields that read better with their context attached: a search icon, a link's fixed start, a currency and its period, an invite button beside an email."
never:
  - "A primary search: use the search bar"
  - "Icons that do nothing at the end of a field"
  - "More than one button inside a field"
source: "shadcn's input group, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/InputGroup.tsx
examples:
  - "Addons | Icons, text and buttons | center"
  - "Sizes | Sizes | center"
---
