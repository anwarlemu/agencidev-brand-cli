import { footer, header } from '@/lib/pages/chrome'
// The careers page template's copy (components/careers-view.tsx, careers-section.tsx): the head and the openings.
// The roles are Acme's.
export const careersContent = {
	header,
	lead: 'Careers.',
	rest: 'A fully distributed studio of designers and engineers. Explore in code first, then polish in Figma.',
	roles: [
		{ title: 'Product designer', department: 'Design', href: '#' },
		{ title: 'Brand designer', department: 'Design', href: '#' },
		{ title: 'Design engineer', department: 'Engineering', href: '#' },
	],
	footer,
}
export type CareersContent = typeof careersContent
export const careersSections = ['head', 'openings'] as const
export type CareersSection = (typeof careersSections)[number]
