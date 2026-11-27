import { DetailList } from '@/react/components/site/DetailList'
// The ways to get in touch, as the contact page lists them.

export default function Contact() {
  return (
    <div className="w-full px-6"><DetailList items={[
      { label: 'Email', body: 'The fastest route for new project enquiries, press, and anything about work already in progress. We reply within two working days.' },
      { label: 'Free strategy call', body: 'A 30-minute conversation about what you are building and whether a partnership is the right shape for it.' },
      { label: 'LinkedIn and X', body: 'Where we post new work and studio updates. Anything about scope or timelines is better over email.' },
    ]} /></div>
  )
}
