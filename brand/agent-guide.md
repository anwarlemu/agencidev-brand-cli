# {{brand}} design system: instructions for agents

Use this system to build {{brand}} interfaces, web pages and brand assets in any web stack: React (Next.js, Vite, React
Router), Vue and Nuxt, Svelte and SvelteKit, Astro, Angular, Solid, plain HTML and server templates (Rails, Laravel,
Django, PHP, Liquid, Twig, Handlebars, EJS), with Tailwind 4, Tailwind 3 or plain CSS. These instructions work with any
agent that can read text and edit project files.

## Start here

1. Run `{{cli}} manifest --json`. That document lists every command, template, size, component, token and rule.
   `describe` is the same command. If a name is not in it, the command exits 1. Do not invent a substitute.
2. Read the project's instructions, then run `{{cli}} info`: it names the stack, the library flavor (React or web
   components), the package manager, Tailwind's version (or none), the main stylesheet and the layouts.
3. Query the brand with `{{cli}} brand --json` and the rules with `{{cli}} principles --json` (`--surface product` for
   interfaces, `--surface website` for pages and assets). The library is at {{registry}}; each item is also at
   {{registryHost}}/r/<name>.json with its files, its examples, what it requires and its packages.
4. Reuse the library's components. `{{cli}} component list --json`, `{{cli}} component inspect <item> --json` and
   `{{cli}} view <item> --json` return the real parts, props and states in the app's flavor. Do not recreate a
   component from a screenshot.

## Install and prepare a project

Requires Node.js 20 or later. Run commands from the app's root (an app with no package.json, such as Rails, Django or
a plain site, runs them with `--cwd <app>`).

```sh
bun add -d {{source}}      # or npm install --save-dev {{source}}
{{cli}} init
{{cli}} add button site-header page-head
```

`init` writes `brand.css` (fonts, tokens, and base styles scoped to the library's components; a whole-app `apply`
makes them page-wide) where the app loads its styles. With Tailwind 4 it adds `theme.css` (the utilities); with
Tailwind 3 a preset wired into the config; with no Tailwind `kinds.css` (the library's look as `ds-*` classes). It
copies the fonts to `<static folder>/{{bin}}/` and writes this guide and the contract in AGENTS.md. `add` copies each
item in the app's flavor: React files into the source folder with their library imports made to resolve there (and
their packages installed, such as `lucide-react`), web components as prebuilt modules into
`<static folder>/{{bin}}/elements/` with the `<script type="module">` line to put on the pages that use them. Existing
files that differ are kept unless `--overwrite` is passed.

To restyle what the app already has, `{{cli}} apply` converts style values to the tokens and gives buttons, fields,
cards and the rest the library's look, without changing copy, markup, template code or behavior. Name a selection to
limit it: `{{cli}} apply button card`, `{{cli}} apply /settings`; `--dry-run --json` lists every change first.

## Library flavors

React is the source of every component; the web components are ported from it and render the same (checked pixel by
pixel). `{{cli}} add` writes React in React apps with Tailwind, and web components everywhere else.
`--framework react|elements` picks one by name.

