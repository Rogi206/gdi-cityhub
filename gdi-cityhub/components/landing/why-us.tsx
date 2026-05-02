import { Zap, Brain, MapPin, BadgeCheck } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Resultados Rapidos",
    description: "Entregamos proyectos en semanas, no meses. Tu negocio no puede esperar."
  },
  {
    icon: Brain,
    title: "Tecnologia IA",
    description: "Utilizamos las ultimas herramientas de inteligencia artificial para maximizar la eficiencia."
  },
  {
    icon: MapPin,
    title: "Soporte Local",
    description: "Entendemos el mercado local y ofrecemos atencion personalizada y cercana."
  },
  {
    icon: BadgeCheck,
    title: "Precio Justo",
    description: "Soluciones de calidad premium a precios accesibles para comercios locales."
  }
]

export function WhyUs() {
  return (
    <section id="nosotros" aria-label="Por que GDI CityHub" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            ¿Por que GDI CityHub?
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Nos diferenciamos por nuestra combinacion unica de tecnologia y cercania
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 border border-brand-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:border-brand-primary/60 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
