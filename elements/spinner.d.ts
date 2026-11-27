/**
 * <agd-spinner>

 */
export declare class Spinner extends HTMLElement {
  size: "sm" | "md";
  label: string;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-spinner': Spinner;
  }
}
