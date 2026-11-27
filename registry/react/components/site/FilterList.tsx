'use client'
import { useState } from 'react'
import { cn } from '@/react/lib/cn'

// A single-choice filter (components/filter-list.tsx): the options as 14px capitals in mid, the chosen one white, in a
// row 24px apart (or a column from 640). Press feedback on pointer down; color only. A fieldset with its legend read.
export interface FilterListProps {
  options: string[]
  /** The chosen option (controlled). */
  value?: string
  /** The chosen option at first. */
  defaultValue?: string
  onValueChange?: (value: string) => void
  /** What the filter chooses, for screen readers. */
  label: string
  /** row, or a column from 640. */
  layout?: 'row' | 'column'
  className?: string
}

export function FilterList({ options, value, defaultValue, onValueChange, label, layout = 'row', className }: FilterListProps) {
  const [own, setOwn] = useState(defaultValue ?? options[0] ?? '')
  const chosen = value ?? own
  const pick = (o: string) => {
    if (value === undefined) setOwn(o)
    onValueChange?.(o)
  }
  return (
    <fieldset data-ds="filter-list" className={cn('flex min-w-0 flex-wrap', layout === 'row' ? 'gap-x-6 gap-y-1' : 'gap-x-5 gap-y-1 sm:flex-col sm:items-start', className)}>
      <legend className="sr-only">{label}</legend>
      {options.map((o) => (
        <button key={o} type="button" aria-pressed={chosen === o} onClick={() => pick(o)} className={cn('py-1 text-left type-ui uppercase transition-colors duration-150 ease-standard active:text-action-press-ink active:transition-none', chosen === o ? 'text-fg' : 'text-fg-muted hover:text-fg')}>{o}</button>
      ))}
    </fieldset>
  )
}

export default FilterList
