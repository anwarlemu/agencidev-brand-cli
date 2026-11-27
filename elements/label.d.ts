/**
 * <agd-label>
 * @slot (default) The label's text.
 */
export declare class Label extends HTMLElement {
  htmlFor?: string | undefined;
  hint?: string | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-label': Label;
  }
}
