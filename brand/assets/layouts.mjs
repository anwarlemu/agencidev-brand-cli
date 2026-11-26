// The image layouts, as functions of the canvas. Everything comes from the Agencidev site (github.com/anwarlemu/AGD):
// the near-black canvas, the lockup at the top left as the bar sets it, the two-tone statement (the lead in white
// running on into the rest in mid, Agencidev Sans at the one display step, leading 1.14: app/page.tsx, page-head.tsx),
// the stat line over it in Diatype (the homepage's "YC26 startups each batch designed by Agencidev"), 12px capitals for
// labels and the plate button (#252525, 48 tall, the 4px corner: page-tokens.ts), the home rail of portrait strips of
// work (globals.css .rail-ssr: 100 by 280, 20 apart, the focused strip at 43% across, the row 41% down), the 404 page's
// no-signal static (lib/no-signal-engine.ts, rendered by scripts/assets/make-signal.mjs into brand/assets/art), the
// about page's bets and numbered process rows, and the brand kit's marks (the square, the liquid glass, the 3D chrome).
//
// The site's sizes go onto the 1080 canvas at 1.5 (a post is read on a phone at about 720 site pixels): the 36px
// display step is 56, 16px copy is 24, the 12px capitals are 18, the 24px gutter is 36, the 48px button is 72.
// image.json holds each template's name, source, copy slots and sizes; this file holds only positions.
//
// Text tops are the top of the capitals. A stack closes up around the copy that is there and steps down together when it
// is long. layout(c) gets { W, H, size (the size id), has(slot), pictures (how many, placeholders included), real (how
// many were passed), safe, avoid, floor } and returns { layers, frame, unit }.

const P = (index, box, o = {}) => ({ type: 'photo', index, box, ...o });
const text = (slot, face, size, leading, o = {}) => ({ type: 'text', slot, face, size, leading, ...o });
const stack = (box, items, o = {}) => ({ type: 'stack', box, items, ...o });
const art = (file, box, o = {}) => ({ type: 'art', id: 'signal', file, box, fit: 'cover', ...o });
const list = (n) => Array.from({ length: n }, (_, i) => i);
/** The site's greys: running copy and nav links in dim, the statement's rest in mid. */
const DIM = 'dim';
const MID = 'mid';
/** Display sizes on the 4px rule (the site's 36 and 28 at 1.5 are 54 and 42; 56 and 44 here). */
const DISPLAY = 56;
const LEADING = 1.14;

// ----- The canvas -----

/** The shape of the canvas, its unit (pixels per pixel of the 1080 canvas) and the frame inside the margins and inside
 * what the platform shows (c.safe, c.avoid). c.floor is the smallest readable text there. */
