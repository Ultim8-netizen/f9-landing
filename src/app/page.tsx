import { Navbar }      from '@/components/landing/navbar'
import { Hero }        from '@/components/landing/hero'
import { Services }    from '@/components/landing/services'
import { HowItWorks }  from '@/components/landing/how-it-works'
import { Stats }       from '@/components/landing/stats'
import { CtaSection }  from '@/components/landing/cta-section'
import { Footer }      from '@/components/landing/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </main>
  )
}