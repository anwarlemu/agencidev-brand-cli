'use client'
import { Button } from '@/react/components/ui/Button'
import { Input } from '@/react/components/ui/Input'
import { Popover } from '@/react/components/ui/Popover'
// Share a project: a short form in a panel, opened from a button.

export default function Project() {
  return (
    <Popover label="Share the project" trigger="Share">
      {(close) => (
        <form className="flex flex-col gap-4" onSubmit={(event) => { event.preventDefault(); close() }}>
          <div className="flex flex-col gap-1">
            <p className="type-ui-strong text-fg">Share the project</p>
            <p className="type-caption text-fg-muted">Send a view-only link to someone outside the team.</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="popover-email" className="type-label text-fg-soft">Email</label>
            <Input id="popover-email" name="email" size="sm" type="email" defaultValue="hello@acme.com" />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => close()}>Cancel</Button>
            <Button type="submit" size="sm">Send</Button>
          </div>
        </form>
      )}
    </Popover>
  )
}
