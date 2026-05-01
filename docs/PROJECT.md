# PROJECT — GDI CityHub

## Visión General

GDI CityHub es la presencia digital de la agencia GDI, orientada a ayudar a comercios locales a dar el salto a la era digital. La landing page es el primer punto de contacto con clientes potenciales y debe transmitir confianza, velocidad y modernidad.

## Objetivos del Proyecto

1. **Captar leads** — el CTA principal dirige al formulario de contacto.
2. **Comunicar los servicios** con claridad en menos de 10 segundos de lectura.
3. **Posicionamiento SEO local** — aparecer en búsquedas de agencias digitales locales.
4. **Rendimiento** — puntuación Lighthouse ≥ 90 en todas las categorías.

## Arquitectura

### Secciones de la Landing

| Componente | Archivo | Propósito |
|---|---|---|
| Navbar | `components/landing/navbar.tsx` | Navegación y ancla a secciones |
| Hero | `components/landing/hero.tsx` | Titular principal + CTA |
| Services | `components/landing/services.tsx` | Tres servicios principales |
| WhyUs | `components/landing/why-us.tsx` | Diferenciadores clave |
| Process | `components/landing/process.tsx` | Pasos del proceso de trabajo |
| ContactForm | `components/landing/contact-form.tsx` | Formulario de captación de leads |
| Footer | `components/landing/footer.tsx` | Redes sociales y copyright |

### Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| Background | `#0a0a0a` | Fondo principal |
| Primary | `#3B82F6` | Azul principal (CTAs, íconos) |
| Accent | `#06B6D4` | Cyan secundario (gradientes) |
| Surface | `#111111` | Tarjetas y paneles |
| Text | `white / white/60 / white/40` | Jerarquía tipográfica |

## Decisiones Técnicas

- **App Router (Next.js)** sobre Pages Router para mejor soporte de Server Components.
- **Tailwind CSS v4** usando la sintaxis de importación directa (`@import "tailwindcss"`).
- **pnpm** como gestor de paquetes por velocidad y eficiencia de disco.
- **Netlify** para deploy continuo desde la rama `main`.
- Componentes `"use client"` solo donde se necesita interactividad (scroll suave, formulario).

## Convenciones de Código

- Un componente por archivo, exportaciones nombradas.
- Nombres de componentes en PascalCase, archivos en kebab-case.
- Estilos inline solo para valores dinámicos que Tailwind no puede expresar (ej. `backgroundSize`).