function canvas(c, margin) {
	const r = c.W / c.H;
	let shape = r > 2.4 ? 'strip' : r > 1.2 ? 'wide' : r > 0.95 ? 'square' : r > 0.7 ? 'portrait' : 'story';
	const bars = (c.avoid ?? []).filter((z) => z.x <= 0 && z.w >= c.W - 1);
	const sides = (c.avoid ?? []).filter((z) => z.y <= 0 && z.h >= c.H - 1);
	const corners = (c.avoid ?? []).filter((z) => !bars.includes(z) && !sides.includes(z));
	const top = Math.max(0, ...bars.filter((z) => z.y <= 0).map((z) => z.h));
	const foot = Math.min(c.H, ...bars.filter((z) => z.y > 0).map((z) => z.y));
	const safe = c.safe ?? (top > 100 ? { x: 0, y: top, w: c.W, h: foot - top } : undefined);
	let u = shape === 'wide' ? Math.min(c.W / 1200, c.H / 630) : c.W / 1080;
	let m = margin * u;
	let frame = [m, m, c.W - 2 * m, c.H - 2 * m];
	if (safe) {
		const x = Math.max(m, safe.x + 24);
		const y = Math.max(m, safe.y + 16);
		frame = [x, y, Math.min(c.W - m, safe.x + safe.w - 24) - x, Math.min(c.H - m, safe.y + safe.h - 16) - y];
		if (safe.w / safe.h > 2.4) shape = 'strip';
	}
	let logoX;
	if (shape === 'strip') {
		const h = safe ? safe.h : c.H;
		const w = safe ? safe.w : c.W;
		u = safe ? 1.4 : Math.min(h / 500, w / 1200) ** 0.5;
		m = safe ? 24 : Math.min(48, Math.max(24, h * 0.1 + 8));
		if (!safe) {
			const y = Math.max(m, top + 8);
			const b = Math.min(c.H - m, foot - 8);
			const l = Math.max(m, ...sides.filter((z) => z.x <= 0).map((z) => z.w + 8));
			const e = Math.min(c.W - m, ...sides.filter((z) => z.x > 0).map((z) => z.x - 8));
			frame = [l, y, e - l, b - y];
			logoX = l;
		}
		for (const z of corners) {
			if (z.x < c.W / 2) frame = [z.x + z.w + 20, frame[1], frame[0] + frame[2] - (z.x + z.w + 20), frame[3]];
			else frame = [frame[0], frame[1], Math.min(frame[2], z.x - 16 - frame[0]), frame[3]];
		}
	} else {
		const z = corners.find((k) => k.x > c.W / 2);
		if (z) frame = [frame[0], frame[1], frame[2], Math.min(frame[3], z.y - 24 - frame[1])];
	}
	const [x, y, w, h] = frame;
	return { ...c, safe, shape, u, m, frame, x, y, w, h, r: x + w, b: y + h, cx: x + w / 2, cy: y + h / 2, f: c.floor ?? 0, logoX: logoX ?? x };
}
const done = (v, layers) => ({ layers: layers.filter(Boolean), frame: v.frame, unit: v.shape === 'strip' ? Math.max(0.62, v.u) : v.u });
const k = (v) => (v.shape === 'strip' ? Math.max(0.72, v.safe ? v.u : Math.min(1, v.u)) : v.u);

/** The lockup (630 by 110) as the bar sets it: 18px tall on the site, 28 on the canvas. */
const ROW_H = 28;
function logo(v, corner, o = {}) {
	const h = ROW_H * k(v);
	const w = (h * 630) / 110;
	const left = corner.endsWith('left');
	const right = corner.endsWith('right');
	const x = left ? (v.shape === 'strip' && !v.safe ? v.logoX : v.x) : right ? v.r - w : v.cx - w / 2;
	return { type: 'logo', lockup: 'horizontal', color: 'white', corner, align: left ? 'left' : right ? 'right' : 'center', box: [x, corner.startsWith('top') ? v.y : v.b - h, w, h], ...o };
}
/** The address in the corner opposite the lockup, as the bar sets its links: 12px capitals in dim (18 on the canvas). */
function address(v, corner, o = {}) {
	const size = Math.max(v.f, 18 * k(v));
	const w = Math.min(420 * k(v), v.w / 2);
	const left = corner.endsWith('left');
	const right = corner.endsWith('right');
	const cap = size * 0.7;
	const x = left ? v.x : right ? v.r - w : v.cx - w / 2;
	const top = corner.startsWith('top') ? v.y + (ROW_H * k(v) - cap) / 2 : v.b - (ROW_H * k(v) + cap) / 2;
	return { type: 'text', slot: 'url', face: 'label', size, leading: size * 1.34, x, top, w, align: left ? 'left' : right ? 'right' : 'center', maxLines: 1, min: Math.max(v.f, size * 0.8), corner, color: DIM, tracking: 0, ...o };
}
const page = (v, corner) => ({ ...address(v, corner), slot: 'page', id: 'page' });
/** The plate button: #252525, white capitals, 72 tall on the canvas (48 on the site), the 4px corner at 1.5. */
const key = (v, gap, o = {}) => ({ type: 'button', slot: 'cta', w: 200 * v.u, h: 72 * v.u, size: Math.max(v.f, 18 * v.u), radius: 6 * v.u, gap: gap * v.u, fill: 'plate', color: 'white', ...o });
const button = (v, box, corner, o = {}) => {
	const align = corner?.endsWith('left') ? 'left' : corner?.endsWith('right') ? 'right' : 'center';
	const w = Math.min(box[2], 200 * v.u);
	const x = align === 'right' ? box[0] + box[2] - w : align === 'center' ? box[0] + (box[2] - w) / 2 : box[0];
	return { type: 'button', slot: 'cta', box: [x, box[1], w, 72 * v.u], size: Math.max(v.f, 18 * v.u), radius: 6 * v.u, corner, align, fill: 'plate', color: 'white', ...o };
};
/** The statement: the lead in white running on into the rest in mid, Agencidev Sans, leading 1.14. */
const statement = (v, size, o = {}) => text('headline', 'display', size * v.u, size * LEADING * v.u, { gap: 0, rest: 'body', restColor: MID, ...o });
/** A head alone, in white. */
const head = (v, size, o = {}) => text(o.slot ?? 'headline', 'display', size * v.u, size * LEADING * v.u, { gap: 0, ...o });
/** Running copy: Diatype in dim, 24/36 on the canvas (the site's 16, leading-relaxed). */
const copy = (v, gap, o = {}) => {
	const px = Math.max(v.f, 24 * v.u);
	return text(o.slot ?? 'body', 'body', px, px * 1.5, { gap: gap * v.u, color: DIM, ...o });
};
/** The stat line over a statement (the homepage's): Diatype 24 in white, its figure in mid after it. */
const stat = (v, gap, o = {}) => {
	const px = Math.max(v.f, 24 * v.u);
	return text('stat', 'body', px, px * 1.4, { gap: gap * v.u, color: 'white', rest: 'figure', restColor: MID, maxLines: 2, ...o });
};
/** A label: 12px capitals, untracked, in dim (18 on the canvas). */
const label = (v, slot, gap, o = {}) => {
	const px = Math.max(v.f, 18 * v.u);
	return text(slot, 'label', px, px * 1.34, { gap: gap * v.u, maxLines: 2, color: DIM, tracking: 0, ...o });
};
/** A strip's head: 44 at 500px tall, scaled with the strip. */
const stripHead = (v) => {
	const h = v.safe ? v.safe.h * 1.55 : v.H;
	const pts = [[120, 20], [191, 28], [396, 36], [500, 44], [900, 68]];
	for (let i = 1; i < pts.length; i++) if (h <= pts[i][0]) return pts[i - 1][1] + ((pts[i][1] - pts[i - 1][1]) * (h - pts[i - 1][0])) / (pts[i][0] - pts[i - 1][0]);
	return 68;
};

