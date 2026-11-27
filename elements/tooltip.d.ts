export type Side = 'top' | 'right' | 'bottom' | 'left'
export type Align = 'start' | 'center' | 'end'
/**
 * <agd-tooltip>
 * @slot (default) One focusable trigger.
 */
export declare class Tooltip extends HTMLElement {
  text: string;
  side: Side;
  align: Align;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-tooltip': Tooltip;
  }
}
