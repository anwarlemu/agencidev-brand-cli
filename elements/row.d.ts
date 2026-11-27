/**
 * <agd-row>
 * @slot (default) The body.
 * @slot aside A filter or a note between the title and the body.
 */
export declare class Row extends HTMLElement {
  label: string;
  titled: boolean;
  rowId?: string | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-row': Row;
  }
}
