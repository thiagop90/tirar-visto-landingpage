import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { HowItWorks } from './components/how-it-works'
import { SpecialPackage } from './components/special-packages'
import { TopDestination } from './components/top-destination'
import { WhyChooseUs } from './components/why-choose-us'

export function App() {
  return (
    <div className="mx-auto min-md:max-w-[768px] min-xl:max-w-[1440px]">
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <TopDestination />
      <SpecialPackage />
      <Footer />
    </div>
  )
}
