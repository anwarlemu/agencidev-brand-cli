import { readFileSync } from "node:fs";
import path from "node:path";

import { NoSignal } from "@/react/components/visuals/NoSignal";
import { WorkRail } from "@/react/components/visuals/WorkRail";
import { Logo } from "@/react/components/visuals/Logo";
import { Code, Command, PageBody, PageHead, Section } from "@www/components/chrome";
import { CLI, assetBase } from "@www/lib/registry";

export const metadata = { title: "Theme" };

type Token = { value: string; light: string; dark: string };
const tokens = (JSON.parse(readFileSync(path.join(process.cwd(), "../../build/tokens.json"), "utf8")) as { tokens: Record<string, Token> }).tokens;
const all = Object.entries(tokens);
const value = (name: string) => tokens[name]?.light ?? "";

const BASE = ["--ds-color-black", "--ds-color-white", "--ds-color-faint", "--ds-color-subtle", "--ds-color-muted", "--ds-color-dim", "--ds-color-mid", "--ds-color-plate", "--ds-color-slat"];
const ROLES = all.filter(([k, v]) => k.startsWith("--ds-color-") && v.value.startsWith("var("));

const TYPE = [
  ["type-section", "Agencidev Sans 400, 28 then 36 from 640, leading 1.14: every page head and the homepage statement (the one display step)"],
  ["type-heading-3", "Agencidev Sans 400, 20, a pull quote"],
  ["type-heading-4", "Agencidev Sans 400, 16, a row's title"],
  ["type-body", "ABC Diatype 400, 16, leading 1.625: running copy"],
  ["type-ui", "ABC Diatype 400, 14: the default, most of the UI"],
  ["type-label", "ABC Diatype 400, 12, capitals, untracked: links, buttons, chips"],
  ["type-caption", "ABC Diatype 400, 12: meta"],
  ["type-code", "System mono 14"],
] as const;

const LOCKUPS = [
  ["horizontal", 36],
  ["mark", 36],
  ["wordmark", 36],
] as const;

function Swatch({ name, big }: { name: string; big?: boolean }) {
  return (
    <div className="grid min-w-0 gap-2">
      <div className={big ? "h-24 rounded-control border border-edge" : "h-14 rounded-control border border-edge"} style={{ background: `var(${name})` }} />
      <div className="min-w-0">
        <p className="truncate type-code text-fg">{name.replace("--ds-color-", "")}</p>
        <p className="truncate type-code text-fg-muted">{value(name)}</p>
      </div>
    </div>
  );
}

