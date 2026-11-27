---
name: form
title: Form
type: registry:ui
group: ui
description: "Fields stacked 24px apart, a failure from the server in a dark red box, and the actions at the end, the main one last. Errors wait until a field is left or the form is sent."
use_for: "Any form with more than one field: an enquiry, inviting a teammate, account settings. useForm holds the values, the rules and the send."
never:
  - "Errors while the first value is still being typed"
  - "The browser's own error bubbles"
  - "A red hairline at rest"
  - "Two primary buttons: one plate, the rest quiet or ghost"
source: "shadcn's form, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/Form.tsx
  - react/hooks/useForm.ts
examples:
  - "Enquiry | Send an enquiry | center"
---
