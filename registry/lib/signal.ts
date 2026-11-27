// The site's "no signal" static, framework-free: the 404 page's dead-channel field (AGD lib/no-signal-engine.ts,
// NOISE_FRAGMENT) and its grain canvas (components/no-signal-404.tsx: uniform noise at a third of the screen's pixels,
// overlaid at 50%), line for line on the CPU. The component draws it into a canvas; the CLI's image, illustrate and
// video commands draw the same frames (bundled into build/generators/signal.mjs), so a seed gives the same picture.
//
// Monochrome by construction: a charcoal base, a grey tone roll, and the glitch band that rolls up the screen and
// reveals white through the black.

const fract = (x: number) => x - Math.floor(x)
const rand = (x: number, y: number) => fract(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123)
const smooth = (a: number, b: number, x: number) => {
	const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
	return t * t * (3 - 2 * t)
}
const mix = (a: number, b: number, t: number) => a + (b - a) * t

/** The time the band's middle crosses the frame's middle (bandPos 0.09 at uv.y 0.5). */
export const SIGNAL_BAND_TIME = (0.4 - 0.09) / 0.12
/** Half a roll on, where the band is at its farthest from the middle (`band: false` takes it out altogether). */
export const SIGNAL_FIELD_TIME = SIGNAL_BAND_TIME + 4.2
/** One full roll of the band (bandPos runs 0 to 1 as time runs 1 / 0.12 seconds). */
export const SIGNAL_ROLL = 1 / 0.12

export interface SignalOptions {
	/** Seconds into the loop: picks where the band is and the frame of the static. Default: the band across the middle. */
	time?: number
	/** The time the field's flow (its warp, tone roll, tear and scanlines) is drawn at; default `time`. A loop holds the
	 * band's roll on `time` and swings this back and forth, so its last frame meets its first. */
	warp?: number
	/** Which frame of the grain and the row jitter (default: tenths of a second into `time`). */
	frame?: number
	/** The grain's seed (a different speckle per seed). */
	seed?: number
	/** The grain overlay (default true). */
	grain?: boolean
	/** The glitch band (default true); false leaves only the static, its tone roll and grain. */
	band?: boolean
	/** How many frame pixels one screen pixel is: the grain cell is three screen pixels (default 1.5, a 1440 page on a
	 * 2160 frame). */
	density?: number
}

/** One frame of the static as gray RGBA pixels, `width` by `height`. */
export function signalFrame(width: number, height: number, o: SignalOptions = {}): Uint8ClampedArray {
	const W = Math.max(1, Math.round(width))
	const H = Math.max(1, Math.round(height))
	const time = o.time ?? SIGNAL_BAND_TIME
	const warp = o.warp ?? time
	const seed = o.seed ?? 0
	const cell = 3 * (o.density ?? 1.5)
	const grainOn = o.grain !== false
	const bandOn = o.band !== false
	const out = new Uint8ClampedArray(W * H * 4)
	const t = o.frame ?? Math.floor(time * 10)
	for (let py = 0; py < H; py++) {
		const vy = 1 - (py + 0.5) / H
		for (let px = 0; px < W; px++) {
			const vx = (px + 0.5) / W
			let ux = vx
			let uy = vy
			ux += Math.sin(uy * 6 + warp * 1.1) * 0.022 + Math.sin(uy * 13 - warp * 0.7) * 0.012 + Math.sin(ux * 4 + warp * 0.6) * 0.01
			uy += Math.sin(vx * 5 - warp * 0.9) * 0.016 + Math.cos(vy * 9 + warp * 1.3) * 0.01
			const line = Math.floor((uy * H) / 3)
			const jitter = (rand(line, t) - 0.5) * 0.015
			const bandPos = fract(uy * 0.8 - time * 0.12)
			const band = bandOn ? smooth(0, 0.06, bandPos) * smooth(0.34, 0.12, bandPos) : 0
			const wave = Math.sin(uy * 7 - warp * 3) * 0.16 + Math.sin(uy * 23 - warp * 6) * 0.05
			const chaos = (rand(line * 0.37, t) - 0.5) * 0.22
			const x = ux + jitter + (wave + chaos) * band
			const tone = Math.sin(x * 6.2831 + warp * 0.4) * 0.5 + 0.5
			let col = mix(0.03, 0.085, tone)
			col *= mix(0.78, 1.08, smooth(1.1, 0.18, Math.abs(uy - 0.5)))
			col = mix(col, 0.92, band * Math.min(1, Math.max(0, Math.abs(wave + chaos) * 3.5)))
			const gF = rand(Math.floor(vx * W * 0.85) + t * 2.3, Math.floor(vy * H * 0.85) + t * 2.3) - 0.5
			const gC = rand(Math.floor(vx * W * 0.18) + t * 0.9, Math.floor(vy * H * 0.32) + t * 0.9) - 0.5
			let tint = mix(0.012, 0.3, gF * 0.55 + gC * 0.45 + 0.5)
			tint = mix(tint, 0.92, band * 0.4)
			col = mix(col, tint, 0.14 + band * 0.18)
			col *= 0.9 + 0.06 * Math.sin(vy * H * 1.35) + 0.04 * Math.sin(vy * H * 0.42 - warp * 6.5)
			col += 0.018 * Math.sin(vy * 140 - warp * 11 + gC * 4) * (0.3 + band * 0.7)
			let b = Math.min(1, Math.max(0, col))
			if (grainOn) {
				const g = rand(Math.floor(px / cell) * 1.37 + 11.1 + seed * 17.3 + t * 0.61, Math.floor(py / cell) * 0.71 + 3.3 + seed * 5.9)
				b = mix(b, b < 0.5 ? 2 * b * g : 1 - 2 * (1 - b) * (1 - g), 0.5)
			}
			const v = Math.round(b * 255)
			const i = (py * W + px) * 4
			out[i] = out[i + 1] = out[i + 2] = v
			out[i + 3] = 255
		}
	}
	return out
}

/** Where a frame is lit (a cell whose brightest pixel passes `lit`, 0 to 255), in `cell`-pixel runs along each row:
 * what copy and the logo keep clear of. */
export function signalInk(pixels: Uint8ClampedArray, width: number, height: number, cell = 16, lit = 96): [number, number, number, number][] {
	const ink: [number, number, number, number][] = []
	for (let y = 0; y < height; y += cell) {
		let run: [number, number, number, number] | undefined
		for (let x = 0; x < width; x += cell) {
			let on = false
			for (let yy = y; yy < Math.min(height, y + cell) && !on; yy += 2)
				for (let xx = x; xx < Math.min(width, x + cell); xx += 2) if (pixels[(yy * width + xx) * 4]! > lit) { on = true; break }
			if (on) run ? (run[2] += cell) : ink.push((run = [x, y, cell, cell]))
			else run = undefined
		}
	}
	return ink
}
