import { html } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// FilterList.tsx as <agd-filter-list>: a single-choice filter, the options as 14px capitals in mid and the chosen one
// white. `value` is the chosen option; picking one sets it and fires input and change.

/**
 * @summary A single-choice filter in capitals.
 * @fires change - When an option is picked (value is the option).
 */
export class FilterList extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="filter-list"]'))
	static properties = { options: { type: Array }, value: { reflect: true }, label: {}, arrange: {} }
	/** The options. */
	options: string[] = []
	/** The chosen option (the first by default). */
	value?: string
	/** What the filter chooses, for screen readers. */
	label = ''
	/** row, or column from 640 (React's `layout`). */
	arrange: 'row' | 'column' = 'row'

	render() {
		const options = this.options ?? []
		const chosen = this.value ?? options[0] ?? ''
		return html`<fieldset data-ds="filter-list" class=${`flex min-w-0 flex-wrap ${this.arrange === 'column' ? 'gap-x-5 gap-y-1 sm:flex-col sm:items-start' : 'gap-x-6 gap-y-1'}`}><legend class="sr-only">${this.label}</legend>${options.map((o) => html`<button type="button" aria-pressed=${String(chosen === o)} @click=${() => this.commit(o)} class=${`py-1 text-left type-ui uppercase transition-colors duration-150 ease-standard active:text-action-press-ink active:transition-none ${chosen === o ? 'text-fg' : 'text-fg-muted hover:text-fg'}`}>${o}</button>`)}</fieldset>`
	}
}

define('filter-list', FilterList)
