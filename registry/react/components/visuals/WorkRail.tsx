import type { CSSProperties } from 'react'
import { cn } from '@/react/lib/cn'

// The home rail (components/home-gallery.tsx, globals.css .rail-ssr): portrait strips of work in one row, 100 by 280
// with 20px between (72 by 208, 14 apart under 640), the first strip centered `start` percent across (43 on the site)
// and the row running off the right edge. Square corners; a strip without its picture is the slat fill. The site draws
// it in WebGL and drifts it; this is the row at rest, as the site's HTML paints it before the engine takes over.
export interface WorkRailItem {
  /** The picture. */
  src?: string
  /** What it shows (empty for decoration). */
  alt?: string
}

export interface WorkRailProps {
  items: WorkRailItem[]
  /** Where the first strip's middle sits, in percent of the width. */
  start?: number
  /** The row's accessible name. */
  label?: string
  className?: string
}

export function WorkRail({ items, start = 43, label = 'Selected work', className }: WorkRailProps) {
  const style = { '--rail-start': `${start}%` } as CSSProperties
  return (
    <div data-ds="work-rail" role="list" aria-label={label} style={style} className={cn('relative w-full overflow-x-clip', className)}>
      <div className="flex gap-(--ds-rail-gap-phone) pl-[calc(var(--rail-start)-var(--ds-rail-strip-w-phone)/2)] sm:gap-(--ds-rail-gap) sm:pl-[calc(var(--rail-start)-var(--ds-rail-strip-w)/2)]">
        {items.map((item, i) => (
          <div key={`${i}-${item.src ?? ''}`} role="listitem" className="relative h-(--ds-rail-strip-h-phone) w-(--ds-rail-strip-w-phone) shrink-0 overflow-hidden bg-surface-raised sm:h-(--ds-rail-strip-h) sm:w-(--ds-rail-strip-w)">
            {item.src ? <img src={item.src} alt={item.alt ?? ''} loading="lazy" className="absolute inset-0 size-full object-cover" /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkRail
