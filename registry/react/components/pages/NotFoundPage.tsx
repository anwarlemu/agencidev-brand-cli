import { NoSignal } from '@/react/components/visuals/NoSignal'
import { notFoundContent, type NotFoundContent } from '@/lib/pages/not-found'
import { cn } from '@/react/lib/cn'

// The not found page (components/no-signal-404.tsx): the no-signal static filling the screen, the head centered under
// the band, a line in dim, and the way home: a white dot, the words, and an arrow in a ring. `content` replaces the
// copy; `still` holds the static.
export interface NotFoundPageProps {
  content?: NotFoundContent
  /** Holds the static still. */
  still?: boolean
  className?: string
}

export function NotFoundPage({ content: c = notFoundContent, still = false, className }: NotFoundPageProps) {
  return (
    <NoSignal data-ds="not-found-page" still={still} className={cn('flex min-h-screen w-full flex-col items-center justify-end px-6 pb-[18vh] text-center', className)}>
      <h1 className="type-section text-fg">{c.title}</h1>
      <p className="mt-6 max-w-72 type-ui text-fg-soft">{c.body}</p>
      <a href={c.link.href} className="mt-8 inline-flex items-center gap-3 type-ui text-fg transition-colors duration-150 ease-standard hover:text-fg-soft active:text-action-press-ink active:transition-none">
        <span aria-hidden="true" className="size-2 rounded-full bg-fg" />
        {c.link.label}
        <span aria-hidden="true" className="flex size-5 items-center justify-center rounded-full border border-current type-caption">→</span>
      </a>
    </NoSignal>
  )
}

export default NotFoundPage
