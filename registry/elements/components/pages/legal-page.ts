import { html, nothing, type TemplateResult } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import { pageSections } from '@/lib/image'
import '@/elements/components/site/site-header'
import '@/elements/components/site/site-footer'
import '@/elements/components/site/page-head'
import '@/elements/components/site/row'
import styles from 'virtual:tw'
import { legalContent, legalSections, type LegalContent, type LegalSection } from '@/lib/pages/legal'

// LegalPage.tsx as <agd-legal-page>: the head, then titled rows of running copy.

/**
 * @summary The legal page template.
 */
export class LegalPage extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="legal-page"]'))
	static properties = { content: { type: Object }, sections: { type: Array } }
	/** The page's copy (lib/pages/legal.ts by default). */
	content: LegalContent = legalContent
	/** The sections to show, in order. */
	sections?: LegalSection[]

	render() {
		const c = this.content
		const parts: Record<LegalSection, TemplateResult | typeof nothing> = {
			head: html`<agd-page-head head-id="legal" lead=${c.lead} rest=${c.rest}></agd-page-head>`,
			body: html`<div class="mx-auto max-w-(--ds-layout-page)">${c.sections.map((s) => html`<agd-row label=${s.title} titled><p class="max-w-(--ds-layout-measure) type-body text-fg-soft">${s.body}</p></agd-row>`)}</div>`,
		}
		const order = pageSections(legalSections, this.sections)
		return html`<div data-ds="legal-page" class="flex min-h-screen w-full flex-col bg-surface text-fg"><agd-site-header .links=${c.header.links} .secondary=${c.header.secondary} .primary=${c.header.primary} email=${c.header.email}></agd-site-header><main class="flex-1">${order.map((k) => parts[k])}</main><agd-site-footer .links=${c.footer.links}></agd-site-footer></div>`
	}
}

define('legal-page', LegalPage)
