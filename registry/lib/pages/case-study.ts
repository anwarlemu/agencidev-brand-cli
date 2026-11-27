import { footer, header } from '@/lib/pages/chrome'
// The case study page template's copy (components/case-wall.tsx): the client's name, its live link and the work.
export const caseStudyContent = {
	header,
	title: 'Acme',
	link: { label: 'Visit Acme', href: '#' },
	pieces: [
		{ src: '', ratio: 4 / 3 },
		{ src: '', ratio: 3 / 4 },
		{ src: '', ratio: 1, caption: 'Onboarding flow, in progress' },
		{ src: '', ratio: 16 / 9 },
		{ src: '', ratio: 4 / 5 },
		{ src: '', ratio: 4 / 3 },
	],
	footer,
}
export type CaseStudyContent = typeof caseStudyContent
export const caseStudySections = ['wall'] as const
export type CaseStudySection = (typeof caseStudySections)[number]
