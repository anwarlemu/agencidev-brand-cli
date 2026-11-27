'use client'
import { useEffect, useRef, type HTMLAttributes } from 'react'
import { runNoSignal } from '@/lib/no-signal'
import { cn } from '@/react/lib/cn'

// The 404 page's no-signal static (components/no-signal-404.tsx, lib/no-signal-engine.ts) as a box: a dead channel's
// charcoal static with its grain, and the glitch band that rolls up through it revealing white (`band`, the default).
// It fills the box it is given; put words over it (they sit under the band, as the 404 page sets "Page not found").
// It runs at about twenty frames a second on a canvas a third of the box's pixels, and holds still under reduced
// motion or with `still`. Monochrome by construction.
export interface NoSignalProps extends HTMLAttributes<HTMLDivElement> {
  /** The glitch band rolling through (default), or only the static. */
  band?: boolean
  /** Holds the first frame instead of running. */
  still?: boolean
  /** The grain's seed. */
  seed?: number
}

export function NoSignal({ band = true, still = false, seed = 0, className, children, ...rest }: NoSignalProps) {
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => (canvas.current ? runNoSignal(canvas.current, { band, animate: !still, seed }) : undefined), [band, still, seed])
  return (
    <div data-ds="no-signal" className={cn('isolate block overflow-hidden bg-surface-sunken', !/\b(absolute|fixed|sticky)\b/.test(className ?? '') && 'relative', className)} {...rest}>
      <canvas ref={canvas} aria-hidden="true" className="absolute inset-0 -z-1 size-full" />
      {children}
    </div>
  )
}

export default NoSignal
