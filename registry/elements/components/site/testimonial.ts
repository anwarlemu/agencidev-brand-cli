import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// Testimonial.tsx as <agd-testimonial>: a white plate, the face at the top left, the quote in Agencidev Sans, the name
// and role on one line.

/**
 * @summary A testimonial on a white plate: face, quote, name and role.
 */
export class Testimonial extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="testimonial"]'))
	static properties = { quote: {}, name: {}, personRole: { attribute: 'person-role' }, avatar: {} }
	quote = ''
	name = ''
	/** Their role and company (React's `role`). */
	personRole?: string
	/** The person's face (64px square). */
	avatar?: string

	render() {
		return html`<figure data-ds="testimonial" data-theme="light" class="flex w-full max-w-160 flex-col justify-between rounded-control bg-surface p-6 text-fg">${this.avatar ? html`<img src=${this.avatar} alt="" width="64" height="64" class="size-16 rounded-control object-cover">` : html`<span aria-hidden="true" data-ds-placeholder="" class="size-16 rounded-control bg-surface-inset"></span>`}<div class="mt-16"><blockquote class="type-heading-3 max-sm:type-heading-4">${this.quote}</blockquote><figcaption class="mt-2 flex flex-wrap items-baseline gap-2 type-ui"><span>${this.name}</span>${this.personRole ? html`<span class="text-fg-faint">${this.personRole}</span>` : nothing}</figcaption></div></figure>`
	}
}

define('testimonial', Testimonial)
