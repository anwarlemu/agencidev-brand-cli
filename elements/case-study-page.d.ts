export type CaseStudyContent = { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; title: string; link: { label: string; href: string; }; pieces: ({ src: string; ratio: number; caption?: undefined; } | { src: string; ratio: number; caption: string; })[]; footer: { links: { label: string; href: string; }[]; }; }
export type CaseStudySection = "wall"
/**
 * <agd-case-study-page>

 */
export declare class CaseStudyPage extends HTMLElement {
  content: { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; title: string; link: { label: string; href: string; }; pieces: ({ src: string; ratio: number; caption?: undefined; } | { src: string; ratio: number; caption: string; })[]; footer: { links: { label: string; href: string; }[]; }; };
  sections?: "wall"[] | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-case-study-page': CaseStudyPage;
  }
}
