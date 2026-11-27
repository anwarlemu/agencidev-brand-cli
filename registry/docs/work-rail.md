---
name: work-rail
title: Work rail
type: registry:ui
group: visuals
description: "The home rail: portrait strips of work in one row, 100 by 280 with 20px between, the first strip a little left of the middle and the row running off the right edge. Square corners; an empty strip is the slat fill."
use_for: "A home or case-study hero that shows the work before it describes it; a row of portraits or screens."
never:
  - "Rounded strips or a shadow"
  - "Captions on the strips: the statement under the rail does the talking"
  - "Stock pictures: the rail is your work"
source: "components/home-gallery.tsx and globals.css .rail-ssr (--sw 100px, --sh 280px, --gap 20px, --ax 0.43; 72, 208 and 14 under 640; the #141414 unloaded slat). The site's WebGL drift is left to the page."
files:
  - react/components/visuals/WorkRail.tsx
examples:
  - "Rail | Eight strips | bleed"
---
