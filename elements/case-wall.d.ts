export interface CasePiece { src?: string; alt?: string; ratio?: number; caption?: string }
/**
 * <agd-case-wall>

 */
export declare class CaseWall extends HTMLElement {
  heading: string;
  pieces: CasePiece[];
  link?: { label: string; href: string; } | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-case-wall': CaseWall;
  }
}
