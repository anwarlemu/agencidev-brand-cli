import { AspectRatio } from '@/react/components/ui/AspectRatio'
import { NoSignal } from '@/react/components/visuals/NoSignal'
// The brand's three canvases holding their shape at any width: a 1:1 post, a 4:5 story and a 16:9 slide, each on the
// no-signal static.
const formats = [
  { label: 'Post 1:1', ratio: 1 },
  { label: 'Story 4:5', ratio: 4 / 5 },
  { label: 'Slide 16:9', ratio: 16 / 9 },
]

export default function Formats() {
  return (
    <div className="grid w-200 max-w-full grid-cols-3 items-end gap-4 max-sm:grid-cols-1">
      {formats.map((f) => (
        <AspectRatio key={f.label} ratio={f.ratio} className="bg-surface-raised">
          <NoSignal still className="absolute inset-0" />
          <span className="absolute bottom-3 left-3 type-label text-fg">{f.label}</span>
        </AspectRatio>
      ))}
    </div>
  )
}
