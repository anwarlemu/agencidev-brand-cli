import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// CaseWall.tsx as <agd-case-wall>: the client's name and a plate link, then the work in masonry columns.
export interface CasePiece { src?: string; alt?: string; ratio?: number; caption?: string }

const PLATE = 'inline-flex h-control-md w-fit items-center rounded-control bg-action-primary px-6 type-label text-action-primary-fg transition-colors duration-150 ease-standard hover:bg-action-primary-hover hover:text-action-primary-fg-hover active:bg-action-primary-press active:text-fg-inverse active:transition-none'

/**
 * @summary A case study's wall of work: the name, a plate link and masonry columns.
 */
export class CaseWall extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="case-wall"]'))
	static properties = { heading: {}, pieces: { type: Array }, link: { type: Object } }
	/** The client's name (React's `title`). */
	heading = ''
	/** The pieces: [{ src, alt, ratio, caption }]. */
	pieces: CasePiece[] = []
	/** The plate link ({ label, href }). */
	link?: { label: string; href: string }

	render() {
		const pieces = this.pieces ?? []
		const columns = pieces.length <= 2 ? 'columns-1 sm:columns-2' : pieces.length <= 6 ? 'columns-2 lg:columns-3' : 'columns-2 lg:columns-4'
		return html`<section data-ds="case-wall" aria-labelledby="case-heading" class="w-full px-6 pt-32 sm:pt-44"><header class="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between"><h1 id="case-heading" class="type-section text-fg">${this.heading}</h1>${this.link ? html`<a href=${this.link.href} class=${PLATE}>${this.link.label}</a>` : nothing}</header><div class=${`${columns} gap-5`}>${pieces.map((p) => html`<div style="aspect-ratio: ${p.ratio ?? 4 / 3}" class="relative mb-5 break-inside-avoid overflow-hidden bg-surface-inset">${p.src ? html`<img src=${p.src} alt=${p.alt ?? ''} loading="lazy" class="absolute inset-0 size-full object-cover">` : html`<div class="absolute inset-0 flex items-center justify-center border border-edge-strong px-4"><span class="max-w-[36ch] text-center type-label text-balance text-fg-faint">${p.caption ?? 'In progress'}</span></div>`}</div>`)}</div></section>`
	}
}

define('case-wall', CaseWall)
