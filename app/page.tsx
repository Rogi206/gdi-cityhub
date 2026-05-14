import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { WhyUs } from "@/components/landing/why-us"
import { Process } from "@/components/landing/process"
import { Pricing } from "@/components/landing/pricing"
import { ContactForm } from "@/components/landing/contact-form"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  )
}