| | React | Web components |
| --- | --- | --- |
| Use it | `import { Button } from '@/components/ui/Button'` | `<script type="module" src="/{{bin}}/elements/button.js">` once per page, then `<{{elementPrefix}}-button>` |
| Data in | props | attributes, or properties for lists and objects (`el.items = [...]`) |
| Two-way value | `value` + `onValueChange` (`defaultValue` alone uncontrolled) | the `value` property with `input` and `change` events |
| Events | `onSearch` | `addEventListener('search', ...)`; details in `event.detail` |
| Children | `children` or a prop (`actions={...}`) | `slot="actions"` on a child |
| `title` | `title` | `heading` (`title` is HTML's tooltip) |

React files start with `'use client'` where they need it, so a Next server component can import and render them.
Angular needs `schemas: [CUSTOM_ELEMENTS_SCHEMA]` for the elements; Vue and Nuxt need `isCustomElement` for the
`{{elementPrefix}}-` prefix (add sets it where the config allows).

## Compose

- The look is the Agencidev site's (github.com/anwarlemu/AGD; the house rules in `brand/principles.md`). The canvas is
  near-black and the ink white. Surfaces: `bg-surface` (the canvas), `bg-surface-raised` (the slat, #141414: tiles and
  image slots), `bg-surface-subtle` (white at 10%: a quiet fill, the chosen chip), `bg-surface-inset` (the plate,
  #252525); text: `text-fg` (white), `text-fg-soft` (dim, running copy), `text-fg-muted` (mid, the quieter half),
  `text-fg-faint` (white at 60%); lines: `border-edge` (white at 10%), `border-edge-strong` (white at 20%). Corners are
  square (`rounded-container`, 0); only controls take `rounded-control` (4px).
- One plate per view (`Button variant="primary"`: #252525, white 12px capitals); `secondary` is the quiet button (bare
  dim capitals); `ghost` for tools in rows. Sizes `xs` (28), `sm` (36), `md` (48, the site's), `lg` (48, wider), `form`.
- Type: `type-section` is the one display step (Agencidev Sans, 28 then 36 from 640, leading 1.14) for every page head
  and statement; `type-heading-3` (20) and `type-heading-4` (16) for quotes and row titles; `type-body` (16, running
  copy), `type-ui` (14, the default), `type-label` (12 capitals, untracked), `type-caption` (12), `type-code`. Sizes are
  12, 13, 14 or a multiple of 4; color makes the hierarchy, never a bigger or bolder word.
- Headings are statements in two tones: the lead in `text-fg`, the rest in `text-fg-muted`, one size (`page-head`,
  `statement`).
- The no-signal static is the `no-signal` component (generated, not an image); words sit under its band. The work rail
  is `work-rail` with your pictures. Neither is decoration to sprinkle: one per page at most.
- Data comes through props; components call no API and read no session.

## Replacing placeholders and moving sections

- Every grey tile, empty picture box, skeleton, labeled blank and placeholder thumbnail is an image slot: `src`, `alt`
  (empty for decoration), `fit` (object-fit: `cover` by default, `contain`, `fill`, `none`, `scale-down`) and
  `position` (object-position, `"50% 20%"`, `"top"`). Lists of pictures take arrays, one slot per entry. Without `src`
  an item keeps its placeholder, and every placeholder carries `data-ds-placeholder`: before you ship a page, check
  that none is left (through shadow roots for the web components).
- Pages take `sections`, the section keys in the order to show them; a key left out is not shown. Pictures and copy go
  in as the page's `content` (lib/pages/<page>.ts holds the defaults: the rail, covers, case pieces). Each page's docs
  list its keys.
- Use the user's own pictures, never a third party's; examples use neutral shapes or the brand's own art.

```tsx
<HomePage sections={['rail', 'statement']} content={{ ...homeContent, rail: [{ src: '/work/1.jpg', alt: 'Acme dashboard' }] }} />
```

```html
<{{elementPrefix}}-home-page id="home"></{{elementPrefix}}-home-page>
<script type="module">
  Object.assign(document.getElementById('home'), { sections: ['rail', 'statement'] })
</script>
```

## Assets

`{{cli}} illustrate signal` writes the no-signal static at any size (`--seed`, `--time`, `--width`, `--height`).
`{{cli}} image` (posts, ads, banners, avatar, logo backgrounds, Open Graph and story cards, at
every shared size: og, square, portrait, story, landscape, linkedin, linkedin-square, x-banner, linkedin-banner,
linkedin-page, youtube, youtube-thumbnail, email, or `--size custom`; carousels with `--input`), `{{cli}} deck`, `{{cli}} video` and `{{cli}} merch` render the site's own compositions (the statement, the rail, the
static, the bets, the contact head) from the tokens, the fonts and the logo files; `--list` on each names every template, size and slot. `{{cli}} brand --section logos` lists
every lockup in black and white; use those files as they are.

## Any layout, never only the templates

The templates are starting points, not limits. When a person asks for an arrangement no template has, make it:

- **Ads and posts from a brief:** `{{cli}} design ad brief.md` lays the brief's parts (headline, supporting line, label,
  stat, quote, search prompt, plan, offer, features, pictures, button) out on the brand's grid in its own blocks. A
  `## Layout` section says how in plain words, one row per line from the top, parts side by side split by commas:
  `headline top left`, `stat left, quote right`, `three photos in a row`, `button bottom right`. Without one it makes
  stacked, centered and two-column arrangements of every part. Each result passes the brand check and is a design file.
  `{{cli}} ad brief.md` does the same and also ranks the templates that fit the brief, beside the layouts it makes.
- **Any graphic at any size:** `{{cli}} design new compose --size <size>`, then
  `{{cli}} design compose add|move|span|remove|order <file> ...` puts any of the brand's blocks (`{{cli}} design --help`
  lists them) on any cells. `{{cli}} design revise <file> "stat on the right, bigger headline"` takes plain words.
