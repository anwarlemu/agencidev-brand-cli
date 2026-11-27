import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { brand, packageRoot } from '../lib/brand.js';
import { drawScene, rasterizeScene } from '../assets/scene.js';
import { unknown } from '../assets/templates.js';
import { muxMjpeg } from '../assets/mp4.js';
import { display, format, int, lightSource, str, write } from '../assets/io.js';
// `video` writes short loops and stings (brand/assets/video.json): the 404 page's no-signal static rolling, the static
// alone, the lockup coming in through the band, and the tagline rising in as the site's page heads do. Frames are drawn like every other asset
// and encoded with ffmpeg when it is installed (H.264 MP4 and VP9 WebM); without it, the PNG frames and a Motion JPEG
// MP4 from the built-in muxer.
const require = createRequire(import.meta.url);
const jpeg = require('jpeg-js');
export const VIDEO_FLAGS = ['template', 'size', 'seed', 'light', 'seconds', 'fps', 'format', 'out', 'still', 'list'];
let doc;
export function videoDoc() {
    doc ??= JSON.parse(readFileSync(join(packageRoot, 'brand', 'assets', 'video.json'), 'utf8'));
    return doc;
}
export function hasFfmpeg() {
    if (process.env.DS_NO_FFMPEG)
        return false;
    const r = spawnSync('ffmpeg', ['-version'], { stdio: 'ignore' });
    return r.status === 0;
}
export function videoCatalog() {
    const d = videoDoc();
    return {
        templates: d.templates.map((t) => ({ id: t.id, name: t.name, description: t.description, from: t.from })),
        sizes: Object.entries(d.sizes).map(([id, [width, height]]) => ({ id, width, height })),
        fps: d.fps,
        seconds: d.seconds,
        formats: ['mp4', 'webm', 'frames', 'all'],
        encoder: 'ffmpeg (H.264 MP4, VP9 WebM) when installed; otherwise PNG frames and a Motion JPEG MP4.',
    };
}
/** One frame of a loop as a scene: the static at its phase, the lockup and the address; a sting's lockup or tagline on
 * the site's ease-out. */
