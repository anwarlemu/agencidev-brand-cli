import { cn } from '@/react/lib/cn'

// The about page's process (components/about-view.tsx): numbered rows, each the number, a title, a hairline (white at
// 10%) and the body in mid. From 1024 the four sit in one row (48px, then three equal columns); below, the body drops
// under the title. 32px above and below each row (40 from 1024).
export interface ProcessStep {
  title: string
  body?: string
}

export interface ProcessListProps {
  steps: ProcessStep[]
  className?: string
}

export function ProcessList({ steps, className }: ProcessListProps) {
  return (
    <ol data-ds="process-list" className={cn('w-full', className)}>
      {steps.map((s, i) => (
        <li key={`${i}-${s.title}`} className="grid grid-cols-[48px_minmax(0,1fr)] gap-y-3 py-8 lg:grid-cols-[48px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:py-10">
          <span className="type-heading-4 text-fg">{i + 1}</span>
          <h3 className="type-heading-4 text-fg lg:pr-12">{s.title}</h3>
          <span aria-hidden="true" className="hidden h-px bg-edge lg:mr-12 lg:block" />
          {s.body ? <p className="col-start-2 type-body text-fg-muted lg:col-start-auto">{s.body}</p> : null}
        </li>
      ))}
    </ol>
  )
}

export default ProcessList
