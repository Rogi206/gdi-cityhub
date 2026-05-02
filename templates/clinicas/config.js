/**
 * Template: Clínicas
 * Vertical: Clínicas médicas, odontológicas, de estética y centros de salud.
 *
 * Uso: importar esta config en el generador de landing pages de GDI CityHub
 * para producir una landing pre-configurada para el sector salud.
 */

/** @type {import('../types').TemplateConfig} */
const config = {
  meta: {
    vertical: "clinicas",
    version: "1.0.0",
    description: "Landing page para clínicas médicas, odontológicas y centros de salud",
  },

  brand: {
    primaryColor: "#0EA5E9",   // azul cielo — salud y confianza
    accentColor: "#10B981",    // verde — bienestar y naturaleza
    backgroundColor: "#060A0F",
    surfaceColor: "#0D1117",
    fontDisplay: "Plus Jakarta Sans",
    fontBody: "Inter",
  },

  hero: {
    headline: "Tu salud, nuestra prioridad.",
    subheadline: "Atención médica personalizada con los mejores profesionales de la zona.",
    cta: "Pedir turno online",
    ctaAnchor: "#contacto",
  },

  services: [
    {
      icon: "Stethoscope",
      title: "Consultas Médicas",
      description:
        "Atención por especialistas con turnos disponibles en el día para urgencias y consultas programadas.",
    },
    {
      icon: "Activity",
      title: "Diagnóstico por Imágenes",
      description:
        "Ecografías, radiografías y estudios de laboratorio con resultados en 24 horas.",
    },
    {
      icon: "HeartPulse",
      title: "Seguimiento Continuo",
      description:
        "Historia clínica digital y recordatorios automáticos para controles y vacunas.",
    },
  ],

  whyUs: [
    { icon: "UserCheck", title: "Profesionales Certificados", description: "Médicos con matrícula vigente y formación de posgrado." },
    { icon: "Clock", title: "Turnos el Mismo Día", description: "Sin listas de espera eternas para urgencias y consultas." },
    { icon: "Lock", title: "Datos Seguros", description: "Historial médico cifrado, solo accesible con tu consentimiento." },
    { icon: "Wallet", title: "Múltiples Obras Sociales", description: "Atendemos las principales obras sociales y prepagas de la zona." },
  ],

  process: [
    { number: "01", title: "Pedí tu Turno", description: "Online, por WhatsApp o llamando a la clínica." },
    { number: "02", title: "Confirmación", description: "Recibes recordatorio automático 24 h antes de tu consulta." },
    { number: "03", title: "Consulta", description: "Atención puntual con el especialista asignado." },
    { number: "04", title: "Seguimiento", description: "Indicaciones y próximos controles disponibles en tu historial digital." },
  ],

  contact: {
    formTitle: "Pedí tu turno online",
    formSubtitle: "Completá tus datos y un coordinador confirmará tu turno.",
    businessTypes: [
      "Clínica general",
      "Odontología",
      "Pediatría",
      "Ginecología",
      "Traumatología",
      "Estética",
      "Otra especialidad",
    ],
  },

  seo: {
    titleTemplate: "%s — Clínica Médica | GDI CityHub",
    defaultDescription:
      "Clínica médica local con especialistas certificados. Turnos online, atención el mismo día y seguimiento digital de tu historial clínico.",
    keywords: [
      "clínica médica",
      "turnos online",
      "médico",
      "odontología",
      "salud",
      "especialistas",
      "obras sociales",
    ],
  },
}

module.exports = config
