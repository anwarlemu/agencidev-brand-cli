import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// Statement.tsx as <agd-statement>: the stat line, then the statement in two tones at the display step, left aligned.

/**
 * @summary The homepage statement: a stat line over one statement in two tones.
 */
export class Statement extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="statement"]'))
	static properties = { headId: { attribute: 'head-id' }, lead: {}, rest: {}, stat: {}, figure: {}, level: {} }
	/** Names the heading (`<head-id>-heading`; React's `id`). */
	headId = 'statement'
	/** The lead, in white. */
	lead = ''
	/** The rest, in mid. */
	rest?: string
	/** The stat line over it. */
	stat?: string
	/** The stat's figure, in mid. */
	figure?: string
	/** h1 (default) or h2 (React's `as`). */
	level: 'h1' | 'h2' = 'h1'

	render() {
		const body = html`<span class="text-fg">${this.lead}</span>${this.rest ? html` <span class="text-fg-muted">${this.rest}</span>` : nothing}`
		const cls = 'max-w-(--ds-layout-content) type-section'
		const id = `${this.headId}-heading`
		return html`<section data-ds="statement" aria-labelledby=${id} class="px-6 pb-6">${this.stat ? html`<p class="mb-6 type-ui text-fg">${this.stat}${this.figure ? html`<span class="ml-2 text-fg-muted">${this.figure}</span>` : nothing}</p>` : nothing}${this.level === 'h2' ? html`<h2 id=${id} class=${cls}>${body}</h2>` : html`<h1 id=${id} class=${cls}>${body}</h1>`}</section>`
	}
}

define('statement', Statement)
