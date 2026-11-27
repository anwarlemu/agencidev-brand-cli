'use client'
import { useState } from 'react'
import { cn } from '@/react/lib/cn'

// The careers page's openings (components/careers-section.tsx): "Current openings" in 14px white capitals, a filter of
// departments as 12px capital chips on the right (the chosen one on the quiet fill), then the roles 80px below, each a
// full-width row in two columns, the title in white and the department in mid, a quiet fill and white department under
// the pointer. No roles in a department reads as a line, never an empty list.
export interface Opening {
  title: string
  department: string
  href: string
}

export interface OpeningsProps {
  roles: Opening[]
  /** The heading. */
  title?: string
  /** The line shown when a department has no roles. */
  empty?: string
  className?: string
}

const CHIP = 'rounded-control px-3 py-1.5 type-label transition-colors duration-150 ease-standard active:bg-surface-subtle active:transition-none'

export function Openings({ roles, title = 'Current openings', empty = 'No open roles here right now.', className }: OpeningsProps) {
  const departments = ['All', ...Array.from(new Set(roles.map((r) => r.department)))]
  const [chosen, setChosen] = useState('All')
  const shown = chosen === 'All' ? roles : roles.filter((r) => r.department === chosen)
  return (
    <section data-ds="openings" aria-labelledby="openings-heading" className={cn('flex flex-col px-6 py-10 sm:py-14', className)}>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h2 id="openings-heading" className="type-ui uppercase text-fg">{title}</h2>
        <div role="group" aria-label="Department" className="flex flex-wrap items-center gap-2">
          {departments.map((d) => (
            <button key={d} type="button" aria-pressed={chosen === d} onClick={() => setChosen(d)} className={cn(CHIP, chosen === d ? 'bg-surface-subtle text-fg' : 'text-fg-muted hover:text-fg')}>{d}</button>
          ))}
        </div>
      </div>
      <ul className="-mx-6 mt-20 flex flex-col">
        {shown.length ? shown.map((r) => (
          <li key={r.href + r.title}>
            <a href={r.href} className="group grid grid-cols-2 gap-8 px-6 py-4 transition-colors duration-150 ease-standard hover:bg-surface-subtle active:bg-surface-subtle active:transition-none">
              <span className="type-body text-fg">{r.title}</span>
              <span className="type-body text-fg-muted transition-colors duration-150 ease-standard group-hover:text-fg">{r.department}</span>
            </a>
          </li>
        )) : <li className="px-6 py-4 type-body text-fg-muted">{empty}</li>}
      </ul>
    </section>
  )
}

export default Openings
