import { footer, header } from '@/lib/pages/chrome'
// The legal page template's copy (app/privacy, app/accessibility): the title and when it changed, then titled rows.
// Placeholder text: write your own terms.
export const legalContent = {
	header,
	lead: 'Privacy Policy.',
	rest: 'Updated May 2026.',
	sections: [
		{ title: 'What we collect', body: 'Acme collects the details you send us when you write or book a call, and nothing else.' },
		{ title: 'How we use it', body: 'To reply to you and to run the partnership you ask about. We never sell it.' },
		{ title: 'Your choices', body: 'Write to hello@acme.com to see, correct or delete what we hold about you.' },
	],
	footer,
}
export type LegalContent = typeof legalContent
export const legalSections = ['head', 'body'] as const
export type LegalSection = (typeof legalSections)[number]
