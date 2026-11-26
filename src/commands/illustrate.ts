import { join, resolve } from 'node:path';
import { brand } from '../lib/brand.js';
import { display, format, int, list, readPhoto, str, write, type Flags } from '../assets/io.js';
import { unknown } from '../assets/templates.js';
import { helpRow } from '../lib/help-row.js';
import { illustrate, illustrateData, STYLES, type IllustrateRequest, type StyleId } from '../illustrate/build.js';

// `illustrate` writes the brand's own imagery: the no-signal static, the static alone and pictures as the home rail
// (brand/assets/illustrate.json; the rules are brand/illustration.md). PNG and SVG, the same bytes for the same inputs.

export const ILLUSTRATE_FLAGS = ['image', 'seed', 'time', 'width', 'height', 'format', 'out', 'list', 'all'];

export function illustrateHelp(): string {
	const b = brand().bin;
	const row = (cmd: string, what: string) => helpRow(cmd, what, 64);
	return [
		"The brand's own imagery as files: the 404 page's no-signal static, the static alone, and your pictures as the home rail.",
		'PNG and SVG; the same inputs write the same bytes. Rules and sources: brand/illustration.md.',
		'',
		row(`${b} illustrate signal --seed 2`, 'The static with its glitch band across the middle'),
		row(`${b} illustrate field --width 1080 --height 1350`, 'The static alone, a quiet ground'),
		row(`${b} illustrate signal --time 3.1`, 'Another frame of the loop: the band elsewhere'),
		row(`${b} illustrate rail --image a.jpg --image b.jpg`, 'Pictures as the home rail of portrait strips'),
		row(`${b} illustrate --list`, 'Styles and their sources'),
		row(`${b} illustrate --all --out illustrations`, 'A gallery of every style'),
		'',
		`Styles: ${STYLES().join(', ')}. rail takes --image (PNG, JPEG or WebP), up to 8; they repeat.`,
		'--seed picks the grain, --time (seconds) the frame. --width and --height override the frame (default 1920x1080).',
		'--format png, svg or both (default). --out is a directory (default illustrations/) or one .png or .svg file.',
	].join('\n');
}

function catalog() {
	const d = illustrateData();
	return { styles: Object.entries(d.styles).map(([id, s]) => ({ id, ...s })) };
}

const num = (flags: Flags, key: string): number | undefined => {
	const v = flags[key];
	if (v === undefined) return undefined;
	const n = Number(v);
	if (typeof v !== 'string' || !Number.isFinite(n)) throw new Error(`--${key} takes a number, not \`${String(v)}\`.`);
	return n;
};

export async function runIllustrate(cwd: string, args: string[], flags: Flags): Promise<{ json: unknown; text: string }> {
	if (flags.list === true || args[0] === 'list') {
		const c = catalog();
		return {
			json: c,
			text: [
				...c.styles.map((s) => `${s.id.padEnd(10)}${s.description}`),
			].join('\n'),
		};
	}
	const fmt = format(flags, ['png', 'svg', 'both'], 'both');
	const seed = int(flags, 'seed', 0, 0, 1_000_000);
	const time = num(flags, 'time');
	if (time !== undefined && (time < 0 || time > 600)) throw new Error('--time takes 0 to 600 seconds.');

	const jobs: { name: string; req: IllustrateRequest }[] = [];
	if (flags.all === true) {
		if (args.length) throw new Error('Pass a style or --all, not both.');
		jobs.push({ name: 'signal', req: { style: 'signal', seed } });
		jobs.push({ name: 'field', req: { style: 'field', seed } });
	} else {
		const style = args[0];
		if (!style) throw new Error(`Name a style: ${STYLES().join(', ')}. ${brand().bin} illustrate --list`);
		if (!STYLES().includes(style as StyleId)) throw unknown('style', style, STYLES());
		if (args.length > 1) throw new Error(`illustrate takes one style; got ${args.join(' ')}.`);
		const images = list(flags.image);
		if (images.length > 8) throw new Error('--image takes up to 8 pictures.');
		const photos = await Promise.all(images.map((f) => readPhoto(cwd, f)));
		const req: IllustrateRequest = { style: style as StyleId, photos, seed, time, width: num(flags, 'width'), height: num(flags, 'height') };
		jobs.push({ name: [style, String(seed)].join('-'), req });
	}

	const out = str(flags.out);
	const single = out && /\.(png|svg)$/i.test(out) ? resolve(cwd, out) : undefined;
	if (single && jobs.length > 1) throw new Error('--out names one file; --all writes many. Pass a directory.');
	const singleFormat = single ? (single.toLowerCase().endsWith('.svg') ? 'svg' : 'png') : fmt;
	const dir = resolve(cwd, out && !single ? out : 'illustrations');
	const files: { path: string; format: string; width: number; height: number; vector: boolean; [k: string]: unknown }[] = [];
	for (const job of jobs) {
		const r = await illustrate(job.req);
		const base = single ? single.replace(/\.(png|svg)$/i, '') : join(dir, job.name);
		if (singleFormat !== 'svg') {
			write(`${base}.png`, r.png);
			files.push({ path: display(cwd, `${base}.png`), format: 'png', width: r.width, height: r.height, vector: false, ...r.meta });
		}
		if (singleFormat !== 'png') {
			write(`${base}.svg`, r.svg);
			files.push({ path: display(cwd, `${base}.svg`), format: 'svg', width: r.width, height: r.height, vector: r.vector, ...r.meta });
		}
	}
	return { json: { files }, text: files.map((f) => `${f.path}  ${f.width}x${f.height}`).join('\n') };
}
