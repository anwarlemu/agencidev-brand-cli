import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// PageHead.tsx as <agd-page-head>: the page's H1 in two tones (the lead in white, the rest in mid) at the display step,
// centered in a 64rem measure, with what is slotted as its actions under it.

/**
 * @summary The page head: one statement in two tones, actions under it.
 * @slot - The actions: a plate button and a quiet one.
 */
export class PageHead extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="page-head"]'))
	static properties = { headId: { attribute: 'head-id' }, lead: {}, rest: {} }
	/** Names the heading (`<head-id>-heading`; React's `id`). */
	headId = 'page'
	/** The lead, in white. */
	lead = ''
	/** The rest, in mid, on the same lines. */
	rest?: string

	render() {
		return html`<header data-ds="page-head" aria-labelledby=${`${this.headId}-heading`} class="px-6 pt-32 pb-16 text-center sm:pt-44 sm:pb-24"><h1 id=${`${this.headId}-heading`} class="mx-auto max-w-(--ds-layout-page) type-section text-balance"><span class="text-fg">${this.lead}</span>${this.rest ? html` <span class="text-fg-muted">${this.rest}</span>` : nothing}</h1>${this.hasSlot() ? html`<div class="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12"><slot></slot></div>` : nothing}</header>`
	}
}

define('page-head', PageHead)
