export type AboutContent = { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; bets: { title: string; lines: string[]; close: string; }; team: { name: string; role: string; location: string; }[]; process: { lead: string; rest: string; steps: { title: string; body: string; }[]; }; roles: { title: string; department: string; href: string; }[]; footer: { links: { label: string; href: string; }[]; }; }
export type AboutSection = "bets" | "team" | "process" | "openings"
/**
 * <agd-about-page>

 */
export declare class AboutPage extends HTMLElement {
  content: { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; bets: { title: string; lines: string[]; close: string; }; team: { name: string; role: string; location: string; }[]; process: { lead: string; rest: string; steps: { title: string; body: string; }[]; }; roles: { title: string; department: string; href: string; }[]; footer: { links: { label: string; href: string; }[]; }; };
  sections?: ("bets" | "team" | "process" | "openings")[] | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-about-page': AboutPage;
  }
}
