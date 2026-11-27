import { RadioGroup } from '@/react/components/ui/RadioGroup'
// Who can see a project: three choices with a line each, and one locked by the plan.

export default function Visibility() {
  return (
    <div className="flex w-96 max-w-full flex-col gap-3">
      <p className="type-label text-fg-soft">Who can see this project</p>
      <RadioGroup
        label="Who can see this project"
        name="visibility"
        defaultValue="team"
        options={[
          { value: 'private', label: 'Only you', hint: 'Nobody else sees it until you share it.' },
          { value: 'team', label: 'Your team', hint: 'Everyone at Acme can open and add to it.' },
          { value: 'link', label: 'Anyone with the link', hint: 'Turned off by the workspace owner.', disabled: true },
        ]}
      />
    </div>
  )
}
