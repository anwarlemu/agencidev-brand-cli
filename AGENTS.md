# Using this CLI

`agencidev-ds` is the Agencidev brand system, the component library and the brand graphics. An agent that has the CLI
does not invent tokens, components, templates, sizes or rules. Query them, then use the names the CLI returns.

From a checkout, build once (`bun run build`) and run `node bin.js`. When the package is installed, the same commands
are `npx agencidev-ds`. Below, `agencidev-ds` means that command.

## Start here

```sh
agencidev-ds manifest --json
```

`describe` is the same command. The JSON document lists every command, flag, brand section, token name, principle,
group, component (with parts, states and examples), image, deck, video and merch template, slide, item and size, illustrate style, subject and preset, and figma action. If a name is not in the
document, the command exits 1 and names what is allowed. Do not substitute a nearby value.

## Designs you revise

```sh
agencidev-ds design new banner-tagline --headline "Search every ad your competitors run." --size x-banner -o banner.design.json
agencidev-ds design revise banner.design.json "bigger headline"
agencidev-ds design edit banner.design.json --layer headline.anchor=bottom-right --size linkedin-banner
agencidev-ds design undo banner.design.json
agencidev-ds design variants banner.design.json --by template --count 4
agencidev-ds design sizes banner.design.json --to og,square,story
```

A design is a small JSON file (template, size, theme, the copy you wrote, pictures, layer edits, history). Every write
is checked (whole words, nothing invented, overlap, contrast, safe areas, the logo's clear space and size) and errors
change nothing. Look at the PNG after each step; never edit it by hand.

## Brand

```sh
agencidev-ds brand --json
agencidev-ds brand --section color
agencidev-ds brand --token --ds-color-surface-raised
agencidev-ds principles --surface website --json
```

Black is the ground and White the type; the spectrum colors come only from the light and small accents. Funnel Display
for heads, DM Sans for text (Medium for labels and buttons, labels in capitals at 6%), Geist Mono for code and the
texture. The voice is short declarative sentences ending in a period, sentence case, concrete numbers.

## Components

```sh
agencidev-ds list --json
agencidev-ds view search-bar --json
agencidev-ds component emit button --state variant:secondary
agencidev-ds add button card --dry-run
```

React apps get React; everything else gets web components (`<agd-button>`). Read `view` before using an item.

## Graphics

```sh
agencidev-ds light --list
agencidev-ds light --variant band --seed 1 --out band.svg
agencidev-ds light --variant corner --source generated --seed 7 --format png --out corner.png
agencidev-ds ascii --seed 4 --width 1080 --height 1350 --out texture.svg
```

```sh
agencidev-ds illustrate --list
agencidev-ds illustrate pattern --variant corner --seed 2
agencidev-ds illustrate split --image photo.jpg
agencidev-ds figma tokens
agencidev-ds figma push asset imagery/post-offer.svg
```

`illustrate` follows `brand/illustration.md` (each rule with its source). `figma` never calls Figma: it writes files and
prints the MCP calls in order; `figma check` flags off-brand values in saved Figma output.

The light and the texture are generated from a seed; never paste them as images or draw them by hand. Logos are the
files `brand --section logos` lists; never redraw, recolor or stretch them.

## Check

```sh
agencidev-ds check --json
```

Exit 0 means no values off the brand. Register `agencidev-ds hook` as an edit hook to check each edit as it is made.
