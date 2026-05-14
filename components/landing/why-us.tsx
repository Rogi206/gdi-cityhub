import { Zap, Brain, MapPin, BadgeCheck } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    iconColor: "text-yellow-400",
    iconBg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border-yellow-500/20",
    title: "Resultados Rapidos",
    description: "Entregamos proyectos en semanas, no meses. Tu negocio no puede esperar."
  },
  {
    icon: Brain,
    iconColor: "text-brand-purple",
    iconBg: "bg-gradient-to-br from-brand-purple/20 to-brand-primary/10 border-brand-purple/20",
    title: "Tecnologia IA",
    description: "Utilizamos las ultimas herramientas de inteligencia artificial para maximizar la eficiencia."
  },
  {
    icon: MapPin,
    iconColor: "text-brand-accent",
    iconBg: "bg-gradient-to-br from-brand-accent/20 to-brand-primary/10 border-brand-accent/20",
    title: "Soporte Local",
    description: "Entendemos el mercado local y ofrecemos atencion personalizada y cercana."
  },
  {
    icon: BadgeCheck,
    iconColor: "text-emerald-400",
    iconBg: "bg-gradient-to-br from-emerald-500/20 to-brand-accent/10 border-emerald-500/20",
    title: "Precio Justo",
    description: "Soluciones de calidad premium a precios accesibles para comercios locales."
  }
]

export function WhyUs() {
  return (
    <section id="nosotros" aria-label="Por que GDI CityHub" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            ¿Por que GDI CityHub?
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Nos diferenciamos por nuestra combinacion unica de tecnologia y cercania
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:border-white/15 transition-all duration-300 text-center group"
            >
              <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 ${reason.iconBg}`}>
                <reason.icon className={`w-6 h-6 ${reason.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
