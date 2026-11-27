import type { ReactNode } from 'react'
import { cn } from '@/react/lib/cn'

// One section of an inner page (components/row.tsx): 24px in from the edges, 40px above and below (56 from 640). Its
// title is read by screen readers and shown only when `titled` (16px white, leading tight); an `aside` (a filter, a
// note) sits 24px under the title and the body 40px under that, or 16px under a lone title.
export interface RowProps {
  /** The section's name. */
  label: string
  /** Shows the name as a title. */
  titled?: boolean
  /** A filter or a note between the title and the body. */
  aside?: ReactNode
  id?: string
  children?: ReactNode
  className?: string
}

export function Row({ label, titled = false, aside, id, children, className }: RowProps) {
  return (
    <section data-ds="row" id={id} className={cn('mx-6 py-10 sm:py-14', className)}>
      <h2 className={titled ? 'type-heading-4 text-fg' : 'sr-only'}>{label}</h2>
      {aside ? <div className={titled ? 'mt-6' : undefined}>{aside}</div> : null}
      <div className={cn('min-w-0', aside ? 'mt-10' : titled ? 'mt-4' : undefined)}>{children}</div>
    </section>
  )
}

export default Row
