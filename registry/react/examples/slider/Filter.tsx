'use client'
import { useState } from 'react'
import { Slider } from '@/react/components/ui/Slider'
// A filter over a search: only projects longer than this many weeks, the count beside it.

export default function Filter() {
  const [days, setDays] = useState(6)
  return (
    <div className="flex w-96 max-w-full flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <p className="type-label text-fg-soft">Longer than</p>
        <p className="type-ui text-fg tabular-nums">{days} weeks</p>
      </div>
      <Slider label="Longer than" min={0} max={26} value={days} onValueChange={setDays} valueText={`${days} weeks`} />
      <p className="type-caption text-fg-muted">Counts from the kickoff call.</p>
    </div>
  )
}
