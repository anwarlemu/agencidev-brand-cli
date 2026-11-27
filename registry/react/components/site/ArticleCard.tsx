import { cn } from '@/react/lib/cn'

// An article in the list (app/articles/page.tsx): the cover at 16:10 on the plate fill, then the date and reading
// time in 14px capitals in mid (white under the pointer), the title in 16px white at leading 1.25, and three lines of
// the excerpt in dim. The whole card is the link.
export interface ArticleCardProps {
  title: string
  href: string
  date?: string
  readingTime?: string
  excerpt?: string
  cover?: string
  className?: string
}

export function ArticleCard({ title, href, date, readingTime, excerpt, cover, className }: ArticleCardProps) {
  const meta = [date, readingTime].filter(Boolean)
  return (
    <a data-ds="article-card" href={href} className={cn('group flex flex-col', className)}>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-inset">
        {cover ? <img src={cover} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" /> : null}
      </div>
      {meta.length ? (
        <p className="mt-5 type-ui uppercase text-fg-muted transition-colors duration-150 ease-standard group-hover:text-fg group-active:text-action-press-ink group-active:transition-none">
          {meta.map((m, i) => <span key={m}>{i ? <span aria-hidden="true" className="px-2">·</span> : null}{m}</span>)}
        </p>
      ) : null}
      <h2 className="mt-3 type-heading-4 text-fg">{title}</h2>
      {excerpt ? <p className="mt-3 line-clamp-3 type-body text-fg-soft">{excerpt}</p> : null}
    </a>
  )
}

export default ArticleCard
