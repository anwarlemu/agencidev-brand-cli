import { html, nothing } from 'lit'
import { DsElement, define, HostLayoutController } from '@/elements/lib/element'
import styles from 'virtual:tw'

// TeamList.tsx as <agd-team-list>: the names in one centered run (a list under 640, with role and place).
export interface TeamMember { name: string; role?: string; location?: string }

/**
 * @summary The team's names in one centered run.
 */
export class TeamList extends DsElement {
	static styles = [DsElement.styles, styles]
	protected readonly layout = new HostLayoutController(this, () => this.renderRoot.querySelector<HTMLElement>('[data-ds="team-list"]'))
	static properties = { members: { type: Array } }
	/** The people: [{ name, role, location }]. */
	members: TeamMember[] = []

	render() {
		const members = this.members ?? []
		const of = (m: TeamMember) => [m.role, m.location].filter(Boolean).join(', ')
		return html`<div data-ds="team-list" class="w-full px-6"><p class="mx-auto hidden max-w-(--ds-layout-page) text-center type-ui leading-loose sm:block">${members.map((m) => html`<span class="inline-block px-1 whitespace-nowrap text-fg">${m.name}${of(m) ? html`<span class="sr-only">, ${of(m)}</span>` : nothing}</span>`)}</p><ul class="sm:hidden">${members.map((m) => html`<li class="py-3"><p class="type-body text-fg">${m.name}</p>${of(m) ? html`<p class="mt-1 type-ui text-fg-soft">${of(m)}</p>` : nothing}</li>`)}</ul></div>`
	}
}

define('team-list', TeamList)
