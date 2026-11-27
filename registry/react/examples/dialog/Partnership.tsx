'use client'
import { useState } from 'react'
import { Button } from '@/react/components/ui/Button'
import { Dialog } from '@/react/components/ui/Dialog'
// An offer with its buttons in the foot: the plate for the one action, secondary for the way out.

export default function Partnership() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex min-h-96 items-center justify-center">
      <Button variant="secondary" onClick={() => setOpen(true)}>How a partnership works</Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Monthly partnership"
        description="Ongoing, cancellable at any time."
        foot={<><Button variant="secondary" onClick={() => setOpen(false)}>Not now</Button><Button onClick={() => setOpen(false)}>Book a call</Button></>}
      >
        <ul className="flex list-disc flex-col gap-2 pl-5 type-ui text-fg-soft">
          <li>Product design, branding and strategy.</li>
          <li>Full-stack development.</li>
          <li>One team from first sketch to shipped.</li>
        </ul>
      </Dialog>
    </div>
  )
}
