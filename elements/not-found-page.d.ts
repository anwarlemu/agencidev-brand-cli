export type NotFoundContent = { title: string; body: string; link: { label: string; href: string; }; }
/**
 * <agd-not-found-page>

 */
export declare class NotFoundPage extends HTMLElement {
  content: { title: string; body: string; link: { label: string; href: string; }; };
  still: boolean;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-not-found-page': NotFoundPage;
  }
}
