export interface NavigationMenuEntry extends HTMLElement { focusTrigger(): void }
/**
 * <agd-navigation-menu>
 * @slot (default) The entries: <agd-navigation-menu-item>.
 */
export declare class NavigationMenu extends HTMLElement {
  label: string;
  active: Element | null;
  entries(): NavigationMenuEntry[];
  setActive(item: Element | null): void;
  move(from: Element, step: number): void;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-navigation-menu': NavigationMenu;
  }
}
