---
name: skeleton
title: Skeleton
type: registry:ui
group: ui
description: "A placeholder in the shape of what is loading: a block in the quiet fill with square corners, or a circle, that breathes between full and half opacity. Never a shimmer; still with reduced motion."
use_for: "Holding the place of a project card, a row or a chart while it loads, sized to the part it stands for so nothing moves when it lands."
never:
  - "A shimmer, a gradient sweep or a colors"
  - "A layout that jumps when the content lands: size each block to its part"
  - "A skeleton for something that loads in under 300ms"
source: "shadcn's skeleton, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Skeleton.tsx
  - lib/image.ts
examples:
  - "Work | A work card | center"
---
When the picture it holds the place of arrives, pass it as `src` (with `alt`, `fit` and `position`): the block shows it, still,
in the same shape and corner. Without `src` the block carries `data-ds-placeholder`, so a page can be checked for
pictures still to fill.
