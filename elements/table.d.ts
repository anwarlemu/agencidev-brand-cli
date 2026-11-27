/**
 * <agd-table>
 * @slot (default) A <table> with its caption, thead, tbody and tfoot.
 */
export declare class Table extends HTMLElement {
  framed: boolean;
  label?: string | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-table': Table;
  }
}
