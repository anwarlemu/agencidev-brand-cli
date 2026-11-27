---
name: openings
title: Openings
type: registry:ui
group: site
description: "The careers page's open roles: the heading in capitals, department chips on the right, and each role a full-width row, the title in white and the department in mid, a quiet fill under the pointer."
use_for: "Open roles on a careers or about page."
never:
  - "Cards per role, or icons for the department"
  - "An empty list: a department with no roles says so"
source: "components/careers-section.tsx (text-sml uppercase heading, rounded-[4px] px-3 py-1.5 text-xsml chips on white at 10%, mt-20 list, grid-cols-2 gap-8 px-6 py-4 rows with hover:bg-white/10)."
files:
  - react/components/site/Openings.tsx
examples:
  - "Roles | Three roles | bleed"
---
