import type { ReactNode } from 'react'
import { cn } from '@/react/lib/cn'

// The site's page head (components/page-head.tsx): the page's H1 set like the homepage statement, one size in two
// tones (the lead in white running on into the rest in mid), Agencidev Sans at the display step (28, 36 from 640),
// leading 1.14, centered in a 64rem measure; its actions 40px under it (48 from 640), 8px apart. 128px above (176
// from 640) and 64px below (96 from 640), so it clears the bar.
export interface PageHeadProps {
  /** Names the heading (`<id>-heading`). */
  id?: string
  /** The lead, in white. */
  lead: string
  /** The rest, in mid, on the same lines. */
  rest?: string
  /** Actions under it: a plate button and a quiet one. */
  children?: ReactNode
  className?: string
}

export function PageHead({ id = 'page', lead, rest, children, className }: PageHeadProps) {
  return (
    <header data-ds="page-head" aria-labelledby={`${id}-heading`} className={cn('px-6 pt-32 pb-16 text-center sm:pt-44 sm:pb-24', className)}>
      <h1 id={`${id}-heading`} className="mx-auto max-w-(--ds-layout-page) type-section text-balance">
        <span className="text-fg">{lead}</span>
        {rest ? <> <span className="text-fg-muted">{rest}</span></> : null}
      </h1>
      {children ? <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12">{children}</div> : null}
    </header>
  )
}

export default PageHead
