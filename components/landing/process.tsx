import { MessageSquare, FileText, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consulta",
    description: "Hablamos sobre tu negocio, tus objetivos y tus necesidades digitales."
  },
  {
    icon: FileText,
    number: "02",
    title: "Propuesta",
    description: "Diseñamos una solucion personalizada con presupuesto y cronograma claros."
  },
  {
    icon: Code,
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu solucion con tecnologia de vanguardia y actualizaciones constantes."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lanzamiento",
    description: "Ponemos tu proyecto en marcha y te acompañamos en los primeros pasos."
  }
]

export function Process() {
  return (
    <section id="proceso" aria-label="Como Trabajamos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Como Trabajamos
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Un proceso simple y transparente de principio a fin
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-primary/50 to-transparent" />
              )}

              <div className="relative flex flex-col items-center text-center p-4">
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-brand-primary/30 rounded-full blur-xl" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary-hover flex items-center justify-center shadow-lg shadow-brand-primary/30">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <span className="text-xs font-mono text-brand-accent mb-2 tracking-widest">{step.number}</span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