// ----- The rail -----

/** The home rail: portrait strips of work in a row, 100 by 280 with 20 between on the site (150 by 420, 30 apart on the
 * canvas), the focused strip at `ax` across and the row centered at `cy`. Strips run off the edges as the site's do. */
function rail(v, cy, h, o = {}) {
	const sw = (h * 100) / 280;
	const gap = (h * 20) / 280;
	const ax = o.ax ?? 0.43;
	const n = o.n ?? 8;
	const first = v.W * ax - sw / 2;
	const out = [];
	for (let i = 0; i < n; i++) {
		const x = first + i * (sw + gap);
		if (x > v.W) break;
		out.push(P(i, [x, cy - h / 2, sw, h], { id: 'pictures', bleeds: x + sw > v.W }));
	}
	return out;
}

// ----- Posts (1080 by 1080) -----

/** The homepage: the lockup at the top, the stat line and the two-tone statement at the foot. */
function statementPost(c) {
	const v = canvas(c, 36);
	const u = v.u;
	if (v.shape === 'strip') return stripStatement(c, false);
	const wide = v.shape === 'wide';
	const size = wide ? 44 : v.shape === 'square' ? DISPLAY : 64;
	return done(v, [
		logo(v, 'top-left'), address(v, 'top-right'),
		stack([v.x, v.y + 120 * u, Math.min(v.w, (wide ? 1040 : 1000) * u), v.h - 120 * u], [stat(v, 0, { w: 900 * u }), statement(v, size, { gap: 36 * u, maxLines: wide ? 4 : 7 })], { valign: 'bottom', grow: v.w }),
		c.has('page') && page(v, 'top-right'),
	]);
}

