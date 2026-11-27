---
name: page-head
title: Page head
type: registry:ui
group: site
description: "The page's H1 set like the homepage statement: one size in two tones, the lead in white running on into the rest in mid, centered in a 64rem measure, with a plate and a quiet button under it."
use_for: "The top of an inner page: contact, careers, articles, a case study."
never:
  - "A second size or a bold word for emphasis: color does the work"
  - "More than one plate button"
  - "An eyebrow or a label over it"
source: "components/page-head.tsx (pt-[128px] sm:pt-[176px], pb-16 sm:pb-24, max-w-[64rem], text-lg leading-[1.14], text-white then text-mid; actions mt-10 sm:mt-12 gap-2)."
files:
  - react/components/site/PageHead.tsx
examples:
  - "Contact | Two tones and actions | bleed"
  - "Plain | One tone | bleed"
---
