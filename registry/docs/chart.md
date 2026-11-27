---
name: chart
title: Chart
type: registry:ui
group: ui
description: "How a number is drawn: white bars per day under a total, and lines over time in the brand's series order (white, mid (#909090), white at 20%, then color from Magenta to Blue). Axes from 0 on hairline (white at 20%)s; pointing reads a value."
use_for: "Searches per day, work found per category, spend over a flight. Every chart has a caption; every series is named in the legend."
never:
  - "Series colors out of order, or colors before the neutrals"
  - "Color alone to tell series apart: the third series is dashed and every series is in the legend"
  - "An axis that starts above 0"
  - "Bars that regrow on every hover: they rise once"
source: "shadcn's chart, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/BarChart.tsx
  - react/components/ui/LineChart.tsx
  - lib/chart.ts
examples:
  - "Searches | Bars per day | center"
  - "Categories | Six series in order"
---

`lib/chart.ts` holds the series colors (`CHART_COLORS`, ten in order) and the axis helpers both flavors use; draw your
own charts with them so the order stays the brand's.
