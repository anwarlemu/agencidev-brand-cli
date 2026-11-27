import { RadioGroup } from '@/react/components/ui/RadioGroup'
// A sort order in a row, over a grid of projects.

export default function Inline() {
  return (
    <RadioGroup
      label="Sort projects"
      inline
      defaultValue="updated"
      options={[
        { value: 'updated', label: 'Updated' },
        { value: 'new', label: 'Newest' },
        { value: 'running', label: 'Longest running' },
      ]}
    />
  )
}
