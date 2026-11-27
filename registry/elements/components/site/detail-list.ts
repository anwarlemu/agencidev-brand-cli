import { html } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// DetailList.tsx as <agd-detail-list>: rows of a label in white and its description in dim beside it.
export interface DetailItem { label: string; body: string; href?: string }

/**
 * @summary Rows of a label and its description.
 */
export class DetailList extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="detail-list"]'))
	static properties = { items: { type: Array } }
	/** The rows: [{ label, body, href }]. */
	items: DetailItem[] = []

	render() {
		return html`<dl data-ds="detail-list" class="flex w-full flex-col gap-10">${(this.items ?? []).map((it) => html`<div class="grid gap-2 sm:grid-cols-[248px_minmax(0,1fr)] sm:gap-0"><dt class="type-body text-fg">${it.href ? html`<a href=${it.href} class="transition-colors duration-150 ease-standard hover:text-fg-soft active:text-action-press-ink active:transition-none">${it.label}</a>` : it.label}</dt><dd class="type-body text-fg-soft">${it.body}</dd></div>`)}</dl>`
	}
}

define('detail-list', DetailList)
