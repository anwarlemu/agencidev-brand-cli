import { footer, header } from '@/lib/pages/chrome'
// The contact page template's copy (app/contact/page.tsx): the two-tone head and its calls, the ways to get in touch,
// and three notes. No address is stated: the studio keeps no public office.
export const contactContent = {
	header,
	lead: "Tell us what you're building.",
	rest: 'Acme partners with startups to design, build, and ship software. The quickest way to start is a call or an email.',
	primary: { label: 'Book a free strategy call', href: '#' },
	secondary: { label: 'hello@acme.com', href: 'mailto:hello@acme.com' },
	ways: [
		{ label: 'Email', body: 'The fastest route for new project enquiries, press, and anything about work already in progress. We read every message and reply to genuine enquiries within two working days.' },
		{ label: 'Free strategy call', body: 'A 30-minute conversation about what you are building and whether a design or dev partnership is the right shape for it. No charge, no obligation.' },
		{ label: 'LinkedIn and X', body: 'Where we post new work and studio updates. Fine for a quick question, though anything involving scope or timelines is better over email.' },
	],
	notes: [
		'If you are writing about a new engagement, it helps to know four things: what you are building, what stage you are at, roughly when you would want to start, and whether you need design, development, or both.',
		'We sell ongoing monthly partnerships rather than fixed-scope projects, and either tier can be cancelled at any time. If continuous capacity is not what your product needs right now, we will say so.',
	],
	footer,
}
export type ContactContent = typeof contactContent
export const contactSections = ['head', 'ways', 'notes'] as const
export type ContactSection = (typeof contactSections)[number]
