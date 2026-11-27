import { Resizable } from '@/react/components/ui/Resizable'
// Projects beside the screen that is open, with a grip on the line between them.

export default function Panes() {
  return (
    <Resizable
      className="h-64 w-full max-w-xl rounded-container border border-edge"
      label="Resize projects and screen"
      defaultValue={40}
      withHandle
      first={
        <div className="flex h-full flex-col gap-2 p-4">
          <p className="type-label text-fg-soft">Projects</p>
          <p className="type-ui text-fg">Acme onboarding</p>
          <p className="type-ui text-fg-muted">Acme dashboard</p>
          <p className="type-ui text-fg-muted">Acme website</p>
        </div>
      }
      second={
        <div className="flex h-full flex-col gap-3 p-4">
          <p className="type-label text-fg-soft">Screen</p>
          <div className="flex-1 rounded-control bg-surface-raised" />
          <p className="type-caption text-fg-muted">Signup, second step. Updated today.</p>
        </div>
      }
    />
  )
}
