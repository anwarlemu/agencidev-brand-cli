/**
 * <agd-article-card>

 */
export declare class ArticleCard extends HTMLElement {
  heading: string;
  href: string;
  date?: string | undefined;
  readingTime?: string | undefined;
  excerpt?: string | undefined;
  cover?: string | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-article-card': ArticleCard;
  }
}
