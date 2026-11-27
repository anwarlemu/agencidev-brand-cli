import { html, nothing, type TemplateResult } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import { pageSections } from '@/lib/image'
import '@/elements/components/site/site-header'
import '@/elements/components/site/site-footer'
import '@/elements/components/site/page-head'
import '@/elements/components/site/detail-list'
import '@/elements/components/ui/button'
import styles from 'virtual:tw'
import { contactContent, contactSections, type ContactContent, type ContactSection } from '@/lib/pages/contact'

// ContactPage.tsx as <agd-contact-page>: the two-tone head and its calls, the ways to get in touch and the notes.

/**
 * @summary The contact page template.
 */
export class ContactPage extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="contact-page"]'))
	static properties = { content: { type: Object }, sections: { type: Array } }
	/** The page's copy (lib/pages/contact.ts by default). */
	content: ContactContent = contactContent
	/** The sections to show, in order. */
	sections?: ContactSection[]

	render() {
		const c = this.content
		const parts: Record<ContactSection, TemplateResult | typeof nothing> = {
			head: html`<agd-page-head head-id="contact" lead=${c.lead} rest=${c.rest}><agd-button href=${c.primary.href}>${c.primary.label}</agd-button><agd-button href=${c.secondary.href} variant="secondary">${c.secondary.label}</agd-button></agd-page-head>`,
			ways: html`<section aria-label="Ways to reach us" class="px-6 py-16"><agd-detail-list .items=${c.ways}></agd-detail-list></section>`,
			notes: html`<section aria-label="Notes" class="flex flex-col gap-16 px-6 py-16">${c.notes.map((n) => html`<p class="type-body text-fg-soft">${n}</p>`)}</section>`,
		}
		const order = pageSections(contactSections, this.sections)
		return html`<div data-ds="contact-page" class="flex min-h-screen w-full flex-col bg-surface text-fg"><agd-site-header .links=${c.header.links} .secondary=${c.header.secondary} .primary=${c.header.primary} email=${c.header.email}></agd-site-header><main class="flex-1">${order.map((k) => parts[k])}</main><agd-site-footer .links=${c.footer.links}></agd-site-footer></div>`
	}
}

define('contact-page', ContactPage)
