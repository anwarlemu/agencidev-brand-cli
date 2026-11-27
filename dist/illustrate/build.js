import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { packageRoot } from '../lib/brand.js';
import { drawScene, rasterizeScene } from '../assets/scene.js';
import { unknown } from '../assets/templates.js';
let cached;
export function illustrateData() {
    cached ??= JSON.parse(readFileSync(join(packageRoot, 'brand', 'assets', 'illustrate.json'), 'utf8'));
    return cached;
}
export const STYLES = () => Object.keys(illustrateData().styles);
// ----- Subjects -----
/** The natural size of a PNG or JPEG, from its header. */
export function pictureSize(data) {
    if (data[0] === 0x89 && data[1] === 0x50)
        return { w: data.readUInt32BE(16), h: data.readUInt32BE(20) };
    let i = 2;
    while (i + 9 < data.length) {
        if (data[i] !== 0xff) {
            i++;
            continue;
        }
        const marker = data[i + 1];
        const len = data.readUInt16BE(i + 2);
        if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc)
            return { w: data.readUInt16BE(i + 7), h: data.readUInt16BE(i + 5) };
        i += 2 + len;
    }
    throw new Error('Could not read the picture size (a JPEG without a frame header).');
}
function size(req, fallback) {
    const w = req.width ?? fallback[0];
    const h = req.height ?? fallback[1];
    if (!(w >= 16 && h >= 16 && w <= 6000 && h <= 6000))
        throw new Error('--width and --height take 16 to 6000.');
    return [Math.round(w), Math.round(h)];
}
async function sceneOut(scene, meta) {
    const drawn = await drawScene(scene);
    const r = await rasterizeScene(drawn);
    return { svg: drawn.svg, png: r.png, width: drawn.width, height: drawn.height, vector: true, meta };
}
export async function illustrate(req) {
    const data = illustrateData();
    const def = data.styles[req.style];
    if (!def)
        throw unknown('style', req.style, STYLES());
    const seed = Math.trunc(req.seed ?? 0);
    const photos = req.photos ?? (req.photo ? [req.photo] : []);
    if (photos.length && !def.image)
        throw new Error(`The ${req.style} style takes no --image. Pictures go to: ${STYLES().filter((s) => data.styles[s].image).join(', ')}.`);
    const [w, h] = size(req, def.size ?? [1080, 1080]);
    if (req.style === 'signal' || req.style === 'field') {
        const band = req.style === 'signal';
        return sceneOut({ width: w, height: h, ground: 'black', layers: [{ type: 'signal', band, ...(req.time !== undefined ? { time: req.time } : {}) }], seed }, { style: req.style, seed, ...(req.time !== undefined ? { time: req.time } : {}) });
    }
    if (req.style === 'rail') {
        if (!photos.length)
            throw new Error('The rail style needs pictures: --image a.jpg --image b.jpg (up to 8; they repeat).');
        // The home rail (globals.css .rail-ssr): strips 100 by 280 with 20 between, the focused strip at 43% across and
        // the row centered, scaled so a strip is 60% of the frame's height; strips run off the right edge.
        const sh = h * 0.6;
        const sw = (sh * data.rail.strip[0]) / data.rail.strip[1];
        const gap = (sh * data.rail.gap) / data.rail.strip[1];
        const layers = [];
        for (let i = 0, x = w * data.rail.at - sw / 2; x < w && i < 24; i++, x += sw + gap)
            layers.push({ type: 'photo', index: i % photos.length, box: [x, (h - sh) / 2, sw, sh] });
        const pics = Array.from({ length: Math.max(...layers.map((l) => (l.type === 'photo' ? l.index : 0))) + 1 }, (_, i) => photos[i % photos.length]);
        return sceneOut({ width: w, height: h, ground: 'black', layers, photos: pics, seed }, { style: 'rail', strips: layers.length, seed });
    }
    throw unknown('style', req.style, STYLES());
}
/** A picture's proportions with its long side at `long`. */
function fitLong(w, h, long) {
    return w >= h ? [long, Math.round((long * h) / w)] : [Math.round((long * w) / h), long];
}
