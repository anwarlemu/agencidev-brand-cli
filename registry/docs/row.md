---
name: row
title: Row
type: registry:ui
group: site
description: "One section of an inner page: 24px in, 40px above and below (56 from 640), a title read by screen readers and shown when asked, an aside under it and the body under that."
use_for: "Every section of an about, careers, contact or legal page."
never:
  - "Borders or fills between rows: space separates them"
  - "A title in capitals or with a number before it"
source: "components/row.tsx (mx-6 py-10 sm:py-14, h2 text-md leading-tight text-white or sr-only, aside mt-6, body mt-10 or mt-4)."
files:
  - react/components/site/Row.tsx
examples:
  - "Note | A titled row | center"
---
