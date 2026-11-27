---
name: native-select
title: Native Select
type: registry:ui
group: ui
description: "The browser's own select, drawn as the input: a hairline (white at 20%) on black that turns white on focus, square corners and a muted chevron. Phones open the system picker."
use_for: "A pick of one from a short, plain list in a form or a filter row: a platform, a date range, a sort order."
never:
  - "A list that needs search or custom rows: use Select"
  - "Options that do something at once: use Dropdown Menu"
  - "A filled or gray field on black"
source: "shadcn's native select, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/NativeSelect.tsx
examples:
  - "Filters | Filters"
  - "Sizes | Sizes | center"
---
