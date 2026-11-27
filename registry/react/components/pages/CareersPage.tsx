import { Fragment, type ReactNode } from 'react'
import { SiteHeader } from '@/react/components/site/SiteHeader'
import { SiteFooter } from '@/react/components/site/SiteFooter'
import { PageHead } from '@/react/components/site/PageHead'
import { Openings } from '@/react/components/site/Openings'
import { careersContent, careersSections, type CareersContent, type CareersSection } from '@/lib/pages/careers'
import { pageSections } from '@/lib/image'
import { cn } from '@/react/lib/cn'

// The careers page from library items: the page head in two tones and the openings with their department filter.
// `content` replaces the copy (lib/pages/careers.ts).
export interface CareersPageProps {
  content?: CareersContent
  sections?: readonly CareersSection[]
  className?: string
}

export function CareersPage({ content: c = careersContent, sections, className }: CareersPageProps) {
  const parts: Record<CareersSection, ReactNode> = {
    head: <PageHead id="careers" lead={c.lead} rest={c.rest} />,
    openings: <Openings roles={c.roles} />,
  }
  return (
    <div data-ds="careers-page" className={cn('flex min-h-screen w-full flex-col bg-surface text-fg', className)}>
      <SiteHeader {...c.header} links={c.header.links.map((l) => ({ ...l, current: l.href === '/careers' }))} />
      <main className="flex-1">{pageSections(careersSections, sections).map((k) => <Fragment key={k}>{parts[k]}</Fragment>)}</main>
      <SiteFooter links={c.footer.links} />
    </div>
  )
}

export default CareersPage
