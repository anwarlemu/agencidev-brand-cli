'use client'
import { Collapsible } from '@/react/components/ui/Collapsible'
// A list that shows its first projects and opens to the rest, open with the page.
const projects = ['Acme dashboard', 'Acme mobile app', 'Acme website']

export default function Projects() {
  return (
    <div className="w-100 max-w-full">
      <p className="py-2 type-ui text-fg">Acme onboarding</p>
      <Collapsible defaultOpen trigger={(open) => <span className="text-fg-muted">{open ? 'Show fewer projects' : 'Show 3 more projects'}</span>}>
        <ul className="flex flex-col">
          {projects.map((b) => <li key={b} className="py-2 type-ui text-fg">{b}</li>)}
        </ul>
      </Collapsible>
    </div>
  )
}
