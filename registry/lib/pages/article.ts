import { footer, header } from '@/lib/pages/chrome'
// The article page template's copy (app/articles/[slug]/page.tsx): the title, its date and reading time, the cover and
// the body in a reading measure.
export const articleContent = {
	header,
	back: { label: 'Articles', href: '/articles' },
	title: 'How to create great interface design',
	date: 'May 2026',
	readingTime: '6 min',
	cover: '',
	body: [
		'Every screen or major view has one principal objective. Too much information overwhelms; layer it so the reader sees what they need now, with the rest still reachable.',
		'Use color strategically. Mute what does not need attention: the muted things are what give the important things their focus.',
		'Sometimes adding a thing simplifies, a scrubber that shows the time remaining, say. Build to the principal objective and the unnecessary noise sieves itself out.',
	],
	footer,
}
export type ArticleContent = typeof articleContent
export const articleSections = ['head', 'cover', 'body'] as const
export type ArticleSection = (typeof articleSections)[number]
