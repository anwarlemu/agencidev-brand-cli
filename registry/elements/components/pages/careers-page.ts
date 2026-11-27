import { html, nothing, type TemplateResult } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import { pageSections } from '@/lib/image'
import '@/elements/components/site/site-header'
import '@/elements/components/site/site-footer'
import '@/elements/components/site/page-head'
import '@/elements/components/site/openings'
import styles from 'virtual:tw'
import { careersContent, careersSections, type CareersContent, type CareersSection } from '@/lib/pages/careers'

// CareersPage.tsx as <agd-careers-page>: the page head and the openings.

/**
 * @summary The careers page template.
 */
export class CareersPage extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="careers-page"]'))
	static properties = { content: { type: Object }, sections: { type: Array } }
	/** The page's copy (lib/pages/careers.ts by default). */
	content: CareersContent = careersContent
	/** The sections to show, in order. */
	sections?: CareersSection[]

	render() {
		const c = this.content
		const parts: Record<CareersSection, TemplateResult | typeof nothing> = {
			head: html`<agd-page-head head-id="careers" lead=${c.lead} rest=${c.rest}></agd-page-head>`,
			openings: html`<agd-openings .roles=${c.roles}></agd-openings>`,
		}
		const order = pageSections(careersSections, this.sections)
		return html`<div data-ds="careers-page" class="flex min-h-screen w-full flex-col bg-surface text-fg"><agd-site-header .links=${c.header.links.map((l) => ({ ...l, current: l.href === '/careers' }))} .secondary=${c.header.secondary} .primary=${c.header.primary} email=${c.header.email}></agd-site-header><main class="flex-1">${order.map((k) => parts[k])}</main><agd-site-footer .links=${c.footer.links}></agd-site-footer></div>`
	}
}

define('careers-page', CareersPage)
