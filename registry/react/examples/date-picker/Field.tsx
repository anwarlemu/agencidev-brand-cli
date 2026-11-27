'use client'
import { useState } from 'react'
import { DatePicker } from '@/react/components/ui/DatePicker'
// A project's start date in a form: a label over the field, a hint under it.

export default function Field() {
  const [day, setDay] = useState<Date | null>(null)
  return (
    <div className="flex h-110 w-full max-w-80 flex-col gap-2">
      <label htmlFor="project-start" className="type-label text-fg-muted">Project starts</label>
      <DatePicker id="project-start" value={day} onValueChange={setDay} aria-describedby="project-start-hint" />
      <p id="project-start-hint" className="type-caption text-fg-muted">{day ? `Kickoff on ${day.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}.` : 'The day of the kickoff call.'}</p>
    </div>
  )
}
