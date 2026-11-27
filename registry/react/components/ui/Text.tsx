import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/react/lib/cn'

// The brand's type scale as one part, every variant one of the theme's type utilities and nothing else (tokens.css):
// Agencidev Sans for titles (display, hero and h1 36px, h2 28px, at 1.14; h3 20px at 1.2; h4 16px at 1.25), ABC Diatype
// for text (lead and large 20px at 1.4, p 16px at 1.625, ui 14px at 1.5, small 14px Medium, caption 12px), labels in
// capitals (ABC Diatype 12px, not tracked), and the system mono for inline code. Muted text is the mid (#909090) step.
// `as` overrides the tag; className is appended last (a margin, a width).
export type TextVariant = 'display' | 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'lead' | 'large' | 'p' | 'ui' | 'small' | 'muted' | 'caption' | 'label' | 'blockquote' | 'code'

export const TEXT_TAGS: Record<TextVariant, string> = {
  display: 'h1', hero: 'h1', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4',
  lead: 'p', large: 'p', p: 'p', ui: 'p', small: 'p', muted: 'p', caption: 'p', label: 'p', blockquote: 'blockquote', code: 'code',
}

export const TEXT_CLASSES: Record<TextVariant, string> = {
  display: 'type-display text-fg',
  hero: 'type-hero text-fg',
  h1: 'type-heading-1 text-fg',
  h2: 'type-heading-2 text-fg',
  h3: 'type-heading-3 text-fg',
  h4: 'type-heading-4 text-fg',
  lead: 'type-body-lg text-fg-muted',
  large: 'type-body-lg text-fg',
  p: 'type-body text-fg',
  ui: 'type-ui text-fg',
  small: 'type-ui-strong text-fg',
  muted: 'type-ui text-fg-muted',
  caption: 'type-caption text-fg-muted',
  label: 'type-label text-fg-soft',
  blockquote: 'border-l-2 border-edge-strong pl-6 type-body-lg text-fg-soft',
  code: 'rounded-ds-sm bg-surface-subtle px-1 py-0.5 type-code text-fg',
}

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** The step of the scale: display, hero, h1 to h4 (Agencidev Sans), lead, large, p, ui, small, muted, caption (ABC Diatype), label (capitals), blockquote or code. */
  variant?: TextVariant
  /** The tag, in place of the variant's own (an h2 drawn as h1, a span drawn as caption). */
  as?: string
  children?: ReactNode
}

export function Text({ variant = 'p', as, className, children, ...rest }: TextProps) {
  const v = TEXT_CLASSES[variant] ? variant : 'p'
  const Tag = (as ?? TEXT_TAGS[v]) as ElementType
  return <Tag data-ds="text" className={cn(TEXT_CLASSES[v], className)} {...rest}>{children}</Tag>
}

export default Text
