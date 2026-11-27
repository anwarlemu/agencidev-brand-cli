import { Fragment, type ReactNode } from 'react'
import { SiteHeader } from '@/react/components/site/SiteHeader'
import { SiteFooter } from '@/react/components/site/SiteFooter'
import { PageHead } from '@/react/components/site/PageHead'
import { DetailList } from '@/react/components/site/DetailList'
import { Button } from '@/react/components/ui/Button'
import { contactContent, contactSections, type ContactContent, type ContactSection } from '@/lib/pages/contact'
import { pageSections } from '@/lib/image'
import { cn } from '@/react/lib/cn'

// The contact page from library items (app/contact/page.tsx): the two-tone head with the plate button and the email
// as a quiet one, the ways to get in touch as label and description rows, and the notes in dim running copy, one per
// row. `content` replaces the copy (lib/pages/contact.ts).
export interface ContactPageProps {
  content?: ContactContent
  sections?: readonly ContactSection[]
  className?: string
}

export function ContactPage({ content: c = contactContent, sections, className }: ContactPageProps) {
  const parts: Record<ContactSection, ReactNode> = {
    head: (
      <PageHead id="contact" lead={c.lead} rest={c.rest}>
        <Button href={c.primary.href}>{c.primary.label}</Button>
        <Button href={c.secondary.href} variant="secondary">{c.secondary.label}</Button>
      </PageHead>
    ),
    ways: <section aria-label="Ways to reach us" className="px-6 py-16"><DetailList items={c.ways} /></section>,
    notes: <section aria-label="Notes" className="flex flex-col gap-16 px-6 py-16">{c.notes.map((n) => <p key={n} className="type-body text-fg-soft">{n}</p>)}</section>,
  }
  return (
    <div data-ds="contact-page" className={cn('flex min-h-screen w-full flex-col bg-surface text-fg', className)}>
      <SiteHeader {...c.header} />
      <main className="flex-1">{pageSections(contactSections, sections).map((k) => <Fragment key={k}>{parts[k]}</Fragment>)}</main>
      <SiteFooter links={c.footer.links} />
    </div>
  )
}

export default ContactPage
