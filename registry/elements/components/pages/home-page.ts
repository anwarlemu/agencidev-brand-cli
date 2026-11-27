import { html, nothing, type TemplateResult } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import { pageSections } from '@/lib/image'
import '@/elements/components/site/site-header'
import '@/elements/components/site/site-footer'
import '@/elements/components/site/statement'
import '@/elements/components/visuals/work-rail'
import styles from 'virtual:tw'
import { homeContent, homeSections, type HomeContent, type HomeSection } from '@/lib/pages/home'

// HomePage.tsx as <agd-home-page>: the bar, the rail of work, the statement at the foot of the first screen.

/**
 * @summary The home page template.
 */
export class HomePage extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="home-page"]'))
	static properties = { content: { type: Object }, sections: { type: Array } }
	/** The page's copy (lib/pages/home.ts by default). */
	content: HomeContent = homeContent
	/** The sections to show, in order. */
	sections?: HomeSection[]

	render() {
		const c = this.content
		const parts: Record<HomeSection, TemplateResult | typeof nothing> = {
			rail: html`<div class="flex min-h-80 flex-1 items-center py-16"><agd-work-rail .items=${c.rail}></agd-work-rail></div>`,
			statement: html`<agd-statement stat=${c.stat} figure=${c.figure} lead=${c.lead} rest=${c.rest}></agd-statement>`,
		}
		const order = pageSections(homeSections, this.sections)
		return html`<div data-ds="home-page" class="flex min-h-screen w-full flex-col bg-surface text-fg"><agd-site-header .links=${c.header.links} .secondary=${c.header.secondary} .primary=${c.header.primary} email=${c.header.email}></agd-site-header><main class="flex flex-1 flex-col">${order.map((k) => parts[k])}</main><agd-site-footer .links=${c.footer.links}></agd-site-footer></div>`
	}
}

define('home-page', HomePage)
