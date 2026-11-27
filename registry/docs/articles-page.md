---
name: articles-page
title: Articles page
type: registry:block
group: pages
description: "The articles page template from library items: a line in dim, then the articles in a grid of one, two or three columns."
use_for: "An articles or writing index. Edit lib/pages/articles.ts or pass `content`; `sections` reorders or leaves sections out."
never:
  - "New colors, shadows, radii or type sizes added to a section: use the items' props"
  - "People, clients or quotes you have no right to show: the defaults are Acme"
  - "A second plate button in a view"
source: "Built from the library's site items, after the site's app/articles/page.tsx."
files:
  - react/components/pages/ArticlesPage.tsx
  - lib/pages/articles.ts
examples:
  - "Page | Articles page | bleed"
---
