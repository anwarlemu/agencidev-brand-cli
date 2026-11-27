/**
 * <agd-sidebar-link>
 * @slot (default) The label.
 * @slot icon A Lucide icon.
 */
export declare class SidebarLink extends HTMLElement {
  href?: string | undefined;
  active: boolean;
  status?: string | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-sidebar-link': SidebarLink;
  }
}
