'use client'
import { HoverCard } from '@/react/components/ui/HoverCard'
// A client named in a sentence; rest the pointer on it (or tab to it) and its card shows the work with it.
// The link still works on its own.

export default function Client() {
  return (
    <div className="flex min-h-64 flex-col items-center gap-3">
      <p className="type-label text-fg-muted">Recent work</p>
      <p className="max-w-90 type-ui text-fg-soft">
        This month's releases come from
        {' '}
        <HoverCard
          card={(
            <>
              <p className="type-ui-strong text-fg">Acme Studio</p>
              <p className="mt-1 type-caption text-fg-muted">Fintech startup. A partner since January.</p>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 border-t border-edge pt-4 type-caption">
                <dt className="text-fg-muted">Screens shipped</dt><dd className="text-right text-fg tabular-nums">128</dd>
                <dt className="text-fg-muted">In review</dt><dd className="text-right text-fg tabular-nums">14</dd>
              </dl>
            </>
          )}
        >
          <a href="#" className="text-fg underline decoration-edge-strong underline-offset-4 transition-[text-decoration-color] duration-150 ease-standard hover:decoration-fg" onClick={(e) => e.preventDefault()}>Acme Studio</a>
        </HoverCard>
        , the partnership with the most releases.
      </p>
    </div>
  )
}
