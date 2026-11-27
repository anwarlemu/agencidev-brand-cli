import { Button } from '@/react/components/ui/Button'
import { Card } from '@/react/components/ui/Card'
// The partnership card: what it is, what it includes and the one action.

export default function Partnership() {
  return (
    <Card
      className="w-150 max-w-full"
      title="Monthly partnership"
      description="Ongoing, cancellable at any time"
      actions={<Button className="w-full">Book a call</Button>}
    >
      <ul className="flex flex-col gap-2 type-ui text-fg">
        <li>Product design, branding and strategy</li>
        <li>Full-stack development</li>
        <li>A design system your engineers and agents build from</li>
      </ul>
    </Card>
  )
}
