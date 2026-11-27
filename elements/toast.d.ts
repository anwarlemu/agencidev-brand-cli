/**
 * <agd-toast>
 * @fires action The action button was pressed.
 * @fires dismiss The close button was pressed.
 */
export declare class Toast extends HTMLElement {
  heading: string;
  description?: string | undefined;
  actionLabel?: string | undefined;
  dismissable: boolean;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-toast': Toast;
  }
}
