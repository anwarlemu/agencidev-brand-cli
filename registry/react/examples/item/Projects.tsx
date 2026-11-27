import { Item } from '@/react/components/ui/Item'
import { ItemGroup } from '@/react/components/ui/ItemGroup'
// Projects in a card, each row a link with a chevron, a hairline between them.

const PROJECTS = [
  { name: 'Acme onboarding', count: '48 screens' },
  { name: 'Acme dashboard', count: '112 screens' },
  { name: 'Acme website', count: '36 screens' },
]

export default function Projects() {
  return (
    <div className="w-full max-w-md rounded-container bg-surface-raised p-2">
      <ItemGroup>
        {PROJECTS.map((b) => (
          <li key={b.name}><Item href="#projects" arrow size="sm" title={b.name} description={b.count} /></li>
        ))}
      </ItemGroup>
    </div>
  )
}
