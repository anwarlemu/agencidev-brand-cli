---
name: chart
title: Chart
type: registry:ui
group: ui
description: "How a number is drawn: white bars per day under a total, and lines over time in the brand's series order (white, mid (#909090), the subtle grey, dim, then the plate; every other one dashed). Five series at most. Axes from 0 on hairlines (white at 10%); pointing reads a value."
use_for: "Hours per day, screens shipped per week, enquiries over a quarter. Every chart has a caption; every series is named in the legend."
never:
  - "Series out of order, or a color: the brand is monochrome"
  - "Color alone to tell series apart: every other series is dashed and every series is in the legend"
  - "An axis that starts above 0"
  - "Bars that regrow on every hover: they rise once"
source: "shadcn's chart, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/BarChart.tsx
  - react/components/ui/LineChart.tsx
  - lib/chart.ts
examples:
  - "Visits | Bars per day | center"
  - "Categories | Five series in order"
---

`lib/chart.ts` holds the series colors (`CHART_COLORS`, five in order) and the axis helpers both flavors use; draw your
own charts with them so the order stays the brand's.
