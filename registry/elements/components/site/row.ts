import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// Row.tsx as <agd-row>: one section of an inner page, its title read (and shown when `titled`), an `aside` slot under
// the title and the body under that.

/**
 * @summary One section of an inner page.
 * @slot - The body.
 * @slot aside - A filter or a note between the title and the body.
 */
export class Row extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="row"]'))
	static properties = { label: {}, titled: { type: Boolean }, rowId: { attribute: 'row-id' } }
	/** The section's name. */
	label = ''
	/** Shows the name as a title. */
	titled = false
	/** The section's id (React's `id`). */
	rowId?: string

	render() {
		const aside = this.hasSlot('aside')
		return html`<section data-ds="row" id=${this.rowId ?? nothing} class="mx-6 py-10 sm:py-14"><h2 class=${this.titled ? 'type-heading-4 text-fg' : 'sr-only'}>${this.label}</h2>${aside ? html`<div class=${this.titled ? 'mt-6' : ''}><slot name="aside"></slot></div>` : nothing}<div class=${`min-w-0 ${aside ? 'mt-10' : this.titled ? 'mt-4' : ''}`.trim()}><slot></slot></div></section>`
	}
}

define('row', Row)
