import Link from 'next/link'
import { BRAND } from '@/lib/branding'

const HERO_CSS = `
  @keyframes f9-fade-up {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes f9-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes f9-gradient-pan {
    0%, 100% { background-position: 0%   50%; }
    50%       { background-position: 100% 50%; }
  }
  @keyframes f9-orb-float-a {
    0%, 100% { transform: translateY(0px)   scale(1);    }
    50%       { transform: translateY(-32px) scale(1.06); }
  }
  @keyframes f9-orb-float-b {
    0%, 100% { transform: translateY(0px)  scale(1);    }
    50%       { transform: translateY(22px) scale(0.96); }
  }
  @keyframes f9-badge-pulse {
    0%, 100% { box-shadow: 0 0 0 0   rgba(239,68,68,0.25); }
    50%       { box-shadow: 0 0 0 8px rgba(239,68,68,0);    }
  }
  @keyframes f9-marquee {
    0%   { transform: translateX(0);    }
    100% { transform: translateX(-50%); }
  }

  .f9-au-1 { animation: f9-fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
  .f9-au-2 { animation: f9-fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.17s both; }
  .f9-au-3 { animation: f9-fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.29s both; }
  .f9-au-4 { animation: f9-fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.41s both; }
  .f9-au-5 { animation: f9-fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.53s both; }
  .f9-au-6 { animation: f9-fade-in  0.6s ease               0.68s both; }

  .f9-orb-a { animation: f9-orb-float-a 9s  ease-in-out infinite; }
  .f9-orb-b { animation: f9-orb-float-b 11s ease-in-out infinite; }

  .f9-badge-ring { animation: f9-badge-pulse 2.8s ease-in-out infinite; }

  .f9-gradient-text {
    background: linear-gradient(135deg, #f87171, #a855f7, #60a5fa, #f87171);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: f9-gradient-pan 5s ease infinite;
  }

  .f9-marquee-track {
    display: flex;
    width: max-content;
    animation: f9-marquee 28s linear infinite;
  }
  .f9-marquee-track:hover { animation-play-state: paused; }
`

const TRUST_BADGES = [
  { icon: '🔒', label: 'Secure Escrow'      },
  { icon: '✅', label: 'Verified Students'  },
  { icon: '⚡', label: 'Fast Payouts'       },
  { icon: '🇳🇬', label: 'Built for Nigeria' },
  { icon: '💬', label: '24/7 Support'       },
] as const

const MARQUEE_SERVICES = [
  'Logo Design', 'Web Development', 'Content Writing', 'Video Editing',
  'Social Media', 'UI/UX Design', 'Data Entry', 'Voiceover',
  'Translation', 'Photography', 'Motion Graphics', 'Brand Identity',
  'React Dev', 'Copywriting', 'SEO', 'Slide Decks',
] as const

const MARQUEE_DOUBLED = [...MARQUEE_SERVICES, ...MARQUEE_SERVICES]

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex flex-col bg-[#0A0A0A] overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />

      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize:  '30px 30px',
        }}
      />

      {/* Vignette over grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #0A0A0A 100%)',
        }}
      />

      {/* Glow orb, red, top right */}
      <div
        aria-hidden="true"
        className="f9-orb-a pointer-events-none absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239,68,68,0.20) 0%, transparent 68%)',
          filter:     'blur(48px)',
        }}
      />

      {/* Glow orb, blue, bottom left */}
      <div
        aria-hidden="true"
        className="f9-orb-b pointer-events-none absolute -bottom-40 -left-40 w-[580px] h-[580px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 68%)',
          filter:     'blur(48px)',
        }}
      />

      {/* Glow orb, purple, center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
          filter:     'blur(64px)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 pt-28 pb-16 max-w-5xl mx-auto w-full">

        {/* Badge */}
        <div className="f9-au-1 f9-badge-ring inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/[0.07] backdrop-blur-sm mb-8">
          <span role="img" aria-label="Nigerian flag" className="text-base leading-none">🇳🇬</span>
          <span className="text-[11px] font-bold text-red-400 tracking-[0.18em] uppercase">
            Built for Nigerian Students
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
        </div>

        {/* Headline */}
        <h1
          className="f9-au-2 text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-extrabold leading-[0.93] tracking-tight text-white mb-7"
          style={{ fontFamily: 'var(--font-syne), var(--font-geist-sans)' }}
        >
          Nigeria&apos;s{' '}
          <span className="f9-gradient-text">#1 Student</span>
          <br />
          Freelance Platform.
        </h1>

        {/* Sub-headline */}
        <p className="f9-au-3 text-lg sm:text-xl text-white/45 max-w-[580px] leading-relaxed mb-11">
          {BRAND.DESCRIPTION_LONG}
        </p>

        {/* CTAs */}
        <div className="f9-au-4 flex flex-col sm:flex-row items-center gap-4 mb-12">
          <Link
            href={`${BRAND.PLATFORM_URL}/auth/register`}
            className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-[15px] shadow-2xl shadow-red-500/25 hover:shadow-red-500/45 hover:scale-[1.04] active:scale-[0.97] transition-all duration-200"
          >
            <span className="relative z-10">{BRAND.CTA_PRIMARY}</span>
            <svg
              aria-hidden="true"
              className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Link>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/[0.09] bg-white/[0.03] text-white/65 font-semibold text-[15px] hover:bg-white/[0.07] hover:text-white hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            {BRAND.CTA_SECONDARY}
          </a>
        </div>

        {/* Trust badges */}
        <div className="f9-au-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
          {TRUST_BADGES.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-[12px] text-white/30 font-medium">
              <span role="img" aria-label={label} className="text-sm">{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Marquee strip */}
      <div
        className="f9-au-6 relative z-10 w-full border-t border-white/[0.06] overflow-hidden"
        aria-hidden="true"
      >
        <div className="f9-marquee-track py-4">
          {MARQUEE_DOUBLED.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-7 text-[11px] font-semibold text-white/22 whitespace-nowrap tracking-wide uppercase"
            >
              <span className="w-1 h-1 rounded-full bg-white/15 shrink-0" />
              {tag}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}