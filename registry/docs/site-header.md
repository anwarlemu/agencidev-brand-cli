---
name: site-header
title: Site header
type: registry:ui
group: site
description: "The site's bar: the lockup and the sections in 12px capitals on the left, a quiet link and the plate button on the right; a frosted fade once the page scrolls under it, and a full-screen menu under 640."
use_for: "The top of every marketing page."
never:
  - "A second plate button: one loud call, one quiet"
  - "Motion on the bar itself: it stays where it was painted"
  - "Hover effects on touch"
source: "components/nav-bar.tsx (p-6 around an h-12 row, the 18px lockup, gap-6 links, QUIET_SKIN and PLATE_SKIN, px-10 on the plate), globals.css .nav-surface (12px blur, the fade 32px past the bar, 260ms) and .menu-panel (250ms fade, links rising 24px over 350ms, 40ms apart)."
files:
  - react/components/site/SiteHeader.tsx
  - lib/pages/chrome.ts
examples:
  - "Bar | The bar | bleed"
---
