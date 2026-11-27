/**
 * <agd-dropdown-menu>
 * @fires open-change It opened or closed (detail.value).
 * @slot (default) The rows: <agd-menu-item>, <agd-menu-label>, <agd-menu-separator>.
 * @slot trigger A <button> to use as the trigger, or the default trigger's content.
 */
export declare class DropdownMenu extends HTMLElement {
  label: string;
  up: boolean;
  placement: "start" | "end";
  width: string;
  offset: string;
  triggerLabel?: string | undefined;
  open: boolean;
  show(focus?: "first" | "last" | "none"): void;
  close(refocus?: boolean): void;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-dropdown-menu': DropdownMenu;
  }
}
