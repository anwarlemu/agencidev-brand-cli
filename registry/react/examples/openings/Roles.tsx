import { Openings } from '@/react/components/site/Openings'
// Three roles in two departments.

export default function Roles() {
  return <Openings className="w-full" roles={[{ title: 'Product designer', department: 'Design', href: '#' }, { title: 'Design engineer', department: 'Engineering', href: '#' }, { title: 'Brand designer', department: 'Design', href: '#' }]} />
}
