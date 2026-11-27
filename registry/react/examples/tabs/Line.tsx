import { Tabs } from '@/react/components/ui/Tabs'
// A project's sections as line tabs, one of them not ready yet.

export default function Line() {
  return (
    <Tabs
      className="w-full max-w-lg"
      variant="line"
      label="Project sections"
      options={[{ value: 'screens', label: 'Screens' }, { value: 'flows', label: 'Flows' }, { value: 'notes', label: 'Notes' }, { value: 'export', label: 'Export', disabled: true }]}
      defaultValue="screens"
      panels={{
        screens: <p className="type-ui text-fg-muted">48 screens, newest first.</p>,
        flows: <p className="type-ui text-fg-muted">6 flows in this project.</p>,
        notes: <p className="type-ui text-fg-muted">No notes yet.</p>,
      }}
    />
  )
}
