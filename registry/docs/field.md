---
name: field
title: Field
type: registry:ui
group: ui
description: "A label over one control, with a description or an error under it. The label speaks in capitals; the help is muted; an error takes the help's place in red."
use_for: "Every labeled control in a form: an email, a board name, a note, a pick from a list. One Field per control."
never:
  - "A placeholder in place of the label"
  - "A red hairline before anything is wrong: errors show once a field is left or the form is sent"
  - "Fields under 16px on phones (the input switches to 16px there)"
source: "shadcn's field, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Field.tsx
examples:
  - "Fields | Help and errors | center"
---
