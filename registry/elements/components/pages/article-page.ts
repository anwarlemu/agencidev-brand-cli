import { html, nothing, type TemplateResult } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import { pageSections } from '@/lib/image'
import '@/elements/components/site/site-header'
import '@/elements/components/site/site-footer'

import styles from 'virtual:tw'
import { articleContent, articleSections, type ArticleContent, type ArticleSection } from '@/lib/pages/article'

// ArticlePage.tsx as <agd-article-page>: the way back, the title, its date and reading time, the cover and the body.

/**
 * @summary The article page template.
 */
export class ArticlePage extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="article-page"]'))
	static properties = { content: { type: Object }, sections: { type: Array } }
	/** The page's copy (lib/pages/article.ts by default). */
	content: ArticleContent = articleContent
	/** The sections to show, in order. */
	sections?: ArticleSection[]

	render() {
		const c = this.content
		const parts: Record<ArticleSection, TemplateResult | typeof nothing> = {
			head: html`<header class="flex flex-col gap-6"><a href=${c.back.href} class="w-fit type-label text-fg-soft transition-colors duration-150 ease-standard hover:text-fg active:text-action-press-ink active:transition-none">${c.back.label}</a><h1 class="type-section text-fg">${c.title}</h1>${[c.date, c.readingTime].filter(Boolean).length ? html`<p class="type-ui uppercase text-fg-muted">${[c.date, c.readingTime].filter(Boolean).join(' · ')}</p>` : nothing}</header>`,
			cover: html`<div data-ds-placeholder=${c.cover ? nothing : ''} class="relative mt-10 aspect-[16/10] w-full overflow-hidden bg-surface-inset">${c.cover ? html`<img src=${c.cover} alt="" class="absolute inset-0 size-full object-cover">` : nothing}</div>`,
			body: html`<div class="mt-10 flex max-w-(--ds-layout-measure) flex-col gap-6">${c.body.map((p) => html`<p class="type-body text-fg-soft">${p}</p>`)}</div>`,
		}
		const order = pageSections(articleSections, this.sections)
		return html`<div data-ds="article-page" class="flex min-h-screen w-full flex-col bg-surface text-fg"><agd-site-header .links=${c.header.links.map((l) => ({ ...l, current: l.href === '/articles' }))} .secondary=${c.header.secondary} .primary=${c.header.primary} email=${c.header.email}></agd-site-header><main class="flex-1"><article class="mx-auto w-full max-w-(--ds-layout-page) px-6 pt-32 sm:pt-44">${order.map((k) => parts[k])}</article></main><agd-site-footer .links=${c.footer.links}></agd-site-footer></div>`
	}
}

define('article-page', ArticlePage)
