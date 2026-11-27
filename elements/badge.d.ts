export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive'
export type BadgeDot = 'on' | 'off'
/**
 * <agd-badge>
 * @slot (default) The word.
 */
export declare class Badge extends HTMLElement {
  variant: BadgeVariant;
  dot?: BadgeDot | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-badge': Badge;
  }
}
