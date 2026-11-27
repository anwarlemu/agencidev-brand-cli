import { Switch } from '@/react/components/ui/Switch'
// Notification settings: each row says what the switch does, one on, one off, and one the workspace locks.

const rows = [
  { title: 'Weekly digest', text: "What shipped and what's next, every Monday.", on: true },
  { title: 'Preview alerts', text: 'An email when a new preview is ready.', on: false },
  { title: 'Share outside Acme', text: 'Turned off by the workspace owner.', on: false, locked: true },
]

export default function Settings() {
  return (
    <div className="flex w-120 max-w-full flex-col divide-y divide-edge rounded-container bg-surface-raised px-6">
      {rows.map((r) => (
        <div key={r.title} className="flex items-center justify-between gap-6 py-4">
          <div className="flex min-w-0 flex-col gap-1">
            <p className="type-ui-strong text-fg">{r.title}</p>
            <p className="type-caption text-fg-muted">{r.text}</p>
          </div>
          <Switch label={r.title} defaultChecked={r.on} disabled={r.locked} />
        </div>
      ))}
    </div>
  )
}
