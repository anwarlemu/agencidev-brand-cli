import { Button } from '@/react/components/ui/Button'
import { Table } from '@/react/components/ui/Table'
// Clients in a hairline frame, each row with its action at the end; it scrolls sideways on a phone.

const CLIENTS = [
  { name: 'Acme', projects: 6, added: 'Jan 12' },
  { name: 'Acme Labs', projects: 3, added: 'Feb 3' },
  { name: 'Acme Goods', projects: 2, added: 'Mar 21' },
]

export default function Clients() {
  return (
    <Table framed label="Clients">
      <thead>
        <tr>
          <th>Client</th>
          <th className="text-right">Projects</th>
          <th>Partner since</th>
          <th><span className="sr-only">Actions</span></th>
        </tr>
      </thead>
      <tbody>
        {CLIENTS.map((b) => (
          <tr key={b.name}>
            <td>{b.name}</td>
            <td className="text-right">{b.projects}</td>
            <td className="text-fg-muted">{b.added}</td>
            <td className="text-right"><Button variant="secondary" size="sm">View work</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
