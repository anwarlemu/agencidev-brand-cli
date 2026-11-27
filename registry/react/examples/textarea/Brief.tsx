import { Textarea } from '@/react/components/ui/Textarea'
// A brief for a new project: a few lines about what it needs, with a line of help under it.

export default function Brief() {
  return (
    <div className="flex w-96 max-w-full flex-col gap-2">
      <label htmlFor="textarea-brief" className="type-label text-fg-soft">Project brief</label>
      <Textarea id="textarea-brief" name="brief" placeholder="A signup that shows the product before it asks for a card." />
      <p className="type-caption text-fg-muted">The team sees this at the top of the project.</p>
    </div>
  )
}
