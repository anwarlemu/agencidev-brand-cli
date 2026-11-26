// The site's "no signal" static (AGD lib/no-signal-engine.ts, NOISE_FRAGMENT: the 404 page's dead-channel field) run on
// the CPU, one frame, for the asset engine: brand/assets/art/signal.png (the field with its glitch band across the
// middle). The math is the
// shader's line for line (uIntensity 1, uLiquid 1); the frame is held at the time the band crosses the middle. Then run
// scripts/assets/make-art.mjs for the ink maps.
//
//   node scripts/assets/make-signal.mjs
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { PNG } from 'pngjs';

const dir = join(import.meta.dirname, '..', '..', 'brand', 'assets', 'art');
const fract = (x) => x - Math.floor(x);
const rand = (x, y) => fract(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123);
const smooth = (a, b, x) => {
	const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
	return t * t * (3 - 2 * t);
};
const mix = (a, b, t) => a + (b - a) * t;

/** The grain's noise, seeded so a rebuild draws the same file. */
const grainAt = (x, y) => rand(x * 1.37 + 11.1, y * 0.71 + 3.3);

function frame(W, H, time) {
	const png = new PNG({ width: W, height: H });
	const t = Math.floor(time * 10);
	for (let py = 0; py < H; py++) {
		for (let px = 0; px < W; px++) {
			const vx = (px + 0.5) / W;
			const vy = 1 - (py + 0.5) / H; // GL's uv: y up
			let ux = vx;
			let uy = vy;
			const lx = Math.sin(uy * 6 + time * 1.1) * 0.022 + Math.sin(uy * 13 - time * 0.7) * 0.012 + Math.sin(ux * 4 + time * 0.6) * 0.01;
			const ly = Math.sin(ux * 5 - time * 0.9) * 0.016 + Math.cos(uy * 9 + time * 1.3) * 0.01;
			ux += lx;
			uy += ly;
			const line = Math.floor((uy * H) / 3);
			const jitter = (rand(line, t) - 0.5) * 0.015;
			const bandPos = fract(uy * 0.8 - time * 0.12);
			const band = smooth(0, 0.06, bandPos) * smooth(0.34, 0.12, bandPos);
			const wave = Math.sin(uy * 7 - time * 3) * 0.16 + Math.sin(uy * 23 - time * 6) * 0.05;
			const chaos = (rand(line * 0.37, t) - 0.5) * 0.22;
			const bigTear = (wave + chaos) * band;
			const x = ux + jitter + bigTear;
			const tone = Math.sin(x * 6.2831 + time * 0.4) * 0.5 + 0.5;
			let col = mix(0.03, 0.085, tone);
			col *= mix(0.78, 1.08, smooth(1.1, 0.18, Math.abs(uy - 0.5)));
			const reveal = band * Math.min(1, Math.max(0, Math.abs(wave + chaos) * 3.5));
			col = mix(col, 0.92, reveal);
			const gF = rand(Math.floor(vx * W * 0.85) + t * 2.3, Math.floor(vy * H * 0.85) + t * 2.3) - 0.5;
			const gC = rand(Math.floor(vx * W * 0.18) + t * 0.9, Math.floor(vy * H * 0.32) + t * 0.9) - 0.5;
			const grain = gF * 0.55 + gC * 0.45;
			let tint = mix(0.012, 0.3, grain + 0.5);
			tint = mix(tint, 0.92, band * 0.4);
			col = mix(col, tint, 0.14 + band * 0.18);
			col *= 0.9 + 0.06 * Math.sin(vy * H * 1.35) + 0.04 * Math.sin(vy * H * 0.42 - time * 6.5);
			col += 0.018 * Math.sin(vy * 140 - time * 11 + gC * 4) * (0.3 + band * 0.7);
			// The grain canvas (no-signal-404.tsx): uniform noise at a third of the screen's pixels, overlaid at 50%. A
			// 2160 frame stands for a 1440 screen, so a grain cell is 4.5 of its pixels.
			const b = Math.min(1, Math.max(0, col));
			const g = grainAt(Math.floor(px / 4.5), Math.floor(py / 4.5));
			const over = b < 0.5 ? 2 * b * g : 1 - 2 * (1 - b) * (1 - g);
			const v = Math.round(mix(b, over, 0.5) * 255);
			const i = (py * W + px) * 4;
			png.data[i] = png.data[i + 1] = png.data[i + 2] = v;
			png.data[i + 3] = 255;
		}
	}
	return PNG.sync.write(png);
}

// The band's middle (bandPos about 0.09) crosses uv.y 0.5 at time (0.4 - 0.09) / 0.12.
writeFileSync(join(dir, 'signal.png'), frame(2160, 1080, (0.4 - 0.09) / 0.12));
console.log('signal: signal.png -> brand/assets/art');
