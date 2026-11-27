import { Fragment, type ReactNode } from 'react'
import { SiteHeader } from '@/react/components/site/SiteHeader'
import { SiteFooter } from '@/react/components/site/SiteFooter'
import { ArticleCard } from '@/react/components/site/ArticleCard'
import { articlesContent, articlesSections, type ArticlesContent, type ArticlesSection } from '@/lib/pages/articles'
import { pageSections } from '@/lib/image'
import { cn } from '@/react/lib/cn'

// The articles page from library items (app/articles/page.tsx): a line in dim under the bar, then the articles in a
// grid (one column, two from 640, three from 1024; 24px across and 56px down). `content` replaces the copy.
export interface ArticlesPageProps {
  content?: ArticlesContent
  sections?: readonly ArticlesSection[]
  className?: string
}

export function ArticlesPage({ content: c = articlesContent, sections, className }: ArticlesPageProps) {
  const parts: Record<ArticlesSection, ReactNode> = {
    intro: <p className="mb-14 type-body text-fg-soft">{c.intro}</p>,
    list: <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{c.articles.map((a) => <ArticleCard key={a.title} {...a} />)}</div>,
  }
  return (
    <div data-ds="articles-page" className={cn('flex min-h-screen w-full flex-col bg-surface text-fg', className)}>
      <SiteHeader {...c.header} links={c.header.links.map((l) => ({ ...l, current: l.href === '/articles' }))} />
      <main className="flex-1">
        <h1 className="sr-only">Articles</h1>
        <section aria-label="All articles" className="mx-6 pt-32 sm:pt-44">{pageSections(articlesSections, sections).map((k) => <Fragment key={k}>{parts[k]}</Fragment>)}</section>
      </main>
      <SiteFooter links={c.footer.links} />
    </div>
  )
}

export default ArticlesPage
