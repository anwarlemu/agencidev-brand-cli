import { Pagination } from '@/react/components/ui/Pagination'
// The pages under a project's screens: twelve pages, the second one open.

export default function Results() {
  return <Pagination pages={12} defaultPage={2} label="Project pages" />
}
