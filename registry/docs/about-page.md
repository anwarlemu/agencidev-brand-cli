---
name: about-page
title: About page
type: registry:block
group: pages
description: "The about page template from library items: the bets centered in two tones of paragraph, the team's names, the process statement over numbered rows, and the openings."
use_for: "An about page that states what the studio believes, who it is and how it works. Edit lib/pages/about.ts or pass `content`; `sections` reorders or leaves sections out."
never:
  - "New colors, shadows, radii or type sizes added to a section: use the items' props"
  - "People, clients or quotes you have no right to show: the defaults are Acme"
  - "A second plate button in a view"
source: "Built from the library's site items, after the site's components/about-view.tsx."
files:
  - react/components/pages/AboutPage.tsx
  - lib/pages/about.ts
examples:
  - "Page | About page | bleed"
---
