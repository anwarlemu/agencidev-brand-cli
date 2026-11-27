import { WorkRail } from '@/react/components/visuals/WorkRail'
// Eight strips of work at rest, the first a little left of the middle; pass your own pictures.

export default function Rail() {
  return <WorkRail className="w-full" items={Array.from({ length: 8 }, () => ({}))} />
}
