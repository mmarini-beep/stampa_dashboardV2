'use client'
import React, { useEffect } from 'react'

const CSS = `
  .lg-doc { max-width: 760px; margin: 0 auto; padding: 56px 24px 80px; font-family: 'Inter', sans-serif; color: #2B2620; background: #FBF6EE; }
  .lg-doc h1 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 30px; margin-bottom: 6px; }
  .lg-doc .lg-doc-updated { font-size: 12.5px; color: rgba(43,38,32,.45); margin-bottom: 32px; }
  .lg-doc h2 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 17px; margin-top: 32px; margin-bottom: 10px; color: #2B2620; }
  .lg-doc h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 14.5px; margin-top: 18px; margin-bottom: 8px; color: #2B2620; }
  .lg-doc p, .lg-doc li { font-size: 14px; line-height: 1.7; color: rgba(43,38,32,.8); margin-bottom: 10px; }
  .lg-doc ul { padding-left: 20px; margin-bottom: 12px; }
  .lg-doc .lg-doc-placeholder { background: rgba(228,108,49,.12); padding: 1px 5px; border-radius: 4px; font-weight: 600; }
  .lg-doc a { color: #E46C31; }
  .lg-doc-badge-row { display: flex; gap: 8px; margin-bottom: 28px; }
  .lg-doc-badge { font-size: 11px; font-weight: 700; background: rgba(1,35,26,.08); color: #01231A; padding: 4px 12px; border-radius: 20px; }
`

function injectStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById('lg-doc-css')) return
  const s = document.createElement('style')
  s.id = 'lg-doc-css'
  s.textContent = CSS
  document.head.appendChild(s)
}

