import { ScrollArea } from '@/react/components/ui/ScrollArea'
// A long list of projects in a short box, and a row of screens that scrolls across.

const PROJECTS = [
  'Acme onboarding',
  'Acme dashboard',
  'Acme website',
  'Acme mobile app',
  'Acme brand system',
  'Acme billing',
  'Acme help center',
  'Acme settings',
  'Acme search',
  'Acme reports',
  'Acme admin',
  'Acme launch page',
  'Acme pricing page',
  'Acme careers page',
  'Acme docs',
  'Acme status page',
  'Acme emails',
  'Acme icons',
  'Acme motion',
  'Acme illustrations',
]

const SCREENS = ['Screen 1', 'Screen 2', 'Screen 3', 'Screen 4', 'Screen 5', 'Screen 6']

export default function Lists() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <ScrollArea label="Projects" className="h-72 rounded-container border border-edge">
        <div className="p-4">
          <p className="type-label text-fg-soft">Projects</p>
          <ul className="mt-3">
            {PROJECTS.map((b) => <li key={b} className="border-t border-edge py-2 type-ui text-fg first:border-t-0">{b}</li>)}
          </ul>
        </div>
      </ScrollArea>
      <ScrollArea label="Screens" axis="x" className="rounded-container border border-edge">
        <ul className="flex w-max gap-4 p-4">
          {SCREENS.map((c) => (
            <li key={c} className="flex w-36 shrink-0 flex-col gap-2">
              <div className="aspect-square w-full rounded-control bg-surface-raised" />
              <p className="type-caption text-fg-muted">{c}</p>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
