import { cn } from '@/react/lib/cn'

// The homepage's testimonial card (components/testimonials.tsx): a white plate on the canvas, 24px in, the 4px corner;
// the face at the top left (64px, the same corner), then the quote in Agencidev Sans at 20 (16 on phones), leading 1.3,
// and the name and role on one line at 14px, the role at 40% black. At least 64px between the face and the words; a
// long quote grows the plate rather than closing the gap. Over a picture or on the canvas, as the page sets it.
export interface TestimonialProps {
  quote: string
  name: string
  role?: string
  /** The person's face (64px square). */
  avatar?: string
  className?: string
}

export function Testimonial({ quote, name, role, avatar, className }: TestimonialProps) {
  return (
    <figure data-ds="testimonial" className={cn('flex w-full max-w-160 flex-col justify-between rounded-control bg-surface-inverse p-6 text-fg-inverse', className)}>
      {avatar ? <img src={avatar} alt="" width={64} height={64} className="size-16 rounded-control object-cover" /> : <span aria-hidden="true" data-ds-placeholder="" className="size-16 rounded-control bg-fg-inverse/10" />}
      <div className="mt-16">
        <blockquote className="type-heading-3 max-sm:type-heading-4">{quote}</blockquote>
        <figcaption className="mt-2 flex flex-wrap items-baseline gap-2 type-ui">
          <span>{name}</span>
          {role ? <span className="text-fg-inverse/40">{role}</span> : null}
        </figcaption>
      </div>
    </figure>
  )
}

export default Testimonial
