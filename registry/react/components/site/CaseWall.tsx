import { cn } from '@/react/lib/cn'

// A case study's wall of work (components/case-wall.tsx): the client's name at the display step on the left with a
// plate link to the live product on the right, then the work in masonry columns 20px apart (two, four from 1024; one
// and two for few pieces), each piece square-cornered on the plate fill. A piece still in the works is a hairline box
// with its caption in 12px capitals in white at 60%, never an empty frame.
export interface CasePiece {
  src?: string
  alt?: string
  /** Width over height, so the column keeps its shape before the picture lands. */
  ratio?: number
  /** Shown in place of a picture that is not ready. */
  caption?: string
}

export interface CaseWallProps {
  /** The client's name. */
  title: string
  pieces: CasePiece[]
  /** The plate link (the live product). */
  link?: { label: string; href: string }
  className?: string
}

export function CaseWall({ title, pieces, link, className }: CaseWallProps) {
  const columns = pieces.length <= 2 ? 'columns-1 sm:columns-2' : pieces.length <= 6 ? 'columns-2 lg:columns-3' : 'columns-2 lg:columns-4'
  return (
    <section data-ds="case-wall" aria-labelledby="case-heading" className={cn('w-full px-6 pt-32 sm:pt-44', className)}>
      <header className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <h1 id="case-heading" className="type-section text-fg">{title}</h1>
        {link ? <a href={link.href} className="inline-flex h-control-md w-fit items-center rounded-control bg-action-primary px-6 type-label text-action-primary-fg transition-colors duration-150 ease-standard hover:bg-action-primary-hover hover:text-action-primary-fg-hover active:bg-action-primary-press active:text-fg-inverse active:transition-none">{link.label}</a> : null}
      </header>
      <div className={cn(columns, 'gap-5')}>
        {pieces.map((p, i) => (
          <div key={`${i}-${p.src ?? p.caption ?? ''}`} style={{ aspectRatio: String(p.ratio ?? 4 / 3) }} className="relative mb-5 break-inside-avoid overflow-hidden bg-surface-inset">
            {p.src ? <img src={p.src} alt={p.alt ?? ''} loading="lazy" className="absolute inset-0 size-full object-cover" /> : (
              <div className="absolute inset-0 flex items-center justify-center border border-edge-strong px-4">
                <span className="max-w-[36ch] text-center type-label text-balance text-fg-faint">{p.caption ?? 'In progress'}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseWall
