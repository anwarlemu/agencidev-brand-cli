/**
 * <agd-carousel>
 * @slot (default) The slides: each child element is one.
 */
export declare class Carousel extends HTMLElement {
  label: string;
  perView: 3 | 2 | 1;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-carousel': Carousel;
  }
}
