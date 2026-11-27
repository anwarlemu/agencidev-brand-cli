---
name: filter-list
title: Filter list
type: registry:ui
group: site
description: "A single-choice filter: the options as 14px capitals in mid, the chosen one white, in a row or a column; color changes only, on pointer down."
use_for: "Choosing a department, a year or a kind of work above a list."
never:
  - "Underlines, pills or fills for the chosen option: white is the mark"
  - "Several choices at once: it is a single choice"
source: "components/filter-list.tsx (gap-x-6 gap-y-1, text-sml uppercase, text-mid or text-white, PRESS_INK, aria-pressed in a fieldset)."
files:
  - react/components/site/FilterList.tsx
examples:
  - "Departments | A row | center"
---
