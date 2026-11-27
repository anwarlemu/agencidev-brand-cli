export type LogoVariant = 'mark' | 'wordmark' | 'horizontal'
export type LogoTone = 'auto' | 'white' | 'black'
/**
 * <agd-logo>

 */
export declare class Logo extends HTMLElement {
  variant: LogoVariant;
  tone: LogoTone;
  height: number;
  label: string;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-logo': Logo;
  }
}
