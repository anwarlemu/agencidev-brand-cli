export interface SiteHeaderLink { label: string; href: string; current?: boolean }
/**
 * <agd-site-header>

 */
export declare class SiteHeader extends HTMLElement {
  links: SiteHeaderLink[];
  secondary?: SiteHeaderLink | undefined;
  primary?: SiteHeaderLink | undefined;
  homeHref: string;
  email?: string | undefined;
  fixed: boolean;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-site-header': SiteHeader;
  }
}
