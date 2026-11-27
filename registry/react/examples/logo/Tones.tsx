import { Logo } from '@/react/components/visuals/Logo'
// White on the canvas, black on white, as the brand kit shows them.

export default function Tones() {
  return (
    <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
      <div className="flex h-40 w-64 items-center justify-center border border-edge bg-surface">
        <Logo variant="horizontal" height={24} tone="white" />
      </div>
      <div className="flex h-40 w-64 items-center justify-center bg-surface-inverse">
        <Logo variant="horizontal" height={24} tone="black" />
      </div>
    </div>
  )
}
