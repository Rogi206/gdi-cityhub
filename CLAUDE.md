# CLAUDE.md — GDI CityHub

## Descripción del Proyecto

Landing page de la agencia **GDI CityHub** — transformación digital para comercios locales.
Servicios: páginas web profesionales, apps/MVPs y agentes IA automatizados.

## Estructura del Repositorio

```
gdi-cityhub/                ← raíz del repositorio git = app Next.js
├── CLAUDE.md               ← este archivo
├── README.md
├── package.json
├── next.config.mjs
├── tsconfig.json
├── app/
├── components/
│   └── landing/            ← Navbar, Hero, Services, WhyUs, Process, ContactForm, Footer
├── hooks/
├── lib/
├── styles/
├── docs/
│   ├── PROJECT.md
│   ├── ROADMAP.md
│   └── SOCIAL.md
├── scripts/
│   ├── webhook-handler.js  ← procesa leads entrantes de Formspree
│   └── deploy.sh
└── templates/              ← configs reutilizables por vertical de negocio
    ├── inmobiliaria/config.js
    ├── restauracion/config.js
    └── clinicas/config.js
```

## Comandos de Desarrollo

```bash
pnpm install      # instalar dependencias
pnpm dev          # servidor en http://localhost:3000
pnpm build        # build de producción
pnpm lint         # ESLint
```

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 — App Router |
| Lenguaje | TypeScript 5.7 |
| Estilos | Tailwind CSS v4 |
| Componentes | Radix UI + shadcn/ui |
| Formularios | React Hook Form + Zod |
| Formulario de contacto | Formspree (`https://formspree.io/f/xdayvygw`) |
| Deploy | Vercel (proyecto: `rogi206s-projects/gdi-cityhub`) |
| Analytics | Vercel Analytics (`@vercel/analytics`) |

## Convenciones

- Un componente por archivo; exportaciones **nombradas** (no default salvo `page.tsx`/`layout.tsx`).
- Archivos en `kebab-case`, componentes en `PascalCase`.
- `"use client"` solo donde hay interactividad (formulario, scroll).
- Colores: primario `#3B82F6`, acento `#06B6D4`, fondo `#0a0a0a`, superficie `#111111`.
- Textos en **español**; sin tildes en className o valores de datos (compatibilidad).

## Notas Importantes

- Desplegado en Vercel: https://gdi-cityhub.vercel.app — panel en https://vercel.com/rogi206s-projects/gdi-cityhub
- El directorio raíz del proyecto en Vercel apunta a la raíz del repo (sin subdirectorio).
- Las templates en `templates/*/config.js` son configuraciones estáticas para spinning up
  nuevas landing pages por vertical; no se importan desde el app de Next.js directamente.
- El webhook handler (`scripts/webhook-handler.js`) requiere las variables de entorno
  `FORMSPREE_SECRET` y `NOTIFY_EMAIL`; no exponer en el repositorio.
