'use client'
import { useState } from 'react'
import { Button } from '@/react/components/ui/Button'
import { AlertDialog } from '@/react/components/ui/AlertDialog'
// Archiving a project asks first: focus starts on Cancel, and only a choice closes it. The line under says what happened.

export default function Delete() {
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState('Acme onboarding: 48 screens.')
  return (
    <div className="flex min-h-72 flex-col items-center justify-center gap-3">
      <Button variant="secondary" onClick={() => setOpen(true)}>Archive project</Button>
      <p className="type-caption text-fg-muted" aria-live="polite">{note}</p>
      <AlertDialog
        open={open}
        onOpenChange={setOpen}
        title="Archive this project?"
        description="Acme onboarding and its 48 screens leave everyone's list. This can't be undone."
        action="Archive project"
        onConfirm={() => setNote('Project archived.')}
        onCancel={() => setNote('Kept the project.')}
      />
    </div>
  )
}
