---
name: menubar
title: Menubar
type: registry:ui
group: ui
description: "Menu triggers in a row: a black strip in a hairline with square corners, triggers in ABC Diatype, each opening a panel of rows in the card's #141414 fill. Arrow keys move along the bar and through the rows."
use_for: "A tool's commands grouped under a few words, as in an editor: a board's actions, its view, its sharing. Three to five menus."
never:
  - "Site or app navigation: use the Sidebar or Navigation Menu"
  - "One menu alone: use Dropdown Menu"
  - "A colors for the open trigger: it takes the #141414 fill"
source: "shadcn's menubar, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Menubar.tsx
  - react/components/ui/MenubarMenu.tsx
  - react/components/ui/MenubarItem.tsx
  - react/components/ui/MenubarLabel.tsx
  - react/components/ui/MenubarSeparator.tsx
examples:
  - "Board | A board's tools"
---
