// The bar and the footer every page template shares: the site's own sections and calls (components/nav-bar.tsx,
// footer.tsx), with Acme's address in place of the studio's. Both flavors read this file.
export const header = {
	links: [
		{ label: 'About', href: '/about' },
		{ label: 'Careers', href: '/careers' },
		{ label: 'Articles', href: '/articles' },
	],
	secondary: { label: 'Send a message', href: '/contact' },
	primary: { label: 'Book a call', href: '/contact' },
	email: 'hello@acme.com',
}
export const footer = {
	links: [
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Accessibility', href: '/accessibility' },
		{ label: 'LinkedIn', href: '#' },
		{ label: 'X/Twitter', href: '#' },
		{ label: 'hello@acme.com', href: 'mailto:hello@acme.com' },
	],
}
export type PageChrome = { header: typeof header; footer: typeof footer }
