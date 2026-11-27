import { Fragment, type ReactNode } from 'react'
import { SiteHeader } from '@/react/components/site/SiteHeader'
import { SiteFooter } from '@/react/components/site/SiteFooter'
import { PageHead } from '@/react/components/site/PageHead'
import { Row } from '@/react/components/site/Row'
import { legalContent, legalSections, type LegalContent, type LegalSection } from '@/lib/pages/legal'
import { pageSections } from '@/lib/image'
import { cn } from '@/react/lib/cn'

// A legal page from library items (app/privacy, app/accessibility): the head (the title in white, when it changed in
// mid), then titled rows of dim running copy in a 36rem reading measure. `content` replaces the copy (lib/pages/legal.ts).
export interface LegalPageProps {
  content?: LegalContent
  sections?: readonly LegalSection[]
  className?: string
}

export function LegalPage({ content: c = legalContent, sections, className }: LegalPageProps) {
  const parts: Record<LegalSection, ReactNode> = {
    head: <PageHead id="legal" lead={c.lead} rest={c.rest} />,
    body: <div className="mx-auto max-w-(--ds-layout-page)">{c.sections.map((s) => <Row key={s.title} label={s.title} titled><p className="max-w-(--ds-layout-measure) type-body text-fg-soft">{s.body}</p></Row>)}</div>,
  }
  return (
    <div data-ds="legal-page" className={cn('flex min-h-screen w-full flex-col bg-surface text-fg', className)}>
      <SiteHeader {...c.header} />
      <main className="flex-1">{pageSections(legalSections, sections).map((k) => <Fragment key={k}>{parts[k]}</Fragment>)}</main>
      <SiteFooter links={c.footer.links} />
    </div>
  )
}

export default LegalPage
