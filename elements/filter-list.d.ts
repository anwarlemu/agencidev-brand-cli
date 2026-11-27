/**
 * <agd-filter-list>
 * @fires change When an option is picked (value is the option).
 */
export declare class FilterList extends HTMLElement {
  options: string[];
  value?: string | undefined;
  label: string;
  arrange: "row" | "column";
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-filter-list': FilterList;
  }
}
