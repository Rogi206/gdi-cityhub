"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { CheckCircle2 } from "lucide-react"

const businessTypes = [
  "Restaurante / Hosteleria",
  "Comercio minorista",
  "Servicios profesionales",
  "Salud y bienestar",
  "Educacion",
  "Otro"
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const data = new FormData(form)
    const emailValue = data.get("email")
    if (emailValue) data.append("_replyto", emailValue as string)

    try {
      const response = await fetch("https://formspree.io/f/xdayvygw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="contacto" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/5 to-transparent" />
        <div className="max-w-xl mx-auto relative z-10">
          <div className="p-8 rounded-2xl bg-[#111111] border border-white/10 text-center">
            <div className="w-16 h-16 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Mensaje enviado
            </h3>
            <p className="text-white/60">
              Gracias por contactarnos. Te responderemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/5 to-transparent" />
      
      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contactanos
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Cuentanos sobre tu proyecto y te responderemos en menos de 24 horas
          </p>
        </div>
        
        {/* Form card with glowing border */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6]/50 to-[#06B6D4]/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          
          <div className="relative p-8 rounded-2xl bg-[#111111] border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-1">Solicita tu presupuesto</h3>
            <p className="text-white/50 text-sm mb-6">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
            
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name" className="text-white/80">Nombre</FieldLabel>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Tu nombre completo" 
                    required 
                    className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20"
                  />
                </Field>
                
                <Field>
                  <FieldLabel htmlFor="email" className="text-white/80">Email</FieldLabel>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="tu@email.com" 
                    required 
                    className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20"
                  />
                </Field>
                
                <Field>
                  <FieldLabel htmlFor="business" className="text-white/80">Tipo de negocio</FieldLabel>
                  <Select name="business" required>
                    <SelectTrigger className="bg-[#0a0a0a] border-white/10 text-white focus:border-[#3B82F6] focus:ring-[#3B82F6]/20">
                      <SelectValue placeholder="Selecciona una opcion" className="text-white/30" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111111] border-white/10">
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type} className="text-white hover:bg-white/5 focus:bg-white/5">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                
                <Field>
                  <FieldLabel htmlFor="message" className="text-white/80">Mensaje</FieldLabel>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Cuentanos sobre tu proyecto o necesidades..."
                    rows={4}
                    required
                    className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 resize-none"
                  />
                </Field>
              </FieldGroup>
              
              <Button 
                type="submit" 
                className="w-full mt-6 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-6 shadow-lg shadow-[#3B82F6]/25 transition-all duration-300 hover:shadow-[#3B82F6]/40"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="mr-2" />
                    Enviando...
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
