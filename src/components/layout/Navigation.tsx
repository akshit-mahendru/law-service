'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavigationItem {
  name: string
  href: string
  icon?: React.ReactNode
}

interface NavigationProps {
  items: NavigationItem[]
  className?: string
}

export function Navigation({ items, className }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn('flex space-x-1', className)}>
      {items.map((item) => {
        const isActive = pathname === item.href
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-primary-900 text-white shadow-lg border border-accent-500'
                : 'text-neutral-700 hover:text-primary-900 hover:bg-neutral-100 border border-transparent hover:border-accent-300'
            )}
          >
            {item.icon && (
              <span className={cn(
                "flex-shrink-0 transition-colors",
                isActive ? "text-accent-400" : "text-neutral-500"
              )}>
                {item.icon}
              </span>
            )}
            <span>{item.name}</span>
            {isActive && (
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}