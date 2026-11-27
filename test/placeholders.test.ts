import { join } from 'node:path';
import { createElement, type ComponentType } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

// Every picture in the library is an image slot: with pictures passed, no placeholder remains. Each empty slot carries
// data-ds-placeholder (a rail strip, a case piece, an article cover, a face), so this renders every page that ships
// one, first as it ships (the marker is there) and then with pictures (none is left).

const root = join(__dirname, '..');
const MARK = 'data-ds-placeholder';
// A neutral shape, never a third-party picture.
const IMG = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50"><rect width="40" height="50" fill="#141414"/></svg>')}`;

type Page = ComponentType<Record<string, unknown>>;
const page = async (file: string, name: string) => ((await import(/* @vite-ignore */ join(root, 'registry/react/components/pages', `${file}.tsx`))) as Record<string, Page>)[name]!;
const copy = async <T>(file: string, name: string) => ((await import(/* @vite-ignore */ join(root, 'registry/lib/pages', `${file}.ts`))) as Record<string, T>)[name]!;
const html = (P: Page, props: Record<string, unknown> = {}) => renderToStaticMarkup(createElement(P, props));

type Rail = { rail: { src: string; alt: string }[] };
type Case = { pieces: { src: string; ratio: number; caption?: string }[] };
type Articles = { articles: { cover: string }[] };
type Article = { cover: string };

describe('placeholders (React)', () => {
	it('the pages that ship pictures mark their empty slots, and leave none once pictures are passed', async () => {
		const home = await copy<Rail>('home', 'homeContent');
		const cs = await copy<Case>('case-study', 'caseStudyContent');
		const list = await copy<Articles>('articles', 'articlesContent');
		const post = await copy<Article>('article', 'articleContent');
		const cases: [Page, Record<string, unknown>, Record<string, unknown>][] = [
			[await page('HomePage', 'HomePage'), home, { ...home, rail: home.rail.map(() => ({ src: IMG, alt: '' })) }],
			[await page('CaseStudyPage', 'CaseStudyPage'), cs, { ...cs, pieces: cs.pieces.map((p) => ({ ...p, src: IMG })) }],
			[await page('ArticlesPage', 'ArticlesPage'), list, { ...list, articles: list.articles.map((a) => ({ ...a, cover: IMG })) }],
			[await page('ArticlePage', 'ArticlePage'), post, { ...post, cover: IMG }],
		];
		for (const [P, shipped, filled] of cases) {
			expect(html(P, { content: shipped }), P.name).toContain(MARK);
			expect(html(P, { content: filled }), P.name).not.toContain(MARK);
		}
	});

	it('shows the sections given, in that order, and leaves the others out', async () => {
		const About = await page('AboutPage', 'AboutPage');
		const all = html(About);
		expect(all.indexOf('bets-heading')).toBeLessThan(all.indexOf('process-heading'));
		const some = html(About, { sections: ['process', 'bets'] });
		expect(some.indexOf('process-heading')).toBeLessThan(some.indexOf('bets-heading'));
		expect(some).not.toContain('openings-heading');
		expect(html(About, { sections: ['nope'] })).not.toContain('bets-heading');
	});
});