/** The home hero: the rail across the upper middle, the statement at the foot. */
function railPost(c) {
	const v = canvas(c, 36);
	const u = v.u;
	if (v.shape === 'strip') return stripStatement(c, true);
	const wide = v.shape === 'wide';
	const story = v.shape === 'story';
	const h = (wide ? 300 : story ? 620 : v.shape === 'portrait' ? 500 : 420) * u;
	const cy = wide ? v.y + 60 * u + h / 2 : v.y + (story ? 220 : 120) * u + h / 2;
	const size = wide ? 40 : story ? 64 : DISPLAY;
	const top = cy + h / 2 + 48 * u;
	return done(v, [
		...rail(v, cy, h, { ax: wide ? 0.5 : 0.43 }),
		logo(v, 'top-left'),
		stack([v.x, top, Math.min(v.w, 1000 * u), v.b - top], [stat(v, 0, { w: 900 * u }), statement(v, size, { gap: 24 * u, maxLines: wide ? 3 : 5 })], { valign: 'bottom', grow: v.w }),
		c.has('page') && page(v, 'top-right'),
	]);
}

/** The 404 page's composition: the no-signal static behind, a centered head, a line under it in dim. */
function signalPost(c) {
	const v = canvas(c, 36);
	const u = v.u;
	const wide = v.shape === 'wide' || v.shape === 'strip';
	const strip = v.shape === 'strip';
	const s = strip ? stripHead(v) : wide ? 44 : DISPLAY;
	const w = Math.min(v.w, (wide ? 900 : 760) * u);
	// The band crosses the art from 21% to 62% of its height; the copy goes under it, as on the 404 page. On wide frames
	// the copy starts a little higher.
	const artBox = [0, 0, v.W, v.H];
	const top = strip ? v.y : v.H * (wide ? 0.64 : 0.66);
	return done(v, [
		art('signal', artBox),
		logo(v, 'top-left'), !strip && address(v, 'top-right'),
		stack([v.cx - w / 2, top, w, v.b - top], [head(strip ? { ...v, u: 1 } : v, s, { align: 'center', maxLines: 2 }), copy(v, 24, { align: 'center', maxLines: 3 }), key(v, 36)], { align: 'center', valign: strip ? 'center' : 'top', grow: v.w, over: ['signal'] }),
		c.has('page') && page(v, 'bottom-right'),
	]);
}

/** The about page's bets: a centered heading, the bets in mid, the last line in white. */
function betsPost(c) {
	const v = canvas(c, 36);
	const u = v.u;
	const wide = v.shape === 'wide' || v.shape === 'strip';
	const w = Math.min(v.w, (wide ? 1000 : 900) * u);
	const s = wide ? 32 : 40;
	return done(v, [
		logo(v, 'top-left'), address(v, 'top-right'),
		stack([v.cx - w / 2, v.y + 72 * u, w, v.h - 144 * u], [
			head(v, s, { align: 'center', maxLines: 1 }),
			{ type: 'list', slot: 'body', face: 'display', size: s * u, leading: s * LEADING * u, itemGap: 36 * u, gap: 36 * u, align: 'center', color: MID, maxLines: 9 },
			head(v, s, { slot: 'close', align: 'center', gap: 36 * u, maxLines: 2 }),
		], { align: 'center', valign: 'center', grow: v.w }),
		c.has('page') && page(v, 'bottom-right'),
	]);
}

/** A testimonial: the quote in white at the display face, the name and role as labels, a portrait beside on wide frames. */
function quotePost(c) {
	const v = canvas(c, 36);
	const u = v.u;
	const wide = v.shape === 'wide' || v.shape === 'strip';
	const pic = c.pictures > 0;
	const pw = (wide ? 360 : 240) * u;
	const items = [head(v, wide ? 36 : 44, { slot: 'quote', maxLines: 8 }), text('name', 'body', Math.max(v.f, 24 * u), 34 * u, { gap: 48 * u, color: 'white', maxLines: 1 }), label(v, 'role', 8)];
	if (wide) {
		const tx = pic ? v.x + pw + 64 * u : v.x;
		return done(v, [
			pic && P(0, [v.x, v.y + 72 * u, pw, (pw * 4) / 3], { id: 'picture' }),
			logo(v, 'top-left'), address(v, 'top-right'),
			stack([tx, v.y + 72 * u, v.r - tx, v.h - 72 * u], items, { valign: 'center' }),
		]);
	}
	return done(v, [
		logo(v, 'top-left'), address(v, 'top-right'),
		pic && P(0, [v.x, v.y + 120 * u, pw, (pw * 4) / 3], { id: 'picture' }),
		stack([v.x, v.y + (pic ? 120 * u + (pw * 4) / 3 + 64 * u : 120 * u), Math.min(v.w, 940 * u), v.h - (pic ? 120 * u + (pw * 4) / 3 + 64 * u : 120 * u)], items, { valign: 'bottom' }),
	]);
}

