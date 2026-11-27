'use client'
import { useEffect, useState, type CSSProperties } from 'react'
import { Logo } from '@/react/components/visuals/Logo'
import { cn } from '@/react/lib/cn'

// The site's bar (components/nav-bar.tsx): 24px around a 48px row; on the left the lockup (18px tall, 15px in so it
// sits as far from the edge as from the top) and the sections in 12px capitals 24px apart, the page you are on in
// white; on the right a quiet link and the plate button. Transparent at the top of a page; once anything scrolls under
// it a frosted fade (a 12px blur and a dark wash, whole at the top and gone 32px past the bar) arrives in 260ms. Under
// 640 the links fold into a toggle that opens a full-screen menu: the panel fades in 250ms and the links rise 24px in
// 350ms, 40ms apart (the menu is opened a few times a visit; the bar itself never moves). `fixed` pins it to the top.
export interface SiteHeaderLink {
  label: string
  href: string
  /** The page you are on. */
  current?: boolean
}

export interface SiteHeaderProps {
  /** The sections, left of the bar. */
  links?: SiteHeaderLink[]
  /** The quiet link, right. */
  secondary?: SiteHeaderLink
  /** The plate button, right. */
  primary?: SiteHeaderLink
  /** Where the lockup goes. */
  homeHref?: string
  /** An email at the foot of the phone menu. */
  email?: string
  /** Pinned to the top of the window, frosting as the page scrolls under it. */
  fixed?: boolean
  className?: string
}

const QUIET = 'text-fg-soft transition-colors duration-150 ease-standard hover:text-fg active:text-action-press-ink active:transition-none'
const PLATE = 'bg-action-primary text-action-primary-fg transition-colors duration-150 ease-standard hover:bg-action-primary-hover hover:text-action-primary-fg-hover active:bg-action-primary-press active:text-fg-inverse active:transition-none'

export function SiteHeader({ links = [], secondary, primary, homeHref = '/', email, fixed = false, className }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    if (!fixed) return
    const read = () => setScrolled(window.scrollY > 8)
    read()
    window.addEventListener('scroll', read, { passive: true })
    return () => window.removeEventListener('scroll', read)
  }, [fixed])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  const menu = [...links, ...(secondary ? [secondary] : []), ...(primary ? [primary] : [])]
  return (
    <header data-ds="site-header" data-scrolled={scrolled ? 'true' : 'false'} className={cn('z-30 flex w-full items-start justify-between p-6', fixed ? 'fixed inset-x-0 top-0' : 'relative', className)}>
      <span aria-hidden="true" className={cn('pointer-events-none absolute inset-x-0 top-0 -bottom-(--ds-nav-blur-fade) bg-linear-to-b from-scrim to-transparent backdrop-blur-(--ds-nav-blur) mask-b-from-50% transition-opacity duration-250 ease-out', scrolled ? 'opacity-100' : 'opacity-0')} />
      <nav aria-label="Sections" className="relative z-2 flex h-control-md items-center gap-6 pl-4 sm:gap-10">
        <a href={homeHref} aria-label="Home" className="flex shrink-0 items-center text-fg active:text-action-press-ink" onClick={() => setOpen(false)}>
          <Logo variant="horizontal" height={18} />
        </a>
        {links.length ? (
          <ul className="hidden items-center gap-6 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} aria-current={l.current ? 'page' : undefined} className={cn('flex h-control-md items-center type-label', l.current ? 'text-fg' : QUIET)}>{l.label}</a>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
      <div className="relative z-2 flex items-center">
        {secondary ? <a href={secondary.href} className={cn('flex h-control-md items-center px-6 type-label max-sm:hidden', QUIET)}>{secondary.label}</a> : null}
        {primary ? <a href={primary.href} className={cn('flex h-control-md items-center rounded-control px-10 type-label max-sm:hidden', PLATE)}>{primary.label}</a> : null}
        {menu.length ? (
          <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="-mr-4 flex size-control-md items-center justify-center text-fg active:text-action-press-ink sm:hidden">
            <span aria-hidden="true" className="flex flex-col gap-1 px-2 py-3">
              <span className={cn('h-0.5 w-4 bg-current transition-transform duration-200 ease-out', open && 'translate-y-1.5 rotate-45')} />
              <span className={cn('h-0.5 w-4 bg-current transition-opacity duration-200 ease-out', open ? 'opacity-0' : 'opacity-100')} />
              <span className={cn('h-0.5 w-4 bg-current transition-transform duration-200 ease-out', open && '-translate-y-1.5 -rotate-45')} />
            </span>
          </button>
        ) : null}
      </div>
      {menu.length ? (
        <div data-open={open ? '' : undefined} aria-hidden={!open} inert={!open} className={cn('fixed inset-0 z-1 flex flex-col bg-surface transition-[opacity,visibility] duration-250 ease-out sm:hidden', open ? 'visible opacity-100' : 'invisible opacity-0')}>
          <nav aria-label="Menu" className="flex flex-1 flex-col justify-center gap-1 px-6">
            {menu.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ '--i': i } as CSSProperties} className={cn('block py-1.5 type-section text-fg transition-[opacity,translate] ease-out active:text-action-press-ink', open ? 'translate-y-0 opacity-100 duration-350 delay-[calc(40ms+var(--i)*40ms)]' : 'translate-y-6 opacity-0 duration-200')}>{l.label}</a>
            ))}
          </nav>
          {email ? <a href={`mailto:${email}`} onClick={() => setOpen(false)} className="self-end px-6 pb-8 type-ui text-fg">{email}</a> : null}
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
