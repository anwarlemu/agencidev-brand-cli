import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import '@/elements/components/visuals/logo'
import styles from 'virtual:tw'

// SiteFooter.tsx as <agd-site-footer>: the lockup on the left, every link in one quiet run on the right.
export interface SiteFooterLink { label: string; href: string }

/**
 * @summary The site's footer: the lockup and one quiet row of links.
 */
export class SiteFooter extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="site-footer"]'))
	static properties = { links: { type: Array }, homeHref: { attribute: 'home-href' } }
	/** The links: [{ label, href }]. */
	links: SiteFooterLink[] = []
	/** Where the lockup goes. */
	homeHref = '/'

	render() {
		const links = this.links ?? []
		return html`<footer data-ds="site-footer" class="mx-6 mt-16 flex flex-col items-start gap-8 py-8 type-ui text-fg-muted sm:mt-24 sm:flex-row sm:items-center sm:justify-between sm:py-10"><a href=${this.homeHref} aria-label="Home" class="shrink-0 text-fg active:text-action-press-ink"><agd-logo variant="horizontal" height="20"></agd-logo></a>${links.length ? html`<nav aria-label="Footer" class="flex flex-wrap gap-x-8 gap-y-3">${links.map((l) => html`<a href=${l.href} class="transition-colors duration-150 ease-standard hover:text-fg active:text-action-press-ink active:transition-none">${l.label}</a>`)}</nav>` : nothing}</footer>`
	}
}

define('site-footer', SiteFooter)
