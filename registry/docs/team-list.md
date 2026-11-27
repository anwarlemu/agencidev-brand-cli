---
name: team-list
title: Team list
type: registry:ui
group: site
description: "The about page's team: the names in one centered run of 14px white at line height 2 (role and place read beside each); under 640 a list with role and place in dim."
use_for: "The team on an about page, with portraits shown by the page if it has them."
never:
  - "Stock portraits or invented people: names are yours"
  - "Cards or titles in capitals"
source: "components/about-view.tsx (the team list: text-sml leading-[2] centered in 72rem, px-1 per name; the phone list text-md white over text-sml dim)."
files:
  - react/components/site/TeamList.tsx
examples:
  - "Team | Five names | center"
---
