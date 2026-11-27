export interface DetailItem { label: string; body: string; href?: string }
/**
 * <agd-detail-list>

 */
export declare class DetailList extends HTMLElement {
  items: DetailItem[];
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-detail-list': DetailList;
  }
}
