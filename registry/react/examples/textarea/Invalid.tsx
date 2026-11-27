import { Textarea } from '@/react/components/ui/Textarea'
// A note that is too long, with the message that says so.

export default function Invalid() {
  return (
    <div className="flex w-96 max-w-full flex-col gap-2">
      <label htmlFor="textarea-note" className="type-label text-fg-soft">Note</label>
      <Textarea id="textarea-note" name="note" rows={3} invalid aria-describedby="textarea-note-error" defaultValue="Every Acme screen from the last year that asks for a card before it shows the product, sorted by flow." />
      <p id="textarea-note-error" className="type-caption text-fg-danger">Keep the note under 80 characters.</p>
    </div>
  )
}
