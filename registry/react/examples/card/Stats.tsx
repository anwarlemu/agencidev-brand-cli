import { Card } from '@/react/components/ui/Card'
// Cards for a dashboard: one number each, with what it counts under it.

export default function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card title="48" description="Screens shipped for Acme this month" />
      <Card title="112" description="Components in the Acme design system" />
      <Card title="6" description="Flows in review this week" />
    </div>
  )
}
