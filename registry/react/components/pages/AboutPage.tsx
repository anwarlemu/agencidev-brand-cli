import { Fragment, type ReactNode } from 'react'
import { SiteHeader } from '@/react/components/site/SiteHeader'
import { SiteFooter } from '@/react/components/site/SiteFooter'
import { TeamList } from '@/react/components/site/TeamList'
import { ProcessList } from '@/react/components/site/ProcessList'
import { Openings } from '@/react/components/site/Openings'
import { aboutContent, aboutSections, type AboutContent, type AboutSection } from '@/lib/pages/about'
import { pageSections } from '@/lib/image'
import { cn } from '@/react/lib/cn'

// The about page from library items (components/about-view.tsx): the bets centered at the display step (the title
// and the closing line in white, the bets in mid, a blank line between), the team's names, the process (its statement
// in two tones over the numbered rows) and the openings. `content` replaces the copy (lib/pages/about.ts).
export interface AboutPageProps {
  content?: AboutContent
  sections?: readonly AboutSection[]
  className?: string
}

export function AboutPage({ content: c = aboutContent, sections, className }: AboutPageProps) {
  const parts: Record<AboutSection, ReactNode> = {
    bets: (
      <section aria-labelledby="bets-heading" className="px-6 pt-32 pb-24 text-center sm:pt-44">
        <h1 id="bets-heading" className="type-section text-fg">{c.bets.title}</h1>
        <div className="mx-auto mt-10 flex max-w-(--ds-layout-page) flex-col gap-10 type-section text-balance">
          {c.bets.lines.map((l) => <p key={l} className="text-fg-muted">{l}</p>)}
          <p className="text-fg">{c.bets.close}</p>
        </div>
      </section>
    ),
    team: <section aria-label="Team" className="py-24"><TeamList members={c.team} /></section>,
    process: (
      <section aria-labelledby="process-heading" className="px-6 py-14">
        <h2 id="process-heading" className="max-w-(--ds-layout-page) type-section"><span className="text-fg">{c.process.lead}</span> <span className="text-fg">{c.process.rest}</span></h2>
        <ProcessList steps={c.process.steps} className="mt-12" />
      </section>
    ),
    openings: <Openings roles={c.roles} />,
  }
  return (
    <div data-ds="about-page" className={cn('flex min-h-screen w-full flex-col bg-surface text-fg', className)}>
      <SiteHeader {...c.header} links={c.header.links.map((l) => ({ ...l, current: l.href === '/about' }))} />
      <main className="flex-1">{pageSections(aboutSections, sections).map((k) => <Fragment key={k}>{parts[k]}</Fragment>)}</main>
      <SiteFooter links={c.footer.links} />
    </div>
  )
}

export default AboutPage
