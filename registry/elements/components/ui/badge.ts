import { html, nothing } from 'lit'
import { DsElement, define } from '@/elements/lib/element'
import styles from 'virtual:tw'

// Badge.tsx as <agd-badge>: a short label in 12px capitals, square. default is the quiet fill with a white label,
// secondary the plate, outline a hairline with a dim label, destructive a red wash. `dot` leads it with a small round
// dot, white (on) or mid (off).
export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive'
export type BadgeDot = 'on' | 'off'
const VARIANTS: Record<BadgeVariant, string> = {
	default: 'border-transparent bg-surface-subtle text-fg',
	secondary: 'border-transparent bg-surface-inset text-fg',
	outline: 'border-edge-strong bg-transparent text-fg-soft',
	destructive: 'border-transparent bg-surface-danger text-fg-danger',
}
const DOTS: Record<BadgeDot, string> = {
	on: 'bg-fg',
	off: 'bg-fg-muted',
}

/**
 * @summary A short label for a state or a kind, in capitals.
 * @slot - The word.
 */
export class Badge extends DsElement {
	static styles = [DsElement.styles, styles]
	static properties = { variant: { reflect: true }, dot: {} }

	/** default (the quiet fill), secondary (the plate), outline or destructive. */
	variant: BadgeVariant = 'default'
	/** A small dot before the word: on (white) or off (mid). */
	dot?: BadgeDot

	render() {
		const dot = this.dot && DOTS[this.dot]
		return html`<span data-ds="badge" class=${['inline-flex h-6 shrink-0 items-center gap-1.5 rounded-ds-sm border px-2 type-label whitespace-nowrap', VARIANTS[this.variant] ?? VARIANTS.default].join(' ')}>${dot ? html`<span class=${['size-1.5 shrink-0 rounded-full', dot].join(' ')} aria-hidden="true"></span>` : nothing}<slot></slot></span>`
	}
}

define('badge', Badge)
