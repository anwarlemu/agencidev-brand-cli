export type CareersContent = { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; lead: string; rest: string; roles: { title: string; department: string; href: string; }[]; footer: { links: { label: string; href: string; }[]; }; }
export type CareersSection = "openings" | "head"
/**
 * <agd-careers-page>

 */
export declare class CareersPage extends HTMLElement {
  content: { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; lead: string; rest: string; roles: { title: string; department: string; href: string; }[]; footer: { links: { label: string; href: string; }[]; }; };
  sections?: ("openings" | "head")[] | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-careers-page': CareersPage;
  }
}
