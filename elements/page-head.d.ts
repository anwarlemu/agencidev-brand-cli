/**
 * <agd-page-head>
 * @slot (default) The actions: a plate button and a quiet one.
 */
export declare class PageHead extends HTMLElement {
  headId: string;
  lead: string;
  rest?: string | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-page-head': PageHead;
  }
}
