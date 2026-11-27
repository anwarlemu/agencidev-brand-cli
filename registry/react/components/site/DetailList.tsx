import { cn } from '@/react/lib/cn'

// The contact page's rows (app/contact/page.tsx): a label in 16px white and its description in dim running copy beside
// it (a 248px label column from 640, stacked below), 40px between rows. For ways to get in touch, terms, facts.
export interface DetailItem {
  label: string
  body: string
  /** Makes the label a link. */
  href?: string
}

export interface DetailListProps {
  items: DetailItem[]
  className?: string
}

export function DetailList({ items, className }: DetailListProps) {
  return (
    <dl data-ds="detail-list" className={cn('flex w-full flex-col gap-10', className)}>
      {items.map((it) => (
        <div key={it.label} className="grid gap-2 sm:grid-cols-[248px_minmax(0,1fr)] sm:gap-0">
          <dt className="type-body text-fg">{it.href ? <a href={it.href} className="transition-colors duration-150 ease-standard hover:text-fg-soft active:text-action-press-ink active:transition-none">{it.label}</a> : it.label}</dt>
          <dd className="type-body text-fg-soft">{it.body}</dd>
        </div>
      ))}
    </dl>
  )
}

export default DetailList
