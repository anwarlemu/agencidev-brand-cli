# Site coverage

Every part of agencidev.com (github.com/anwarlemu/AGD, main at 8023bae, read 2026-11-27) and where it lives in this
system, or why it does not.

## Foundations

| Site source | Here |
| --- | --- |
| app/globals.css `:root` (black, white, muted, subtle, faint, charcoal, dim, mid, plate) | brand/tokens.css `--ds-color-*` and the semantic roles |
| app/globals.css type scale (xsml 12, sml 14, md 16, md2 20, lg 28 / 36 from 640) | `--ds-text-*`, `type-section`, `type-body`, `type-ui`, `type-label` |
| app/globals.css radius (0 everywhere) and the 4px plate | `--ds-radius-*`, `rounded-control` |
| app/globals.css `--ease-brand`, .rise, .menu-panel, .nav-surface | `--ds-easing-*`, `--ds-duration-*`, `--ds-rise`, `--ds-nav-blur*` |
| app/globals.css .rail-ssr (strip 100x280, gap 20, phone 72x208, gap 14) | `--ds-rail-*`, `work-rail` |
| app/layout.tsx fonts (ABC Diatype, Agencidev Sans) | brand/fonts, brand.json `fonts` |
| components/page-tokens.ts (PLATE_SKIN, QUIET_SKIN, PRESS_*) | `button` (primary, secondary), the site items |
| AGENTS.md house rules | brand/principles.md, the value check |
| public/agd-lockup.svg, logo.svg, agd-wordmark.svg, logo-glass.svg, agd-tilt.png | brand/logo, `logo`, image templates `logo-*` |

## Components

| Site source | Item |
| --- | --- |
| components/nav-bar.tsx | `site-header` |
| components/footer.tsx | `site-footer` |
| components/page-head.tsx | `page-head` |
| app/page.tsx, lib/home-content.ts (the statement and stat line) | `statement` |
| components/row.tsx | `row` |
| components/filter-list.tsx | `filter-list` |
| components/about-view.tsx (process) | `process-list` |
| components/about-view.tsx (team list) | `team-list` |
| app/contact/page.tsx (ways to get in touch) | `detail-list` |
| components/careers-section.tsx | `openings` |
| components/testimonials.tsx (the quote plate) | `testimonial` |
| components/case-wall.tsx | `case-wall` |
| app/articles/page.tsx (the card) | `article-card` |
| components/home-gallery.tsx, lib/gallery (the WebGL rail) | `work-rail` (the row at rest, as the SSR strips paint it) |
| components/no-signal-404.tsx, lib/no-signal-engine.ts | `no-signal` (registry/lib/signal.ts) |

## Pages

| Site route | Template |
| --- | --- |
| / | `home-page` |
| /about | `about-page` |
| /careers | `careers-page` |
| /contact | `contact-page` |
| /articles | `articles-page` |
| /articles/[slug] | `article-page` |
| /work/[slug] | `case-study-page` |
| /privacy, /accessibility | `legal-page` |
| not-found | `not-found-page` |

## Not carried, and why

- The WebGL card spiral's drift and parallax (lib/gallery/engine.ts): an engine for one page; `work-rail` is the row at
  rest, and the page may animate it.
- The project and testimonial popups' rAF choreography: page behavior, not a part; `testimonial` is the plate.
- The YC tier list, playground wall, affiliates and duo (Surface Duo) viewport: features of the studio's own site.
- The Awwwards badge, analytics, structured data and llms.txt: site infrastructure.
- Client work, team portraits and names, testimonials and their photos: never shipped; examples use Acme.
- `/branding` (the brand kit): its content is this system (the theme page of the docs).
