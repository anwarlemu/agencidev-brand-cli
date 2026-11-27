export interface CodeTab { id: string; label: string; code: string; language?: string }
/**
 * <agd-code-block>

 */
export declare class CodeBlock extends HTMLElement {
  tabs: CodeTab[];
  label: string;
  copy: { label: string; copiedLabel: string; name: string; };
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-code-block': CodeBlock;
  }
}
