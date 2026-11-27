// The no-signal static on a canvas, shared by both flavors: a third of the box's pixels (the site's grain canvas is a
// third of the screen's), redrawn about twenty times a second while it runs. `band` rolls the glitch band up through
// the box as the 404 page does; without it only the static and its grain run. A still frame when it should not move
// (reduced motion, or animate off). Framework-free.
import { signalFrame, SIGNAL_BAND_TIME, SIGNAL_FIELD_TIME } from '@/lib/signal'

export type NoSignalOptions = { band: boolean; animate: boolean; seed: number }

/** Starts drawing into `canvas`; returns the function that stops it. */
export function runNoSignal(canvas: HTMLCanvasElement, o: NoSignalOptions): () => void {
	const ctx = canvas.getContext('2d')
	if (!ctx) return () => {}
	const base = o.band ? SIGNAL_BAND_TIME : SIGNAL_FIELD_TIME
	let w = 0
	let h = 0
	let image: ImageData | undefined
	let raf = 0
	let last = 0
	const start = performance.now()
	const draw = (s: number) => {
		if (!image) return
		// The band rolls on real time; the static's flow and grain run on it too.
		const time = o.band ? base + s : base
		image.data.set(signalFrame(w, h, { time, warp: base + s, frame: Math.floor(s * 10), seed: o.seed, density: 1 / 3, band: o.band }))
		ctx.putImageData(image, 0, 0)
	}
	const size = () => {
		const box = canvas.getBoundingClientRect()
		w = Math.max(1, Math.min(480, Math.round(box.width / 3)))
		h = Math.max(1, Math.round((w * box.height) / Math.max(1, box.width)))
		canvas.width = w
		canvas.height = h
		image = ctx.createImageData(w, h)
	}
	size()
	draw(0)
	const observer = new ResizeObserver(() => {
		size()
		draw((performance.now() - start) / 1000)
	})
	observer.observe(canvas)
	const still = !o.animate || (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches)
	if (!still) {
		const tick = (now: number) => {
			raf = requestAnimationFrame(tick)
			if (now - last < 50) return
			last = now
			draw((now - start) / 1000)
		}
		raf = requestAnimationFrame(tick)
	}
	return () => {
		cancelAnimationFrame(raf)
		observer.disconnect()
	}
}
