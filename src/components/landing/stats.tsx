interface Stat {
  value:   string
  label:   string
  detail:  string
  accent:  string
}

const STATS: Stat[] = [
  {
    value:  '500+',
    label:  'Services Listed',
    detail: 'Across 8 categories',
    accent: '#EF4444',
  },
  {
    value:  '1,000+',
    label:  'Student Freelancers',
    detail: 'Verified and ready',
    accent: '#3B82F6',
  },
  {
    value:  '24hr',
    label:  'Average Delivery',
    detail: 'For standard tasks',
    accent: '#A855F7',
  },
  {
    value:  '100%',
    label:  'Escrow Protected',
    detail: 'Every single order',
    accent: '#10B981',
  },
] as const

export function Stats() {
  return (
    <section
      aria-label="Platform statistics"
      className="relative bg-[#0A0A0A] py-20 sm:py-24 px-5"
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

      {/* Subtle background grid accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Qualifier note */}
        <p className="mt-8 text-center text-[11px] text-white/20 font-medium">
          Numbers reflect projected platform capacity at launch. Growing daily.
        </p>

      </div>
    </section>
  )
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="relative group rounded-2xl p-px transition-all duration-300">

      {/* Border gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${stat.accent}20 0%, rgba(255,255,255,0.04) 100%)`,
        }}
      />

      {/* Card inner */}
      <div className="relative rounded-[15px] bg-[#0F0F0F] px-6 py-7 flex flex-col gap-2">

        {/* Accent dot */}
        <div
          className="w-2 h-2 rounded-full mb-2"
          style={{ background: stat.accent, boxShadow: `0 0 8px ${stat.accent}50` }}
          aria-hidden="true"
        />

        {/* Value */}
        <p
          className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none"
          style={{ color: stat.accent }}
        >
          {stat.value}
        </p>

        {/* Label */}
        <p className="text-[13px] font-bold text-white/80 leading-snug">
          {stat.label}
        </p>

        {/* Detail */}
        <p className="text-[11px] text-white/25 font-medium">
          {stat.detail}
        </p>

      </div>
    </div>
  )
}