---
name: home-page
title: Home page
type: registry:block
group: pages
description: "The home page template from library items: the bar, the rail of work across the first screen, and the statement at its foot with the stat line over it."
use_for: "A studio or product home page whose work carries the argument. Pass your pictures as `content.rail`. Edit lib/pages/home.ts or pass `content`; `sections` reorders or leaves sections out."
never:
  - "New colors, shadows, radii or type sizes added to a section: use the items' props"
  - "People, clients or quotes you have no right to show: the defaults are Acme"
  - "A second plate button in a view"
source: "Built from the library's site items, after the site's app/page.tsx, components/home-gallery.tsx, lib/home-content.ts."
files:
  - react/components/pages/HomePage.tsx
  - lib/pages/home.ts
examples:
  - "Page | Home page | bleed"
---
