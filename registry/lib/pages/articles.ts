import { footer, header } from '@/lib/pages/chrome'
// The articles page template's copy (app/articles/page.tsx): a line, then the articles in a grid.
export const articlesContent = {
	header,
	intro: 'Writing on design, engineering and the studio.',
	articles: [
		{ title: 'How to create great interface design', href: '#', date: 'May 2026', readingTime: '6 min', excerpt: 'Build to the interface’s principal objective and the unnecessary noise sieves itself out.', cover: '' },
		{ title: 'How we hire', href: '#', date: 'April 2026', readingTime: '4 min', excerpt: 'What we look for in designers and engineers, and how a trial week runs.', cover: '' },
		{ title: 'Designing for agents', href: '#', date: 'March 2026', readingTime: '8 min', excerpt: 'Agents will become major users of websites and products. This needs to be factored into the design.', cover: '' },
	],
	footer,
}
export type ArticlesContent = typeof articlesContent
export const articlesSections = ['intro', 'list'] as const
export type ArticlesSection = (typeof articlesSections)[number]
