export type LegalContent = { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; lead: string; rest: string; sections: { title: string; body: string; }[]; footer: { links: { label: string; href: string; }[]; }; }
export type LegalSection = "head" | "body"
/**
 * <agd-legal-page>

 */
export declare class LegalPage extends HTMLElement {
  content: { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; lead: string; rest: string; sections: { title: string; body: string; }[]; footer: { links: { label: string; href: string; }[]; }; };
  sections?: ("head" | "body")[] | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-legal-page': LegalPage;
  }
}
