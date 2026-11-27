export type ArticlesContent = { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; intro: string; articles: { title: string; href: string; date: string; readingTime: string; excerpt: string; cover: string; }[]; footer: { links: { label: string; href: string; }[]; }; }
export type ArticlesSection = "intro" | "list"
/**
 * <agd-articles-page>

 */
export declare class ArticlesPage extends HTMLElement {
  content: { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; intro: string; articles: { title: string; href: string; date: string; readingTime: string; excerpt: string; cover: string; }[]; footer: { links: { label: string; href: string; }[]; }; };
  sections?: ("intro" | "list")[] | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-articles-page': ArticlesPage;
  }
}
