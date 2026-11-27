---
name: command
title: Command
type: registry:ui
group: ui
description: "A box to type in over a list of actions and places, on the overlay surface (#141414): the field on top over a hairline, groups with a capital label, the menus' rows with an icon and a shortcut. On the page, or in a window opened with Cmd+K. The list scrolls with fading edges, so no row is cut off."
use_for: "Jumping anywhere and running anything from the keyboard: searches, boards, brands, settings. CommandDialog for the app-wide Cmd+K menu."
never:
  - "Motion on opening or closing: it opens many times a day"
  - "Tab between rows: the field keeps focus and the arrows move"
  - "A colors on the highlighted row"
  - "The only way to an action: keep it in the interface too"
source: "shadcn's command, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Command.tsx
  - react/components/ui/CommandDialog.tsx
examples:
  - "Menu | On the page | center"
  - "Palette | In a window with Cmd+K | center"
---

Rows are data: `groups` of `{ heading, items: [{ id, label, keywords, shortcut, icon, disabled }] }`. In the web
component, a row's icon is page content with `slot="icon-<id>"`.
