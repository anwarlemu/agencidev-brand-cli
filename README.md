# agencidev-ds

The Agencidev brand system in one CLI: design tokens, the logo set, the self-hosted fonts, the 404 page's no-signal
static as a seeded generator, a component library in React and as web components (the site's own parts and page
templates on top of the 68 shadcn components), assets drawn in the site's compositions, and checks that keep pages,
interfaces and assets on brand. How it looks traces to agencidev.com (its source, github.com/anwarlemu/AGD: app/globals.css,
components/page-tokens.ts and the house rules in AGENTS.md); `brand/site-coverage.md` maps every part to its source.
Anything else is an error, never a guess.

Library site: https://agencidev-ds.vercel.app (the `apps/www` Next.js app in this repository).

## Use it in an app

Requires Node.js 20 or later. It works in any web stack, read from the app's own files:

| Stack | Library flavor |
| --- | --- |
| Next.js, Vite + React, React Router (with Tailwind 4 or 3) | React |
| React without Tailwind, Vue and Nuxt, SvelteKit, Astro, Angular, Solid, plain HTML, Rails, Laravel, Django, PHP | web components (`<agd-*>`, styles inside, one `<script>` each) |

```sh
npm install -D github:anwarlemu/agencidev-brand-cli#release   # or bun add -d / pnpm add -D
npx agencidev-ds init                                          # brand.css, the Tailwind theme, fonts, agent contract
npx agencidev-ds add button site-header page-head              # components, in the app's flavor
npx agencidev-ds view page-head                                # props, events, slots, examples, source
npx agencidev-ds apply --dry-run                               # what restyling the app would change
```

