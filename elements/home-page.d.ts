export type HomeContent = { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; rail: { src: string; alt: string; }[]; stat: string; figure: string; lead: string; rest: string; footer: { links: { label: string; href: string; }[]; }; }
export type HomeSection = "rail" | "statement"
/**
 * <agd-home-page>

 */
export declare class HomePage extends HTMLElement {
  content: { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; rail: { src: string; alt: string; }[]; stat: string; figure: string; lead: string; rest: string; footer: { links: { label: string; href: string; }[]; }; };
  sections?: ("rail" | "statement")[] | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-home-page': HomePage;
  }
}
