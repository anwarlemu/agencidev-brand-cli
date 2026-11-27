---
name: navigation-menu
title: Navigation Menu
type: registry:ui
group: ui
description: "A site's top navigation: triggers and links in ABC Diatype, each trigger opening a panel of links in the card's #141414 fill. It opens under a resting pointer, switches at once between triggers, and opens at once from the keyboard."
use_for: "The website's header: the work, the studio, articles and contact. A few entries, each panel a handful of links with a line each."
never:
  - "App navigation: use the Sidebar"
  - "Actions: use Dropdown Menu or Menubar"
  - "A chevron that turns or moves on hover"
source: "shadcn's navigation menu, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/NavigationMenu.tsx
  - react/components/ui/NavigationMenuItem.tsx
  - react/components/ui/NavigationMenuLink.tsx
examples:
  - "Site | The site's header"
---
