import type { AnchorHTMLAttributes, ButtonHTMLAttributes, Ref } from 'react'
import { cn } from '@/react/lib/cn'

// The site's buttons (components/page-tokens.ts): the plate (PLATE_SKIN) is #252525 with white 12px capitals and the
// 4px corner, 48px tall with 24px in; it turns mid (#909090) with black ink under the pointer and near-white on press.
// secondary is the quiet button (QUIET_SKIN): bare, dim ink that turns white, white at 70% on press. ghost is a quiet
// fill for tools in rows. Press feedback lands on pointer down with no transition (active:transition-none); hover and
// press change color only, never size, and hover only where a fine pointer hovers. Sizes: xs (28px, a filter chip), sm
// (36px, dense product controls), md (48px, the site's), lg (48px with the nav's 40px in) and form (48px, full width);
// `icon` makes it square. Disabled is the quiet fill with a mid label, never faded. `href` renders a link.
export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'form'

const VARIANTS: Record<ButtonVariant, string> = {
	primary: 'bg-action-primary text-action-primary-fg hover:not-disabled:bg-action-primary-hover hover:not-disabled:text-action-primary-fg-hover active:not-disabled:bg-action-primary-press active:not-disabled:text-fg-inverse active:transition-none',
	secondary: 'bg-action-secondary text-action-secondary-fg hover:not-disabled:text-action-secondary-fg-hover active:not-disabled:text-action-press-ink active:transition-none',
	ghost: 'bg-transparent text-fg hover:not-disabled:bg-action-ghost-hover active:not-disabled:bg-action-ghost-hover active:transition-none',
}
const SIZES: Record<ButtonSize, string> = {
	xs: 'h-control-xs gap-1.5 type-label',
	sm: 'h-control-sm gap-1.5 type-ui',
	md: 'h-control-md gap-2 type-label',
	lg: 'h-control-lg gap-2 type-label',
	form: 'h-control-form gap-3 type-label',
}
// One padding class per button, so a square button's 0 never competes with a label's padding in the stylesheet.
const PADDING: Record<ButtonSize, string> = { xs: 'px-3', sm: 'px-4', md: 'px-6', lg: 'px-10', form: 'px-6' }
const SQUARE: Record<ButtonSize, string> = { xs: 'w-control-xs px-0', sm: 'w-control-sm px-0', md: 'w-control-md px-0', lg: 'w-control-lg px-0', form: 'w-control-form px-0' }

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** primary (the plate), secondary (quiet) or ghost. */
  variant?: ButtonVariant
  /** xs (28px), sm (36px), md (48px, the site's), lg (48px, wider) or form (48px, full width). */
  size?: ButtonSize
  /** A square icon button: put its name in aria-label. */
  icon?: boolean
  /** Renders a link. */
  href?: string
  type?: 'button' | 'submit' | 'reset'
  ref?: Ref<HTMLButtonElement & HTMLAnchorElement>
}

export function buttonClasses({ variant = 'primary', size = 'md', icon }: Pick<ButtonProps, 'variant' | 'size' | 'icon'> = {}) {
  return cn('inline-flex shrink-0 cursor-pointer items-center justify-center rounded-control whitespace-nowrap select-none transition-[background-color,color] duration-150 ease-standard disabled:cursor-not-allowed disabled:bg-action-disabled disabled:text-action-disabled-fg', SIZES[size], icon ? SQUARE[size] : PADDING[size], VARIANTS[variant])
}

export function Button({ variant = 'primary', size = 'md', icon, href, type = 'button', disabled, className, children, ref, ...rest }: ButtonProps) {
  const classes = cn(buttonClasses({ variant, size, icon }), className)
  if (href) return <a data-ds="button" ref={ref} href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>
  return <button data-ds="button" ref={ref} type={type} disabled={disabled} className={classes} {...rest}>{children}</button>
}

export default Button
