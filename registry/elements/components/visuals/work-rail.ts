import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// WorkRail.tsx as <agd-work-rail>: the home rail of portrait strips, 100 by 280 with 20px between (72 by 208, 14 apart
// under 640), the first strip centered `start` percent across and the row running off the right edge. `items` is a
// list of { src, alt }; a strip without a picture is the slat fill.
export interface WorkRailItem { src?: string; alt?: string }

/**
 * @summary The home rail: portrait strips of work in one row.
 */
export class WorkRail extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="work-rail"]'))
	static properties = { items: { type: Array }, start: { type: Number }, label: {} }
	/** The strips: [{ src, alt }]. */
	items: WorkRailItem[] = []
	/** Where the first strip's middle sits, in percent of the width. */
	start = 43
	/** The row's accessible name. */
	label = 'Selected work'

	render() {
		return html`<div data-ds="work-rail" role="list" aria-label=${this.label} style="--rail-start: ${this.start}%" class="relative w-full overflow-x-clip"><div class="flex gap-(--ds-rail-gap-phone) pl-[calc(var(--rail-start)-var(--ds-rail-strip-w-phone)/2)] sm:gap-(--ds-rail-gap) sm:pl-[calc(var(--rail-start)-var(--ds-rail-strip-w)/2)]">${(this.items ?? []).map((item) => html`<div role="listitem" class="relative h-(--ds-rail-strip-h-phone) w-(--ds-rail-strip-w-phone) shrink-0 overflow-hidden bg-surface-raised sm:h-(--ds-rail-strip-h) sm:w-(--ds-rail-strip-w)">${item.src ? html`<img src=${item.src} alt=${item.alt ?? ''} loading="lazy" class="absolute inset-0 size-full object-cover">` : nothing}</div>`)}</div></div>`
	}
}

define('work-rail', WorkRail)