export function videoFrame(t, size, phase, seed, _light) {
    const [W, H] = size;
    const k = Math.min(W, H) / 1080;
    const layers = [];
    const a = 2 * Math.PI * phase;
    // The band rolls up once per loop (a whole roll returns it where it started); the flow swings and comes back; the
    // grain runs through 60 frames and starts over. So the frame after the last is the first.
    if (t.signal !== 'none') {
        const roll = 1 / 0.12;
        const base = (0.4 - 0.09) / 0.12;
        const time = t.signal === 'band' ? (t.sting ? base - roll * 0.5 + roll * 0.5 * (1 - (1 - phase) ** 3) : base + roll * phase) : base + 4.2;
        layers.push({ type: 'signal', box: [0, 0, W, H], time, warp: base + 0.8 * Math.sin(a), frame: Math.floor(phase * 60) % 60, band: t.signal === 'band' });
    }
    const m = 36 * k * 1.5;
    // A vertical loop is a story: its bars cover 250px at the top and 340px at the foot.
    const story = H > W * 1.5;
    const top = story ? 266 * k : m;
    const foot = story ? H - 356 * k : H - m;
    const mid = t.logoAt === 'center';
    const ease = (x) => 1 - (1 - Math.min(1, Math.max(0, x))) ** 3;
    const lh = 28 * k * (mid ? 2 : 1);
    const lw = (lh * 630) / 110;
    const opacity = t.sting === 'reveal' ? ease((phase - 0.15) / 0.35) : undefined;
    if (t.logo)
        layers.push({ type: 'logo', lockup: 'horizontal', color: 'white', box: [mid ? W / 2 - lw / 2 : m, mid ? H / 2 - lh / 2 : top, lw, lh], align: mid ? 'center' : 'left', ...(opacity !== undefined ? { opacity } : {}) });
    if (t.url)
        layers.push({ type: 'text', slot: 'url', face: 'label', size: Math.max(18 * k, (8 * W) / 540), leading: 24 * k, color: 'dim', tracking: 0, x: mid ? W / 2 - 300 : m, top: foot - 12 * k, w: 600, align: mid ? 'center' : 'left', maxLines: 1 });
    const b = brand();
    const slots = { url: b.domain ?? new URL(b.site).host };
    if (t.sting === 'rise' && b.tagline) {
        // The page head's entrance (globals.css .rise): each line rises 12px and fades in over 500ms, 50ms apart, on the
        // brand's ease. On a six second sting a line takes the first twelfth of the run.
        const size = 56 * k;
        const words = b.tagline.split(' ');
        const half = Math.ceil(words.length / 2);
        const lines = W > H ? [b.tagline] : [words.slice(0, half).join(' '), words.slice(half).join(' ')];
        lines.forEach((line, i) => {
            const p = ease((phase - 0.08 - i * 0.01) / 0.083);
            const id = `line-${i + 1}`;
            slots[id] = line;
            layers.push({ type: 'text', id, slot: id, face: 'display', size, leading: size * 1.14, color: 'white', x: m, top: H / 2 - (lines.length * size * 1.14) / 2 + i * size * 1.14 + (1 - p) * 12 * k * 1.5, w: W - 2 * m, maxLines: 1, opacity: Math.round(p * 1000) / 1000 });
        });
    }
    return { width: W, height: H, ground: 'black', layers, slots, own: Object.keys(slots), seed };
}
export function videoHelp() {
    const b = brand().bin;
    const d = videoDoc();
    return [
        `Short loops of the 404 page's no-signal static and two stings: ${d.seconds} s at ${d.fps} fps. MP4 and WebM through ffmpeg when it is installed;`,
        'otherwise PNG frames and a Motion JPEG MP4. Frames are deterministic per --seed.',
        '',
        `  ${b} video signal-loop --size square`,
        `  ${b} video --template logo-reveal --size vertical`,
        `  ${b} video --template field-loop --still          (one frame, for reduced motion)`,
        `  ${b} video --list`,
        '',
        `Templates: ${d.templates.map((t) => t.id).join(', ')}. Sizes: ${Object.entries(d.sizes).map(([k, [w, h]]) => `${k} ${w}x${h}`).join(', ')}.`,
        '--format mp4, webm, frames or all (default: mp4 and webm with ffmpeg, frames and mp4 without). --seconds 2 to 20, --fps 12 to 60.',
        '--out is a directory (default video/).',
    ].join('\n');
}
export async function runVideo(cwd, args, flags) {
    const d = videoDoc();
    if (flags.list === true || args[0] === 'list') {
        const cat = videoCatalog();
        return { json: cat, text: [...cat.templates.map((t) => `${t.id.padEnd(16)}${t.description}`), '', `Sizes: ${cat.sizes.map((s) => `${s.id} ${s.width}x${s.height}`).join(', ')}`, `${cat.seconds} s at ${cat.fps} fps. ${cat.encoder}`].join('\n') };
    }
    if (args.length > 1)
        throw new Error(`video takes one template: ${brand().bin} video signal-loop.`);
    if (args[0] && str(flags.template) && args[0] !== str(flags.template))
        throw new Error(`--template ${str(flags.template)} and ${args[0]} disagree. Pass one.`);
    const id = str(flags.template) ?? args[0];
    if (!id)
        throw new Error(`Name a template: ${brand().bin} video --template signal-loop (--list shows them).`);
    const t = d.templates.find((x) => x.id === id.toLowerCase());
    if (!t)
        throw unknown('template', id, d.templates.map((x) => x.id));
    const sizeId = (str(flags.size) ?? 'square').toLowerCase();
    const size = d.sizes[sizeId];
    if (!size)
        throw unknown('size', sizeId, Object.keys(d.sizes));
    const seed = int(flags, 'seed', 0, 0, 1_000_000);
    const light = lightSource(flags);
    const fps = int(flags, 'fps', d.fps, 12, 60);
    const seconds = int(flags, 'seconds', d.seconds, 2, 20);
    const ff = hasFfmpeg();
    const fmt = format(flags, ['mp4', 'webm', 'frames', 'all'], ff ? 'all' : 'frames');
    if ((fmt === 'webm') && !ff)
        throw new Error('WebM needs ffmpeg on the PATH. Without it: --format frames or mp4 (Motion JPEG).');
    const dir = resolve(cwd, str(flags.out) ?? 'video');
    const name = `${t.id}-${sizeId}${seed ? `-${seed}` : ''}`;
    const files = [];
    if (flags.still === true) {
        const r = await rasterizeScene(await drawScene(videoFrame(t, size, 0, seed, light)));
        const path = join(dir, `${name}-still.png`);
        write(path, r.png);
        files.push({ path: display(cwd, path), format: 'png', width: size[0], height: size[1] });
        return { json: { files, template: t.id, size: sizeId, seed }, text: files.map((f) => `${f.path}  ${f.width}x${f.height}`).join('\n') };
    }
    const count = fps * seconds;
    const work = mkdtempSync(join(tmpdir(), 'ds-video-'));
    const jpegs = [];
    const keepFrames = fmt === 'frames' || (fmt === 'all' && !ff);
    try {
        for (let f = 0; f < count; f++) {
            const r = await rasterizeScene(await drawScene(videoFrame(t, size, f / count, seed, light)));
            const file = `frame-${String(f + 1).padStart(4, '0')}.png`;
            write(join(work, file), r.png);
            if (keepFrames)
                write(join(dir, name, file), r.png);
            if (!ff && fmt !== 'frames')
                jpegs.push(jpeg.encode({ data: r.pixels, width: r.width, height: r.height }, 92).data);
        }
        if (keepFrames)
            files.push({ path: display(cwd, join(dir, name)), format: 'frames', width: size[0], height: size[1], frames: count, fps });
        if (ff) {
            const input = join(work, 'frame-%04d.png');
            if (fmt === 'mp4' || fmt === 'all') {
                const out = join(dir, `${name}.mp4`);
                write(out, '');
                encodeMp4(input, fps, out);
                files.push({ path: display(cwd, out), format: 'mp4', width: size[0], height: size[1], frames: count, fps, encoder: 'ffmpeg libx264' });
            }
            if (fmt === 'webm' || fmt === 'all') {
                const out = join(dir, `${name}.webm`);
                write(out, '');
                ffmpeg(input, fps, out, ['-c:v', 'libvpx-vp9', '-pix_fmt', 'yuv420p', '-b:v', '0', '-crf', '32', '-row-mt', '0']);
                files.push({ path: display(cwd, out), format: 'webm', width: size[0], height: size[1], frames: count, fps, encoder: 'ffmpeg libvpx-vp9' });
            }
        }
        else if (fmt === 'mp4' || fmt === 'all') {
            const out = join(dir, `${name}.mp4`);
            write(out, muxMjpeg(jpegs, size[0], size[1], fps));
            files.push({ path: display(cwd, out), format: 'mp4', width: size[0], height: size[1], frames: count, fps, encoder: 'built-in Motion JPEG' });
        }
    }
    finally {
        rmSync(work, { recursive: true, force: true });
    }
    return { json: { files, template: t.id, size: sizeId, seed, light, ffmpeg: ff }, text: files.map((f) => `${f.path}  ${f.width}x${f.height}${f.frames ? `, ${f.frames} frames at ${f.fps} fps` : ''}${f.encoder ? ` (${f.encoder})` : ''}`).join('\n') };
}
/** A loop's first frame, and the loop itself as MP4 (ffmpeg). */
export async function renderVideo(q) {
    const { t, size } = loopOf(q);
    const r = await rasterizeScene(await drawScene(videoFrame(t, size, 0, q.seed, q.light)));
    return { still: r.png };
}
renderVideo.mp4 = async (q, work) => {
    const { t, size, fps, seconds } = loopOf(q);
    const count = Math.round(fps * seconds);
    for (let i = 0; i < count; i++)
        write(join(work, `frame-${String(i + 1).padStart(4, '0')}.png`), (await rasterizeScene(await drawScene(videoFrame(t, size, i / count, q.seed, q.light)))).png);
    const out = join(work, 'loop.mp4');
    encodeMp4(join(work, 'frame-%04d.png'), fps, out);
    return readFileSync(out);
};
function loopOf(q) {
    const d = videoDoc();
    const t = d.templates.find((x) => x.id === q.template);
    if (!t)
        throw unknown('template', q.template, d.templates.map((x) => x.id));
    const size = d.sizes[q.size];
    if (!size)
        throw unknown('size', q.size, Object.keys(d.sizes));
    return { t, size, fps: q.fps ?? d.fps, seconds: q.seconds ?? d.seconds };
}
function ffmpeg(input, fps, out, codec) {
    const r = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', input, ...codec, '-threads', '1', out], { encoding: 'utf8' });
    if (r.status !== 0)
        throw new Error(`ffmpeg failed: ${r.stderr || r.error?.message}`);
}
export function encodeMp4(input, fps, out) {
    ffmpeg(input, fps, out, ['-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'medium', '-movflags', '+faststart', '-bitexact']);
}
