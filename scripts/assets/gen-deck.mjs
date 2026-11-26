// Writes brand/assets/deck.json (run: node scripts/assets/gen-deck.mjs brand/assets/deck.json). Edit here, not the JSON.
import { writeFileSync } from 'node:fs';
// Drawn as the Agencidev site draws, at 4/3 of its pixels (a 1920 slide for the site's 1440 page), snapped to its house
// rules (sizes of 12, 13, 14 or a multiple of 4): Agencidev Sans heads at leading 1.14, the two-tone statement (the lead
// in white running on into the rest in mid), ABC Diatype copy in dim, 12px capitals (16 here) for labels, square
// corners, the plate button (#252525, white capitals, the 4px corner), the lockup top left as the bar sets it, the home
// rail of portrait strips, the 404 page's no-signal static (brand/assets/art/signal.png), and the about page's hairlines.
const TAG = '{tagline}';
const DIM = 'dim';
const MID = 'mid';
/** Head steps on the slide: [size, line]. The site's one display step (36) is 48 here; covers and statements go larger. */
const H = { xl: [96, 108], l: [72, 84], m: [64, 72], h1: [48, 56], h2: [40, 44], h4: [32, 36] };
const T = { body: [24, 36], small: [20, 28], label: [16, 20] };
const logo = (o = {}) => ({ type: 'logo', lockup: 'horizontal', color: 'white', box: [96, 96, 206.18, 36], align: 'left', corner: 'top-left', ...o });
// Copy in a stack: it closes up around what is there and steps down together when it is long.
const I = (slot, face, size, leading, gap = 0, o = {}) => ({ type: 'text', slot, face, size, leading, gap, ...o });
const S = (box, items, o = {}) => ({ type: 'stack', box, items, ...o });
const P = (index, box, o = {}) => ({ type: 'photo', index, box, ...o });
const SIGNAL = (box, o = {}) => ({ type: 'art', id: 'signal', file: 'signal', box, fit: 'cover', ...o });
const label = () => ({ type: 'text', slot: 'label', face: 'label', size: T.label[0], leading: T.label[1], x: 1224, top: 106, w: 600, align: 'right', maxLines: 1, min: 14, corner: 'top-right', color: DIM, tracking: 0 });
const head = (slot, step, gap = 0, o = {}) => I(slot, 'display', H[step][0], H[step][1], gap, o);
/** The statement: the lead in white, the rest in mid on the same lines. */
const statement = (step, gap = 0, o = {}) => head('headline', step, gap, { rest: 'body', restColor: MID, ...o });
const text = (slot, gap = 0, o = {}) => I(slot, 'body', T.body[0], T.body[1], gap, { color: DIM, ...o });
const small = (slot, gap = 0, o = {}) => I(slot, 'label', T.label[0], T.label[1], gap, { color: DIM, tracking: 0, ...o });
const BUTTON = { type: 'button', slot: 'cta', w: 240, h: 64, size: 16, radius: 4, fill: 'plate', color: 'white' };
const D = { width: 1920, height: 1080, frame: [96, 96, 1728, 888], unit: 1.333 };
/** The home rail across the slide: strips 100 by 280 (here 160 by 448, 32 apart), the first at `x`. */
const RAIL = (x, y, n, h = 448) => Array.from({ length: n }, (_, i) => P(i, [x + i * ((h * 100) / 280 + (h * 20) / 280), y, (h * 100) / 280, h], { id: `picture-${i + 1}`, bleeds: x + i * ((h * 120) / 280) + (h * 100) / 280 > 1920 }));
const QUOTE = [head('quote', 'h1', 0, { maxLines: 5 }), I('name', 'body', T.body[0], T.body[1], 48, { maxLines: 1, color: 'white' }), small('role', 8, { maxLines: 2 })];
const slides = [
  { id: 'cover', group: 'cover', name: 'Cover, statement', source: 'The homepage (app/page.tsx): the two-tone statement at the foot, the stat line over it', description: 'The lockup top left, the stat line and the two-tone statement at the foot.',
    slots: { headline: TAG, body: 'We help YC startups design their brand, product, and websites.', stat: '', label: 'Pitch deck' },
    required: ['headline'],
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 300, 1640, 684], [I('stat', 'body', T.body[0], T.body[1], 0, { color: 'white', maxLines: 1 }), statement('l', 40, { maxLines: 4 })], { valign: 'bottom' })] } } },
  { id: 'cover-rail', group: 'cover', name: 'Cover, work rail', source: 'The home hero (components/home-gallery.tsx): portrait strips of work, the statement under them', description: 'A row of your work as the home rail, running off the right edge, the statement under it.', photos: 6,
    slots: { headline: TAG, body: '', label: 'Pitch deck' },
    required: ['headline'], minPhotos: 1,
    sizes: { slide: { ...D, layers: [...RAIL(836, 180, 6, 448), logo(), label(),
      S([96, 700, 1640, 284], [statement('m', 0, { maxLines: 3 })], { valign: 'bottom' })] } } },
  { id: 'cover-signal', group: 'cover', name: 'Cover, no signal', source: 'The 404 page (components/no-signal-404.tsx): the static with its band, a centered head under it', description: 'The no-signal static behind a centered head under the band.',
    slots: { headline: TAG, body: '' },
    required: ['headline'],
    sizes: { slide: { ...D, layers: [SIGNAL([0, 0, 1920, 1080]), logo(),
      S([360, 720, 1200, 264], [head('headline', 'm', 0, { align: 'center', maxLines: 2 }), text('body', 24, { align: 'center', maxLines: 2 })], { align: 'center' })] } } },
  { id: 'section', group: 'content', name: 'Section', source: 'The about page\'s section heads', description: 'A section opener: a label and the title at the foot left.',
    slots: { kicker: '01', headline: 'Our bets.', label: 'Pitch deck' },
    required: ['headline'],
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 240, 1400, 744], [small('kicker', 0, { maxLines: 1 }), head('headline', 'xl', 24, { maxLines: 2 })], { valign: 'bottom' })] } } },
  { id: 'statement', group: 'content', name: 'Statement', source: 'The homepage and contact heads: one size in two tones', description: 'One two-tone statement, the lead in white and the rest in mid.',
    slots: { headline: 'Exploration is fast. Judgement is not.', body: 'We explore design variants in code first, then refine them in Figma.', label: 'Pitch deck' },
    required: ['headline'],
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 200, 1500, 784], [statement('l', 0, { maxLines: 6 })], { valign: 'center' })] } } },
  { id: 'bullets', group: 'content', name: 'Bullets', source: 'The about page\'s process rows (components/about-view.tsx)', description: 'A title on the left, up to six points on the right on hairlines.',
    slots: { headline: 'How we work.', items: 'Weekly design sprints | Three to four day feature sprints | Live links, tested continuously | Decide what not to build', label: 'Pitch deck' },
    required: ['headline', 'items'],
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 200, 640, 784], [head('headline', 'h1', 0, { maxLines: 4 })], { prefer: 260 }),
      S([880, 200, 944, 784], [{ type: 'list', slot: 'items', face: 'body', size: T.body[0], leading: T.body[1], w: 944, itemGap: 40, maxLines: 3, min: 20, color: 'white' }], { prefer: 268 })] } } },
  { id: 'stat', group: 'content', name: 'Stat', source: 'The homepage\'s stat line (the YC share, rolled in)', description: 'One figure at the display face and what it means in dim.',
    slots: { value: '6.06%', body: 'of each YC batch is designed by Acme.', label: 'Pitch deck' },
    required: ['value'],
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 200, 1400, 784], [head('value', 'xl', 0, { maxLines: 1, size: 200, leading: 228 }), text('body', 64, { maxLines: 3, size: 32, leading: 44 })], { valign: 'center' })] } } },
  { id: 'quote', group: 'content', name: 'Quote', source: 'The testimonials (components/testimonials.tsx)', description: 'A portrait (yours), the quote, the name in white and the role in capitals.', photos: 1,
    slots: { quote: 'They shipped our brand, product and site in one partnership.', name: 'Alex Rivera', role: 'Founder, Acme', label: 'Pitch deck' },
    required: ['quote'], minPhotos: 0,
    sizes: { slide: { ...D, layers: [logo(), label(),
      P(0, [96, 220, 480, 640], { id: 'picture' }),
      S([672, 220, 1152, 764], QUOTE, { valign: 'center' })] } } },
  { id: 'image', group: 'content', name: 'Image', source: 'The case studies\' full-bleed work frames', description: 'A picture filling the right half, a title and a line on the left.', photos: 1,
    slots: { headline: 'Brand, product and website, one partnership.', body: 'One team covers product design, branding and identity, product strategy, and full-stack development.' },
    required: ['headline'], minPhotos: 1,
    sizes: { slide: { ...D, layers: [P(0, [960, 0, 960, 1080], { id: 'picture', bleeds: true }), logo(),
      S([96, 200, 760, 784], [head('headline', 'h1', 0, { maxLines: 4 }), text('body', 32, { maxLines: 6 })], { prefer: 300 })] } } },
  { id: 'closing', group: 'content', name: 'Closing', source: 'The contact page (app/contact/page.tsx): the two-tone head, the plate button and the email', description: 'The two-tone close, the plate button and the address.',
    slots: { headline: 'Tell us what you\'re building.', body: 'The quickest way to start is a call or an email.', cta: 'Book a call', url: '{domain}' },
    required: ['headline'],
    sizes: { slide: { ...D, layers: [logo(),
      S([260, 200, 1400, 700], [statement('m', 0, { align: 'center', maxLines: 4 }), { ...BUTTON, gap: 56 }], { align: 'center', valign: 'center' }),
      { type: 'text', slot: 'url', face: 'label', size: T.label[0], leading: T.label[1], x: 560, top: 980, w: 800, align: 'center', maxLines: 1, min: 14, color: DIM, tracking: 0 }] } } },
  { id: 'agenda', group: 'content', name: 'Agenda', source: 'The about page\'s numbered rows', description: 'A title on the left, the items numbered on the right in Agencidev Sans.',
    slots: { headline: 'Agenda', items: '1  Where the product is | 2  What we found | 3  What we build next', label: 'Pitch deck' },
    required: ['headline', 'items'],
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 200, 640, 784], [head('headline', 'l', 0, { maxLines: 3 })], { prefer: 260 }),
      S([880, 200, 944, 784], [{ type: 'list', slot: 'items', face: 'display', size: H.h2[0], leading: H.h2[1], w: 944, itemGap: 48, maxLines: 2, min: 28 }], { prefer: 268 })] } } },
  { id: 'timeline', group: 'content', name: 'Timeline', source: 'The about page\'s process rows on hairlines', description: 'A title, then up to four steps on a hairline, each a label (a date) and a line.',
    slots: { headline: 'The first month.', 'when-1': 'Week 1', 'step-1': 'A strategy call and the brief.', 'when-2': 'Week 2', 'step-2': 'Design variants explored in code.', 'when-3': 'Week 4', 'step-3': 'The first release on a live link.', 'when-4': '', 'step-4': '', label: 'Pitch deck' },
    required: ['headline', 'step-1'],
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 190, 1500, 300], [head('headline', 'h1', 0, { maxLines: 2 })], { prefer: 230 }),
      { type: 'rect', id: 'rule', box: [96, 560, 1728, 2], fill: 'neutral-3' },
      ...[0, 1, 2, 3].map((n) => S([96 + n * 444, 600, 396, 280], [small(`when-${n + 1}`, 0, { maxLines: 1 }), text(`step-${n + 1}`, 20, { maxLines: 4, color: 'white' })]))] } } },
  { id: 'team', group: 'content', name: 'Team', source: 'The about page\'s team (names and portraits)', description: 'A title and up to four people: a picture each (yours, never stock), the name and the role.', photos: 4,
    slots: { headline: 'The team.', 'name-1': 'Alex Rivera', 'role-1': 'Design', 'name-2': 'Sam Lee', 'role-2': 'Engineering', 'name-3': '', 'role-3': '', 'name-4': '', 'role-4': '', label: 'Pitch deck' },
    required: ['headline', 'name-1'], minPhotos: 0,
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 190, 1500, 200], [head('headline', 'h1', 0, { maxLines: 1 })], { prefer: 230 }),
      ...[0, 1, 2, 3].map((n) => P(n, [96 + n * 412, 340, 376, 460], { id: `picture-${n + 1}` })),
      ...[0, 1, 2, 3].map((n) => S([96 + n * 412, 824, 376, 160], [I(`name-${n + 1}`, 'body', T.body[0], T.body[1], 0, { maxLines: 1, color: 'white' }), small(`role-${n + 1}`, 8, { maxLines: 2 })]))] } } },
  { id: 'comparison', group: 'content', name: 'Comparison', source: 'The site\'s partnerships (PRODUCT.md): two tiles side by side', description: 'A title and two square tiles side by side, each a heading and its points.',
    slots: { headline: 'Two partnerships.', 'left-title': 'Design', 'left-items': 'Product design | Branding and identity | Product strategy', 'right-title': 'Dev', 'right-items': 'Full-stack development | Design systems for teams and agents | Cancel anytime', label: 'Pitch deck' },
    required: ['headline'],
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 190, 1500, 200], [head('headline', 'h1', 0, { maxLines: 2 })], { prefer: 230 }),
      ...['left', 'right'].map((side, n) => S([96 + n * 880, 400, 848, 520], [{ type: 'card', id: `${side}-card`, w: 848, pad: 48, fill: 'slat', radius: 0, items: [head(`${side}-title`, 'h4', 0, { maxLines: 1 }), { type: 'list', slot: `${side}-items`, face: 'body', size: T.body[0], leading: T.body[1], itemGap: 12, gap: 32, maxLines: 2, min: 20, color: DIM }] }]))] } } },
  { id: 'image-grid', group: 'content', name: 'Image grid', source: 'The case wall (components/case-wall.tsx): work in a square-cornered grid', description: 'A title and up to six pictures in a grid (yours).', photos: 6,
    slots: { headline: 'Selected work.', label: 'Pitch deck' },
    required: ['headline'], minPhotos: 1,
    sizes: { slide: { ...D, layers: [logo(), label(),
      S([96, 190, 1500, 160], [head('headline', 'h1', 0, { maxLines: 1 })], { prefer: 230 }),
      ...[0, 1, 2, 3, 4, 5].map((n) => P(n, [96 + (n % 3) * 584, 380 + Math.floor(n / 3) * 310, 560, 290], { id: `picture-${n + 1}` }))] } } },
  { id: 'qa', group: 'content', name: 'Questions', source: 'The 404 page\'s static and centered head', description: 'The questions slide: the no-signal static, a large title, a line and the address.',
    slots: { headline: 'Questions?', body: 'Write to us any time.', url: '{domain}' },
    required: ['headline'],
    sizes: { slide: { ...D, layers: [SIGNAL([0, 0, 1920, 1080]), logo(),
      S([410, 720, 1100, 220], [head('headline', 'l', 0, { align: 'center', maxLines: 1 }), text('body', 24, { align: 'center', maxLines: 2 })], { align: 'center' }),
      { type: 'text', slot: 'url', face: 'label', size: T.label[0], leading: T.label[1], x: 560, top: 980, w: 800, align: 'center', maxLines: 1, min: 14, color: DIM, tracking: 0 }] } } },
];
// The corners the lockup may move to and keep its clear space at every size (scripts/assets/logo-anchors.mjs found them).
const LOGO_ANCHORS = {"cover":["top-left","top","top-right","bottom-right"],"cover-rail":["top-left","top","top-right","bottom-right"],"cover-signal":["top-left","top","top-right","bottom-left","bottom","bottom-right"],"section":["top-left","top","top-right","bottom-right"],"statement":["top-left","top","top-right","bottom-left","bottom","bottom-right"],"bullets":["top-left","top","top-right","bottom-left","bottom","bottom-right"],"stat":["top-left","top","top-right","bottom-left","bottom","bottom-right"],"quote":["top-left","top","top-right","bottom-left","bottom","bottom-right"],"image":["top-left","bottom-left"],"closing":["top-left","top","top-right","bottom-left","bottom-right"],"agenda":["top-left","top","top-right","bottom-left","bottom","bottom-right"],"timeline":["top-left","top","top-right","bottom-left","bottom","bottom-right"],"team":["top-left","top","top-right","bottom-left","bottom","bottom-right"],"comparison":["top-left","top","top-right","bottom-left","bottom","bottom-right"],"image-grid":["top-left","top","top-right"],"qa":["top-left","top","top-right","bottom-left","bottom-right"]};
for (const t of slides) if (LOGO_ANCHORS[t.id]) t.logoAnchors = LOGO_ANCHORS[t.id];
writeFileSync(process.argv[2], JSON.stringify({ $comment: 'Deck slides at 1920 by 1080, drawn as the Agencidev site draws at 4/3 of its pixels: the homepage statement, the work rail and the 404 page\'s no-signal static as covers, and content slides by the same rules (the two-tone statement, Diatype copy in dim, 16px capitals, square tiles, hairlines, the plate button). A deck is a list of slides: `deck --input deck.json` with { "slides": [{ "type": "cover", "headline": "...", "body": "..." }] }.', templates: slides }, null, 1) + '\n');
console.log(slides.length, 'slides');
