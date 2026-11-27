---
name: not-found-page
title: Not found page
type: registry:block
group: pages
description: "The not found page: the no-signal static filling the screen, the head centered under the band, a line in dim, and the way home with a white dot and an arrow in a ring."
use_for: "A 404 page. Edit lib/pages/not-found.ts or pass `content`; `still` holds the static."
never:
  - "New colors, shadows, radii or type sizes added to a section: use the items' props"
  - "People, clients or quotes you have no right to show: the defaults are Acme"
  - "A second plate button in a view"
source: "Built from the library's site items, after the site's components/no-signal-404.tsx."
files:
  - react/components/pages/NotFoundPage.tsx
  - lib/pages/not-found.ts
examples:
  - "Page | Not found page | bleed"
---
