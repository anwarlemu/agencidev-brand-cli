---
name: input-otp
title: Input OTP
type: registry:ui
group: ui
description: "A one-time code, one cell per character, each cell drawn as the input. It is one real field, so paste and the phone's code suggestion work."
use_for: "Sign-in and verification codes sent by email or text. Say under it where the code went."
never:
  - "Passwords or keys"
  - "Cells that move focus on their own: it is one field"
  - "A colored or glowing cell for the one being typed: its hairline turns white"
source: "shadcn's input otp, drawn in the Agencidev tokens (brand/tokens.css, from the site's app/globals.css and components/page-tokens.ts): the near-black canvas and white ink, the greys, square corners with the 4px plate, ABC Diatype and Agencidev Sans, color changes on hover and press only."
files:
  - react/components/ui/InputOtp.tsx
examples:
  - "Verify | Signing in | center"
  - "States | Invalid and disabled | center"
---
