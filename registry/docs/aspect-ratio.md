---
name: aspect-ratio
title: Aspect ratio
type: registry:ui
group: ui
description: "A box that keeps its shape as it grows: a 1:1 post, a 4:5 story, a 16:9 slide. It draws nothing itself; square corners and a #141414 ground are classes on it."
use_for: "Work in a grid, previews of posts and stories, a video or a slide that must not reflow while it loads."
never:
  - "Stretching or cropping a logo to fit the box"
  - "Grading or filtering the work inside: show it as posted"
source: "shadcn's aspect ratio, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/AspectRatio.tsx
examples:
  - "Formats | The brand's canvases | center"
---
