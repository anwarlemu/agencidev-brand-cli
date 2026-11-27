import { cn } from '@/react/lib/cn'

// The homepage statement (app/page.tsx, lib/home-content.ts): the stat line over it in 14px white with its figure in
// mid ("YC26 startups each batch designed by Agencidev: 6.06%"), then the statement at the display step in two tones,
// the lead in white running on into the rest in mid, left aligned across the page, 24px in from the edge. It sits at
// the foot of the first screen on the site, under the rail.
export interface StatementProps {
  /** Names the heading (`<id>-heading`). */
  id?: string
  /** The lead, in white. */
  lead: string
  /** The rest, in mid, on the same lines. */
  rest?: string
  /** The stat line over it. */
  stat?: string
  /** The stat's figure, in mid after it. */
  figure?: string
  /** The heading level: h1 on a home page, h2 elsewhere. */
  as?: 'h1' | 'h2'
  className?: string
}

export function Statement({ id = 'statement', lead, rest, stat, figure, as: H = 'h1', className }: StatementProps) {
  return (
    <section data-ds="statement" aria-labelledby={`${id}-heading`} className={cn('px-6 pb-6', className)}>
      {stat ? (
        <p className="mb-6 type-ui text-fg">
          {stat}
          {figure ? <span className="ml-2 text-fg-muted">{figure}</span> : null}
        </p>
      ) : null}
      <H id={`${id}-heading`} className="max-w-(--ds-layout-content) type-section">
        <span className="text-fg">{lead}</span>
        {rest ? <> <span className="text-fg-muted">{rest}</span></> : null}
      </H>
    </section>
  )
}

export default Statement
