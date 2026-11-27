export type DayPoint = { day: string, value: number }
/**
 * <agd-bar-chart>

 */
export declare class BarChart extends HTMLElement {
  points: DayPoint[];
  label: string;
  height: number;
  lit?: number[] | undefined;
  note?: string | undefined;
}
declare global {
  interface HTMLElementTagNameMap {
    'agd-bar-chart': BarChart;
  }
}
