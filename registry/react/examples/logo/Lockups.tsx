import { Logo } from '@/react/components/visuals/Logo'
// The square, the lockup and the wordmark, at the bar's height and larger.

export default function Lockups() {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex items-center gap-12">
        <Logo variant="mark" height={18} />
        <Logo variant="horizontal" height={18} />
        <Logo variant="wordmark" height={18} />
      </div>
      <Logo variant="horizontal" height={48} />
    </div>
  )
}
