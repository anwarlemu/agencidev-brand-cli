import { CaseWall } from '@/react/components/site/CaseWall'
// A client's wall of six pieces, two still in the works.

export default function Wall() {
  return (
    <CaseWall title="Acme" link={{ label: 'Visit Acme', href: '#' }} pieces={[
      { ratio: 4 / 3 }, { ratio: 3 / 4 }, { ratio: 1, caption: 'Onboarding flow, in progress' },
      { ratio: 16 / 9 }, { ratio: 4 / 5 }, { ratio: 4 / 3, caption: 'Brand film, in progress' },
    ]} />
  )
}