/** The about page's process: a heading over three numbered rows, each a number, a title and its line. */
function processPost(c) {
	const v = canvas(c, 36);
	const u = v.u;
	const wide = v.shape === 'wide' || v.shape === 'strip';
	const n = ['step-1', 'step-2', 'step-3'].filter((s) => c.has(s)).length || 3;
	const rowH = (wide ? 72 : 112) * u;
	const top = v.b - n * rowH;
	const rows = list(n).flatMap((i) => {
		const y = top + i * rowH;
		return [
			{ type: 'rect', id: `rule-${i + 1}`, box: [v.x, y, v.w, 1.5 * u], fill: 'neutral-3' },
			text(`step-${i + 1}`, 'body', Math.max(v.f, 24 * u), 34 * u, { id: `step-${i + 1}`, x: v.x + 64 * u, top: y + 40 * u, w: v.w - 64 * u, color: 'white', maxLines: 1 }),
			{ type: 'text', id: `n-${i + 1}`, slot: `n-${i + 1}`, text: String(i + 1), face: 'body', size: Math.max(v.f, 24 * u), leading: 34 * u, x: v.x, top: y + 40 * u, w: 48 * u, color: 'white' },
		];
	});
	return done(v, [
		logo(v, 'top-left'), address(v, 'top-right'),
		stack([v.x, v.y + 96 * u, Math.min(v.w, 960 * u), top - 48 * u - v.y - 96 * u], [statement(v, wide ? 40 : 48, { maxLines: 5 })], { valign: 'bottom', grow: v.w }),
		...rows,
	]);
}

// ----- Ads (1080 by 1350) -----

/** The contact page as an ad: the two-tone statement, the plate button and the address under it. */
function callAd(c) {
	const v = canvas(c, 48);
	const u = v.u;
	if (v.shape === 'strip') return stripStatement(c, false, true);
	const wide = v.shape === 'wide';
	const story = v.shape === 'story';
	return done(v, [
		logo(v, 'top-left'),
		stack([v.x, v.y + 120 * u, Math.min(v.w, 980 * u), v.h - 120 * u], [stat(v, 0, { w: 900 * u }), statement(v, wide ? 44 : story ? 64 : DISPLAY, { gap: 36 * u, maxLines: wide ? 4 : 7 }), key(v, 56)], { valign: wide ? 'center' : 'bottom', grow: v.w }),
		address(v, wide ? 'top-right' : 'top-right'),
	]);
}

/** The home hero as an ad: the rail, the statement and the plate button. */
function railAd(c) {
	const v = canvas(c, 48);
	const u = v.u;
	if (v.shape === 'strip') return stripStatement(c, true, true);
	const wide = v.shape === 'wide';
	const story = v.shape === 'story';
	const h = (wide ? 280 : story ? 600 : v.shape === 'portrait' ? 480 : 380) * u;
	const cy = v.y + (wide ? 56 : story ? 180 : 100) * u + h / 2;
	const top = cy + h / 2 + 48 * u;
	return done(v, [
		...rail(v, cy, h),
		logo(v, 'top-left'),
		stack([v.x, top, Math.min(v.w, 980 * u), v.b - top], [statement(v, wide ? 36 : story ? 56 : 48, { maxLines: wide ? 3 : 5 }), key(v, 40)], { valign: 'bottom', grow: v.w }),
	]);
}

/** The no-signal static as an ad: the head and line under the band, a button. */
const signalAd = (c) => signalPost(c);

/** A partnership as an ad: the plan in capitals, the price at the display step, its terms and a button. Only what is
 * passed is drawn; the site's prices are the source (Design Partnership, Dev Partnership, cancel anytime). */
function planAd(c) {
	const v = canvas(c, 48);
	const u = v.u;
	const wide = v.shape === 'wide' || v.shape === 'strip';
	return done(v, [
		logo(v, 'top-left'), address(v, 'top-right'),
		stack([v.x, v.y + 96 * u, Math.min(v.w, 900 * u), v.h - 96 * u], [
			head(v, wide ? 36 : 44, { maxLines: 3 }),
			label(v, 'plan', 72),
			head(v, wide ? 56 : 72, { slot: 'price', gap: 16 * u, maxLines: 1 }),
			copy(v, 24, { maxLines: 3 }),
			key(v, 48),
		], { valign: wide ? 'center' : 'bottom', grow: v.w }),
	]);
}

