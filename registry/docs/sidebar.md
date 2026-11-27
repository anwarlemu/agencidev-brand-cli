---
name: sidebar
title: Sidebar
type: registry:ui
group: ui
description: "The app's rail: black with a hairline at its edge, the logo at the top, groups named in capitals, the page you are on in white, the account at the foot. It folds to icons with one button. Its body scrolls with fading edges, so no row is cut off."
use_for: "The main navigation of the product: search, boards, brands, creators and settings. One per app, at the left."
never:
  - "A second level of rows: a page's own sections go in Tabs"
  - "A colors for the page you are on: it is white, as the primary button"
  - "Animating the fold: it is pressed many times a day"
source: "shadcn's sidebar, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Sidebar.tsx
  - react/components/ui/SidebarLabel.tsx
  - react/components/ui/SidebarLink.tsx
examples:
  - "App | The app's rail"
---
