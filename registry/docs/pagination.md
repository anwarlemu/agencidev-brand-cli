---
name: pagination
title: Pagination
type: registry:ui
group: ui
description: "Previous and Next around the page numbers: 32px ghost buttons that fill under the pointer, the current page in a hairline (white at 20%) box in white. First and last always show, an ellipsis stands for the rest."
use_for: "Pages of a long list people come back to by place: a board's results, an archive of ads."
never:
  - "A filled white current page: one primary per view, and this is not it"
  - "Infinite scroll for a list people need to come back to"
  - "Pages for a short list that fits on one screen"
source: "shadcn's pagination, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Pagination.tsx
examples:
  - "Results | Pages | center"
---
