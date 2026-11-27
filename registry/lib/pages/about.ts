import { footer, header } from '@/lib/pages/chrome'
// The about page template's copy (components/about-view.tsx): the bets, the team, the process and the openings. The
// bets and the process are the studio's own words; the team and the roles are Acme's.
export const aboutContent = {
	header,
	bets: {
		title: 'Our bets:',
		lines: [
			"Companies don't want designers to implement styles or design. They'd much rather use AI to do it themselves, faster and cheaper.",
			'The job of designers will become almost completely about design thinking. AI will handle almost all execution, and designers will solve problems and come up with ideas.',
			'Products and websites need to be geared for agent usage. Agents will become major users of websites and products themselves.',
		],
		close: 'This is why we build design systems for both teams and LLMs.',
	},
	team: [
		{ name: 'Alex Rivera', role: 'Founder', location: 'London' },
		{ name: 'Sam Lee', role: 'Design', location: 'Lagos' },
		{ name: 'Jordan Park', role: 'Engineering', location: 'Berlin' },
		{ name: 'Casey Morgan', role: 'Design', location: 'Manila' },
		{ name: 'Riley Chen', role: 'Engineering', location: 'Cairo' },
	],
	process: {
		lead: 'Harnessing an AI-first approach to accelerate our craft.',
		rest: "Our agentic design and engineering process keeps us at the forefront of what's possible.",
		steps: [
			{ title: 'Exploration is fast. Judgement is not.', body: 'We explore design variants in code first, then refine and polish them in Figma, not the other way around.' },
			{ title: 'Speed requires agility.', body: 'Working faster increases the need for a clear process. Ours is structured yet agile and autonomous, so it lets us move even faster.' },
			{ title: 'Strong ideas survive testing.', body: 'When many directions are explored, weak ideas reveal themselves quickly. The strongest hold up as they are tested, expanded and refined.' },
		],
	},
	roles: [
		{ title: 'Product designer', department: 'Design', href: '/careers' },
		{ title: 'Design engineer', department: 'Engineering', href: '/careers' },
	],
	footer,
}
export type AboutContent = typeof aboutContent
export const aboutSections = ['bets', 'team', 'process', 'openings'] as const
export type AboutSection = (typeof aboutSections)[number]
