"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/10 via-transparent to-transparent" />
        {/* Radial glow - top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3B82F6]/20 rounded-full blur-[120px] opacity-50" />
        {/* Radial glow - accent */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#06B6D4]/10 rounded-full blur-[100px]" />
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
          <span className="text-white">GDI</span>{" "}
          <span className="text-[#3B82F6]">CityHub</span>
        </h1>
        
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-white/90 font-medium text-balance">
          Tu negocio local, en la era digital.
        </p>
        
        <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          Agencia especializada en transformacion digital para comercios locales. 
          Ofrecemos paginas web, apps/MVPs y agentes automatizados con IA.
        </p>
        
        <div className="mt-10">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="px-8 py-6 text-lg font-semibold bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/25 transition-all duration-300 hover:shadow-[#3B82F6]/40 hover:scale-105"
          >
            Solicita tu presupuesto
          </Button>
        </div>
      </div>
    </section>
  )
}
