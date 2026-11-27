import { cn } from '@/react/lib/cn'

// The about page's team (components/about-view.tsx): the names in one centered run of 14px white with the role and
// place read beside each, on a line height of 2; under 640 a list, each name in 16px white over its role and place in
// dim. Portraits are the page's to show; the list never fakes one.
export interface TeamMember {
  name: string
  role?: string
  location?: string
}

export interface TeamListProps {
  members: TeamMember[]
  className?: string
}

export function TeamList({ members, className }: TeamListProps) {
  return (
    <div data-ds="team-list" className={cn('w-full px-6', className)}>
      <p className="mx-auto hidden max-w-(--ds-layout-page) text-center type-ui leading-loose sm:block">
        {members.map((m) => (
          <span key={m.name} className="inline-block px-1 whitespace-nowrap text-fg">
            {m.name}
            {m.role || m.location ? <span className="sr-only">, {[m.role, m.location].filter(Boolean).join(', ')}</span> : null}
          </span>
        ))}
      </p>
      <ul className="sm:hidden">
        {members.map((m) => (
          <li key={m.name} className="py-3">
            <p className="type-body text-fg">{m.name}</p>
            {m.role || m.location ? <p className="mt-1 type-ui text-fg-soft">{[m.role, m.location].filter(Boolean).join(', ')}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamList
