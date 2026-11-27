import { Checkbox } from '@/react/components/ui/Checkbox'
// Off, on, with a hint, invalid until it is checked, and disabled.

export default function States() {
  return (
    <div className="flex flex-col gap-1">
      <Checkbox label="Email me when a preview is ready" />
      <Checkbox label="Show shipped projects" defaultChecked />
      <Checkbox label="Include drafts" hint="Screens still in review." defaultChecked />
      <Checkbox label="I agree to the terms" invalid />
      <Checkbox label="Hardware projects" hint="Coming soon." disabled />
    </div>
  )
}
