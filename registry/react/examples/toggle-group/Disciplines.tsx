import { ToggleGroup } from '@/react/components/ui/ToggleGroup'
// Which disciplines to show: several can stay on. And a size for the grid: one at most.

export default function Disciplines() {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-col items-start gap-2">
        <p className="type-label text-fg-soft">Disciplines</p>
        <ToggleGroup label="Disciplines" multiple defaultValue={['Product', 'Brand']} options={['Product', 'Brand', 'Web', { value: 'Hardware', label: 'Hardware', disabled: true }]} />
      </div>
      <div className="flex flex-col items-start gap-2">
        <p className="type-label text-fg-soft">Grid</p>
        <ToggleGroup label="Grid" size="sm" defaultValue="Medium" options={['Small', 'Medium', 'Large']} />
      </div>
    </div>
  )
}
