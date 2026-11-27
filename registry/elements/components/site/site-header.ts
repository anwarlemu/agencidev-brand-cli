import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import '@/elements/components/visuals/logo'
import styles from 'virtual:tw'

// SiteHeader.tsx as <agd-site-header>: the lockup and the sections in 12px capitals on the left, a quiet link and the
// plate button on the right; a frosted fade once the page scrolls under it (`fixed`); under 640 a toggle that opens a
// full-screen menu (the panel fades in, the links rise in 40ms apart).
export interface SiteHeaderLink { label: string; href: string; current?: boolean }

const QUIET = 'text-fg-soft transition-colors duration-150 ease-standard hover:text-fg active:text-action-press-ink active:transition-none'
const PLATE = 'bg-action-primary text-action-primary-fg transition-colors duration-150 ease-standard hover:bg-action-primary-hover hover:text-action-primary-fg-hover active:bg-action-primary-press active:text-fg-inverse active:transition-none'

/**
 * @summary The site's bar: the lockup, the sections, a quiet link and the plate button.
 */
export class SiteHeader extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="site-header"]'))
	static properties = {
		links: { type: Array },
		secondary: { type: Object },
		primary: { type: Object },
		homeHref: { attribute: 'home-href' },
		email: {},
		fixed: { type: Boolean },
		open: { state: true },
		scrolled: { state: true },
	}
	/** The sections: [{ label, href, current }]. */
	links: SiteHeaderLink[] = []
	/** The quiet link ({ label, href }). */
	secondary?: SiteHeaderLink
	/** The plate button ({ label, href }). */
	primary?: SiteHeaderLink
	/** Where the lockup goes. */
	homeHref = '/'
	/** An email at the foot of the phone menu. */
	email?: string
	/** Pinned to the top of the window, frosting as the page scrolls under it. */
	fixed = false
	private open = false
	private scrolled = false
	private readonly onScroll = () => (this.scrolled = window.scrollY > 8)
	private readonly onKey = (e: KeyboardEvent) => {
		if (e.key === 'Escape') this.open = false
	}

	connectedCallback() {
		super.connectedCallback()
		window.addEventListener('scroll', this.onScroll, { passive: true })
		window.addEventListener('keydown', this.onKey)
	}
	disconnectedCallback() {
		super.disconnectedCallback()
		window.removeEventListener('scroll', this.onScroll)
		window.removeEventListener('keydown', this.onKey)
	}

	render() {
		const links = this.links ?? []
		const menu = [...links, ...(this.secondary ? [this.secondary] : []), ...(this.primary ? [this.primary] : [])]
		const scrolled = this.fixed && this.scrolled
		const close = () => (this.open = false)
		return html`<header data-ds="site-header" data-scrolled=${scrolled ? 'true' : 'false'} class=${`z-30 flex w-full items-start justify-between p-6 ${this.fixed ? 'fixed inset-x-0 top-0' : 'relative'}`}><span aria-hidden="true" class=${`pointer-events-none absolute inset-x-0 top-0 -bottom-(--ds-nav-blur-fade) bg-linear-to-b from-scrim to-transparent backdrop-blur-(--ds-nav-blur) mask-b-from-50% transition-opacity duration-250 ease-out ${scrolled ? 'opacity-100' : 'opacity-0'}`}></span><nav aria-label="Sections" class="relative z-2 flex h-control-md items-center gap-6 pl-4 sm:gap-10"><a href=${this.homeHref} aria-label="Home" class="flex shrink-0 items-center text-fg active:text-action-press-ink" @click=${close}><agd-logo variant="horizontal" height="18"></agd-logo></a>${links.length ? html`<ul class="hidden items-center gap-6 sm:flex">${links.map((l) => html`<li><a href=${l.href} aria-current=${l.current ? 'page' : nothing} class=${`flex h-control-md items-center type-label ${l.current ? 'text-fg' : QUIET}`}>${l.label}</a></li>`)}</ul>` : nothing}</nav><div class="relative z-2 flex items-center">${this.secondary ? html`<a href=${this.secondary.href} class=${`flex h-control-md items-center px-6 type-label max-sm:hidden ${QUIET}`}>${this.secondary.label}</a>` : nothing}${this.primary ? html`<a href=${this.primary.href} class=${`flex h-control-md items-center rounded-control px-10 type-label max-sm:hidden ${PLATE}`}>${this.primary.label}</a>` : nothing}${menu.length ? html`<button type="button" aria-label=${this.open ? 'Close menu' : 'Open menu'} aria-expanded=${String(this.open)} @click=${() => (this.open = !this.open)} class="-mr-4 flex size-control-md items-center justify-center text-fg active:text-action-press-ink sm:hidden"><span aria-hidden="true" class="flex flex-col gap-1 px-2 py-3"><span class=${`h-0.5 w-4 bg-current transition-transform duration-200 ease-out ${this.open ? 'translate-y-1.5 rotate-45' : ''}`.trim()}></span><span class=${`h-0.5 w-4 bg-current transition-opacity duration-200 ease-out ${this.open ? 'opacity-0' : 'opacity-100'}`}></span><span class=${`h-0.5 w-4 bg-current transition-transform duration-200 ease-out ${this.open ? '-translate-y-1.5 -rotate-45' : ''}`.trim()}></span></span></button>` : nothing}</div>${menu.length ? html`<div data-open=${this.open ? '' : nothing} aria-hidden=${String(!this.open)} ?inert=${!this.open} class=${`fixed inset-0 z-1 flex flex-col bg-surface transition-[opacity,visibility] duration-250 ease-out sm:hidden ${this.open ? 'visible opacity-100' : 'invisible opacity-0'}`}><nav aria-label="Menu" class="flex flex-1 flex-col justify-center gap-1 px-6">${menu.map((l, i) => html`<a href=${l.href} @click=${close} style="--i: ${i}" class=${`block py-1.5 type-section text-fg transition-[opacity,translate] ease-out active:text-action-press-ink ${this.open ? 'translate-y-0 opacity-100 duration-350 delay-[calc(40ms+var(--i)*40ms)]' : 'translate-y-6 opacity-0 duration-200'}`}>${l.label}</a>`)}</nav>${this.email ? html`<a href=${`mailto:${this.email}`} @click=${close} class="self-end px-6 pb-8 type-ui text-fg">${this.email}</a>` : nothing}</div>` : nothing}</header>`
	}
}

define('site-header', SiteHeader)
