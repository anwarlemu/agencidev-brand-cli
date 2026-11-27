/**
 * <agd-field>
 * @slot (default) The control: <agd-input>, <agd-textarea>, <agd-native-select>, or any input.
 */
export declare class Field extends HTMLElement {
  label: string;
  description?: string | undefined;
  error?: string | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-field': Field;
  }
}
