import { Separator } from '@/react/components/ui/Separator'
// A project's title over a hairline, and its links split by short vertical lines.

export default function Profile() {
  return (
    <div className="flex w-80 max-w-full flex-col">
      <div className="flex flex-col gap-1">
        <p className="type-ui-strong text-fg">Acme onboarding</p>
        <p className="type-caption text-fg-muted">48 screens in 6 flows.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 type-ui text-fg-soft">
        <span>Screens</span>
        <Separator orientation="vertical" />
        <span>Flows</span>
        <Separator orientation="vertical" />
        <span>Components</span>
      </div>
    </div>
  )
}
