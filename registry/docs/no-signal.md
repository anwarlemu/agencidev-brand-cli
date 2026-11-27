---
name: no-signal
title: No signal
type: registry:ui
group: visuals
description: "The 404 page's no-signal static as a box: a dead channel's charcoal static and grain, with the glitch band rolling up through it and revealing white. It runs at about twenty frames a second and holds still under reduced motion."
use_for: "A not-found or error page, an announcement's ground, a sting's background: the brand's one expressive surface."
never:
  - "Words on the band: they sit under it, as the 404 page sets them"
  - "Color: the static is monochrome by construction"
  - "More than one on a page, or behind long reading"
source: "components/no-signal-404.tsx and lib/no-signal-engine.ts (NOISE_FRAGMENT: the liquid warp, the rolling band, the tone roll, the scanlines; the grain canvas at a third of the screen, overlaid at 50%), run on the CPU by lib/signal.ts."
files:
  - react/components/visuals/NoSignal.tsx
  - lib/no-signal.ts
  - lib/signal.ts
examples:
  - "NotFound | The 404 composition | bleed"
  - "Field | The static alone | center"
---
