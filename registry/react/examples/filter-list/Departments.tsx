import { FilterList } from '@/react/components/site/FilterList'
// The departments as a row of capitals, All chosen.

export default function Departments() {
  return <FilterList label="Department" options={['All', 'Design', 'Engineering', 'Strategy']} />
}
