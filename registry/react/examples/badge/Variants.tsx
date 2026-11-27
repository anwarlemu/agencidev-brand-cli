import { Badge } from '@/react/components/ui/Badge'
// The four variants, and the dots a state takes.

export default function Variants() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge>All</Badge>
        <Badge variant="secondary">Design</Badge>
        <Badge variant="outline">Engineering</Badge>
        <Badge variant="destructive">Closed</Badge>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge variant="outline" dot="on">Live</Badge>
        <Badge variant="outline" dot="off">Draft</Badge>
      </div>
    </div>
  )
}
