'use client'
import { useState } from 'react'
import { Combobox } from '@/react/components/ui/Combobox'
// Pick a discipline to filter by: type to narrow the list, arrows to move, Enter to pick. Counts are open projects.
const categories = [
  { value: 'product', label: 'Product design', hint: '12' },
  { value: 'brand', label: 'Branding', hint: '8' },
  { value: 'strategy', label: 'Strategy', hint: '6' },
  { value: 'web', label: 'Web development', hint: '5' },
  { value: 'mobile', label: 'Mobile development', hint: '4' },
  { value: 'systems', label: 'Design systems', hint: '3' },
  { value: 'research', label: 'Research', hint: '2' },
]

export default function Category() {
  const [picked, setPicked] = useState('')
  return (
    <div className="flex h-96 w-72 max-w-full flex-col gap-2">
      <label htmlFor="combobox-discipline" className="type-label text-fg-soft">Discipline</label>
      <Combobox id="combobox-discipline" value={picked} onValueChange={(v) => setPicked(String(v))} options={categories} label="Discipline" placeholder="Choose a discipline" filterLabel="Filter disciplines" matchWidth />
      <p className="type-caption text-fg-muted" aria-live="polite">{picked ? `Showing ${categories.find((c) => c.value === picked)?.label} projects.` : 'Filter by one discipline at a time.'}</p>
    </div>
  )
}
