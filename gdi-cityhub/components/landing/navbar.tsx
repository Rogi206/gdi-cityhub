"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { scrollToSection } from "@/lib/scroll"

const navLinks = [
  { label: "Servicios", id: "servicios" },
  { label: "Nosotros", id: "nosotros" },
  { label: "Proceso", id: "proceso" },
  { label: "Contacto", id: "contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      aria-label="Navegacion principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" aria-label="GDI CityHub — inicio" className="flex items-center gap-1">
            <span className="text-xl md:text-2xl font-bold text-white">GDI</span>
            <span className="text-xl md:text-2xl font-bold text-brand-primary">CityHub</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contacto")}
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6"
            >
              Presupuesto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-bg/95 backdrop-blur-md border-t border-white/5">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-white/70 hover:text-white py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contacto")}
              className="bg-brand-primary hover:bg-brand-primary-hover text-white w-full mt-2"
            >
              Solicita tu presupuesto
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
