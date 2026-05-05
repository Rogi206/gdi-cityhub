export default function PrivacyPolicy() {
  return (
    <main style={{
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      color: '#e5e5e5',
      fontFamily: 'Georgia, serif',
      padding: '60px 24px',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px', borderBottom: '1px solid #333', paddingBottom: '32px' }}>
          <a href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '14px', letterSpacing: '0.05em' }}>
            ← GDI CityHub
          </a>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginTop: '24px',
            marginBottom: '8px',
            color: '#ffffff',
            lineHeight: 1.2,
          }}>
            Política de Privacidad
          </h1>
          <p style={{ color: '#888', fontSize: '14px' }}>
            Última actualización: mayo 2025
          </p>
        </div>

        {/* Sections */}
        {[
          {
            title: '1. Responsable del tratamiento',
            content: `GDI CityHub es una agencia de servicios digitales con sede en España. Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactar con nosotros a través del correo electrónico: gananciasdigitales.info@gmail.com.`,
          },
          {
            title: '2. Datos que recopilamos',
            content: `Recopilamos los datos que usted nos proporciona voluntariamente a través de nuestros formularios de contacto, incluyendo: nombre, dirección de correo electrónico, número de teléfono y cualquier información adicional que incluya en su mensaje. También podemos recopilar datos de uso general del sitio web de forma anónima.`,
          },
          {
            title: '3. Finalidad del tratamiento',
            content: `Los datos personales que nos facilita se utilizan exclusivamente para: responder a sus consultas y solicitudes de presupuesto, gestionar la relación comercial con clientes, y enviar comunicaciones relacionadas con nuestros servicios cuando usted lo haya solicitado expresamente.`,
          },
          {
            title: '4. Base legal',
            content: `El tratamiento de sus datos se basa en el consentimiento que usted otorga al enviarnos sus datos a través de nuestros formularios, así como en la ejecución de un contrato o la aplicación de medidas precontractuales cuando corresponda.`,
          },
          {
            title: '5. Conservación de los datos',
            content: `Conservamos sus datos personales durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para cumplir con las obligaciones legales aplicables. En general, los datos de contacto se conservan durante un máximo de 3 años desde el último contacto.`,
          },
          {
            title: '6. Compartición de datos con terceros',
            content: `GDI CityHub no vende ni cede sus datos personales a terceros. Podemos compartir datos con proveedores de servicios tecnológicos (como plataformas de correo electrónico o almacenamiento en la nube) estrictamente necesarios para la prestación de nuestros servicios, siempre bajo acuerdos de confidencialidad y cumplimiento del RGPD.\n\nEn el contexto de nuestros servicios de gestión de redes sociales, podemos acceder a las cuentas de Facebook e Instagram de nuestros clientes únicamente para publicar contenido en su nombre, previa autorización expresa.`,
          },
          {
            title: '7. Sus derechos',
            content: `De acuerdo con el Reglamento General de Protección de Datos (RGPD), usted tiene derecho a: acceder a sus datos personales, rectificar datos inexactos, solicitar la supresión de sus datos, oponerse al tratamiento, solicitar la limitación del tratamiento y solicitar la portabilidad de sus datos.\n\nPara ejercer cualquiera de estos derechos, puede contactar con nosotros en: gananciasdigitales.info@gmail.com`,
          },
          {
            title: '8. Uso de la API de Meta',
            content: `GDI CityHub utiliza la API de Meta (Facebook e Instagram) para gestionar publicaciones en redes sociales en nombre de sus clientes. El acceso a las cuentas de nuestros clientes en estas plataformas se realiza únicamente con su consentimiento explícito y se limita a las acciones necesarias para la prestación del servicio contratado. Los datos obtenidos a través de la API de Meta no se utilizan para ningún otro fin.`,
          },
          {
            title: '9. Seguridad',
            content: `Adoptamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la divulgación. Sin embargo, ningún sistema de transmisión de datos por Internet es completamente seguro.`,
          },
          {
            title: '10. Cambios en esta política',
            content: `Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier cambio significativo publicando la nueva política en esta página con la fecha de actualización.`,
          },
          {
            title: '11. Contacto',
            content: `Si tiene alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de sus datos, no dude en contactarnos:\n\nEmail: gananciasdigitales.info@gmail.com\nWeb: gdi-cityhub.vercel.app`,
          },
        ].map((section, i) => (
          <section key={i} style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '12px',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.02em',
            }}>
              {section.title}
            </h2>
            {section.content.split('\n\n').map((para, j) => (
              <p key={j} style={{
                color: '#aaa',
                lineHeight: '1.8',
                fontSize: '15px',
                marginBottom: '12px',
              }}>
                {para}
              </p>
            ))}
          </section>
        ))}

        {/* Footer */}
        <div style={{
          marginTop: '64px',
          paddingTop: '24px',
          borderTop: '1px solid #333',
          color: '#555',
          fontSize: '13px',
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} GDI CityHub — Todos los derechos reservados
        </div>
      </div>
    </main>
  );
}
