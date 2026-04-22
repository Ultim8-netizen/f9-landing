import { BRAND } from '@/lib/branding'

interface Step {
  number: string
  title:  string
  body:   string
  detail: string
}

const FREELANCER_STEPS: Step[] = [
  {
    number: '01',
    title:  'Create your profile',
    body:   'Sign up with your school email, verify your student status, and build a profile that showcases your skills and past work.',
    detail: 'Takes under 5 minutes',
  },
  {
    number: '02',
    title:  'List your services',
    body:   'Post what you offer, set your price, and define your delivery timeline. Our Trust Score system puts verified sellers at the top.',
    detail: 'Free to list',
  },
  {
    number: '03',
    title:  'Get paid securely',
    body:   "Funds are held in escrow when a client orders. Once you deliver and they confirm, payment hits your wallet immediately. No chasing.",
    detail: 'Same-day payouts',
  },
]

const CLIENT_STEPS: Step[] = [
  {
    number: '01',
    title:  'Post what you need',
    body:   'Describe your project, set a budget, and post it to our marketplace. Verified student freelancers will send you proposals.',
    detail: 'Free to post',
  },
  {
    number: '02',
    title:  'Pick your freelancer',
    body:   'Browse portfolios, check Trust Scores, read reviews, and message sellers before committing. Find the right fit, not just the first.',
    detail: 'No obligation',
  },
  {
    number: '03',
    title:  'Pay only on delivery',
    body:   'Your payment stays in escrow until you approve the work. Raise a dispute if anything is off. Your money is protected at every step.',
    detail: '100% protected',
  },
]

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <div className="relative flex gap-5">

      {/* Connector line */}
      {index < 2 && (
        <div
          aria-hidden="true"
          className="absolute left-5 top-12 bottom-0 w-px"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, transparent 100%)',
          }}
        />
      )}

      {/* Step number bubble */}
      <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] bg-[#111111] mt-0.5">
        <span className="text-[11px] font-bold text-white/30 tabular-nums">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="text-[15px] font-bold text-white mb-2 leading-snug">
          {step.title}
        </h3>
        <p className="text-[13px] text-white/40 leading-relaxed mb-3">
          {step.body}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400/70">
          <span className="w-1 h-1 rounded-full bg-emerald-400/60 shrink-0" />
          {step.detail}
        </span>
      </div>

    </div>
  )
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
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
        <div className="mb-16 max-w-xl">
          <p className="text-[11px] font-bold text-blue-400 tracking-[0.2em] uppercase mb-3">
            Simple by Design
          </p>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight tracking-tight mb-4"
          >
            Up and running
            <br />
            in three steps.
          </h2>
          <p className="text-[15px] text-white/40 leading-relaxed">
            Whether you are here to earn or to get work done, the path from signup to active is
            designed to take minutes, not days.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Freelancer column */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#0E0E0E] p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-10">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg text-sm"
                style={{
                  background:
                    `linear-gradient(135deg, ${BRAND.COLORS.PRIMARY}22, ${BRAND.COLORS.TERTIARY}18)`,
                  border: `1px solid ${BRAND.COLORS.PRIMARY}25`,
                }}
                aria-hidden="true"
              >
                ⚡
              </div>
              <div>
                <p className="text-[13px] font-bold text-white">For Freelancers</p>
                <p className="text-[11px] text-white/30">Earn doing what you already know</p>
              </div>
            </div>

            <div>
              {FREELANCER_STEPS.map((step, i) => (
                <StepCard key={step.number} step={step} index={i} />
              ))}
            </div>
          </div>

          {/* Client column */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#0E0E0E] p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-10">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg text-sm"
                style={{
                  background:
                    `linear-gradient(135deg, ${BRAND.COLORS.SECONDARY}22, ${BRAND.COLORS.TERTIARY}18)`,
                  border: `1px solid ${BRAND.COLORS.SECONDARY}25`,
                }}
                aria-hidden="true"
              >
                🎯
              </div>
              <div>
                <p className="text-[13px] font-bold text-white">For Clients</p>
                <p className="text-[11px] text-white/30">Get real work done, fast</p>
              </div>
            </div>

            <div>
              {CLIENT_STEPS.map((step, i) => (
                <StepCard key={step.number} step={step} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}