---
name: tabs
title: Tabs
type: registry:ui
group: ui
description: "Views of one thing, one at a time. The default is a segmented control: a #141414 track, the current view a white block with a black label. Line tabs sit over a hairline with a 2px white line under the current one."
use_for: "Two to six views of the same thing: kinds of work in a search, a board's sections. Arrow keys move between tabs; the panel follows."
never:
  - "Actions: use Button"
  - "More than six views: use a Select or a menu"
  - "Bold or a color on the current tab: the white block or the white line marks it"
  - "A sliding or bouncing indicator"
source: "shadcn's tabs, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Tabs.tsx
examples:
  - "Segmented | Segmented control | center"
  - "Line | Line tabs | center"
---
