// The docs site's Assets page: every image template, the deck slides and the merch print files, rendered small by the
// same engine as the CLI (dist/), into apps/www/public/assets/ with a catalog in apps/www/lib/assets.generated.json.
// Run after the build (bun run registry runs it).
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const { templates, sceneFor, catalogOf } = await import(join(root, 'dist/assets/templates.js'));
const { drawScene, rasterizeScene } = await import(join(root, 'dist/assets/scene.js'));
const { merchItems, merchScene, merchCatalog } = await import(join(root, 'dist/assets/merch.js'));
const { videoCatalog } = await import(join(root, 'dist/commands/video.js'));
const { illustrate, illustrateData } = await import(join(root, 'dist/illustrate/build.js'));
const { Resvg } = await import('@resvg/resvg-js');
const { recipes } = await import(join(root, 'dist/commands/recipe.js'));
const { drawCompose } = await import(join(root, 'dist/assets/compose.js'));
const { adapter } = await import(join(root, 'dist/design/adapter.js'));
const { COVERAGE } = await import(join(root, 'dist/commands/coverage.js'));

const out = join(root, 'apps/www/public/assets');
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
const shot = async (scene, file, longest) => {
	const d = await drawScene(scene);
	const r = await rasterizeScene(d, { scale: Math.min(1, longest / Math.max(d.width, d.height)) });
	writeFileSync(join(out, file), r.png);
	return { src: `/assets/${file}`, width: r.width, height: r.height };
};

const images = [];
for (const t of templates('image')) {
	// t.sizes is the list of size ids (layouts are functions of the canvas since the layout engine).
	for (const size of t.sizes) {
		for (const variant of t.variants ? Object.keys(t.variants) : [undefined]) {
			const name = `${t.id}${t.sizes.length > 1 ? `-${size}` : ''}${variant ? `-${variant}` : ''}`;
			const drawn = sceneFor(t, { size, variant, sample: true });
			const img = await shot(drawn.scene, `${name}.png`, 720);
			images.push({ name, template: t.id, group: t.group, title: t.name, size, variant, canvas: `${drawn.width}x${drawn.height}`, ...img });
		}
	}
}
const slides = [];
for (const [i, t] of templates('deck').entries()) slides.push({ name: t.id, title: t.name, group: t.group, ...(await shot(sceneFor(t, { seed: i, sample: true }).scene, `deck-${t.id}.png`, 960)) });
const merch = [];
for (const item of merchItems()) {
	for (const variant of Object.keys(item.variants)) {
		const { scene } = merchScene(item, { variant, sample: true });
		merch.push({ name: `${item.id}-${variant}`, item: item.id, title: item.name, variant, ...(await shot(scene, `merch-${item.id}-${variant}.png`, 640)) });
	}
}
// Illustrations: each style at its own size, scaled down for the page (the PNG the CLI writes, resized by resvg).
const illustrations = [];
const small = async (req, file, title, detail, longest = 720) => {
	const r = await illustrate(req);
	const k = Math.min(1, longest / Math.max(r.width, r.height));
	const w = Math.round(r.width * k);
	const h = Math.round(r.height * k);
	const png = Buffer.from(new Resvg(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><image href="data:image/png;base64,${r.png.toString('base64')}" width="${w}" height="${h}"/></svg>`).render().asPng());
	writeFileSync(join(out, file), png);
	illustrations.push({ name: file.replace(/\.png$/, ''), title, detail, style: req.style, src: `/assets/${file}`, width: w, height: h, canvas: `${r.width}x${r.height}` });
};
const ill = illustrateData();
await small({ style: 'signal' }, 'ill-signal.png', 'No signal', 'signal: the static with its glitch band');
await small({ style: 'signal', time: 3.1, seed: 4 }, 'ill-signal-later.png', 'No signal', 'signal --time 3.1 --seed 4: the band elsewhere');
await small({ style: 'field' }, 'ill-field.png', 'Static', 'field: the static alone');
// The rail needs pictures; the docs use the brand's own marks rather than stock photos.
const { readFileSync } = await import('node:fs');
const pic = (f) => ({ mime: 'image/png', data: readFileSync(join(root, 'brand', 'briefs', 'images', f)) });
await small({ style: 'rail', photos: ['work-1.png', 'work-2.png', 'work-3.png'].map(pic) }, 'ill-rail.png', 'Work rail', 'rail --image (here the brand kit marks)');
// Recipes: each compose layout with its sample copy, drawn by the same compose engine as `recipe`.
const recipeShots = [];
for (const [id, r] of Object.entries(recipes())) {
	const base = adapter().defaults('compose', r.size);
	const d = { ...base, version: 1, kind: 'image', template: 'compose', copy: { ...r.sample }, images: {}, layers: {}, blocks: r.blocks, grid: r.grid ?? { cols: 12, rows: 12 }, theme: r.theme, options: { ...r.options } };
	const { drawn } = await drawCompose(d, {});
	const k = Math.min(1, 480 / Math.max(drawn.width, drawn.height));
	const ras = await rasterizeScene(drawn, { scale: k });
	writeFileSync(join(out, `recipe-${id}.png`), ras.png);
	recipeShots.push({ name: id, title: id, group: r.group, description: r.description, size: r.size, src: `/assets/recipe-${id}.png`, width: ras.width, height: ras.height });
}
const doc = { recipes: recipeShots, coverage: COVERAGE, images, slides, merch, illustrations, illustrate: { styles: ill.styles }, catalog: { image: catalogOf('image'), deck: catalogOf('deck'), merch: merchCatalog(), video: videoCatalog() } };
writeFileSync(join(root, 'apps/www/lib/assets.generated.json'), JSON.stringify(doc, null, 1) + '\n');
console.log(`assets docs: ${recipeShots.length} recipes, ${illustrations.length} illustrations, ${images.length} images, ${slides.length} slides, ${merch.length} print files -> apps/www/public/assets`);
