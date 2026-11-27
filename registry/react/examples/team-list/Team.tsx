import { TeamList } from '@/react/components/site/TeamList'
// A distributed team's names.

export default function Team() {
  return <TeamList members={[{ name: 'Alex Rivera', role: 'Founder', location: 'London' }, { name: 'Sam Lee', role: 'Design', location: 'Lagos' }, { name: 'Jordan Park', role: 'Engineering', location: 'Berlin' }, { name: 'Casey Morgan', role: 'Design', location: 'Manila' }, { name: 'Riley Chen', role: 'Engineering', location: 'Cairo' }]} />
}
