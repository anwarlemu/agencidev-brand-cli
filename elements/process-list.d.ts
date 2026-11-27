export interface ProcessStep { title: string; body?: string }
/**
 * <agd-process-list>

 */
export declare class ProcessList extends HTMLElement {
  steps: ProcessStep[];
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-process-list': ProcessList;
  }
}
