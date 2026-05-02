"use client"

import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/scroll"

export function HeroCtaButton() {
  return (
    <Button
      size="lg"
      onClick={() => scrollToSection("contacto")}
      className="px-8 py-6 text-lg font-semibold bg-brand-primary hover:bg-brand-primary-hover text-white shadow-lg shadow-brand-primary/25 transition-all duration-300 hover:shadow-brand-primary/40 hover:scale-105"
    >
      Solicita tu presupuesto
    </Button>
  )
}