- **A template, rearranged:** start from a template and revise or move its parts; nothing stays in the template's
  arrangement unless the person wants it.
- **Pages and sections:** `{{cli}} design page compose outline.json` builds a page from the brand's sections in any
  order, and the library's components combine freely in code.

Only the brand's rules are fixed (its colors, type, logo, contrast and clear space); the arrangement is whatever the
person asks for.

## Revising a design

When a person wants a graphic they can react to (a banner, a post, a slide), make it as a design file and change it until
they are happy:

1. `{{cli}} design new <template> --headline "..." [--size x-banner] [--image picture=photo.jpg] -o banner.design.json`
   writes the file and its PNG. Only the copy you pass is drawn; `--sample` fills sample copy to look at a layout.
2. Look at the PNG, show it to the person, and ask what to change.
3. Change it: `{{cli}} design edit banner.design.json --set headline="..." --layer logo.anchor=top-right
   --layer headline.scale=1.2 --hide body --theme ... --size ...` (exact, best for an agent), or
   `{{cli}} design revise banner.design.json "bigger headline, logo top right"` (plain words; a part it does not
   understand fails the whole command, changes nothing and lists what it can do).
4. Every write runs the check and prints it. An error (words that do not fit, an overlap, contrast, a safe area, the
   logo's clear space or size, an off-brand value) blocks the write and leaves the file as it was. Composition rules can
   be accepted with `--allow <rule>`; brand rules never can.
5. Repeat until the person is happy. `design undo`, `redo` and `history` step through it; `design variants --by
   theme|seed|template` and `design sizes --to og,square,story,x-banner` make alternatives with one labeled sheet;
   `design compare a b` shows two side by side with what differs; `design render --format jpg,webp` draws the finals.

Never edit the PNG or SVG by hand: change the design file through the CLI, so the brand rules keep holding. `design show
<file> --json` lists every layer as drawn, what each can do and the phrases the design understands.

## Ads from a brief

When a person asks for ads ("ads for the Boards launch on LinkedIn and Instagram"), turn the request into a brief, run
it, look at the sheet, and revise the ads they pick.

1. Write the brief as a Markdown file (or JSON, or pipe it on stdin with `{{cli}} ad -`). Sections are headings
   (`## Headline`) or `Key: value` lines:

   | Section | What goes in | Required |
   | --- | --- | --- |
   | Goal | What the ads are for: a launch, an offer, a feature, a customer story, hiring, an event | yes |
   | Platforms | X, LinkedIn, Instagram feed, Instagram portrait, Instagram story, Facebook, TikTok cover, Google display, all social, or size ids | yes |
   | Headline | The headline, exactly as the person wrote or approved it | yes (a customer story may use Quote instead) |
   | CTA | The button label | yes |
   | Offer | The offer or price | for an offer, or a pricing card |
   | Supporting line, Label, Plan, Features, Quote, Quote name, Quote role, Stat, Search prompt | More copy, drawn where a layout has room | no |
   | Audience | Who sees them (read, never drawn) | no |
   | Look | dark or light theme, minimal or bold, picture-led or type-led, no-signal static, work rail, two-tone statement, product UI, pricing card, photo grid | no |
   | Layout | Any arrangement in plain words, one row per line from the top, parts side by side split by commas: `headline top left`, `stat left, quote right`, `three photos in a row`, `pricing card center`, `button bottom right` (parts: headline, supporting line, label, stat, quote, pricing card, features, photos, chart, button, logo; with left, right, center, top, bottom, big, small). The ad drawn from it is ranked first; parts the brief gives that the Layout leaves out still go in, after it | no |
   | Images | One per line: `file.png: what it shows` (screenshots, creatives and photos are told apart by what it shows) | for picture-led |
   | Must-haves, Don'ts | One per line: "the price", "the CTA", "no static", "no pictures" | no |

   Use only the person's words. Never write a headline, a price, a quote or a name they did not give: ask for it. Use
   only pictures they gave you (`--image name=file.png` adds one). Customers are Acme, never a real person or company.
   `brand/briefs/` has complete briefs to start from (`layout.md` asks for an arrangement no template has).

   Nothing is limited to the templates. Besides the templates that fit, `ad` always lays the brief out itself on the
   compose grid: stacked, centered, and in two columns, with every part the brief gives (so a stat and a quote both
   go in), or exactly as its `Layout` says. Every arrangement is drawn in the brand's blocks and checked like any other
   design. After that, `design compose add|move|remove|span <ad>.design.json ...` moves any block anywhere, and
   `design revise` takes plain words, so any layout a person describes can be made.
2. Run `{{cli}} ad brief.md` (`--variants 2..4`, `--format png,jpg,webp`, `--out <folder>`). It maps each platform to
   its sizes, ranks the layouts that can carry the brief there, draws each one and keeps only those that pass the brand
   check (whole words, contrast, the logo's clear space, the platform's safe areas) and still read at that size. Each
   size gets 2 to 4 ads that look different, as `<size>-<n>-<layout>.design.json` with its PNG, plus `sheet.png` and
   `ads.json`. A missing field fails and names it (`The brief is missing cta (## CTA).`); `--sample` fills sample copy
   only to look at the layouts. A size where fewer than two ads pass fails with the reasons and writes nothing.
3. Look at `sheet.png` yourself, then show it to the person. Each label names the layout and what it leaves out
   ("leaves out supporting"); the notes list must-haves the command cannot check, to check by eye.
4. Revise the ads they pick with `{{cli}} design revise <ad>.design.json "bigger headline"` or `design edit`, as in
   Revising a design. Change the brief and run `ad` again with `--force` for a new set (it replaces only the files the
   earlier set wrote).

## Illustrations

`{{cli}} illustrate <style>` writes the brand's own imagery as PNG and SVG: `signal` (the 404 page's no-signal static
with its glitch band), `field` (the static alone) and `rail` (your pictures as the home rail, `--image` up to 8). The
rules and their sources are `brand/illustration.md`; follow them: monochrome always, words under the band, the static
used rarely, the rail only ever your own work. `{{cli}} illustrate --list` names every style.

