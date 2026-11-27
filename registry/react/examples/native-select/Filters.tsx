import { NativeSelect } from '@/react/components/ui/NativeSelect'
// Two filters over a search: what the work is and how long it ran.

export default function Filters() {
  return (
    <div className="grid w-full max-w-120 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="native-select-discipline" className="type-label text-fg-soft">Discipline</label>
        <NativeSelect id="native-select-discipline" name="discipline" defaultValue="product">
          <option value="all">All disciplines</option>
          <option value="product">Product design</option>
          <option value="brand">Branding</option>
          <option value="build">Development</option>
        </NativeSelect>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="native-select-range" className="type-label text-fg-soft">Longer than</label>
        <NativeSelect id="native-select-range" name="range" defaultValue="30">
          <option value="7">Two weeks</option>
          <option value="30">A month</option>
          <option value="90">A quarter</option>
        </NativeSelect>
      </div>
    </div>
  )
}
