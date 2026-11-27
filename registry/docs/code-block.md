---
name: code-block
title: Code block
type: registry:ui
group: site
description: "Tabs of code: a slat panel (#141414) with a head of tabs (a white line under the chosen one) and a copy button whose label turns to Copied, over code in white with its punctuation and comments muted, scrolling across. Code and the copy button also stand alone."
use_for: "Requests and setup steps on product, docs and resource pages (`tabs` of { id, label, code, language }); `Code` alone inside a response panel or a card; `CopyButton` beside a URL or a key."
never:
  - "Colored syntax highlighting: only the muted gray and White"
  - "Code that wraps: it scrolls across and fades at its edges"
  - "A White copy button: it is quiet"
source: "The site sets no code blocks of its own; drawn in the Agencidev tokens (the slat, square corners, the system mono) for docs and articles."
files:
  - react/components/site/CodeBlock.tsx
  - react/components/site/Code.tsx
  - react/components/site/CopyButton.tsx
  - lib/code.ts
examples:
  - "Tabs | Three requests | center"
  - "Single | One tab | center"
  - "Copy | A copy button beside a URL | center"
---
