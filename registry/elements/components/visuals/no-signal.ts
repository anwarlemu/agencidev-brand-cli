import { html, type PropertyValues } from 'lit'
import { DsElement, define } from '@/elements/lib/element'
import { runNoSignal } from '@/lib/no-signal'
import styles from 'virtual:tw'

// NoSignal.tsx as <agd-no-signal>: the 404 page's no-signal static as a box, the glitch band rolling through it
// (`band`, the default) or only the static. The host is the box (no-signal.css); what is slotted sits over it. Still
// under reduced motion or with `still`.

/**
 * @summary The 404 page's no-signal static, filling its box.
 * @slot - What sits over the static.
 */
export class NoSignal extends DsElement {
	static styles = [DsElement.styles, styles]
	static properties = {
		band: { type: Boolean, converter: { fromAttribute: (v: string | null) => v !== 'false' } },
		still: { type: Boolean },
		seed: { type: Number },
	}
	/** The glitch band rolling through (default), or only the static (band="false"). */
	band = true
	/** Holds the first frame instead of running. */
	still = false
	/** The grain's seed. */
	seed = 0
	private stop?: () => void

	protected updated(changed: PropertyValues) {
		super.updated(changed)
		if (changed.has('band') || changed.has('still') || changed.has('seed')) this.start()
	}
	disconnectedCallback() {
		super.disconnectedCallback()
		this.stop?.()
		this.stop = undefined
	}
	connectedCallback() {
		super.connectedCallback()
		if (this.hasUpdated) this.start()
	}
	private start() {
		this.stop?.()
		const canvas = this.renderRoot.querySelector('canvas')
		this.stop = canvas ? runNoSignal(canvas, { band: this.band, animate: !this.still, seed: this.seed }) : undefined
	}

	render() {
		return html`<canvas aria-hidden="true" class="absolute inset-0 -z-1 size-full"></canvas><slot></slot>`
	}
}

define('no-signal', NoSignal)
