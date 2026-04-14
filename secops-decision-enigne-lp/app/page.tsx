import Background from '@/components/effects/background'
import Cursor from '@/components/effects/cursor'
import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import TriageShowcase from '@/components/sections/triageShowcase'
import PainPoints from '@/components/sections/painPoints'
import Pipeline from '@/components/sections/pipeline'
import Stats from '@/components/sections/stats'
import CTA from '@/components/sections/cta'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Background />
      <Navbar />
      <Hero />
      <TriageShowcase />
      <PainPoints />
      <Pipeline />
      <Stats />
      <CTA />
      <Footer />
    </>
  )
}