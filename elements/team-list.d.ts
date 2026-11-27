export interface TeamMember { name: string; role?: string; location?: string }
/**
 * <agd-team-list>

 */
export declare class TeamList extends HTMLElement {
  members: TeamMember[];
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-team-list': TeamList;
  }
}
