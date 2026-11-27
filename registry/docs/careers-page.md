---
name: careers-page
title: Careers page
type: registry:block
group: pages
description: "The careers page template from library items: the page head in two tones and the openings with their department filter."
use_for: "A careers page. Edit lib/pages/careers.ts or pass `content`; `sections` reorders or leaves sections out."
never:
  - "New colors, shadows, radii or type sizes added to a section: use the items' props"
  - "People, clients or quotes you have no right to show: the defaults are Acme"
  - "A second plate button in a view"
source: "Built from the library's site items, after the site's components/careers-view.tsx, careers-section.tsx."
files:
  - react/components/pages/CareersPage.tsx
  - lib/pages/careers.ts
examples:
  - "Page | Careers page | bleed"
---
