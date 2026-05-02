/**
 * Template: Restauración
 * Vertical: Restaurantes, bares, cafeterías y negocios de hostelería local.
 *
 * Uso: importar esta config en el generador de landing pages de GDI CityHub
 * para producir una landing pre-configurada para el sector gastronómico.
 */

/** @type {import('../types').TemplateConfig} */
const config = {
  meta: {
    vertical: "restauracion",
    version: "1.0.0",
    description: "Landing page para restaurantes, bares y negocios de hostelería",
  },

  brand: {
    primaryColor: "#E85D04",   // naranja — apetito y energía
    accentColor: "#FFBA08",    // amarillo dorado — calidez
    backgroundColor: "#0A0800",
    surfaceColor: "#141008",
    fontDisplay: "Lora",
    fontBody: "Inter",
  },

  hero: {
    headline: "Una experiencia que se recuerda.",
    subheadline: "Cocina auténtica, ambiente inigualable y el sabor del barrio.",
    cta: "Reservar una mesa",
    ctaAnchor: "#contacto",
  },

  services: [
    {
      icon: "UtensilsCrossed",
      title: "Menú del Día",
      description:
        "Platos frescos elaborados con ingredientes locales de temporada. Cambia cada día.",
    },
    {
      icon: "Wine",
      title: "Carta de Vinos",
      description:
        "Selección de vinos regionales e internacionales para maridar con cada plato.",
    },
    {
      icon: "PartyPopper",
      title: "Eventos y Catering",
      description:
        "Organizamos cumpleaños, reuniones de empresa y celebraciones privadas a medida.",
    },
  ],

  whyUs: [
    { icon: "Leaf", title: "Producto Local", description: "Trabajamos con proveedores del barrio y de temporada." },
    { icon: "ChefHat", title: "Cocina Artesanal", description: "Recetas propias, sin ingredientes ultraprocesados." },
    { icon: "Star", title: "Ambiente Único", description: "Un espacio cuidado al detalle para que disfrutes cada visita." },
    { icon: "Truck", title: "Delivery Propio", description: "Llevamos tu pedido a domicilio sin comisiones de terceros." },
  ],

  process: [
    { number: "01", title: "Reserva Online", description: "Elige día, horario y número de personas en segundos." },
    { number: "02", title: "Confirmación", description: "Recibes confirmación inmediata por email o WhatsApp." },
    { number: "03", title: "Tu Mesa Lista", description: "Llegás y tu mesa te espera preparada." },
    { number: "04", title: "Disfrutá", description: "Experiencia completa: cocina, servicio y ambiente." },
  ],

  contact: {
    formTitle: "Hacé tu reserva",
    formSubtitle: "Completá el formulario y confirmamos tu mesa en minutos.",
    businessTypes: [
      "Mesa para cenar",
      "Mesa para almorzar",
      "Evento privado",
      "Catering",
      "Delivery",
      "Otro",
    ],
  },

  seo: {
    titleTemplate: "%s — Restaurante | GDI CityHub",
    defaultDescription:
      "Restaurante local con cocina artesanal, ingredientes frescos y ambiente único. Reservas online y delivery propio.",
    keywords: [
      "restaurante",
      "bar",
      "cafetería",
      "delivery",
      "reservas online",
      "gastronomía local",
      "catering",
    ],
  },
}

module.exports = config