// ----- Banners -----

/** A strip: the lockup at the left, the statement (or the rail with the head) and the address. */
function stripStatement(c, withRail, withButton = false) {
	const v = canvas(c, 36);
	const s = stripHead(v);
	const w = Math.min(v.w * (withRail ? 0.5 : 0.62), 980);
	const h = v.h * 0.86;
	return done(v, [
		withRail && rail(v, v.y + v.h / 2, h, { ax: (v.cx + 40 + (h * 100) / 280 / 2) / v.W, n: 12 }),
		logo(v, 'top-left'),
		stack([withRail ? v.x : v.r - w, v.y, w, v.h], [statement({ ...v, u: 1 }, s, { maxLines: 2 }), withButton && { type: 'button', slot: 'cta', w: 160, h: Math.max(40, v.f * 2.4), size: Math.max(v.f, 14), radius: 4, gap: s * 0.5, fill: 'plate', color: 'white' }].filter(Boolean), { valign: 'center', align: withRail ? 'left' : 'right', grow: v.w }),
	].flat());
}

// ----- The share card -----

/** The site's own share image (public/og-image.png, 2000 by 1050): the lockup alone, centered on black. With a
 * headline, the statement at the foot under the lockup at the top left. */
function og(c) {
	const v = canvas(c, 36);
	const u = v.u;
	if (!c.has('headline')) {
		const lw = Math.min(v.w * 0.42, 840 * u);
		return done(v, [{ type: 'logo', lockup: 'horizontal', color: 'white', box: [v.W / 2 - lw / 2, v.H / 2 - (lw * 110) / 630 / 2, lw, (lw * 110) / 630], align: 'center', required: true }]);
	}
	return statementPost(c);
}

// ----- Story -----

/** A story: the statement and the button in the lower part of the safe area, the rail above when there are pictures. */
function story(c) {
	const v = canvas(c, 48);
	if (v.shape === 'wide' || v.shape === 'strip') return callAd(c);
	return c.pictures > 0 ? railAd(c) : callAd(c);
}

// ----- Logo and avatar -----

const mark = (share, ratio, lockup = 'mark') => (c) => {
	const s = Math.min(c.W / share[0], c.H / share[1]);
	const w = ratio[0] * s;
	const h = ratio[1] * s;
	return { layers: [{ type: 'logo', lockup, color: '$mark', box: [(c.W - w) / 2, (c.H - h) / 2, w, h], align: 'center', required: true }], frame: [c.W * 0.08, c.H * 0.08, c.W * 0.84, c.H * 0.84], unit: Math.min(c.W, c.H) / 1080 };
};
/** One of the brand kit's picture marks (liquid glass, 3D chrome), centered on black at `share` of the short side. */
const pictureMark = (file, share, ratio) => (c) => {
	const s = Math.min(c.W, c.H) * share;
	const w = ratio >= 1 ? s : s * ratio;
	const h = ratio >= 1 ? s / ratio : s;
	return { layers: [{ type: 'art', id: 'mark', file, box: [(c.W - w) / 2, (c.H - h) / 2, w, h], fit: 'fill', edge: 'hard', required: true }], frame: [c.W * 0.08, c.H * 0.08, c.W * 0.84, c.H * 0.84], unit: Math.min(c.W, c.H) / 1080 };
};

export const LAYOUTS = {
	'post-statement': statementPost,
	'post-rail': railPost,
	'post-signal': signalPost,
	'post-bets': betsPost,
	'post-quote': quotePost,
	'post-process': processPost,
	'ad-call': callAd,
	'ad-rail': railAd,
	'ad-signal': signalAd,
	'ad-plan': planAd,
	'banner-statement': (c) => stripStatement(c, false),
	'banner-rail': (c) => stripStatement(c, true),
	avatar: mark([400, 400], [160, 160]),
	'logo-background': mark([600, 600], [200, 200]),
	'logo-primary': mark([1920, 1080], [960, 167.6], 'horizontal'),
	'logo-glass': pictureMark('mark-glass', 0.62, 1),
	'logo-chrome': pictureMark('mark-chrome', 0.78, 1087 / 1554),
	og,
	story,
};
