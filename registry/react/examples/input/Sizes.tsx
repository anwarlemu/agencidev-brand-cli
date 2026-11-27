import { Input } from '@/react/components/ui/Input'
// sm, md and lg, matching the buttons beside them.

export default function Sizes() {
  return (
    <div className="flex w-80 max-w-full flex-col gap-3">
      <Input size="sm" aria-label="Project name, small" placeholder="Acme onboarding" />
      <Input size="md" aria-label="Project name" placeholder="Acme onboarding" />
      <Input size="lg" aria-label="Project name, large" placeholder="Acme onboarding" />
    </div>
  )
}
