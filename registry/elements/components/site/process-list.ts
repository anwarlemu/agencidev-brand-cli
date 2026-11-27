import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// ProcessList.tsx as <agd-process-list>: numbered rows, each the number, a title, a hairline and the body in mid.
export interface ProcessStep { title: string; body?: string }

/**
 * @summary Numbered process rows: a number, a title, a hairline, the body.
 */
export class ProcessList extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="process-list"]'))
	static properties = { steps: { type: Array } }
	/** The steps: [{ title, body }]. */
	steps: ProcessStep[] = []

	render() {
		return html`<ol data-ds="process-list" class="w-full">${(this.steps ?? []).map((s, i) => html`<li class="grid grid-cols-[48px_minmax(0,1fr)] gap-y-3 py-8 lg:grid-cols-[48px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:py-10"><span class="type-heading-4 text-fg">${i + 1}</span><h3 class="type-heading-4 text-fg lg:pr-12">${s.title}</h3><span aria-hidden="true" class="hidden h-px bg-edge lg:mr-12 lg:block"></span>${s.body ? html`<p class="col-start-2 type-body text-fg-muted lg:col-start-auto">${s.body}</p>` : nothing}</li>`)}</ol>`
	}
}

define('process-list', ProcessList)
