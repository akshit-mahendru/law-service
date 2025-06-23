import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { APP_CONFIG } from '@/lib/constants'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info with custom logo */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* White/Light version of logo for dark background */}
              <div className="relative h-10 w-auto">
                <Image
                  src="/logo-white.png" // Use white version for dark background
                  alt="SME Legal - Professional Legal Consultation"
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              {/* Fallback text if white logo not available */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">{APP_CONFIG.name}</span>
                <span className="text-xs text-neutral-400 -mt-1">Professional Legal Services</span>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
              {APP_CONFIG.description}. Connect with verified lawyers specializing in SME legal matters. 
              Professional, reliable, and affordable legal consultation for your business needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-neutral-300 hover:text-accent-400 transition-colors">
                <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span>{APP_CONFIG.supportPhone}</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300 hover:text-accent-400 transition-colors">
                <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span>{APP_CONFIG.supportEmail}</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300 hover:text-accent-400 transition-colors">
                <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent-400 border-b border-accent-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/lawyers" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Find Lawyers
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Legal Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent-400 border-b border-accent-600 pb-2">
              Legal & Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/legal/privacy-policy" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm flex items-center">
              <span className="text-accent-400 mr-2">©</span>
              {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <p className="text-neutral-400 text-sm">
                Made with <span className="text-accent-400">⚖</span> for Indian SMEs
              </p>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}