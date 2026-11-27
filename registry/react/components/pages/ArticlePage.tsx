import { Fragment, type ReactNode } from 'react'
import { SiteHeader } from '@/react/components/site/SiteHeader'
import { SiteFooter } from '@/react/components/site/SiteFooter'
import { articleContent, articleSections, type ArticleContent, type ArticleSection } from '@/lib/pages/article'
import { pageSections } from '@/lib/image'
import { cn } from '@/react/lib/cn'

// An article from library items (app/articles/[slug]/page.tsx): a quiet link back, the title at the display step,
// the date and reading time in capitals in mid, the cover at 16:10, and the body in dim running copy in a 36rem
// reading measure, 24px between paragraphs. `content` replaces the copy (lib/pages/article.ts).
export interface ArticlePageProps {
  content?: ArticleContent
  sections?: readonly ArticleSection[]
  className?: string
}

export function ArticlePage({ content: c = articleContent, sections, className }: ArticlePageProps) {
  const meta = [c.date, c.readingTime].filter(Boolean)
  const parts: Record<ArticleSection, ReactNode> = {
    head: (
      <header className="flex flex-col gap-6">
        <a href={c.back.href} className="w-fit type-label text-fg-soft transition-colors duration-150 ease-standard hover:text-fg active:text-action-press-ink active:transition-none">{c.back.label}</a>
        <h1 className="type-section text-fg">{c.title}</h1>
        {meta.length ? <p className="type-ui uppercase text-fg-muted">{meta.join(' · ')}</p> : null}
      </header>
    ),
    cover: <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden bg-surface-inset">{c.cover ? <img src={c.cover} alt="" className="absolute inset-0 size-full object-cover" /> : null}</div>,
    body: <div className="mt-10 flex max-w-(--ds-layout-measure) flex-col gap-6">{c.body.map((p) => <p key={p} className="type-body text-fg-soft">{p}</p>)}</div>,
  }
  return (
    <div data-ds="article-page" className={cn('flex min-h-screen w-full flex-col bg-surface text-fg', className)}>
      <SiteHeader {...c.header} links={c.header.links.map((l) => ({ ...l, current: l.href === '/articles' }))} />
      <main className="flex-1"><article className="mx-auto w-full max-w-(--ds-layout-page) px-6 pt-32 sm:pt-44">{pageSections(articleSections, sections).map((k) => <Fragment key={k}>{parts[k]}</Fragment>)}</article></main>
      <SiteFooter links={c.footer.links} />
    </div>
  )
}

export default ArticlePage
