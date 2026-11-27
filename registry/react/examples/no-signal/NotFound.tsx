import { NoSignal } from '@/react/components/visuals/NoSignal'
import { Button } from '@/react/components/ui/Button'
// The 404 page's composition: the static behind, the head and line centered under the band.

export default function NotFound() {
  return (
    <NoSignal still className="flex h-120 w-full flex-col items-center justify-end px-6 pb-16 text-center">
      <h2 className="type-section text-fg">Page not found.</h2>
      <p className="mt-6 max-w-72 type-ui text-fg-soft">The content you're looking for doesn't exist or has been moved.</p>
      <Button href="#" variant="secondary" className="mt-6">Back home</Button>
    </NoSignal>
  )
}
