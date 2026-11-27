import { Tabs } from '@/react/components/ui/Tabs'
// What to show: a segmented control over the panel for each kind of work.

export default function Segmented() {
  return (
    <Tabs
      className="w-96 max-w-full"
      label="Kind of work"
      options={[{ value: 'product', label: 'Product' }, { value: 'brand', label: 'Brand' }, { value: 'web', label: 'Web' }]}
      defaultValue="product"
      panels={{
        product: <div className="rounded-container bg-surface-raised p-6"><p className="type-ui-strong text-fg">Product</p><p className="mt-1 type-ui text-fg-muted">Flows, interfaces and the system under them.</p></div>,
        brand: <div className="rounded-container bg-surface-raised p-6"><p className="type-ui-strong text-fg">Brand</p><p className="mt-1 type-ui text-fg-muted">The mark, the type and the voice.</p></div>,
        web: <div className="rounded-container bg-surface-raised p-6"><p className="type-ui-strong text-fg">Web</p><p className="mt-1 type-ui text-fg-muted">Sites built and shipped.</p></div>,
      }}
    />
  )
}
