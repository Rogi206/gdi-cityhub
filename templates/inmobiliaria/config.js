/**
 * Template: Inmobiliaria
 * Vertical: Agencias inmobiliarias y gestores de propiedades locales.
 *
 * Uso: importar esta config en el generador de landing pages de GDI CityHub
 * para producir una landing pre-configurada para el sector inmobiliario.
 */

/** @type {import('../types').TemplateConfig} */
const config = {
  meta: {
    vertical: "inmobiliaria",
    version: "1.0.0",
    description: "Landing page para agencias inmobiliarias y gestores de propiedades",
  },

  brand: {
    primaryColor: "#C9A84C",   // dorado — asociado a lujo y confianza
    accentColor: "#1B3A5C",    // azul marino profundo
    backgroundColor: "#0D0D0D",
    surfaceColor: "#131313",
    fontDisplay: "Playfair Display",
    fontBody: "Inter",
  },

  hero: {
    headline: "Tu hogar ideal, a un paso.",
    subheadline: "Encontramos la propiedad perfecta para tu familia o tu inversión.",
    cta: "Ver propiedades disponibles",
    ctaAnchor: "#contacto",
  },

  services: [
    {
      icon: "Home",
      title: "Venta de Propiedades",
      description:
        "Asesoramiento completo en la compra y venta de casas, departamentos y locales comerciales.",
    },
    {
      icon: "Key",
      title: "Alquileres",
      description:
        "Gestión integral de alquileres temporales y permanentes con contratos seguros y respaldo legal.",
    },
    {
      icon: "TrendingUp",
      title: "Inversión Inmobiliaria",
      description:
        "Análisis de rentabilidad y oportunidades de inversión en el mercado local.",
    },
  ],

  whyUs: [
    { icon: "ShieldCheck", title: "Operaciones Seguras", description: "Documentación verificada y contratos auditados en cada operación." },
    { icon: "MapPin", title: "Expertos Locales", description: "Conocemos cada barrio, sus valores y su potencial de crecimiento." },
    { icon: "Clock", title: "Respuesta en 24 h", description: "Nuestro equipo responde consultas el mismo día hábil." },
    { icon: "BadgeCheck", title: "Sin Costos Ocultos", description: "Comisiones claras y transparentes desde el primer contacto." },
  ],

  process: [
    { number: "01", title: "Consulta Inicial", description: "Evaluamos tus necesidades, presupuesto y zona de interés." },
    { number: "02", title: "Selección", description: "Te presentamos un listado personalizado de propiedades." },
    { number: "03", title: "Visitas", description: "Coordinamos visitas presenciales o virtuales a tu medida." },
    { number: "04", title: "Cierre", description: "Te acompañamos en toda la documentación hasta la firma." },
  ],

  contact: {
    formTitle: "Consultanos sobre tu propiedad",
    formSubtitle: "Dejanos tus datos y un asesor se comunicará contigo hoy mismo.",
    businessTypes: [
      "Quiero comprar",
      "Quiero alquilar",
      "Quiero vender",
      "Quiero invertir",
      "Otro",
    ],
  },

  seo: {
    titleTemplate: "%s — Inmobiliaria | GDI CityHub",
    defaultDescription:
      "Agencia inmobiliaria local con propiedades en venta y alquiler. Asesoramiento personalizado, operaciones seguras y expertos en el mercado local.",
    keywords: [
      "inmobiliaria",
      "propiedades en venta",
      "alquiler",
      "departamentos",
      "casas",
      "inversión inmobiliaria",
    ],
  },
}

module.exports = config