## Work in Figma

The CLI never calls Figma; it writes files and prints the Figma MCP calls to make, in order.

1. `{{cli}} figma tokens`: the tokens as variables (modes Dark and Light). Run the printed `use_figma` scripts.
2. `{{cli}} figma push <illustration|asset|slide|component|page> [target]`: an illustration (as `illustrate` takes it),
   any SVG or picture the CLI wrote (small SVGs as a script that imports editable layers and loads the brand fonts,
   bigger files through `upload_assets`), a library preview or a page as HTML for `html_to_figma`.
3. `{{cli}} figma pull <frame url>`: the reads to make (`get_variable_defs`, `get_design_context`) and where to save them.
4. `{{cli}} figma check <saved files>`: every off-brand color, font, size, radius or spacing with the nearest token
   (exit 1). Build from library items and tokens, never the raw values.

Load the figma-use skill before any `use_figma` call and figma-design-to-code before `get_design_context`; start every
file with `create_session`.

## Motion

- By frequency, as the site's house rules set it: used a hundred times a day (shortcuts, palettes) never animates;
  tens of times a day (hover, list navigation) only a 150ms color change (`duration-150`, ease-brand); rare moments may
  move: a menu fades in 250ms and its links rise in 350ms, 40ms apart; a page head rises 12px in 500ms.
- Press shows on pointer down with no transition (`active:transition-none`); hover and press change color only, never
  size. Hover only where a fine pointer hovers. Never ease-in, never `transition-all`. Icons never move on hover.
  Reduced motion keeps opacity and color.

## Verify

1. Run the app's type check, tests and build.
2. Run `{{cli}} check --json`. Exit 0 means no token violations. Fix every finding and rerun. Register `{{cli}} hook`
   as your edit hook to check every edit as you make it.
3. Test every interaction with mouse and keyboard, at desktop and phone widths, with reduced motion on.
4. Compare with the library's previews at {{registry}}.

## I need X

The command for each kind of graphic, document, page or part (`{{cli}} manifest --json` carries the same table as `coverage`). Words are always yours; `--sample` fills sample copy (Acme) to look.