export default function PrivacyPage() {
  useEffect(() => { injectStyles() }, [])

  return (
    <div className="lg-doc">
      <h1>Política de privacidad</h1>
      <div className="lg-doc-updated">Última actualización: <span className="lg-doc-placeholder">[FECHA]</span> — Borrador pendiente de revisión legal</div>
      <div className="lg-doc-badge-row">
        <span className="lg-doc-badge">Argentina · Ley 25.326</span>
        <span className="lg-doc-badge">España / UE · RGPD</span>
      </div>

      <p>
        Esta Política describe cómo <span className="lg-doc-placeholder">[NOMBRE LEGAL DE LA EMPRESA]</span>{' '}
        ("Stampa") trata los datos personales de dos grupos distintos de personas: (a) los
        dueños de negocio y su equipo que usan el dashboard de Stampa ("Comercios"), y (b) los
        clientes finales de esos Comercios que se registran en un programa de fidelización
        ("Clientes Finales").
      </p>

      <h2>1. Quién es responsable de qué datos</h2>
      <p>
        <strong>Datos de Comercios</strong> (owner, equipo, facturación): Stampa es el{' '}
        <strong>responsable del tratamiento</strong>.
      </p>
      <p>
        <strong>Datos de Clientes Finales</strong> (nombre, email, fecha de nacimiento,
        preferencias, historial de sellos/visitas): el <strong>Comercio</strong> es el
        responsable del tratamiento, y Stampa actúa como <strong>encargado del tratamiento</strong>,
        procesando esos datos únicamente siguiendo las instrucciones del Comercio y con el fin
        de prestar el Servicio. Si sos un Cliente Final y querés ejercer tus derechos sobre tus
        datos, contactá directamente al Comercio donde te registraste; Stampa colabora con el
        Comercio para dar curso a ese pedido.
      </p>

      <h2>2. Qué datos recolectamos</h2>
      <h3>De los Comercios</h3>
      <ul>
        <li>Nombre, email, teléfono, contraseña (hasheada)</li>
        <li>Datos del negocio: nombre, rubro, dirección, logo, color de marca</li>
        <li>Datos de facturación y plan contratado</li>
      </ul>
      <h3>De los Clientes Finales (recolectados por el Comercio a través de Stampa)</h3>
      <ul>
        <li>Nombre completo, email, fecha de nacimiento</li>
        <li>Respuestas a los campos del formulario que el Comercio configuró (preferencias, favoritos)</li>
        <li>Progreso del programa: sellos, puntos, nivel de membresía, historial de visitas</li>
        <li>Token del dispositivo para notificaciones push de Apple Wallet / Google Wallet</li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <ul>
        <li>Prestar el Servicio (crear y actualizar la tarjeta digital, registrar sellos, enviar notificaciones)</li>
        <li>Analítica agregada para que el Comercio entienda el comportamiento de sus clientes</li>
        <li>Comunicaciones operativas (confirmaciones, alertas de servicio)</li>
        <li>Cumplimiento de obligaciones legales y prevención de fraude</li>
      </ul>

      <h2>4. Base legal (España / UE — RGPD)</h2>
      <ul>
        <li><strong>Ejecución de un contrato</strong> (art. 6.1.b RGPD): para prestar el Servicio al Comercio y gestionar la tarjeta del Cliente Final.</li>
        <li><strong>Consentimiento</strong> (art. 6.1.a RGPD): para el envío de notificaciones push promocionales, otorgado por el Cliente Final al registrarse.</li>
        <li><strong>Interés legítimo</strong> (art. 6.1.f RGPD): para analítica agregada y prevención de fraude.</li>
      </ul>
      <p>
        Los Clientes Finales en España/UE tienen derecho a acceder, rectificar, suprimir,
        limitar el tratamiento, oponerse y solicitar la portabilidad de sus datos, contactando
        al Comercio correspondiente. También tienen derecho a reclamar ante la{' '}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos (AEPD)</a>.
      </p>

      <h2>5. Base legal (Argentina — Ley 25.326)</h2>
      <p>
        El tratamiento de datos personales de Comercios y Clientes Finales en Argentina se
        rige por la Ley de Protección de Datos Personales N° 25.326 y su reglamentación. Los
        titulares de los datos tienen derecho de acceso, rectificación, actualización y
        supresión (derechos ARCO), que pueden ejercer contactando al Comercio correspondiente
        o a <span className="lg-doc-placeholder">[EMAIL DE CONTACTO]</span>. La Agencia de
        Acceso a la Información Pública (AAIP), como Órgano de Control de la Ley 25.326, tiene
        la atribución de atender las denuncias y reclamos que se interpongan con relación al
        incumplimiento de las normas sobre protección de datos personales.
      </p>

      <h2>6. Con quién compartimos datos (encargados de tratamiento)</h2>
      <p>Usamos los siguientes proveedores para prestar el Servicio, cada uno bajo su propio acuerdo de tratamiento de datos:</p>
      <ul>
        <li><strong>MongoDB Atlas</strong> — almacenamiento de base de datos</li>
        <li><strong>Vercel</strong> — hosting de la aplicación</li>
        <li><strong>Apple Inc.</strong> y <strong>Google LLC</strong> — emisión y actualización de las tarjetas Wallet</li>
        <li><span className="lg-doc-placeholder">[Otros proveedores: pasarela de pago, email transaccional, etc.]</span></li>
      </ul>

      <h2>7. Transferencias internacionales</h2>
      <p>
        Algunos de nuestros proveedores (por ejemplo, Apple y Google) pueden procesar datos
        fuera de Argentina o del Espacio Económico Europeo. Cuando esto ocurre para datos de
        Clientes Finales en la UE, nos apoyamos en{' '}
        <span className="lg-doc-placeholder">[cláusulas contractuales tipo (SCC) / mecanismo de transferencia aplicable — confirmar con legal]</span>.
      </p>

      <h2>8. Conservación de datos</h2>
      <p>
        Conservamos los datos mientras la cuenta del Comercio esté activa y{' '}
        <span className="lg-doc-placeholder">[X meses/años]</span> después de su baja, salvo
        que la ley exija un plazo distinto o el Comercio solicite la eliminación antes.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        El Servicio no está dirigido a menores de <span className="lg-doc-placeholder">[13/14/16 años — depende de la jurisdicción]</span>.
        Si un Comercio opera un programa de fidelización dirigido a menores, es su
        responsabilidad obtener el consentimiento parental correspondiente.
      </p>

      <h2>10. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta Política ocasionalmente. Los cambios materiales se notificarán
        por email o dentro del dashboard con al menos <span className="lg-doc-placeholder">[X días]</span> de anticipación.
      </p>

      <h2>11. Contacto</h2>
      <p>
        Para consultas sobre esta Política o para ejercer tus derechos, escribinos a{' '}
        <span className="lg-doc-placeholder">[EMAIL DE CONTACTO / DPO]</span>.
      </p>
    </div>
  )
}