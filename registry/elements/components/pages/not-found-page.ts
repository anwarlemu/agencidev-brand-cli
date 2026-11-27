import { html } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import { notFoundContent, type NotFoundContent } from '@/lib/pages/not-found'
import '@/elements/components/visuals/no-signal'
import styles from 'virtual:tw'

// NotFoundPage.tsx as <agd-not-found-page>: the no-signal static filling the screen, the head under the band, a line
// and the way home.

/**
 * @summary The not found page template.
 */
export class NotFoundPage extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="not-found-page"]'))
	static properties = { content: { type: Object }, still: { type: Boolean } }
	/** The page's copy (lib/pages/not-found.ts by default). */
	content: NotFoundContent = notFoundContent
	/** Holds the static still. */
	still = false

	render() {
		const c = this.content
		return html`<agd-no-signal data-ds="not-found-page" ?still=${this.still} class="flex min-h-screen w-full flex-col items-center justify-end px-6 pb-[18vh] text-center"><h1 class="type-section text-fg">${c.title}</h1><p class="mt-6 max-w-72 type-ui text-fg-soft">${c.body}</p><a href=${c.link.href} class="mt-8 inline-flex items-center gap-3 type-ui text-fg transition-colors duration-150 ease-standard hover:text-fg-soft active:text-action-press-ink active:transition-none"><span aria-hidden="true" class="size-2 rounded-full bg-fg"></span>${c.link.label}<span aria-hidden="true" class="flex size-5 items-center justify-center rounded-full border border-current type-caption">→</span></a></agd-no-signal>`
	}
}

define('not-found-page', NotFoundPage)
