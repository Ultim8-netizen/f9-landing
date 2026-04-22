import Link from 'next/link'
import { BRAND } from '@/lib/branding'

interface ServiceCategory {
  id:          string
  emoji:       string
  name:        string
  description: string
  count:       string
  gradientFrom: string
  gradientTo:   string
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id:           'design',
    emoji:        '🎨',
    name:         'Design & Creative',
    description:  'Logos, brand identities, UI/UX mockups, illustrations, and print materials.',
    count:        '120+ services',
    gradientFrom: 'rgba(236,72,153,0.15)',
    gradientTo:   'rgba(239,68,68,0.08)',
  },
  {
    id:           'development',
    emoji:        '💻',
    name:         'Tech & Development',
    description:  'Websites, mobile apps, Telegram bots, automation scripts, and API integrations.',
    count:        '95+ services',
    gradientFrom: 'rgba(59,130,246,0.15)',
    gradientTo:   'rgba(6,182,212,0.08)',
  },
  {
    id:           'writing',
    emoji:        '✍️',
    name:         'Writing & Content',
    description:  'Blog posts, academic editing, copywriting, product descriptions, and technical writing.',
    count:        '140+ services',
    gradientFrom: 'rgba(245,158,11,0.15)',
    gradientTo:   'rgba(249,115,22,0.08)',
  },
  {
    id:           'video',
    emoji:        '🎬',
    name:         'Video & Animation',
    description:  'Reels editing, YouTube production, motion graphics, whiteboard animations, and captions.',
    count:        '60+ services',
    gradientFrom: 'rgba(239,68,68,0.15)',
    gradientTo:   'rgba(244,63,94,0.08)',
  },
  {
    id:           'social',
    emoji:        '📲',
    name:         'Social Media',
    description:  'Content calendars, page management, graphic templates, and influencer strategy.',
    count:        '80+ services',
    gradientFrom: 'rgba(168,85,247,0.15)',
    gradientTo:   'rgba(139,92,246,0.08)',
  },
  {
    id:           'data',
    emoji:        '📊',
    name:         'Data & Research',
    description:  'Data entry, Excel dashboards, market research, survey analysis, and academic assistance.',
    count:        '55+ services',
    gradientFrom: 'rgba(16,185,129,0.15)',
    gradientTo:   'rgba(20,184,166,0.08)',
  },
  {
    id:           'business',
    emoji:        '📋',
    name:         'Business & Finance',
    description:  'Business plans, pitch decks, bookkeeping, financial projections, and presentation design.',
    count:        '45+ services',
    gradientFrom: 'rgba(14,165,233,0.15)',
    gradientTo:   'rgba(59,130,246,0.08)',
  },
  {
    id:           'photography',
    emoji:        '📸',
    name:         'Photography',
    description:  'Product photography, event coverage, portrait sessions, and photo editing.',
    count:        '35+ services',
    gradientFrom: 'rgba(217,70,239,0.15)',
    gradientTo:   'rgba(236,72,153,0.08)',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#0A0A0A] py-24 sm:py-32 px-5"
    >
      {/* Top separator */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14">
          <div>
            <p className="text-[11px] font-bold text-red-500 tracking-[0.2em] uppercase mb-3">
              What You Can Get Done
            </p>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight tracking-tight"
            >
              Every skill you need,
              <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${BRAND.COLORS.PRIMARY}, ${BRAND.COLORS.TERTIARY})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                one platform.
              </span>
            </h2>
          </div>

          <Link
            href={`${BRAND.PLATFORM_URL}/browse`}
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-white/35 hover:text-white transition-colors duration-200 group shrink-0"
          >
            Browse all services
            <svg
              aria-hidden="true"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {SERVICE_CATEGORIES.map((cat) => (
            <ServiceCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            href={`${BRAND.PLATFORM_URL}/browse`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/45 hover:text-white transition-colors"
          >
            Browse all services
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

function ServiceCard({ category }: { category: ServiceCategory }) {
  return (
    <Link
      href={`${BRAND.PLATFORM_URL}/browse?category=${category.id}`}
      aria-label={`Browse ${category.name} services`}
      className="group relative rounded-2xl p-px transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
      }}
    >
      {/* Gradient border on hover via pseudo-element alternative */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            `linear-gradient(135deg, ${category.gradientFrom} 0%, ${category.gradientTo} 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Card inner */}
      <div className="relative h-full rounded-[15px] bg-[#111111] p-6 flex flex-col gap-4 overflow-hidden group-hover:bg-[#131313] transition-colors duration-300">

        {/* Inner glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[15px]"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${category.gradientFrom} 0%, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div
          className="relative z-10 inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.06] text-xl shrink-0"
          style={{
            background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})`,
          }}
          aria-hidden="true"
        >
          {category.emoji}
        </div>

        {/* Text */}
        <div className="relative z-10 flex flex-col gap-2 flex-1">
          <h3 className="text-[14px] font-bold text-white tracking-tight leading-snug">
            {category.name}
          </h3>
          <p className="text-[12px] text-white/35 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Footer row */}
        <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/[0.05]">
          <span className="text-[11px] font-semibold text-white/20">
            {category.count}
          </span>
          <svg
            aria-hidden="true"
            className="w-3.5 h-3.5 text-white/20 group-hover:text-white/45 group-hover:translate-x-0.5 transition-all duration-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
          </svg>
        </div>

      </div>
    </Link>
  )
}