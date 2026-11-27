---
name: date-picker
title: Date picker
type: registry:ui
group: ui
description: "A date in a field: a button drawn as the text field that opens the calendar on the #141414 overlay panel under it. Opening puts focus on the picked day, picking closes it and returns focus, Escape closes it unchanged."
use_for: "A single date in a form: when a report starts, when a campaign ends. The field reads the day in words."
never:
  - "A shadow under the panel: the hairline and the #141414 fill set it apart"
  - "Typing a date into the button: it is picked from the calendar"
  - "A red edge for anything but an error"
source: "shadcn's date picker, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/DatePicker.tsx
examples:
  - "Field | In a form"
  - "Picked | A picked day, later days blocked"
---

The web component is form-associated: give it a `name` and the form sends the day as an ISO date (2026-11-03).
