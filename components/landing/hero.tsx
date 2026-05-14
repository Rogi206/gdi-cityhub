import { HeroCtaButton } from "@/components/landing/hero-cta-button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-brand-primary/25 rounded-full blur-[150px] opacity-50" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-brand-purple/15 rounded-full blur-[130px] opacity-60" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-brand-accent/10 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          Agencia IA para negocios locales · España
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
          <span className="text-white">GDI </span>
          <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-accent bg-clip-text text-transparent">
            CityHub
          </span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-balance">
          <span className="text-white/90">Tu negocio local,</span>{" "}
          <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">
            en la era digital.
          </span>
        </p>

        <p className="mt-6 text-base sm:text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">
          Agencia especializada en transformacion digital para comercios locales.
          Ofrecemos paginas web, apps/MVPs y agentes automatizados con IA.
        </p>

        <div className="mt-10">
          <HeroCtaButton />
        </div>
      </div>
    </section>
  )
}
