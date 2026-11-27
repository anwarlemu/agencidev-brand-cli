'use client'
import { Carousel } from '@/react/components/ui/Carousel'
// Recent work, three in view on wide screens and one on phones. Placeholders stand in for the pictures.
const work = [
  { title: 'Acme onboarding', meta: 'Product design, 6 weeks' },
  { title: 'Acme brand system', meta: 'Branding, 4 weeks' },
  { title: 'Acme dashboard', meta: 'Product design, 10 weeks' },
  { title: 'Acme website', meta: 'Development, 5 weeks' },
  { title: 'Acme mobile app', meta: 'Development, 12 weeks' },
]

export default function Work() {
  return (
    <div className="w-full max-w-238">
      <Carousel
        label="Recent work"
        count={work.length}
        perView={3}
        slide={({ index }) => (
          <div className="flex flex-col gap-3">
            <div className="flex aspect-[4/5] items-end rounded-container bg-surface-raised p-4">
              <span className="type-label text-fg-muted">{`Project ${index + 1}`}</span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="type-ui-strong">{work[index]!.title}</p>
              <p className="type-caption text-fg-muted">{work[index]!.meta}</p>
            </div>
          </div>
        )}
      />
    </div>
  )
}
