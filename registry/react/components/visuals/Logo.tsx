import type { CSSProperties } from 'react'
import { LOGOS, type LogoVariant } from '@/lib/logos'
import { cn } from '@/react/lib/cn'

// The logo, from the site's own files (lib/logos.ts, split from public/agd-lockup.svg, never redrawn): the square
// (the mark), the wordmark and the lockup (the square and the wordmark, as the bar and the footer set it). Black or
// white only: `tone` auto takes the text color (white on the canvas, black on white), or force white or black. Size it
// by `height` (px; the bar's lockup is 18, the footer's 20); its width follows. Keep clear space around it and never
// recolor or distort it (the brand kit).
export type LogoTone = 'auto' | 'white' | 'black'

export interface LogoProps {
  /** mark (the square), wordmark or horizontal (the lockup). */
  variant?: LogoVariant
  /** auto (the text color), white or black. */
  tone?: LogoTone
  /** Height in px (18 is the bar's lockup, 20 the footer's). */
  height?: number
  /** The accessible name. */
  label?: string
  className?: string
}

const TONES: Record<LogoTone, string> = { auto: 'text-fg', white: 'text-(--ds-color-white)', black: 'text-(--ds-color-pure-black)' }

export function Logo({ variant = 'horizontal', tone = 'auto', height = 18, label = 'Agencidev', className }: LogoProps) {
  const l = LOGOS[variant]
  const style: CSSProperties = { height: `${height}px`, width: `${Math.round(((height * l.width) / l.height) * 100) / 100}px` }
  return (
    <svg data-ds="logo" role="img" aria-label={label} viewBox={`0 0 ${l.width} ${l.height}`} fill="currentColor" style={style} className={cn('block shrink-0', TONES[tone], className)} dangerouslySetInnerHTML={{ __html: l.body }} />
  )
}

export default Logo