`init` writes `brand.css` (fonts, tokens and the base layer scoped to the library's components) where the app loads
its styles, with `theme.css` (Tailwind 4), a Tailwind 3 preset, or `kinds.css` (no Tailwind), and copies the fonts and
logos to `<static folder>/agencidev-ds/`. `add` copies React files (imports rewritten to the app's alias, `lucide-react`
installed) or the prebuilt web component modules and prints the `<script type="module">` lines. `apply` restyles an
existing app (whole, or the kinds, pages or components you name) to the tokens without changing copy, markup or
behavior, in every file type the stack uses.

## Commands

| Command | What it does |
| --- | --- |
| `add <item...>` | Copies items and what they require, in the app's flavor (`--framework react\|elements`, `--dry-run`, `--overwrite`, `--update`). |
| `view <item...>` | What an item is for and never for, the install line, its API and its examples (`--source` for everything). |
| `search <words>`, `list` | Items by what they do; every item with its flavors. |
| `diff <item...>` | Your copy against the library's (exit 1 when one differs). |
| `info`, `init` | The app's setup and what to run next; the stylesheet, theme, fonts and contract only. |
| `apply [targets...]` | Restyle the app, or the named kinds, pages and components. |
| `check [paths...]`, `hook` | The value check (raw colors, off-scale sizes, durations, ease-in, transition-all, shadows, bold, other icon packs); an agent's edit hook. |
| `tokens [term...]`, `brand`, `principles` | Tokens by name or value; color, type, spacing, radii, motion, fonts, logos and voice; the product and website rules. |
| `component list\|inspect\|emit` | The real components, their props and states; `emit` writes React for one state. |
| `image`, `deck`, `video`, `merch` | Posts, ads, banners, logo backgrounds, share cards and story images in the site's compositions (the statement, the rail, the static), re-flowed to every shared size (or `--size custom`), carousels from one file, PNG, SVG, JPEG and WebP; only the copy you pass is drawn, whole; pitch deck slides (PNG and PDF); the static's loops and two stings; merch print files at physical size with bleed. `--list` on each. |
| `design new\|revise\|edit\|undo\|redo\|history\|show\|variants\|sizes\|compare\|render\|check` | A design as a small JSON file: make it from any template, change it in plain words (`revise "bigger headline, logo top right"`) or exact edits, undo, alternatives, other sizes, side by side. Every write is checked against the brand and errors change nothing. |
| `design new compose`, `design compose add\|move\|remove\|order\|span\|grid`, `design page compose outline.json` | Your own layout from the brand's 17 blocks on a grid of any canvas (every template can be rebuilt this way), and whole pages from 11 sections as React, web components or plain HTML. |
| `ad <brief.md>` | Static ads from a brief (goal, platforms, headline, supporting line, CTA, offer, look, images, must-haves, don'ts; Markdown, JSON or stdin): 2 to 4 distinct variants per platform size that pass the brand check, each a design file `design revise` works on, and one labeled contact sheet. Missing copy fails naming the fields. Examples in `brand/briefs/`. |
| `recipe <name>` | 32 ready compose layouts for what no template covers: the seven IAB display ads, a Meta feed ad, quote, stat, launch, feature, comparison, pricing, event, hiring, screenshot, before and after, chart, flow and customer story cards, business card, letterhead, one-pager, report cover, certificate, badge, email header and signature, meeting and wallpaper backgrounds. |
| `icons` | The favicon set (svg, ico, 16, 32), app icons (180, 192, 512, maskable), avatars and the web manifest. |
| `illustrate <style>` | The brand's own imagery as PNG and SVG: `signal` (the no-signal static), `field` (the static alone) and `rail` (`--image`). Rules with sources in `brand/illustration.md`. |
| `figma tokens\|push\|pull\|check` | Figma through its MCP tools, which the CLI never calls: variables and `use_figma` scripts, push files as editable layers or HTML, the read steps for a frame, and off-brand values with the nearest token (exit 1). |
| `manifest` (`describe`) | Every command, template, size, component, token and rule, for an agent (`--json`). |

All commands take `--cwd <dir>` and `--json`; an unknown option or name is an error.

## The brand, as code

- `brand/tokens.css`: the near-black canvas and white ink, the white tints (faint, subtle, muted) and the solid greys
  (dim, mid, plate, slat), Agencidev Sans and ABC Diatype, the site's five type steps, space on 4 and 6, square corners
  with the 4px plate, ease-brand and the motion steps, the rail's measures, and the 1080 canvas (`--ds-asset-*`: the
  site's sizes at 1.5).
- `brand/logo/svg/`: the square (mark), the wordmark and the lockup in black and white, split from the site's
  agd-lockup.svg (never redrawn), the liquid-glass mark, the favicon and avatars; `brand/logo/png/mark-chrome.png`.
- `registry/lib/signal.ts`: the 404 page's no-signal static, the site's shader run on the CPU line for line; it drives
  the `no-signal` component, the image engine, `illustrate` and `video`, so a seed draws the same picture everywhere.

## Revising a design

Make a graphic, look at it, change it, check it, repeat until it is right:

```sh
npx agencidev-ds design new banner-statement --headline "Product design thinking and implementation." --size x-banner -o banner.design.json
npx agencidev-ds design revise banner.design.json "bigger headline"
npx agencidev-ds design edit banner.design.json --size linkedin-banner
npx agencidev-ds design undo banner.design.json
```

The design file holds only what you asked for; the PNG is drawn from it. Never edit the PNG or SVG by hand.

## Work on it

```sh
bun install
bun run build        # tsc and scripts/build-brand.mjs (brand -> build)
bun run registry     # validate registry/, write apps/www/public/r, value check, tsc for React and elements
bun run ci           # build, limits, registry, vitest
bun run parity       # every example as React and as web components, compared in a browser
bun run --cwd apps/www build && bun run --cwd apps/www start   # the docs site on port 3700
```

`CLAUDE.md` says where everything is. `PORTING.md` is the recipe for adding an item in React and porting it to a web
component.

## Fonts

Agencidev Sans is the studio's own face. ABC Diatype is Dinamo's: the files here are the ones agencidev.com serves,
which name themselves a trial build. Confirm a license covers your use before shipping (`brand/fonts/licenses/README.md`).
