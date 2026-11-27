import { ProcessList } from '@/react/components/site/ProcessList'
// The about page's three principles.

export default function Process() {
  return (
    <div className="w-full px-6"><ProcessList steps={[
      { title: 'Exploration is fast. Judgement is not.', body: 'We explore design variants in code first, then refine and polish them in Figma, not the other way around.' },
      { title: 'Speed requires agility.', body: 'A structured process that stays agile and autonomous, so moving faster never means moving rigidly.' },
      { title: 'Strong ideas survive testing.', body: 'When many directions are explored, weak ideas show themselves quickly; the strongest hold up as they are tested.' },
    ]} /></div>
  )
}
