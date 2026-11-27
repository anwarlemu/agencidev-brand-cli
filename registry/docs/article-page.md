---
name: article-page
title: Article page
type: registry:block
group: pages
description: "An article template from library items: the way back, the title at the display step, the date and reading time in capitals, the cover at 16:10 and the body in a 36rem reading measure."
use_for: "A post or an essay. Edit lib/pages/article.ts or pass `content`; `sections` reorders or leaves sections out."
never:
  - "New colors, shadows, radii or type sizes added to a section: use the items' props"
  - "People, clients or quotes you have no right to show: the defaults are Acme"
  - "A second plate button in a view"
source: "Built from the library's site items, after the site's app/articles/[slug]/page.tsx, content/articles."
files:
  - react/components/pages/ArticlePage.tsx
  - lib/pages/article.ts
examples:
  - "Page | Article page | bleed"
---
