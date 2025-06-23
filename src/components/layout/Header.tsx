'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { NAVIGATION_ITEMS, APP_CONFIG } from '@/lib/constants'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-neutral-200">
      {/* Top bar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>{APP_CONFIG.supportPhone}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>{APP_CONFIG.supportEmail}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Professional Legal Consultation for SMEs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Custom Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              {/* Replace this Image component with your logo */}
              <div className="relative h-12 w-auto">
                <Image
                  src="/logo.png"
                  alt="SME Legal - Professional Legal Consultation"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
              {/* Optional: Add text logo fallback if image fails to load */}
              <div className="hidden sm:flex flex-col">
                <span className="text-xl font-bold text-primary-900">
                  SME Legal
                </span>
                <span className="text-xs text-neutral-600 -mt-1">
                  Professional Consultation
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-900 px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-accent-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-primary-900 hover:text-accent-600">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-primary-900 hover:bg-primary-800 text-white border border-accent-500">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-900 hover:text-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4 bg-neutral-50">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-900 px-3 py-2 text-base font-medium border-l-4 border-transparent hover:border-accent-500 hover:bg-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-neutral-200 pt-4 space-y-3 px-3">
                <Link href="/auth/login" className="block">
                  <Button variant="ghost" className="w-full text-primary-900">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register" className="block">
                  <Button className="w-full bg-primary-900 hover:bg-primary-800">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}