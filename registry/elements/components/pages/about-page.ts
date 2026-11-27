import { html, nothing, type TemplateResult } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import { pageSections } from '@/lib/image'
import '@/elements/components/site/site-header'
import '@/elements/components/site/site-footer'
import '@/elements/components/site/team-list'
import '@/elements/components/site/process-list'
import '@/elements/components/site/openings'
import styles from 'virtual:tw'
import { aboutContent, aboutSections, type AboutContent, type AboutSection } from '@/lib/pages/about'

// AboutPage.tsx as <agd-about-page>: the bets, the team, the process and the openings.

/**
 * @summary The about page template.
 */
export class AboutPage extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="about-page"]'))
	static properties = { content: { type: Object }, sections: { type: Array } }
	/** The page's copy (lib/pages/about.ts by default). */
	content: AboutContent = aboutContent
	/** The sections to show, in order. */
	sections?: AboutSection[]

	render() {
		const c = this.content
		const parts: Record<AboutSection, TemplateResult | typeof nothing> = {
			bets: html`<section aria-labelledby="bets-heading" class="px-6 pt-32 pb-24 text-center sm:pt-44"><h1 id="bets-heading" class="type-section text-fg">${c.bets.title}</h1><div class="mx-auto mt-10 flex max-w-(--ds-layout-page) flex-col gap-10 type-section text-balance">${c.bets.lines.map((l) => html`<p class="text-fg-muted">${l}</p>`)}<p class="text-fg">${c.bets.close}</p></div></section>`,
			team: html`<section aria-label="Team" class="py-24"><agd-team-list .members=${c.team}></agd-team-list></section>`,
			process: html`<section aria-labelledby="process-heading" class="px-6 py-14"><h2 id="process-heading" class="max-w-(--ds-layout-page) type-section"><span class="text-fg">${c.process.lead}</span> <span class="text-fg">${c.process.rest}</span></h2><agd-process-list .steps=${c.process.steps} class="mt-12"></agd-process-list></section>`,
			openings: html`<agd-openings .roles=${c.roles}></agd-openings>`,
		}
		const order = pageSections(aboutSections, this.sections)
		return html`<div data-ds="about-page" class="flex min-h-screen w-full flex-col bg-surface text-fg"><agd-site-header .links=${c.header.links.map((l) => ({ ...l, current: l.href === '/about' }))} .secondary=${c.header.secondary} .primary=${c.header.primary} email=${c.header.email}></agd-site-header><main class="flex-1">${order.map((k) => parts[k])}</main><agd-site-footer .links=${c.footer.links}></agd-site-footer></div>`
	}
}

define('about-page', AboutPage)
