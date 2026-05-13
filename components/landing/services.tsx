import { Globe, Smartphone, Bot } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Paginas Web Profesionales",
    description: "Sitios web modernos, rapidos y optimizados para SEO. Diseño responsive que se adapta a cualquier dispositivo y convierte visitantes en clientes."
  },
  {
    icon: Smartphone,
    title: "Apps y MVPs",
    description: "Desarrollo de aplicaciones moviles y productos minimos viables. Ideal para validar tu idea de negocio y escalar rapidamente."
  },
  {
    icon: Bot,
    title: "Agentes IA Automatizados",
    description: "Automatiza tareas repetitivas con inteligencia artificial. Chatbots, asistentes virtuales y sistemas de atencion al cliente 24/7."
  }
]

export function Services() {
  return (
    <section id="servicios" aria-label="Nuestros Servicios" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Soluciones digitales completas para impulsar tu negocio local
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-brand-surface border border-white/5 hover:border-brand-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
