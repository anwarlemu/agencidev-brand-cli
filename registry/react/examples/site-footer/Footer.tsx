import { SiteFooter } from '@/react/components/site/SiteFooter'
// The sign-off row: the lockup, then the links in one quiet run.

export default function Footer() {
  return <SiteFooter className="w-full" links={[{ label: 'Privacy Policy', href: '#' }, { label: 'Accessibility', href: '#' }, { label: 'LinkedIn', href: '#' }, { label: 'X/Twitter', href: '#' }, { label: 'hello@acme.com', href: '#' }]} />
}
