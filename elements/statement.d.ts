/**
 * <agd-statement>

 */
export declare class Statement extends HTMLElement {
  headId: string;
  lead: string;
  rest?: string | undefined;
  stat?: string | undefined;
  figure?: string | undefined;
  level: "h1" | "h2";
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-statement': Statement;
  }
}
