import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/react/components/ui/Button'
// Disabled keeps the fill and dims the label, never fades the button; a link looks like the button it stands for.

export default function States() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>Book a call</Button>
      <Button variant="secondary" disabled>See the work</Button>
      <Button href="#work" variant="secondary">Read the case study <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" /></Button>
    </div>
  )
}
