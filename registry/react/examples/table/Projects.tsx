import { Table } from '@/react/components/ui/Table'
// A studio's projects: what each holds and when it last changed, with a total under them.

const PROJECTS = [
  { name: 'Acme onboarding', screens: 48, flows: 12, updated: 'Today' },
  { name: 'Acme dashboard', screens: 112, flows: 9, updated: 'Yesterday' },
  { name: 'Acme website', screens: 36, flows: 21, updated: '3 days ago' },
  { name: 'Acme brand system', screens: 27, flows: 8, updated: 'Last week' },
]

export default function Projects() {
  return (
    <Table>
      <caption>Projects for Acme.</caption>
      <thead>
        <tr>
          <th>Project</th>
          <th className="text-right">Screens</th>
          <th className="text-right">Flows</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        {PROJECTS.map((b) => (
          <tr key={b.name} data-state={b.name === 'Acme onboarding' ? 'selected' : undefined}>
            <td>{b.name}</td>
            <td className="text-right">{b.screens}</td>
            <td className="text-right">{b.flows}</td>
            <td className="text-fg-muted">{b.updated}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td className="text-right">223</td>
          <td className="text-right">50</td>
          <td />
        </tr>
      </tfoot>
    </Table>
  )
}
