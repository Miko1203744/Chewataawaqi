import { Hero } from '@/components/home-ui/hero'
import { Services } from '@/components/home-ui/services'
import { Clients } from '@/components/home-ui/clients'
import { Testimonials } from '@/components/home-ui/testimonials'
import {About} from '@/components/home-ui/about'
import { Contact } from '@/components/home-ui/contact'

export default function Home() {
  return (
    <main className="pt-16"> {/* Add padding to account for fixed navbar */}
      <Hero />
      <Services />
      <About />
      <Clients />
      <Testimonials />
      <Contact />
    </main>
  )
}