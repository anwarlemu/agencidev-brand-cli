import type { ReactNode } from 'react'

// A group's name in a dropdown or context menu: a ABC Diatype label in capitals, muted.
export function MenuLabel({ children }: { children?: ReactNode }) {
  return <p data-ds="menu-label" className="flex items-center justify-between gap-2 px-2 pt-2 pb-1 type-label text-fg-muted">{children}</p>
}

/** shadcn's name for it. */
export { MenuLabel as DropdownMenuLabel }

export default MenuLabel
