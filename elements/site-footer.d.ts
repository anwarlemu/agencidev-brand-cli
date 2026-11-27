export interface SiteFooterLink { label: string; href: string }
/**
 * <agd-site-footer>

 */
export declare class SiteFooter extends HTMLElement {
  links: SiteFooterLink[];
  homeHref: string;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-site-footer': SiteFooter;
  }
}
