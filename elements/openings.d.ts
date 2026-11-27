export interface Opening { title: string; department: string; href: string }
/**
 * <agd-openings>

 */
export declare class Openings extends HTMLElement {
  roles: Opening[];
  heading: string;
  empty: string;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-openings': Openings;
  }
}
