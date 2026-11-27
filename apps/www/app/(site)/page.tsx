import Link from "next/link";

import { NoSignal } from "@/react/components/visuals/NoSignal";
import { Button } from "@/react/components/ui/Button";
import { Command, PageBody, Section } from "@www/components/chrome";
import { CLI, INSTALL_COMMAND, REPO, grouped, items, registryName } from "@www/lib/registry";

export default function HomePage() {
  return (
    <>
      {/* The hero, as the 404 page sets one: the no-signal static behind, the words under its band. */}
      <NoSignal className="flex min-h-140 flex-col justify-end border-b border-edge px-6 pt-48 pb-16 max-sm:px-4 max-sm:pt-32">
        <p className="mb-6 type-ui text-fg">{registryName} design system: <span className="text-fg-muted">{items.length} components</span></p>
        <h1 className="max-w-250 type-section"><span className="text-fg">The brand, the library and the rules in one CLI.</span> <span className="text-fg-muted">Tokens, logos, fonts, the no-signal static and the work rail, and every component in React and as web components, traced to agencidev.com.</span></h1>
        <div className="mt-10 flex flex-wrap gap-2">
          <Button href="/components">Browse components</Button>
          <Button href="/theme" variant="secondary">See the theme</Button>
        </div>
      </NoSignal>
      <PageBody className="max-w-250">
        <Section title="Install the CLI" description="Run once from the project root. init adds the brand stylesheet, the Tailwind theme, the fonts and the agent instructions.">
          <div className="grid gap-2">
            <Command command={INSTALL_COMMAND} />
            <Command command={`${CLI} init`} />
          </div>
        </Section>
        <Section title="Add components" description="React apps get the React files; every other stack gets web components that carry their own styles. Names resolve however they are typed.">
          <div className="grid gap-2">
            <Command command={`${CLI} add button site-header page-head`} />
            <Command command={`${CLI} view page-head`} />
          </div>
        </Section>
        <Section title="Draw the brand graphics" description="The no-signal static is generated from a seed and a time, never pasted as an image: the same seed draws the same picture in a page, a component and a file.">
          <div className="grid gap-2">
            <Command command={`${CLI} illustrate signal --seed 1`} />
            <Command command={`${CLI} image post-statement --headline "..." --body "..."`} />
          </div>
        </Section>
        <Section title="For agents" description="manifest lists every command, template, size, component, token and rule. A name that is not in it is an error, never a guess.">
          <Command command={`${CLI} manifest --json`} />
        </Section>
        {grouped.map((g) => (
          <Section key={g.id} title={g.label}>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-3">
              {g.items.map((i) => (
                <li key={i.name}>
                  <Link href={`/components/${i.name}`} className="grid h-full content-start gap-2 border border-edge p-5 transition-[background-color] duration-150 ease-standard hover:bg-surface-subtle">
                    <span className="type-heading-4">{i.title}</span>
                    <span className="line-clamp-3 type-ui text-fg-muted">{i.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        ))}
        <p className="type-caption text-fg-faint">
          Source: <a href={REPO} className="underline decoration-edge-strong underline-offset-4 transition-[text-decoration-color] duration-150 ease-standard hover:decoration-fg">{REPO.replace("https://", "")}</a>
        </p>
      </PageBody>
    </>
  );
}
