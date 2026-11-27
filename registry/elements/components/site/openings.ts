import { html } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// Openings.tsx as <agd-openings>: the heading, the department chips, and the roles as two-column rows.
export interface Opening { title: string; department: string; href: string }

const CHIP = 'rounded-control px-3 py-1.5 type-label transition-colors duration-150 ease-standard active:bg-surface-subtle active:transition-none'

/**
 * @summary Open roles with a department filter.
 */
export class Openings extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="openings"]'))
	static properties = { roles: { type: Array }, heading: {}, empty: {}, chosen: { state: true } }
	/** The roles: [{ title, department, href }]. */
	roles: Opening[] = []
	/** The heading (React's `title`). */
	heading = 'Current openings'
	/** The line shown when a department has no roles. */
	empty = 'No open roles here right now.'
	private chosen = 'All'

	render() {
		const roles = this.roles ?? []
		const departments = ['All', ...Array.from(new Set(roles.map((r) => r.department)))]
		const shown = this.chosen === 'All' ? roles : roles.filter((r) => r.department === this.chosen)
		return html`<section data-ds="openings" aria-labelledby="openings-heading" class="flex flex-col px-6 py-10 sm:py-14"><div class="flex flex-wrap items-center justify-between gap-6"><h2 id="openings-heading" class="type-ui uppercase text-fg">${this.heading}</h2><div role="group" aria-label="Department" class="flex flex-wrap items-center gap-2">${departments.map((d) => html`<button type="button" aria-pressed=${String(this.chosen === d)} @click=${() => (this.chosen = d)} class=${`${CHIP} ${this.chosen === d ? 'bg-surface-subtle text-fg' : 'text-fg-muted hover:text-fg'}`}>${d}</button>`)}</div></div><ul class="-mx-6 mt-20 flex flex-col">${shown.length ? shown.map((r) => html`<li><a href=${r.href} class="group grid grid-cols-2 gap-8 px-6 py-4 transition-colors duration-150 ease-standard hover:bg-surface-subtle active:bg-surface-subtle active:transition-none"><span class="type-body text-fg">${r.title}</span><span class="type-body text-fg-muted transition-colors duration-150 ease-standard group-hover:text-fg">${r.department}</span></a></li>`) : html`<li class="px-6 py-4 type-body text-fg-muted">${this.empty}</li>`}</ul></section>`
	}
}

define('openings', Openings)
