import { Fragment, type ReactNode } from 'react'
import { SiteHeader } from '@/react/components/site/SiteHeader'
import { SiteFooter } from '@/react/components/site/SiteFooter'
import { Statement } from '@/react/components/site/Statement'
import { WorkRail } from '@/react/components/visuals/WorkRail'
import { homeContent, homeSections, type HomeContent, type HomeSection } from '@/lib/pages/home'
import { pageSections } from '@/lib/image'
import { cn } from '@/react/lib/cn'

// The home page from library items (app/page.tsx): the bar, the rail of work across the upper middle of the first
// screen, and the statement at its foot with the stat line over it; the work is the page's argument and the copy is
// one sentence. `content` replaces the copy (lib/pages/home.ts); the rail's strips take your pictures.
export interface HomePageProps {
  content?: HomeContent
  /** The sections to show, in order. */
  sections?: readonly HomeSection[]
  className?: string
}

export function HomePage({ content: c = homeContent, sections, className }: HomePageProps) {
  const parts: Record<HomeSection, ReactNode> = {
    rail: <div className="flex min-h-80 flex-1 items-center py-16"><WorkRail items={c.rail} /></div>,
    statement: <Statement stat={c.stat} figure={c.figure} lead={c.lead} rest={c.rest} />,
  }
  return (
    <div data-ds="home-page" className={cn('flex min-h-screen w-full flex-col bg-surface text-fg', className)}>
      <SiteHeader {...c.header} />
      <main className="flex flex-1 flex-col">{pageSections(homeSections, sections).map((k) => <Fragment key={k}>{parts[k]}</Fragment>)}</main>
      <SiteFooter links={c.footer.links} />
    </div>
  )
}

export default HomePage
