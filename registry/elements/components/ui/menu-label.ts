import { html } from 'lit'
import { DsElement, define } from '@/elements/lib/element'
import styles from 'virtual:tw'

// MenuLabel.tsx as <agd-menu-label>: a group's name in a dropdown or context menu, an ABC Diatype label in
// capitals, muted.

/**
 * @summary A group's name in a menu.
 * @slot - The name.
 */
export class MenuLabel extends DsElement {
	static styles = [DsElement.styles, styles]
	render() {
		return html`<p data-ds="menu-label" class="flex items-center justify-between gap-2 px-2 pt-2 pb-1 type-label text-fg-muted"><slot></slot></p>`
	}
}

define('menu-label', MenuLabel)
