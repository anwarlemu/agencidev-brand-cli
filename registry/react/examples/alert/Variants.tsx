import { CircleAlert, Info } from 'lucide-react'
import { Alert } from '@/react/components/ui/Alert'
import { Button } from '@/react/components/ui/Button'
// A note with the action that goes with it, and a problem in red with the fix.

export default function Variants() {
  return (
    <div className="flex w-160 max-w-full flex-col gap-3">
      <Alert role="status" title="Your next review is on Thursday." icon={<Info size={16} strokeWidth={1.5} />} action={<Button size="sm">Add to calendar</Button>}>
        Bring the questions the team should answer first.
      </Alert>
      <Alert variant="destructive" title="Your payment did not go through." icon={<CircleAlert size={16} strokeWidth={1.5} />} action={<Button size="sm" variant="secondary">Update card</Button>}>
        Update your card to keep Acme's projects open.
      </Alert>
      <Alert role="status" title="Previews update with every commit." icon={<Info size={16} strokeWidth={1.5} />} />
    </div>
  )
}
