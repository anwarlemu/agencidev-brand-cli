import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// ArticleCard.tsx as <agd-article-card>: the cover at 16:10, the date and reading time in capitals, the title, the
// excerpt in dim; the whole card is the link.

/**
 * @summary An article in a list: cover, meta, title, excerpt.
 */
export class ArticleCard extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="article-card"]'))
	static properties = { heading: {}, href: {}, date: {}, readingTime: { attribute: 'reading-time' }, excerpt: {}, cover: {} }
	/** The title (React's `title`). */
	heading = ''
	href = '#'
	date?: string
	readingTime?: string
	excerpt?: string
	cover?: string

	render() {
		const meta = [this.date, this.readingTime].filter(Boolean) as string[]
		return html`<a data-ds="article-card" href=${this.href} class="group flex flex-col"><div data-ds-placeholder=${this.cover ? nothing : ''} class="relative aspect-[16/10] w-full overflow-hidden bg-surface-inset">${this.cover ? html`<img src=${this.cover} alt="" loading="lazy" class="absolute inset-0 size-full object-cover">` : nothing}</div>${meta.length ? html`<p class="mt-5 type-ui uppercase text-fg-muted transition-colors duration-150 ease-standard group-hover:text-fg group-active:text-action-press-ink group-active:transition-none">${meta.map((m, i) => html`<span>${i ? html`<span aria-hidden="true" class="px-2">·</span>` : nothing}${m}</span>`)}</p>` : nothing}<h2 class="mt-3 type-heading-4 text-fg">${this.heading}</h2>${this.excerpt ? html`<p class="mt-3 line-clamp-3 type-body text-fg-soft">${this.excerpt}</p>` : nothing}</a>`
	}
}

define('article-card', ArticleCard)
