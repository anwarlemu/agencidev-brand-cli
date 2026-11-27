'use client'
import { DataTable } from '@/react/components/ui/DataTable'
// A studio's projects on sample data: filter by discipline and status, sort by weeks, hours or screens, five to a
// page.
const formats = ['Product design', 'Branding', 'Development']
const statuses = ['In progress', 'Shipped']
const names = ['onboarding', 'dashboard', 'brand system', 'website', 'mobile app', 'billing', 'design system', 'help center']
const rows = Array.from({ length: 17 }, (_, i) => ({
  id: `p-${i + 1}`,
  name: `Acme ${names[i % names.length]!}${i >= names.length ? ` ${Math.floor(i / names.length) + 1}` : ''}`,
  format: formats[i % 3]!,
  status: statuses[i % 4 === 3 ? 1 : 0]!,
  days: ((i * 17) % 20) + 2,
  hours: ((i * 37) % 160) + 12,
  screens: ((i * 13) % 48) + 6,
}))
const columns = [
  { key: 'name', label: 'Project', sortable: true },
  { key: 'format', label: 'Discipline' },
  { key: 'status', label: 'Status', muted: true },
  { key: 'days', label: 'Weeks', align: 'right' as const, sortable: true },
  { key: 'hours', label: 'Hours', align: 'right' as const, sortable: true },
  { key: 'screens', label: 'Screens', align: 'right' as const, sortable: true },
]
const filters = [{ key: 'format', label: 'Discipline', options: formats }, { key: 'status', label: 'Status', options: statuses }]

export default function Projects() {
  return (
    <div className="min-h-110 w-full">
      <DataTable columns={columns} rows={rows} rowKey="id" label="Projects" filters={filters} cell={{ hours: ({ value }) => `${value} h` }} />
    </div>
  )
}
