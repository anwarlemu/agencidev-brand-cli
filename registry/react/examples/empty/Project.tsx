import { Bookmark, Search } from 'lucide-react'
import { Button } from '@/react/components/ui/Button'
import { Empty } from '@/react/components/ui/Empty'
// A new project with nothing in it yet, and the way to fill it.

export default function Project() {
  return (
    <Empty className="max-w-160" icon={<Bookmark size={20} strokeWidth={1.5} />} title="No screens yet." description="Start from a flow in the design system, or bring in what the team already has.">
      <Button><Search size={16} strokeWidth={1.5} aria-hidden="true" />Start a flow</Button>
      <Button variant="secondary">Import from Figma</Button>
    </Empty>
  )
}