| I need | Made by | Run |
| --- | --- | --- |
| A set of ads from a brief: every platform size (X, LinkedIn, Instagram, Facebook, TikTok cover, Google display), 2 to 4 variants each, one contact sheet | command | `{{cli}} ad brief.md --image screenshot=shot.png (brief format: brand/briefs/*.md)` |
| X post, LinkedIn post, Instagram post or portrait, Threads, Facebook post | template | `{{cli}} image post-statement --headline "..." --body "..." --size square\|portrait\|linkedin\|facebook` |
| Instagram or TikTok story, Reels or TikTok cover | template | `{{cli}} image story --headline "..."` |
| Instagram carousel | command | `{{cli}} image --input carousel.json --out carousel` |
| Pinterest pin | template | `{{cli}} image post-statement --headline "..." --size pinterest` |
| YouTube thumbnail | template | `{{cli}} image post-rail --headline "..." --image a.png --size youtube-thumbnail` |
| YouTube channel art, X header, LinkedIn banner and page cover, Facebook cover | template | `{{cli}} image banner-statement --headline "..." --size youtube\|x-banner\|linkedin-banner\|linkedin-page\|facebook-cover` |
| Profile picture for any platform | template | `{{cli}} image avatar` |
| Open Graph card (the site's own: the lockup on black) | template | `{{cli}} image og (or og --headline "..." --body "...")` |
| Google display ads 300x250, 336x280, 728x90, 300x600, 320x50, 160x600, 970x250 | recipe | `{{cli}} recipe ad-300x250 --set headline.text="..." --set button.text="..."` |
| Meta feed and story ad, LinkedIn ad | recipe | `{{cli}} recipe meta-feed --size square\|story\|linkedin ...  (or image ad-call, ad-rail, ad-signal)` |
| Quote, stat, customer story, launch or changelog, feature, comparison, pricing, event or webinar, hiring card | recipe | `{{cli}} recipe quote-card\|stat-card\|customer-story\|launch-card\|feature-card\|comparison\|pricing-card\|event-card\|hiring-card ...` |
| Framed screenshot (the site's browser frame), before and after | recipe | `{{cli}} recipe screenshot-card --image picture=shot.png ...; recipe before-after --image picture-1=a.png --image picture-2=b.png` |
| Chart (bar, line, donut), flow or architecture boxes | recipe | `{{cli}} recipe chart-card --set chart.data="Mon 12, Tue 18"; recipe flow-diagram ...` |
| Anything no template or recipe anticipated, at any size | compose | `{{cli}} design new compose --size <id\|custom>; design compose add <file> <block> "..."; design revise <file> "..."` |
| One-pager, report cover, letterhead, certificate (A4 or Letter) | recipe | `{{cli}} recipe one-pager\|report-cover\|letterhead\|certificate --size a4\|letter ...` |
| Business card (print size with bleed), event badge | recipe | `{{cli}} recipe business-card\|event-badge ...` |
| Email header, email signature | recipe | `{{cli}} recipe email-header\|email-signature ...` |
| Email templates (newsletter, announcement, receipt, password reset) that survive mail clients | command | `{{cli}} email newsletter\|announcement\|receipt\|password-reset --set headline="..."` |
| Deck: covers, section, statement, bullets, stat, quote, image, closing, agenda, timeline, team, comparison, image grid, questions | template | `{{cli}} deck --list; deck <slide> --headline "..."; deck --input deck.json` |
| The static as a loop, a lockup reveal and a tagline sting (MP4, WebM, frames) | command | `{{cli}} video --list; video signal-loop\|field-loop\|logo-reveal\|rise --size square\|vertical\|landscape` |
| Favicon set, app icons, maskable icon, avatars, web manifest | command | `{{cli}} icons` |
| Video-call background, desktop and phone wallpaper | recipe | `{{cli}} recipe meeting-background\|desktop-wallpaper\|phone-wallpaper` |
| The no-signal static or the work rail as a still at any size | command | `{{cli}} illustrate signal\|field --width W --height H; illustrate rail --image a.png` |
| Merch: cap, tee front and back, hoodie, tote, mug wrap, sticker, sticker sheet, posters (11x17, 18x24, 24x36), socks, A5 notebook cover, lanyard | command | `{{cli}} merch --list; merch <item> --headline "..."` |
| Any component, section or page for a web app or site | library | `{{cli}} list; add <item> (React or web components); design page compose outline.json --flavor react\|elements\|html` |
| Restyle an existing app to the brand | command | `{{cli}} apply; check` |

Not made, and why:

- Other companies' logos, customer names and photos of real people: Never shipped: use Acme and --image with your own pictures.
- Graded or filtered photo treatments: The principles refuse grading: pictures stay in their posted color.
- Lower thirds, animated stats and product walkthrough videos: Not built yet: the video command draws the static loops and the two stings; words that move need a type-in rule the site does not set for video.
- A chart slide: Not a slide template: compose at the primary size (1920x1080) with the chart block makes one.
