---
name: article-card
title: Article card
type: registry:ui
group: site
description: "An article in the list: the cover at 16:10 on the plate fill, the date and reading time in 14px capitals in mid, the title in white and three lines of the excerpt in dim; the whole card is the link."
use_for: "An articles index (one, two or three columns) or related reading under a post."
never:
  - "A border or a card fill around it"
  - "Tags or author faces on the card"
source: "app/articles/page.tsx (aspect-[16/10] bg-plate, mt-5 text-sml uppercase text-mid that turns white, mt-3 text-md leading-[1.25] title, line-clamp-3 text-md leading-relaxed text-dim; the grid gap-x-6 gap-y-14, 1, 2 then 3 columns)."
files:
  - react/components/site/ArticleCard.tsx
examples:
  - "Grid | Three articles | bleed"
---
