'use client'

import { memo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRightIcon, AtSignIcon } from 'lucide-react'

export const NavigationLink = memo(({ href, label, icon }) => {
  const pathname = usePathname()
  const iconCmp = icon ?? <AtSignIcon size={16} />

  const isInternal = href.startsWith('/')
  if (!isInternal) {
    return (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200"
      >
        <span className="inline-flex items-center gap-2 font-medium">
          {iconCmp} {label}
        </span>
        <ArrowUpRightIcon size={16} />
      </a>
    )
  }

  let isActive = false
  if (pathname?.length > 0) {
    const splittedPathname = pathname.split('/')
    const currentPathname = splittedPathname[1] ?? ''
    isActive = currentPathname === href.split('/')[1]
  }

  return (
    <Link
      key={href}
      href={href}
      className={('flex flex-col items-center gap-2 rounded-lg p-2', isActive ? 'flex flex-row items-center rounded-lg p-2 font-medium gap-2 bg-black text-white' : 'flex flex-row items-center rounded-lg p-2 font-medium gap-2 hover:bg-gray-200')}
    >
      {iconCmp}
      <span className={('font-medium', isActive && 'text-white')}>{label}</span>
    </Link>
  )
})