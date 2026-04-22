import Link from 'next/link'
import { BRAND } from '@/lib/branding'

const FOOTER_LINKS = {
  Platform: [
    { label: 'Browse Services',    href: `${BRAND.PLATFORM_URL}/browse`         },
    { label: 'Post a Job',         href: `${BRAND.PLATFORM_URL}/post-job`        },
    { label: 'How It Works',       href: '#how-it-works'                          },
    { label: 'Pricing',            href: `${BRAND.PLATFORM_URL}/pricing`         },
  ],
  Company: [
    { label: 'About F9',           href: '#about'                                 },
    { label: 'Blog',               href: `${BRAND.PLATFORM_URL}/blog`            },
    { label: 'Press',              href: `mailto:${BRAND.PRESS_EMAIL}`           },
    { label: 'Careers',            href: `${BRAND.PLATFORM_URL}/careers`         },
  ],
  Support: [
    { label: 'Help Centre',        href: `${BRAND.PLATFORM_URL}/help`            },
    { label: 'Contact Us',         href: `mailto:${BRAND.SUPPORT_EMAIL}`         },
    { label: 'Trust & Safety',     href: `${BRAND.PLATFORM_URL}/trust`           },
    { label: 'Dispute Resolution', href: `${BRAND.PLATFORM_URL}/disputes`        },
  ],
  Legal: [
    { label: 'Privacy Policy',     href: `${BRAND.PLATFORM_URL}/privacy`         },
    { label: 'Terms of Service',   href: `${BRAND.PLATFORM_URL}/terms`           },
    { label: 'Cookie Policy',      href: `${BRAND.PLATFORM_URL}/cookies`         },
    { label: 'Acceptable Use',     href: `${BRAND.PLATFORM_URL}/acceptable-use`  },
  ],
} as const

const SOCIAL_LINKS = [
  {
    label: 'Twitter / X',
    href: `https://twitter.com/${BRAND.TWITTER.replace('@', '')}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.74-8.883L2.25 2.25h6.918l4.303 5.686zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: `https://instagram.com/${BRAND.INSTAGRAM.replace('@', '')}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: `https://linkedin.com/company/${BRAND.LINKEDIN}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="relative bg-[#080808] border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">

            {/* Logo */}
            <Link
              href="/"
              aria-label={`${BRAND.NAME} home`}
              className="inline-flex items-center gap-3 group mb-5"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-blue-600 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/35 transition-shadow duration-300">
                <span className="text-white font-black text-sm tracking-tighter select-none">
                  F9
                </span>
              </div>
              <div className="flex flex-col leading-none gap-[3px]">
                <span className="text-white font-bold text-sm tracking-wide">
                  {BRAND.NAME}
                </span>
                <span className="text-white/25 text-[9px] font-semibold tracking-[0.22em] uppercase">
                  {BRAND.TAGLINE}
                </span>
              </div>
            </Link>

            <p className="text-[13px] text-white/35 leading-relaxed max-w-[240px] mb-6">
              {BRAND.DESCRIPTION}. Connecting students to opportunities across Nigeria.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.07] text-white/30 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>

          </div>

          {/* Nav columns */}
          {(Object.entries(FOOTER_LINKS) as [string, readonly { label: string; href: string }[]][]).map(
            ([group, links]) => (
              <div key={group} className="lg:col-span-1">
                <p className="text-[11px] font-bold text-white/25 tracking-[0.18em] uppercase mb-4">
                  {group}
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[13px] text-white/40 hover:text-white transition-colors duration-200"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/20 text-center sm:text-left">
            &copy; {currentYear} {BRAND.LEGAL_NAME}. All rights reserved.
            {BRAND.RC_NUMBER !== 'RC-XXXXXX' && (
              <span className="ml-2 opacity-60">RC {BRAND.RC_NUMBER}</span>
            )}
          </p>

          <div className="flex items-center gap-1.5 text-[12px] text-white/15 font-medium">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse"
              aria-hidden="true"
            />
            <span>All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  )
}