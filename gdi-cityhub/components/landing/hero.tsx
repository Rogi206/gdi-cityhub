import { HeroCtaButton } from "@/components/landing/hero-cta-button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
          <span className="text-white">GDI</span>{" "}
          <span className="text-brand-primary">CityHub</span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-white/90 font-medium text-balance">
          Tu negocio local, en la era digital.
        </p>

        <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
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
