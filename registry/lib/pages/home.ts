import { footer, header } from '@/lib/pages/chrome'
// The home page template's copy: the rail of work and the statement under it (app/page.tsx, lib/home-content.ts),
// in the studio's words with Acme's name. The rail's strips are yours: pass `src` for each.
export const homeContent = {
	header,
	rail: Array.from({ length: 8 }, () => ({ src: '', alt: '' })),
	stat: 'Startups each batch designed by Acme:',
	figure: '6.06%',
	lead: 'Product design thinking and implementation.',
	rest: 'We help startups design their brand, product, and websites then turn it into infrastructure your engineers and agents can use to ship on-brand interfaces.',
	footer,
}
export type HomeContent = typeof homeContent
/** The home page's sections in order; pass `sections` to reorder them or leave some out. */
export const homeSections = ['rail', 'statement'] as const
export type HomeSection = (typeof homeSections)[number]
