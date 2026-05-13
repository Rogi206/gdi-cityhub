import { Linkedin, Twitter, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" }
]

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="/" aria-label="GDI CityHub — inicio" className="inline-flex items-center gap-1">
              <span className="text-xl font-bold text-white">GDI</span>
              <span className="text-xl font-bold text-brand-primary">CityHub</span>
            </a>
            <p className="mt-2 text-white/50 text-sm">
              Tu negocio local, en la era digital.
            </p>
          </div>

          <div className="text-center">
            <a
              href="mailto:gananciasdigitales.info@gmail.com"
              className="text-white/60 hover:text-brand-primary text-sm transition-colors"
            >
              gananciasdigitales.info@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-primary hover:border-brand-primary/50 hover:bg-brand-primary/10 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} GDI CityHub. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
