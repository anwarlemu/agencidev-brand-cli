import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { describe, expect, it } from 'vitest';

// The no-signal static as the CLI, the templates and the component run it (build/generators/signal.mjs, bundled from
// registry/lib/signal.ts by the build): deterministic, monochrome, the band where the 404 page's shader puts it.

const root = join(__dirname, '..');
type Signal = typeof import('../registry/lib/signal.ts');
const signal = (await import(pathToFileURL(join(root, 'build/generators/signal.mjs')).href)) as Signal;
const hash = (px: Uint8ClampedArray) => createHash('sha256').update(px).digest('hex').slice(0, 16);

describe('the no-signal static', () => {
	it('draws the same frame for the same options, and another for another seed or time', () => {
		const a = signal.signalFrame(160, 90, { seed: 3 });
		expect(hash(signal.signalFrame(160, 90, { seed: 3 }))).toBe(hash(a));
		expect(hash(signal.signalFrame(160, 90, { seed: 4 }))).not.toBe(hash(a));
		expect(hash(signal.signalFrame(160, 90, { seed: 3, time: 1 }))).not.toBe(hash(a));
	});
	it('is monochrome by construction: every pixel is a gray, fully opaque', () => {
		const px = signal.signalFrame(120, 80);
		for (let i = 0; i < px.length; i += 4) {
			expect(px[i]).toBe(px[i + 1]);
			expect(px[i + 1]).toBe(px[i + 2]);
			expect(px[i + 3]).toBe(255);
		}
	});
	it('puts the band across the middle at its default time, and only the dark static without it', () => {
		const W = 200;
		const H = 200;
		const rowMean = (px: Uint8ClampedArray, y: number) => {
			let s = 0;
			for (let x = 0; x < W; x++) s += px[(y * W + x) * 4]!;
			return s / W;
		};
		const band = signal.signalFrame(W, H, { grain: false });
		const field = signal.signalFrame(W, H, { band: false, grain: false });
		const mid = Math.max(...[80, 90, 100, 110, 120].map((y) => rowMean(band, y)));
		expect(mid).toBeGreaterThan(rowMean(band, 5) + 40);
		expect(Math.max(...Array.from({ length: H }, (_, y) => rowMean(field, y)))).toBeLessThan(60);
	});
	it('rolls the band once per SIGNAL_ROLL seconds: a whole roll on, the band is where it was', () => {
		const t = signal.SIGNAL_BAND_TIME;
		const a = signal.signalFrame(64, 64, { time: t, warp: t, frame: 0, grain: false });
		const b = signal.signalFrame(64, 64, { time: t + signal.SIGNAL_ROLL, warp: t, frame: 0, grain: false });
		let diff = 0;
		for (let i = 0; i < a.length; i += 4) diff = Math.max(diff, Math.abs(a[i]! - b[i]!));
		expect(diff).toBeLessThanOrEqual(2);
	});
	it('marks where the band is lit, for the clear-space checks', () => {
		const px = signal.signalFrame(320, 320, { grain: false });
		const ink = signal.signalInk(px, 320, 320);
		expect(ink.length).toBeGreaterThan(0);
		for (const [, y, , h] of ink) {
			expect(y).toBeGreaterThan(40);
			expect(y + h).toBeLessThan(280);
		}
	});
});
