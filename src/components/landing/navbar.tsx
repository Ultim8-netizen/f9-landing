'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BRAND } from '@/lib/branding'

const NAV_LINKS = [
  { label: 'Services',     href: '#services'     },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Clients',  href: '#for-clients'  },
  { label: 'About',        href: '#about'        },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      role="banner"
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          className={[
            'flex items-center justify-between transition-all duration-500',
            scrolled ? 'py-3' : 'py-5',
          ].join(' ')}
        >

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={`${BRAND.NAME} home`}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-blue-600 shadow-lg shadow-red-500/25 group-hover:shadow-red-500/45 transition-shadow duration-300">
              <span className="text-white font-black text-sm tracking-tighter select-none">
                F9
              </span>
            </div>
            <div className="hidden sm:flex flex-col leading-none gap-[3px]">
              <span className="text-white font-bold text-sm tracking-wide">
                {BRAND.NAME}
              </span>
              <span className="text-white/30 text-[9px] font-semibold tracking-[0.22em] uppercase">
                {BRAND.TAGLINE}
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-200 group"
              >
                {label}
                <span className="absolute bottom-[5px] left-4 right-4 h-px bg-gradient-to-r from-red-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* ── Desktop auth ── */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href={`${BRAND.PLATFORM_URL}/auth/login`}
              className="text-[13px] font-medium text-white/50 hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              href={`${BRAND.PLATFORM_URL}/auth/register`}
              className="relative overflow-hidden inline-flex items-center gap-2 text-[13px] font-bold px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-blue-600 text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 group"
            >
              <span className="relative z-10">{BRAND.CTA_PRIMARY}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-white/[0.05] transition-colors"
          >
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'md:hidden fixed inset-0 top-[57px] bg-[#0A0A0A]/98 backdrop-blur-2xl transition-all duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <nav className="flex flex-col px-5 pt-6 pb-10 gap-1">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-4 py-4 text-base font-medium text-white/60 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200"
              style={{
                transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
                transform:       menuOpen ? 'translateY(0)' : 'translateY(8px)',
                opacity:         menuOpen ? 1 : 0,
              }}
            >
              {label}
              <svg className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </a>
          ))}

          <div className="mt-8 pt-6 border-t border-white/[0.07] flex flex-col gap-3">
            <Link
              href={`${BRAND.PLATFORM_URL}/auth/login`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3.5 text-sm font-semibold text-white/70 border border-white/10 rounded-xl hover:border-white/20 hover:text-white transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              href={`${BRAND.PLATFORM_URL}/auth/register`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-blue-600 rounded-xl shadow-lg shadow-red-500/25"
            >
              {BRAND.CTA_PRIMARY}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}