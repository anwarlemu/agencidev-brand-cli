import { Bookmark, Download, Ellipsis, Flag, Link } from 'lucide-react'
import { DropdownMenu } from '@/react/components/ui/DropdownMenu'
import { MenuItem } from '@/react/components/ui/MenuItem'
import { MenuLabel } from '@/react/components/ui/MenuLabel'
import { MenuSeparator } from '@/react/components/ui/MenuSeparator'
// A project's actions, open with the page: share, copy, download, then archive on its own.

export default function Actions() {
  return (
    <div className="flex h-72 w-full items-start justify-center pt-2">
      <DropdownMenu label="Project actions" defaultOpen trigger={<><Ellipsis size={16} strokeWidth={1.5} aria-hidden="true" />Actions</>}>
        <MenuLabel>Acme onboarding</MenuLabel>
        <MenuItem><Bookmark size={16} strokeWidth={1.5} className="shrink-0 text-fg-muted" aria-hidden="true" />Share</MenuItem>
        <MenuItem><Link size={16} strokeWidth={1.5} className="shrink-0 text-fg-muted" aria-hidden="true" />Copy link</MenuItem>
        <MenuItem><Download size={16} strokeWidth={1.5} className="shrink-0 text-fg-muted" aria-hidden="true" />Download</MenuItem>
        <MenuSeparator />
        <MenuItem danger><Flag size={16} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />Archive</MenuItem>
      </DropdownMenu>
    </div>
  )
}
