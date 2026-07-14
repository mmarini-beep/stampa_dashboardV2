'use client'
import React, { useEffect } from 'react'

const CSS = `
  .lg-doc { max-width: 760px; margin: 0 auto; padding: 56px 24px 80px; font-family: 'Inter', sans-serif; color: #2B2620; background: #FBF6EE; }
  .lg-doc h1 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 30px; margin-bottom: 6px; }
  .lg-doc .lg-doc-updated { font-size: 12.5px; color: rgba(43,38,32,.45); margin-bottom: 32px; }
  .lg-doc h2 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 17px; margin-top: 32px; margin-bottom: 10px; color: #2B2620; }
  .lg-doc p, .lg-doc li { font-size: 14px; line-height: 1.7; color: rgba(43,38,32,.8); margin-bottom: 10px; }
  .lg-doc ul { padding-left: 20px; margin-bottom: 12px; }
  .lg-doc .lg-doc-placeholder { background: rgba(228,108,49,.12); padding: 1px 5px; border-radius: 4px; font-weight: 600; }
  .lg-doc a { color: #E46C31; }
`

function injectStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById('lg-doc-css')) return
  const s = document.createElement('style')
  s.id = 'lg-doc-css'
  s.textContent = CSS
  document.head.appendChild(s)
}

export default function TermsPage() {
  useEffect(() => { injectStyles() }, [])

  return (
    <div className="lg-doc">
      <h1>Términos y condiciones</h1>
      <div className="lg-doc-updated">Última actualización: <span className="lg-doc-placeholder">[FECHA]</span> — Borrador pendiente de revisión legal</div>

      <p>
        Estos Términos y Condiciones ("Términos") regulan el uso de la plataforma Stampa
        (el "Servicio"), operada por <span className="lg-doc-placeholder">[NOMBRE LEGAL DE LA EMPRESA]</span>,
        con domicilio en <span className="lg-doc-placeholder">[DOMICILIO FISCAL]</span> ("Stampa", "nosotros").
        Al crear una cuenta aceptás estos Términos en su totalidad.
      </p>

      <h2>1. Descripción del servicio</h2>
      <p>
        Stampa es una plataforma que permite a comercios ("Comercio", "vos") crear y administrar
        programas de fidelización digital (tarjetas de sellos, puntos o membresía) para sus
        propios clientes finales ("Clientes Finales"), incluyendo la emisión de tarjetas para
        Apple Wallet y Google Wallet, el envío de notificaciones push, y herramientas de
        analítica y gestión de equipo.
      </p>

      <h2>2. Cuenta y responsabilidades del Comercio</h2>
      <ul>
        <li>Sos responsable de mantener la confidencialidad de tus credenciales de acceso.</li>
        <li>Sos responsable de la veracidad de los datos que cargás sobre tu negocio.</li>
        <li>
          Como Comercio, actuás como <strong>responsable del tratamiento</strong> de los datos
          personales de tus Clientes Finales que recolectás a través de Stampa (nombre, email,
          preferencias, historial de visitas). Stampa actúa como <strong>encargado del
          tratamiento</strong> de esos datos, procesándolos únicamente para prestarte el
          Servicio. Ver nuestra <a href="/privacy">Política de Privacidad</a> para más detalle
          sobre esta relación.
        </li>
        <li>Sos responsable de obtener el consentimiento válido de tus Clientes Finales para recolectar y usar sus datos, y de informarles sus derechos conforme a la normativa aplicable en tu país.</li>
      </ul>

      <h2>3. Planes y facturación</h2>
      <p>
        Stampa ofrece distintos planes (Starter, Growth, Pro, Enterprise) con límites de
        funcionalidades detallados en <span className="lg-doc-placeholder">[LINK A PRICING / TABLA DE PLANES]</span>.
        Los precios están expresados en <span className="lg-doc-placeholder">[MONEDA]</span> y
        pueden modificarse con <span className="lg-doc-placeholder">[X días]</span> de aviso previo.
        <span className="lg-doc-placeholder"> [POLÍTICA DE REEMBOLSOS / CANCELACIÓN — completar]</span>.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        El software, diseño, marca y contenidos de Stampa son propiedad de{' '}
        <span className="lg-doc-placeholder">[NOMBRE LEGAL DE LA EMPRESA]</span> o sus
        licenciantes. El Comercio conserva la propiedad de su propia marca, logo y contenido
        cargado en la plataforma, y otorga a Stampa una licencia limitada para usarlos
        únicamente con el fin de prestar el Servicio (por ejemplo, mostrarlos en la tarjeta
        digital del Cliente Final).
      </p>

      <h2>5. Limitación de responsabilidad</h2>
      <p>
        El Servicio se provee "tal cual". En la medida permitida por la ley aplicable, Stampa
        no será responsable por daños indirectos, lucro cesante, o pérdida de datos derivados
        del uso del Servicio. <span className="lg-doc-placeholder">[Ajustar según asesoría legal — los límites de responsabilidad frente a consumidores tienen restricciones distintas en Argentina (Ley 24.240) y España/UE.]</span>
      </p>

      <h2>6. Suspensión y terminación</h2>
      <p>
        Podemos suspender o cancelar tu cuenta si incumplís estos Términos, incluyendo el uso
        del Servicio para fines ilegales o el envío de comunicaciones no solicitadas (spam) a
        Clientes Finales. Podés cancelar tu cuenta en cualquier momento desde la sección de
        Configuración.
      </p>

      <h2>7. Ley aplicable y jurisdicción</h2>
      <p>
        Para comercios domiciliados en Argentina, estos Términos se rigen por las leyes de la
        República Argentina, sometiéndose a los tribunales ordinarios de{' '}
        <span className="lg-doc-placeholder">[CIUDAD, ARGENTINA]</span>.
      </p>
      <p>
        Para comercios domiciliados en España o la Unión Europea, estos Términos se rigen por
        la legislación española, sometiéndose a los juzgados y tribunales de{' '}
        <span className="lg-doc-placeholder">[CIUDAD, ESPAÑA]</span>, sin perjuicio de los
        derechos que la normativa de protección al consumidor pudiera reconocerte en tu país de
        residencia.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        Podemos actualizar estos Términos ocasionalmente. Te notificaremos cambios materiales
        con al menos <span className="lg-doc-placeholder">[X días]</span> de anticipación por
        email o dentro del dashboard.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Para consultas sobre estos Términos, escribinos a{' '}
        <span className="lg-doc-placeholder">[EMAIL DE CONTACTO LEGAL]</span>.
      </p>
    </div>
  )
}