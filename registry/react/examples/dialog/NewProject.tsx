'use client'
import { useState } from 'react'
import { Button } from '@/react/components/ui/Button'
import { Dialog } from '@/react/components/ui/Dialog'
import { Input } from '@/react/components/ui/Input'
// A new project in a short form: the button opens it on the Name field, Enter creates it, Escape or the scrim closes it.

export default function NewProject() {
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState('Projects hold the work for one client.')
  return (
    <div className="flex min-h-96 flex-col items-center justify-center gap-3">
      <Button onClick={() => setOpen(true)}>New project</Button>
      <p className="type-caption text-fg-muted" aria-live="polite">{note}</p>
      <Dialog open={open} onOpenChange={setOpen} title="New project" description="Name it after the client and the work.">
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault()
            const name = new FormData(e.currentTarget).get('name') || 'Untitled project'
            setNote(`Created ${name}.`)
            setOpen(false)
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="new-project-name" className="type-label text-fg-soft">Name</label>
            <Input id="new-project-name" name="name" placeholder="Acme onboarding" />
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Create project</Button>
          </div>
        </form>
      </Dialog>
    </div>
  )
}
