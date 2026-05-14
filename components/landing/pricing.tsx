"use client"

import { Check } from "lucide-react"
import { scrollToSection } from "@/lib/scroll"

const plans = [
  {
    name: "Web Profesional",
    price: "497",
    period: "pago único",
    description: "Presencia digital lista para convertir visitas en clientes.",
    features: [
      "Landing page o web corporativa",
      "Diseño responsive (móvil + desktop)",
      "SEO técnico básico",
      "Formulario de contacto",
      "Dominio + hosting primer año",
      "Entrega en 7 días",
    ],
    cta: "Solicitar web",
    highlighted: false,
  },
  {
    name: "App / MVP",
    price: "1.497",
    period: "pago único",
    description: "Valida tu idea y lanza tu producto digital en semanas.",
    features: [
      "Aplicación web o móvil",
      "Panel de administración",
      "Base de datos incluida",
      "Integraciones API",
      "3 meses de soporte",
      "Entrega en 3-4 semanas",
    ],
    cta: "Solicitar MVP",
    highlighted: true,
    badge: "Más popular",
  },
  {
    name: "Agente IA",
    price: "297",
    period: "al mes",
    description: "Automatiza tareas y atiende clientes las 24 horas.",
    features: [
      "Chatbot o asistente virtual",
      "Automatizaciones a medida",
      "Integración con tu negocio",
      "Informe mensual de rendimiento",
      "Actualizaciones continuas",
      "Soporte prioritario",
    ],
    cta: "Solicitar agente",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" aria-label="Precios" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Precios claros, sin sorpresas
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Elige el plan que encaja con tu negocio. Sin letras pequeñas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) =>
            plan.highlighted ? (
              <div key={plan.name} className="relative md:scale-105">
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-brand-primary to-brand-accent text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="p-[1px] rounded-2xl bg-gradient-to-b from-brand-primary/60 via-brand-accent/30 to-brand-purple/20 shadow-2xl shadow-brand-primary/20">
                  <div className="rounded-[calc(1rem-1px)] bg-brand-surface p-8 flex flex-col">
                    <PlanContent plan={plan} />
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={plan.name}
                className="rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:border-white/20 p-8 flex flex-col transition-all duration-300"
              >
                <PlanContent plan={plan} />
              </div>
            )
          )}
        </div>

        <p className="text-center text-white/40 text-sm mt-10">
          ¿Necesitas algo diferente?{" "}
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-brand-primary hover:underline cursor-pointer"
          >
            Cuéntanos tu caso
          </button>{" "}
          y hacemos un presupuesto a medida.
        </p>
      </div>
    </section>
  )
}

function PlanContent({ plan }: { plan: typeof plans[number] }) {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{plan.description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-end gap-1">
          <span className="text-white/40 text-sm">desde</span>
          <span className="text-4xl font-bold text-white ml-1">{plan.price}€</span>
        </div>
        <span className="text-white/40 text-sm">{plan.period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-brand-primary" />
            </div>
            <span className="text-white/65 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollToSection("contacto")}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
          plan.highlighted
            ? "text-white hover:opacity-90 shadow-lg shadow-blue-500/25"
            : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
        }`}
        style={plan.highlighted ? { backgroundImage: "linear-gradient(to right, #3B82F6, #06B6D4)" } : undefined}
      >
        {plan.cta}
      </button>
    </>
  )
}
