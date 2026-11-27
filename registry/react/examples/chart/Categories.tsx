'use client'
import { LineChart, type LineSeries } from '@/react/components/ui/LineChart'
// Hours per day by discipline over two weeks: five series in the brand's order, monochrome and every other one dashed. Point at the plot to
// read a day. Sample data.
const day = (i: number) => Date.UTC(2026, 10, 2 + i)
const categories = ['Product', 'Brand', 'Strategy', 'Web', 'Mobile']
const series: LineSeries[] = categories.map((label, k) => ({
  label,
  points: Array.from({ length: 14 }, (_, i) => ({ t: day(i), v: Math.round(30 - k * 4 + ((i * (k + 3) * 7) % 11) + i * (1 - k * 0.15)) })),
}))
const count = (v: number) => `${Math.round(v)} hours`

export default function Categories() {
  return (
    <div className="w-full max-w-238">
      <LineChart title="Hours per day" series={series} format={count} />
    </div>
  )
}
