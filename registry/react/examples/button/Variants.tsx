import { Button } from '@/react/components/ui/Button'
// The three variants: the plate for the one main action, secondary for the rest, ghost for tools.

export default function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Book a call</Button>
      <Button variant="secondary">See the work</Button>
      <Button variant="ghost">Email us</Button>
    </div>
  )
}
