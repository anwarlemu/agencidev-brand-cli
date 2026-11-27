import type { HTMLAttributes } from 'react'
import { cn } from '@/react/lib/cn'

// shadcn's badge in the site's look: a short label for a state or a kind in 12px capitals (the filter chips on the
// about and careers pages), 24px tall, square. default is the quiet fill (white at 10% over the canvas) with a white
// label, as the chosen filter; secondary is the plate (#252525); outline a hairline (white at 20%) with a dim label;
// destructive a red wash with a red label, always with the word. `dot` leads it with a small round dot, white (on) or
// mid (off), as the 404 page leads its link: never a color, and the word carries the meaning.
export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive'
export type BadgeDot = 'on' | 'off'

const VARIANTS: Record<BadgeVariant, string> = {
  default: 'border-transparent bg-surface-subtle text-fg',
  secondary: 'border-transparent bg-surface-inset text-fg',
  outline: 'border-edge-strong bg-transparent text-fg-soft',
  destructive: 'border-transparent bg-surface-danger text-fg-danger',
}
const DOTS: Record<BadgeDot, string> = {
  on: 'bg-fg',
  off: 'bg-fg-muted',
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** default (the quiet fill), secondary (the plate), outline or destructive. */
  variant?: BadgeVariant
  /** A small dot before the word: on (white) or off (mid). */
  dot?: BadgeDot
}

export function Badge({ variant = 'default', dot, className, children, ...rest }: BadgeProps) {
  return (
    <span data-ds="badge" className={cn('inline-flex h-6 shrink-0 items-center gap-1.5 rounded-ds-sm border px-2 type-label whitespace-nowrap', VARIANTS[variant] ?? VARIANTS.default, className)} {...rest}>
      {dot && <span className={cn('size-1.5 shrink-0 rounded-full', DOTS[dot])} aria-hidden="true" />}
      {children}
    </span>
  )
}

export default Badge
