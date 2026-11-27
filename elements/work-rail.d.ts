export interface WorkRailItem { src?: string; alt?: string }
/**
 * <agd-work-rail>

 */
export declare class WorkRail extends HTMLElement {
  items: WorkRailItem[];
  start: number;
  label: string;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-work-rail': WorkRail;
  }
}
