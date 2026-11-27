export type ContactContent = { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; lead: string; rest: string; primary: { label: string; href: string; }; secondary: { label: string; href: string; }; ways: { label: string; body: string; }[]; notes: string[]; footer: { links: { label: string; href: string; }[]; }; }
export type ContactSection = "head" | "ways" | "notes"
/**
 * <agd-contact-page>

 */
export declare class ContactPage extends HTMLElement {
  content: { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; lead: string; rest: string; primary: { label: string; href: string; }; secondary: { label: string; href: string; }; ways: { label: string; body: string; }[]; notes: string[]; footer: { links: { label: string; href: string; }[]; }; };
  sections?: ("head" | "ways" | "notes")[] | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-contact-page': ContactPage;
  }
}
