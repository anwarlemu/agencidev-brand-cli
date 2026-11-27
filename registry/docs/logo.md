---
name: logo
title: Logo
type: registry:ui
group: visuals
description: "The square, the wordmark and the lockup from the site's own files, white or black only, sized by height."
use_for: "The bar (18px lockup), the footer (20px), sign-offs, share cards and anywhere the brand signs a page."
never:
  - "Recoloring, outlining, stretching or rotating it"
  - "A color other than white or black"
  - "Text, images or other marks inside its clear space"
source: "The site's lockup (public/agd-lockup.svg, 630 by 110: the square at 0,24 and the wordmark from 116), the brand kit at /branding (Mark, white and black; Lockup; Wordmark) and the bar's 18px lockup (components/nav-bar.tsx)."
files:
  - react/components/visuals/Logo.tsx
  - lib/logos.ts
examples:
  - "Lockups | Lockups | center"
  - "Tones | On white | center"
---
