import { Fragment, type ReactNode } from 'react'
import { SiteHeader } from '@/react/components/site/SiteHeader'
import { SiteFooter } from '@/react/components/site/SiteFooter'
import { CaseWall } from '@/react/components/site/CaseWall'
import { caseStudyContent, caseStudySections, type CaseStudyContent, type CaseStudySection } from '@/lib/pages/case-study'
import { pageSections } from '@/lib/image'
import { cn } from '@/react/lib/cn'

// A case study from library items (components/case-wall.tsx): the client's name with its live link, then the work in
// masonry columns; the work carries the argument. `content` replaces the copy and the pictures (lib/pages/case-study.ts).
export interface CaseStudyPageProps {
  content?: CaseStudyContent
  sections?: readonly CaseStudySection[]
  className?: string
}

export function CaseStudyPage({ content: c = caseStudyContent, sections, className }: CaseStudyPageProps) {
  const parts: Record<CaseStudySection, ReactNode> = {
    wall: <CaseWall title={c.title} link={c.link} pieces={c.pieces} />,
  }
  return (
    <div data-ds="case-study-page" className={cn('flex min-h-screen w-full flex-col bg-surface text-fg', className)}>
      <SiteHeader {...c.header} />
      <main className="flex-1">{pageSections(caseStudySections, sections).map((k) => <Fragment key={k}>{parts[k]}</Fragment>)}</main>
      <SiteFooter links={c.footer.links} />
    </div>
  )
}

export default CaseStudyPage
