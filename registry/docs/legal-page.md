---
name: legal-page
title: Legal page
type: registry:block
group: pages
description: "A legal page template from library items: the title in white and when it changed in mid, then titled rows of dim running copy."
use_for: "Privacy, terms and accessibility statements. Edit lib/pages/legal.ts or pass `content`; `sections` reorders or leaves sections out."
never:
  - "New colors, shadows, radii or type sizes added to a section: use the items' props"
  - "People, clients or quotes you have no right to show: the defaults are Acme"
  - "A second plate button in a view"
source: "Built from the library's site items, after the site's app/privacy/page.tsx, app/accessibility/page.tsx."
files:
  - react/components/pages/LegalPage.tsx
  - lib/pages/legal.ts
examples:
  - "Page | Legal page | bleed"
---
