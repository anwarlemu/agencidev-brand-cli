'use client'
import { useRef } from 'react'
import { Button } from '@/react/components/ui/Button'
import { toast, Toaster } from '@/react/components/ui/Sonner'
// Press Share: a note rises in the corner, with Undo. Press it quickly and they stack, three at most; point at the stack
// to spread it out and hold their time.

export default function Project() {
  const count = useRef(23)
  function save() {
    count.current += 1
    toast('Shared', { description: `Acme onboarding is open to ${count.current} people.`, action: { label: 'Undo' } })
  }
  return (
    <div className="flex min-h-72 flex-wrap items-start justify-center gap-2">
      <Button onClick={save}>Share</Button>
      <Button variant="secondary" onClick={() => toast('Enquiry sent', { description: 'We reply within a day.' })}>Send enquiry</Button>
      <Toaster />
    </div>
  )
}
