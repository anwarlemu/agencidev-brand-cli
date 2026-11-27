/**
 * <agd-no-signal>
 * @slot (default) What sits over the static.
 */
export declare class NoSignal extends HTMLElement {
  band: boolean;
  still: boolean;
  seed: number;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-no-signal': NoSignal;
  }
}
