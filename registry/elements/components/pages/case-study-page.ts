import { html, nothing, type TemplateResult } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import { pageSections } from '@/lib/image'
import '@/elements/components/site/site-header'
import '@/elements/components/site/site-footer'
import '@/elements/components/site/case-wall'
import styles from 'virtual:tw'
import { caseStudyContent, caseStudySections, type CaseStudyContent, type CaseStudySection } from '@/lib/pages/case-study'

// CaseStudyPage.tsx as <agd-case-study-page>: the client's name and live link, then the work.

/**
 * @summary The case study page template.
 */
export class CaseStudyPage extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="case-study-page"]'))
	static properties = { content: { type: Object }, sections: { type: Array } }
	/** The page's copy (lib/pages/case-study.ts by default). */
	content: CaseStudyContent = caseStudyContent
	/** The sections to show, in order. */
	sections?: CaseStudySection[]

	render() {
		const c = this.content
		const parts: Record<CaseStudySection, TemplateResult | typeof nothing> = {
			wall: html`<agd-case-wall heading=${c.title} .link=${c.link} .pieces=${c.pieces}></agd-case-wall>`,
		}
		const order = pageSections(caseStudySections, this.sections)
		return html`<div data-ds="case-study-page" class="flex min-h-screen w-full flex-col bg-surface text-fg"><agd-site-header .links=${c.header.links} .secondary=${c.header.secondary} .primary=${c.header.primary} email=${c.header.email}></agd-site-header><main class="flex-1">${order.map((k) => parts[k])}</main><agd-site-footer .links=${c.footer.links}></agd-site-footer></div>`
	}
}

define('case-study-page', CaseStudyPage)
