import { Button } from '@/react/components/ui/Button'
import { Empty } from '@/react/components/ui/Empty'
// A search with no results, without an icon: what to try instead.

export default function Search() {
  return (
    <Empty className="max-w-160" title="Nothing matches that search." description="Try fewer words, or search a discipline instead of a client.">
      <Button variant="secondary">Clear filters</Button>
    </Empty>
  )
}
