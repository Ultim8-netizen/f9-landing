import Link from 'next/link'
import { BRAND } from '@/lib/branding'

const CTA_CSS = `
  @keyframes f9-cta-orb-a {
    0%, 100% { transform: translateY(0px) scale(1); }
    50%       { transform: translateY(-20px) scale(1.04); }
  }
  @keyframes f9-cta-orb-b {
    0%, 100% { transform: translateY(0px) scale(1); }
    50%       { transform: translateY(16px) scale(0.97); }
  }
  .f9-cta-orb-a { animation: f9-cta-orb-a 10s ease-in-out infinite; }
  .f9-cta-orb-b { animation: f9-cta-orb-b 13s ease-in-out infinite; }

  @keyframes f9-shimmer {
    0%   { transform: translateX(-100%) skewX(-12deg); }
    100% { transform: translateX(200%)  skewX(-12deg); }
  }
  .f9-cta-btn-shimmer::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
    animation: f9-shimmer 3.2s ease-in-out infinite;
  }
`

const PROOF_ITEMS = [
  { icon: '🔒', text: 'Escrow on every order' },
  { icon: '🎓', text: 'Students only'         },
  { icon: '🇳🇬', text: 'Naira payouts'        },
  { icon: '⚡', text: 'Instant onboarding'    },
] as const

export function CtaSection() {
  return (
    <section
      id="for-clients"
      aria-labelledby="cta-heading"
      className="relative bg-[#0A0A0A] py-24 sm:py-32 px-5 overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: CTA_CSS }} />

      {/* Top separator */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)',
        }}
      />

      {/* Orb — red, left */}
      <div
        aria-hidden="true"
        className="f9-cta-orb-a pointer-events-none absolute -left-48 top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239,68,68,0.14) 0%, transparent 70%)',
          filter:     'blur(56px)',
        }}
      />

      {/* Orb — blue, right */}
      <div
        aria-hidden="true"
        className="f9-cta-orb-b pointer-events-none absolute -right-48 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter:     'blur(56px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" aria-hidden="true" />
          <span className="text-[11px] font-bold text-white/40 tracking-[0.18em] uppercase">
            Launching Soon
          </span>
        </div>

        {/* Headline */}
        <h2
          id="cta-heading"
          className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white leading-[0.94] tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-syne), var(--font-geist-sans)' }}
        >
          Your next freelancer
          <br />
          is already in class.
        </h2>

        {/* Sub copy */}
        <p className="text-lg text-white/40 max-w-[520px] mx-auto leading-relaxed mb-10">
          Talented Nigerian students ready to deliver real work at fair prices,
          backed by escrow payments and a platform built to hold everyone accountable.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

          <Link
            href={`${BRAND.PLATFORM_URL}/auth/register`}
            className="f9-cta-btn-shimmer group relative overflow-hidden inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-[15px] shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
          >
            <span className="relative z-10">{BRAND.CTA_PRIMARY}</span>
            <svg
              aria-hidden="true"
              className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <Link
            href={`${BRAND.PLATFORM_URL}/browse`}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl border border-white/[0.09] bg-white/[0.03] text-white/60 font-semibold text-[15px] hover:bg-white/[0.07] hover:text-white hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            {BRAND.CTA_SECONDARY}
          </Link>

        </div>

        {/* Proof strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {PROOF_ITEMS.map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-[12px] text-white/25 font-medium">
              <span role="img" aria-hidden="true" className="text-sm">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}