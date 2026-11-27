# Agencidev: what good looks like

Agencidev is a distributed product design and development studio: an embedded product partner for founders at early and
growth-stage startups, sold as ongoing monthly partnerships. The site exists to make the studio legible and to route
serious enquiries into a call or an email. Show the work, don't describe it: galleries and case studies carry the
argument and the copy stays short. How it looks comes from the site (github.com/anwarlemu/AGD: app/globals.css,
components/page-tokens.ts and AGENTS.md, the house rules every change there is held to).

## Product

- The canvas is near-black (#050505) and the ink white. Secondary text comes from the solid greys: dim (#B6B6B6) for
  running copy and links, mid (#909090) for the quieter half of a statement and meta. White tints by strength mark lines
  and fills: faint (10%) for hairlines and quiet fills, subtle (20%) for borders, muted (60%) for de-emphasis.
- Use color strategically. Do not make everything bold and clear: mute what does not need attention, so the muted
  things give the important things their focus. The palette is monochrome by construction; there is no accent color.
- Two font families: Agencidev Sans for every heading, ABC Diatype for everything else. One weight on the site (400).
  Font sizes are 12, 13, 14 or a multiple of 4: 12 (labels, meta), 14 (the default), 16 (running copy), 20 (pull quotes)
  and the one display step, 28 then 36 from 640, at leading 1.14. Color, not size, makes the hierarchy.
- Every padding, margin, gap and radius is a multiple of 4 or 6. Two radii: square everywhere, 4px on the plate button
  (a circle is geometry and does not count). Two components doing the same job pad the same.
- The plate button: #252525 with white 12px capitals, 48px tall, 24px in (40 in the bar), the 4px corner; mid with black
  ink under the pointer, near-white on press. The quiet button is bare dim capitals that turn white. One plate per view.
- Hover and press change color only, never size. Press feedback lands on pointer down (no transition on :active). No
  hover on touch: hover only where a fine pointer hovers. One interaction style per component type.
- Motion by frequency: a hundred times a day (shortcuts, palettes) never animates; tens of times a day (hover, list
  navigation) only very subtly (150ms color); rare moments (a menu opening, a page head arriving, onboarding) may move:
  the menu fades in 250ms and its links rise in 350ms, a page head rises 12px in 500ms. One curve: ease-brand,
  cubic-bezier(0.22, 1, 0.36, 1). Never ease-in.

## Website and assets

- The statement is the brand's voice in type: one size in two tones, the lead in white running on into the rest in mid,
  in Agencidev Sans at the display step. The homepage sets it at the foot of the first screen with a stat line over it.
- The work rail: portrait strips of the studio's work in one row (100 by 280, 20px apart), running off the right edge,
  the first a little left of the middle. Square corners; the work is the argument.
- The no-signal static (the 404 page): a dead channel's charcoal static and grain with a glitch band rolling up through
  it, revealing white. The one expressive surface; words sit under the band. Use it rarely.
- Layouts are restrained and editorial: the lockup top left as the bar sets it, the address or a quiet link top right,
  the statement at the foot, the plate button under it. Space separates sections, not borders. The first view is the
  argument, not a masthead.
- Logo: the square (the mark), the wordmark, and the lockup of both. White on dark, black on light; the liquid-glass mark
  where it must read over imagery; the 3D chrome mark as a picture. Keep clear space around it and never recolor or
  distort it. The bar's lockup is 18px tall.
- Imagery is the studio's real work and real people with consent. Examples use Acme placeholders, never a client's work
  or a person's name without permission.

## Always

- Keep each view's principal objective the most prominent thing; layer the rest so it is still reachable.
- Touch targets at least 44px on phones; visible focus where the page allows it.
- Feedback on pointer down, color only; buttons hold their size.

## Refuse

- Shadows, gradients as decoration, a colored ground or accent, bold for emphasis, a third font family or a fourth
  weight, sizes off the scale, radii other than square and 4px, hover that changes size, other companies' logos,
  recolored or distorted marks, stock imagery, emoji, exclamation marks, invented clients, metrics or testimonials.

## Voice (for any text an agent writes)

Partner voice, not vendor voice: precise, calm, direct, evidence-led. Short declarative sentences that end with a period
("Product design thinking and implementation."), sentence case, concrete facts ("ongoing monthly partnerships,
cancellable at any time"), American spelling, no em dashes. Say what happened or what changes; never manufacture
confidence.

Never: seamless, revolutionary, cutting-edge, supercharge, next-generation, robust, powerful, leverage, empower, unlock, delve, elevate, game-changing, best-in-class, world-class.
