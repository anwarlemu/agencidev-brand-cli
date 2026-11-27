---
name: case-study-page
title: Case study page
type: registry:block
group: pages
description: "A case study template from library items: the client's name with its live link, then the work in masonry columns."
use_for: "A case study whose work carries the argument. Edit lib/pages/case-study.ts or pass `content`; `sections` reorders or leaves sections out."
never:
  - "New colors, shadows, radii or type sizes added to a section: use the items' props"
  - "People, clients or quotes you have no right to show: the defaults are Acme"
  - "A second plate button in a view"
source: "Built from the library's site items, after the site's components/case-wall.tsx, app/work/[slug]/page.tsx."
files:
  - react/components/pages/CaseStudyPage.tsx
  - lib/pages/case-study.ts
examples:
  - "Page | Case study page | bleed"
---
