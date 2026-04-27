import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { WhyUs } from "@/components/landing/why-us"
import { Process } from "@/components/landing/process"
import { ContactForm } from "@/components/landing/contact-form"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <ContactForm />
      <Footer />
    </main>
  )
}
