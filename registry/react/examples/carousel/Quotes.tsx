'use client'
import { Carousel } from '@/react/components/ui/Carousel'
// One quote at a time from Acme's team, on the raised fill.
const quotes = [
  'The first flow shipped in three weeks, and the system made the next one faster.',
  'Our engineers build from the components now. Reviews are shorter.',
  'It felt like one team, not a vendor.',
]

export default function Quotes() {
  return (
    <div className="w-full max-w-150">
      <Carousel
        label="Quotes"
        count={quotes.length}
        slide={({ index }) => (
          <figure className="flex h-full flex-col justify-between gap-8 rounded-container bg-surface-raised p-8 max-sm:p-6">
            <blockquote className="type-heading-3">{quotes[index]}</blockquote>
            <figcaption className="type-caption text-fg-muted">Acme product team</figcaption>
          </figure>
        )}
      />
    </div>
  )
}
