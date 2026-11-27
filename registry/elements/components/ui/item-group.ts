import { html } from 'lit'
import { DsElement, define } from '@/elements/lib/element'
import styles from 'virtual:tw'

// ItemGroup.tsx as <agd-item-group>: rows of one list, a hairline (white at 20%) between each. The host is the list's
// box, so a class on the element lands on it; the <ul> inside keeps the list's meaning and lays out nothing. The rows
// are the page's <li>s, each holding a <agd-item>.

/**
 * @summary Rows of one list, a hairline between each.
 * @slot - <li> elements, each holding a <agd-item>.
 */
export class ItemGroup extends DsElement {
	static styles = [DsElement.styles, styles]

	render() {
		return html`<ul class="contents"><slot></slot></ul>`
	}
}

define('item-group', ItemGroup)
