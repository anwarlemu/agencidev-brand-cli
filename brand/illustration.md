# Agencidev imagery

What the brand's own imagery is, as the site draws it. Each rule names where it comes from; nothing here goes beyond
it. `illustrate` follows these rules, and `brand/assets/illustrate.json` holds its styles.

Sources: **site** = the Agencidev website (github.com/anwarlemu/AGD); **tokens** = `brand/tokens.css` and
`brand/brand.json`.

## The no-signal static

1. **A dead channel: a charcoal static with a grey tone roll and a liquid warp, and a glitch band that rolls up the
   screen and reveals white through the black.** (site, lib/no-signal-engine.ts NOISE_FRAGMENT; `registry/lib/signal.ts`
   runs it line for line)
2. **A grain over it at a third of the screen's pixels, overlaid at 50%.** (site, components/no-signal-404.tsx)
3. **Monochrome by construction: no color, ever.** (site, the engine's comment: "re-toned from brand blue to AGD
   monochrome")
4. **Words sit under the band, centered, as the 404 page sets "Page not found."** Never on the band. (site,
   components/no-signal-404.tsx)
5. **It is the one expressive surface: a not-found page, an announcement, a sting.** Not behind reading, not twice on
   a page. (site: it appears only on the 404 page)
6. **`signal` keeps the band across the middle; `field` holds it off the frame; `--time` picks the frame and `--seed`
   the grain.** The same inputs draw the same picture. (`registry/lib/signal.ts`)

## The work rail

7. **Portrait strips of the work in one row, 100 by 280 with 20px between, the first strip a little left of the middle
   (43% across), running off the right edge.** (site, globals.css .rail-ssr, components/home-gallery.tsx)
8. **Square corners, no captions, no shadow; a strip waiting for its picture is the slat (#141414).** (site,
   globals.css .rail-ssr; tokens `--ds-color-slat`)
9. **The pictures are the studio's own work and real people with their consent.** Never stock. (site, PRODUCT.md
   "Show the work, don't describe it")

## The marks

10. **The square is the mark: white on dark, black on light; the liquid-glass mark where it must read over imagery;
    the 3D chrome mark as a picture.** Never recolored or distorted. (site, /branding)

## Never

- Color, gradients as decoration, glows or neon.
- Stock photography or other companies' work.
- Words over the band, or the static boxed into a small tile with hard edges.
