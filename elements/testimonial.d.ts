/**
 * <agd-testimonial>

 */
export declare class Testimonial extends HTMLElement {
  quote: string;
  name: string;
  personRole?: string | undefined;
  avatar?: string | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-testimonial': Testimonial;
  }
}
