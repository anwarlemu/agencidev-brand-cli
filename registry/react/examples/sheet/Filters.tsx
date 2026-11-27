'use client'
import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { Button } from '@/react/components/ui/Button'
import { Input } from '@/react/components/ui/Input'
import { Sheet } from '@/react/components/ui/Sheet'
// A project list's filters in a sheet at the right edge: two fields and the buttons at the foot. Escape, Close or the dimmed
// page closes it.

export default function Filters() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex min-h-40 items-center justify-center">
      <Button variant="secondary" onClick={() => setOpen(true)}><SlidersHorizontal size={16} strokeWidth={1.5} aria-hidden="true" />Filters</Button>
      <Sheet
        open={open}
        onOpenChange={setOpen}
        title="Filter projects"
        description="Narrow the list to one client and how long the work ran."
        foot={(
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>Reset</Button>
            <Button onClick={() => setOpen(false)}>Show results</Button>
          </>
        )}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="sheet-client" className="type-label text-fg-soft">Client</label>
            <Input id="sheet-client" name="client" defaultValue="Acme" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sheet-days" className="type-label text-fg-soft">Longer than</label>
            <Input id="sheet-days" name="days" defaultValue="4 weeks" />
            <p className="type-caption text-fg-muted">Counts from the kickoff call.</p>
          </div>
        </div>
      </Sheet>
    </div>
  )
}
