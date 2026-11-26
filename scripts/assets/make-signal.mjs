// The site's "no signal" static as the asset engine's art: brand/assets/art/signal.png, one frame of the 404 page's
// dead-channel field (registry/lib/signal.ts, the shader line for line) with its glitch band across the middle, at
// 2160 by 1080. The layouts crop it to cover a canvas. Run the build first (it bundles the generator), then
// scripts/assets/make-art.mjs for the ink map.
//
//   node scripts/assets/make-signal.mjs
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { PNG } from 'pngjs';

const root = join(import.meta.dirname, '..', '..');
const { signalFrame } = await import(join(root, 'build', 'generators', 'signal.mjs'));
const png = new PNG({ width: 2160, height: 1080 });
png.data = Buffer.from(signalFrame(2160, 1080));
writeFileSync(join(root, 'brand', 'assets', 'art', 'signal.png'), PNG.sync.write(png));
console.log('signal: signal.png -> brand/assets/art');
