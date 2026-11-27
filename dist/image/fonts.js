import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { brand, packageRoot } from '../lib/brand.js';
// The brand ships woff2. The rasterizer reads TrueType, so each face is decoded once and cached.
const require = createRequire(import.meta.url);
const opentype = require('opentype.js');
const decompress = require('wawoff2').decompress;
let pending;
export function faces() {
    pending ??= load().catch((err) => {
        pending = undefined;
        throw err;
    });
    return pending;
}
async function load() {
    // The renderers read static faces: the variable web files are skipped (`use: "web"`).
    const files = brand().fonts.files.filter((f) => f.use !== 'web');
    const heading = files.find((f) => f.role === 'heading');
    const text = files.find((f) => f.role === 'text' && f.weight === 400) ?? files.find((f) => f.role === 'text');
    const medium = files.find((f) => f.role === 'text' && f.weight === 500) ?? text;
    if (!heading || !text || !medium)
        throw new Error('The brand font list needs a heading face and a text face.');
    // One at a time: the decoder keeps a single wasm heap, and a parallel decode would overwrite a face before it is copied.
    const h = await loadFace(heading);
    const t = await loadFace(text);
    const m = medium.file === text.file ? t : await loadFace(medium);
    return { heading: h, text: t, medium: m };
}
async function loadFace(entry) {
    const woff2 = readFileSync(join(packageRoot, 'brand', 'fonts', entry.file));
    const decoded = Buffer.from(await decompress(woff2));
    const font = opentype.parse(decoded.buffer.slice(decoded.byteOffset, decoded.byteOffset + decoded.byteLength));
    const dir = join(tmpdir(), 'ds-image-fonts');
    mkdirSync(dir, { recursive: true });
    const ttfPath = join(dir, entry.file.replace(/\.woff2$/i, '.ttf'));
    writeFileSync(ttfPath, decoded);
    return { family: entry.family, weight: entry.weight, file: entry.file, ttf: decoded, woff2, ttfPath, font };
}
let codePending;
/** The code face (the brand's monospace), decoded for the rasterizer. A brand that ships none (its pages use the
 * system mono) draws code in its text face. */
export function codeFace() {
    codePending ??= (async () => {
        const files = brand().fonts.files.filter((f) => f.use !== 'web');
        const entry = files.find((f) => f.role === 'code') ?? files.find((f) => f.role === 'text' && f.weight === 400) ?? files.find((f) => f.role === 'text');
        if (!entry)
            throw new Error('The brand font list has no code or text face.');
        return loadFace(entry);
    })().catch((err) => {
        codePending = undefined;
        throw err;
    });
    return codePending;
}