function Table({ rows }: { rows: [string, string, string?][] }) {
  return (
    <div className="overflow-hidden rounded-control border border-edge">
      <div className="overflow-x-auto fade-x">
        <table className="w-full border-collapse type-ui">
          <tbody>
            {rows.map(([name, v, note]) => (
              <tr key={name}>
                <td className="border-b border-edge px-4 py-2.5 type-code text-fg">{name}</td>
                <td className="border-b border-edge px-4 py-2.5 type-code text-fg-soft">{v}</td>
                <td className="border-b border-edge px-4 py-2.5 type-caption text-fg-muted">{note ?? ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ThemePage() {
  const pick = (prefix: string) => all.filter(([k]) => k.startsWith(prefix)).map(([k, v]) => [k, v.value] as [string, string]);
  return (
    <>
      <PageHead eyebrow="Brand" title="Theme" description="Every token, the logo set, the no-signal static and the work rail. Components already use these; use the same names for anything new." />
      <PageBody className="max-w-250">
        <Section id="logo" title="Logo" description="The square, the lockup and the wordmark, split from the site's own lockup (never redrawn), white on the canvas and black on white. Keep clear space around it; never recolor or distort it.">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="grid content-start gap-8 rounded-container border border-edge bg-surface p-8 max-sm:p-5">
              {LOCKUPS.map(([v, h]) => <Logo key={v} variant={v} height={h} label={`Agencidev ${v}`} />)}
            </div>
            <div data-theme="light" className="grid content-start gap-8 rounded-container bg-surface p-8 max-sm:p-5">
              {LOCKUPS.map(([v, h]) => <Logo key={v} variant={v} height={h} label={`Agencidev ${v}, black`} />)}
            </div>
          </div>
          <p className="type-ui text-fg-muted">Files: <span className="type-code text-fg-soft">{assetBase}/logo/&lt;lockup&gt;-black.svg</span> and <span className="type-code text-fg-soft">-white.svg</span> for mark, wordmark and horizontal, plus mark-glass.svg, favicon.svg and the avatars. <span className="type-code text-fg-soft">{CLI} brand --section logos</span> lists them.</p>
        </Section>

        <Section id="color" title="Color" description="Monochrome by construction: a near-black canvas, white ink, white tints by strength (faint 10%, subtle 20%, muted 60%) and three solid greys that hold over any surface. Color is used strategically: mute what does not need attention.">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">{BASE.map((n) => <Swatch key={n} name={n} big />)}</div>
          <div className="grid gap-2">
            <p className="type-label text-fg-muted">Roles (dark, the default)</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{ROLES.map(([n]) => <Swatch key={n} name={n} />)}</div>
          </div>
        </Section>

        <Section id="type" title="Type" description="Two families, one weight: Agencidev Sans sets every heading, ABC Diatype everything else. Sizes are 12, 13, 14 or a multiple of 4; color, not size, makes the hierarchy.">
          <div className="divide-y divide-edge rounded-control border border-edge px-5">
            {TYPE.map(([cls, note]) => (
              <div key={cls} className="grid items-baseline gap-2 py-5 md:grid-cols-[14rem_1fr]">
                <div><p className="type-code text-fg">{cls}</p><p className="type-caption text-fg-muted">{note}</p></div>
                <p className={`${cls} min-w-0 text-fg`}>Product design thinking and implementation.</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="signal" title="The no-signal static" description="The 404 page's dead channel: a charcoal static with its grain, and the glitch band rolling up through it, revealing white. The brand's one expressive surface; words sit under the band.">
          <NoSignal still className="h-80 w-full" />
          <Command command={`${CLI} illustrate signal --seed 2`} />
        </Section>

        <Section id="rail" title="The work rail" description="The home page's row of portrait strips, 100 by 280 with 20px between, the first a little left of the middle, running off the right edge. Square corners; your work in every strip.">
          <WorkRail items={Array.from({ length: 10 }, () => ({}))} />
        </Section>

        <Section id="shape" title="Space, size, corners and borders" description="Every padding, margin, gap and radius a multiple of 4 or 6. Two radii: square everywhere, 4px on the plate button. No shadows: space, a tint or a hairline separates.">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pick("--ds-radius-").map(([n, v]) => (
              <div key={n} className="grid gap-2"><div className="h-16 border border-edge-strong bg-surface-raised" style={{ borderRadius: `var(${n})` }} /><p className="type-code text-fg">{n.replace("--ds-radius-", "radius-")} <span className="text-fg-muted">{v}</span></p></div>
            ))}
          </div>
          <Table rows={[...pick("--ds-space-"), ...pick("--ds-size-"), ...pick("--ds-layout-"), ...pick("--ds-border-")]} />
        </Section>

        <Section id="motion" title="Motion" description="One curve, the expo-out ease-brand. Hover is a color change at 150ms; press shows on pointer down with no transition; menus fade in 250ms and their links rise in 350ms; a page head rises in 500ms. Things used a hundred times a day never move.">
          <Table rows={[...pick("--ds-duration-"), ...pick("--ds-easing-")]} />
        </Section>

        <Section id="canvas" title="The 1080 canvas" description="Posts 1080x1080, ads 1080x1350, stories 1080x1920, decks 1920x1080: the site's sizes at 1.5 (a post is read on a phone at about 720 site pixels), snapped to the house rules.">
          <Table rows={pick("--ds-asset-")} />
        </Section>

        <Section id="import" title="Import the theme" description="init writes the brand stylesheet and the Tailwind theme beside the app's main stylesheet and imports them.">
          <Command command={`${CLI} init`} />
          <Code title="app/globals.css" code={`@import "tailwindcss";\n@import "./agencidev-ds/brand.css";\n@import "./agencidev-ds/theme.css";`} />
        </Section>
      </PageBody>
    </>
  );
}
