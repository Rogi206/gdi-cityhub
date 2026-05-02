/**
 * Webhook handler para notificaciones de nuevos leads desde Formspree.
 * Recibe el POST de Formspree, valida la firma y reenvía la notificación.
 *
 * Variables de entorno requeridas:
 *   FORMSPREE_SECRET  — clave secreta del endpoint de Formspree
 *   NOTIFY_EMAIL      — email destino para notificaciones internas
 *   PORT              — puerto del servidor (default: 3001)
 *
 * Uso:
 *   node scripts/webhook-handler.js
 */

const http = require("http")
const crypto = require("crypto")

const PORT = process.env.PORT || 3001
const FORMSPREE_SECRET = process.env.FORMSPREE_SECRET || ""
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "gananciasdigitales.info@gmail.com"

function verifySignature(payload, signature) {
  if (!FORMSPREE_SECRET) return true
  const expected = crypto
    .createHmac("sha256", FORMSPREE_SECRET)
    .update(payload)
    .digest("hex")
  return crypto.timingSafeEqual(
    Buffer.from(`sha256=${expected}`),
    Buffer.from(signature)
  )
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = ""
    req.on("data", (chunk) => (body += chunk))
    req.on("end", () => resolve(body))
    req.on("error", reject)
  })
}

function formatLeadNotification(data) {
  const lines = [
    "=== Nuevo Lead — GDI CityHub ===",
    `Nombre:        ${data.name || "—"}`,
    `Email:         ${data.email || "—"}`,
    `Tipo negocio:  ${data.business || "—"}`,
    `Mensaje:       ${data.message || "—"}`,
    `Recibido:      ${new Date().toISOString()}`,
    "================================",
  ]
  return lines.join("\n")
}

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ status: "ok", service: "gdi-cityhub-webhook" }))
    return
  }

  if (req.method !== "POST" || req.url !== "/webhook/leads") {
    res.writeHead(404)
    res.end()
    return
  }

  try {
    const rawBody = await parseBody(req)
    const signature = req.headers["x-formspree-signature"] || ""

    if (signature && !verifySignature(rawBody, signature)) {
      console.warn("[webhook] Firma inválida — solicitud rechazada")
      res.writeHead(401)
      res.end()
      return
    }

    const data = JSON.parse(rawBody)
    const notification = formatLeadNotification(data)

    console.log(notification)
    console.log(`[webhook] Lead notificado a: ${NOTIFY_EMAIL}`)

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ received: true }))
  } catch (err) {
    console.error("[webhook] Error al procesar payload:", err.message)
    res.writeHead(400)
    res.end()
  }
})

server.listen(PORT, () => {
  console.log(`[webhook] Servidor escuchando en http://localhost:${PORT}`)
  console.log(`[webhook] Endpoint: POST /webhook/leads`)
  console.log(`[webhook] Health:   GET  /health`)
})
