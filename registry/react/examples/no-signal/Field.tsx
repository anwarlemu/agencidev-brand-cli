import { NoSignal } from '@/react/components/visuals/NoSignal'
// The static alone, without the band: a quiet ground for a tile.

export default function Field() {
  return <NoSignal band={false} still className="h-64 w-96 max-w-full" />
}
