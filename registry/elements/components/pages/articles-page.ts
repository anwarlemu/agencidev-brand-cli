import { html, nothing, type TemplateResult } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import { pageSections } from '@/lib/image'
import '@/elements/components/site/site-header'
import '@/elements/components/site/site-footer'
import '@/elements/components/site/article-card'
import styles from 'virtual:tw'
import { articlesContent, articlesSections, type ArticlesContent, type ArticlesSection } from '@/lib/pages/articles'

// ArticlesPage.tsx as <agd-articles-page>: a line under the bar, then the articles in a grid.

/**
 * @summary The articles page template.
 */
export class ArticlesPage extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="articles-page"]'))
	static properties = { content: { type: Object }, sections: { type: Array } }
	/** The page's copy (lib/pages/articles.ts by default). */
	content: ArticlesContent = articlesContent
	/** The sections to show, in order. */
	sections?: ArticlesSection[]

	render() {
		const c = this.content
		const parts: Record<ArticlesSection, TemplateResult | typeof nothing> = {
			intro: html`<p class="mb-14 type-body text-fg-soft">${c.intro}</p>`,
			list: html`<div class="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">${c.articles.map((a) => html`<agd-article-card href=${a.href} heading=${a.title} date=${a.date} reading-time=${a.readingTime} excerpt=${a.excerpt} cover=${a.cover || nothing}></agd-article-card>`)}</div>`,
		}
		const order = pageSections(articlesSections, this.sections)
		return html`<div data-ds="articles-page" class="flex min-h-screen w-full flex-col bg-surface text-fg"><agd-site-header .links=${c.header.links.map((l) => ({ ...l, current: l.href === '/articles' }))} .secondary=${c.header.secondary} .primary=${c.header.primary} email=${c.header.email}></agd-site-header><main class="flex-1"><h1 class="sr-only">Articles</h1><section aria-label="All articles" class="mx-6 pt-32 sm:pt-44">${order.map((k) => parts[k])}</section></main><agd-site-footer .links=${c.footer.links}></agd-site-footer></div>`
	}
}

define('articles-page', ArticlesPage)
