import { Logo } from '@/react/components/visuals/Logo'
import { cn } from '@/react/lib/cn'

// The site's footer (components/footer.tsx): one quiet row, a sign-off rather than another section. The lockup on the
// left in white (20px tall), then every link in a single run on the right in 14px mid that turns white, 32px apart.
// Under 640 the links wrap under the lockup. 64px above it (96 from 640), 32px of padding (40 from 640).
export interface SiteFooterLink {
  label: string
  href: string
}

export interface SiteFooterProps {
  links?: SiteFooterLink[]
  homeHref?: string
  className?: string
}

export function SiteFooter({ links = [], homeHref = '/', className }: SiteFooterProps) {
  return (
    <footer data-ds="site-footer" className={cn('mx-6 mt-16 flex flex-col items-start gap-8 py-8 type-ui text-fg-muted sm:mt-24 sm:flex-row sm:items-center sm:justify-between sm:py-10', className)}>
      <a href={homeHref} aria-label="Home" className="shrink-0 text-fg active:text-action-press-ink">
        <Logo variant="horizontal" height={20} />
      </a>
      {links.length ? (
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <a key={l.href + l.label} href={l.href} className="transition-colors duration-150 ease-standard hover:text-fg active:text-action-press-ink active:transition-none">{l.label}</a>
          ))}
        </nav>
      ) : null}
    </footer>
  )
}

export default SiteFooter
