---
name: contact-page
title: Contact page
type: registry:block
group: pages
description: "The contact page template from library items: the two-tone head with a plate button and the email as a quiet one, the ways to get in touch as rows, and notes in dim running copy."
use_for: "A contact page: a call or an email, never a form you cannot answer. Edit lib/pages/contact.ts or pass `content`; `sections` reorders or leaves sections out."
never:
  - "New colors, shadows, radii or type sizes added to a section: use the items' props"
  - "People, clients or quotes you have no right to show: the defaults are Acme"
  - "A second plate button in a view"
source: "Built from the library's site items, after the site's app/contact/page.tsx."
files:
  - react/components/pages/ContactPage.tsx
  - lib/pages/contact.ts
examples:
  - "Page | Contact page | bleed"
---
