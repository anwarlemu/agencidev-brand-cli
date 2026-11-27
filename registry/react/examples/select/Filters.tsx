import { Select } from '@/react/components/ui/Select'
// Two filters for a search: a discipline to pick (a placeholder until then) and the order, already chosen.
const disciplines = [
  { value: 'product', label: 'Product design' },
  { value: 'brand', label: 'Branding' },
  { value: 'build', label: 'Development' },
  { value: 'hardware', label: 'Hardware', disabled: true },
]
const orders = [
  { value: 'newest', label: 'Newest first' },
  { value: 'longest', label: 'Longest running' },
  { value: 'comments', label: 'Most comments' },
]

export default function Filters() {
  return (
    <div className="flex min-h-72 w-72 max-w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="select-discipline" className="type-label text-fg-soft">Discipline</label>
        <Select id="select-discipline" label="Discipline" name="discipline" options={disciplines} placeholder="Any discipline" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="select-order" className="type-label text-fg-soft">Sort by</label>
        <Select id="select-order" label="Sort by" name="order" options={orders} defaultValue="longest" />
        <p className="type-caption text-fg-muted">The longest projects first.</p>
      </div>
    </div>
  )
}
