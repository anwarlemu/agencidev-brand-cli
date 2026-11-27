import { Input } from '@/react/components/ui/Input'
// A labeled field with a line of help under it.

export default function Field() {
  return (
    <div className="flex w-80 max-w-full flex-col gap-2">
      <label htmlFor="company" className="type-label text-fg-soft">Company</label>
      <Input id="company" name="company" placeholder="Acme" />
      <p className="type-caption text-fg-muted">The company the project is for.</p>
    </div>
  )
}
