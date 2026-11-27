---
name: case-wall
title: Case wall
type: registry:ui
group: site
description: "A case study's wall of work: the client's name at the display step with a plate link beside it, then the work in masonry columns 20px apart, square-cornered; a piece in the works is a hairline box with its caption in capitals."
use_for: "A case study page: the work carries the argument and the copy stays short."
never:
  - "Rounded pieces, shadows or hover zooms"
  - "Captions on finished pieces: the work speaks"
  - "Client work you have no right to show"
source: "components/case-wall.tsx (pt-[128px] sm:pt-[176px], the text-lg title and PLATE_BUTTON, columns-2 lg:columns-4 gap-5 mb-5, bg-plate, the placeholder's border-subtle and text-xsml uppercase text-muted caption)."
files:
  - react/components/site/CaseWall.tsx
examples:
  - "Wall | Six pieces | bleed"
---
