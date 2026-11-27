import { Combobox } from '@/react/components/ui/Combobox'
// A short list needs no filter: a plain listbox. Typing a letter jumps to the stage it starts.
const formats = [
  { value: 'all', label: 'All stages', pinned: true },
  { value: 'discovery', label: 'Discovery' },
  { value: 'design', label: 'Design' },
  { value: 'build', label: 'Build' },
  { value: 'launch', label: 'Launch' },
]

export default function Format() {
  return (
    <div className="h-72 w-56 max-w-full">
      <Combobox defaultValue="all" options={formats} label="Stage" filter={false} matchWidth />
    </div>
  )
}
