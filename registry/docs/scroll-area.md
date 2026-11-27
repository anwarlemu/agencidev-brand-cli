---
name: scroll-area
title: Scroll Area
type: registry:ui
group: ui
description: "A region that scrolls on its own with thin scrollbars: a white at 20% thumb on a clear track. Native scrolling, so wheel, touch and keyboard all work; overscroll stays inside. An edge with more past it fades (fade-y, fade-x, fade-xy) instead of cutting rows off."
use_for: "A long list in a short box (boards in a side panel) or a row of work that scrolls across. Give it a label so a keyboard can reach it."
never:
  - "Custom drawn scrollbars that break native scrolling"
  - "A scroll box a keyboard can't reach: give it a label"
  - "Hiding the scrollbar on content people need to find"
  - "A scroll box inside a scroll box going the same way"
source: "shadcn's scroll area, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/ScrollArea.tsx
examples:
  - "Lists | Down and across | center"
---
