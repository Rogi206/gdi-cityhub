"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  business: z.string().min(1, "Selecciona un tipo de negocio"),
  message: z.string().min(10, "Mínimo 10 caracteres").max(1000, "Máximo 1000 caracteres"),
})

export type ContactFormState = {
  success?: boolean
  errors?: {
    name?: string
    email?: string
    business?: string
    message?: string
    _form?: string
  }
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    business: formData.get("business"),
    message: formData.get("message"),
  })

  if (!result.success) {
    const errors: ContactFormState["errors"] = {}
    for (const err of result.error.errors) {
      const field = err.path[0] as keyof NonNullable<ContactFormState["errors"]>
      if (!errors[field]) errors[field] = err.message
    }
    return { errors }
  }

  const body = new FormData()
  body.append("name", result.data.name)
  body.append("email", result.data.email)
  body.append("business", result.data.business)
  body.append("message", result.data.message)
  body.append("_replyto", result.data.email)

  try {
    const response = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_ID}`,
      { method: "POST", body, headers: { Accept: "application/json" } }
    )
    if (!response.ok) return { errors: { _form: "Error al enviar. Inténtalo de nuevo." } }
    return { success: true }
  } catch {
    return { errors: { _form: "Error de conexión. Inténtalo de nuevo." } }
  }
}
