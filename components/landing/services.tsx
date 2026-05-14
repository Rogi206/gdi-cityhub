import { Globe, Smartphone, Bot } from "lucide-react"

const services = [
  {
    icon: Globe,
    iconColor: "text-brand-primary",
    iconBg: "bg-brand-primary/10 border-brand-primary/20",
    title: "Paginas Web Profesionales",
    description: "Sitios web modernos, rapidos y optimizados para SEO. Diseño responsive que se adapta a cualquier dispositivo y convierte visitantes en clientes."
  },
  {
    icon: Smartphone,
    iconColor: "text-brand-accent",
    iconBg: "bg-brand-accent/10 border-brand-accent/20",
    title: "Apps y MVPs",
    description: "Desarrollo de aplicaciones moviles y productos minimos viables. Ideal para validar tu idea de negocio y escalar rapidamente."
  },
  {
    icon: Bot,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple/10 border-brand-purple/20",
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
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Soluciones digitales completas para impulsar tu negocio local
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-7 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] transition-all duration-400"
            >
              <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
