export type ArticleContent = { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; back: { label: string; href: string; }; title: string; date: string; readingTime: string; cover: string; body: string[]; footer: { links: { label: string; href: string; }[]; }; }
export type ArticleSection = "head" | "cover" | "body"
/**
 * <agd-article-page>

 */
export declare class ArticlePage extends HTMLElement {
  content: { header: { links: { label: string; href: string; }[]; secondary: { label: string; href: string; }; primary: { label: string; href: string; }; email: string; }; back: { label: string; href: string; }; title: string; date: string; readingTime: string; cover: string; body: string[]; footer: { links: { label: string; href: string; }[]; }; };
  sections?: ("head" | "cover" | "body")[] | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-article-page': ArticlePage;
  }
}
