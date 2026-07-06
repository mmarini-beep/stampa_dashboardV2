'use client'
import React, { useState, useEffect } from 'react'
import { apiRegister } from '@/lib/api'

function StampaFrog({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="32" cy="28" r="15" fill="#E46C31"/>
      <circle cx="68" cy="28" r="15" fill="#E46C31"/>
      <circle cx="32" cy="28" r="7" fill="#01231A"/>
      <circle cx="68" cy="28" r="7" fill="#01231A"/>
      <circle cx="35" cy="25" r="3" fill="#E46C31"/>
      <circle cx="71" cy="25" r="3" fill="#E46C31"/>
      <ellipse cx="50" cy="50" rx="36" ry="14" fill="#E46C31"/>
      <path d="M14 50 Q2 62 10 76" stroke="#E46C31" strokeWidth="9" strokeLinecap="round" fill="none"/>
      <path d="M86 50 Q98 62 90 76" stroke="#E46C31" strokeWidth="9" strokeLinecap="round" fill="none"/>
      <path d="M38 63 Q35 78 30 88" stroke="#E46C31" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <path d="M62 63 Q65 78 70 88" stroke="#E46C31" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <ellipse cx="27" cy="91" rx="11" ry="5" fill="#E46C31"/>
      <ellipse cx="73" cy="91" rx="11" ry="5" fill="#E46C31"/>
    </svg>
  )
}

const CSS = `
  :root { --font-display: 'Plus Jakarta Sans', sans-serif; --font-body: 'Inter', sans-serif; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: var(--font-body); background: #FBF6EE; color: #2B2620; }
  .rg-shell { min-height: 100vh; display: flex; }
  .rg-left { width: 400px; flex-shrink: 0; background: #01231A; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px 40px; gap: 36px; }
  .rg-logo { display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .rg-wordmark { font-family: var(--font-display); font-weight: 800; font-size: 22px; color: #F7EFE8; letter-spacing: .08em; }
  .rg-left-title { font-family: var(--font-display); font-weight: 700; font-size: 28px; color: #F7EFE8; line-height: 1.25; text-align: center; }
  .rg-left-title em { color: #E46C31; font-style: normal; }
  .rg-steps { display: flex; flex-direction: column; gap: 14px; width: 100%; }
  .rg-step { display: flex; align-items: center; gap: 14px; padding: 12px 16px; background: rgba(247,239,232,.06); border-radius: 12px; }
  .rg-step-num { width: 28px; height: 28px; border-radius: 50%; background: #E46C31; color: #fff; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: var(--font-display); }
  .rg-step-title { font-size: 13px; font-weight: 600; color: #F7EFE8; display: block; }
  .rg-step-sub { font-size: 11.5px; color: rgba(247,239,232,.45); margin-top: 1px; }
  /* Right */
  .rg-right { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px; background: #FBF6EE; position: relative; overflow: hidden; }
  .rg-right::before { content: ''; position: absolute; width: 500px; height: 500px; border-radius: 50%; background: rgba(230,108,49,.06); top: -150px; right: -150px; pointer-events: none; }
  .rg-right::after { content: ''; position: absolute; width: 350px; height: 350px; border-radius: 50%; background: rgba(1,35,26,.04); bottom: -120px; left: -80px; pointer-events: none; }
  .rg-card { background: #FFFFFF; border: 1px solid rgba(43,38,32,.08); border-radius: 24px; padding: 36px; width: 100%; max-width: 400px; box-shadow: 0 8px 40px rgba(43,38,32,.1); position: relative; z-index: 1; }
  .rg-card-title { font-family: var(--font-display); font-weight: 700; font-size: 20px; color: #2B2620; margin-bottom: 4px; }
  .rg-card-sub { font-size: 13px; color: rgba(43,38,32,.45); margin-bottom: 24px; }
  .rg-card-sub em { color: #E46C31; font-style: normal; font-weight: 600; }
  .rg-field { margin-bottom: 14px; }
  .rg-label { font-size: 11px; font-weight: 700; color: rgba(43,38,32,.5); text-transform: uppercase; letter-spacing: .06em; display: block; margin-bottom: 7px; }
  .rg-input { width: 100%; padding: 13px 14px; font-size: 14px; border: 1.5px solid rgba(43,38,32,.12); border-radius: 12px; background: #FBF6EE; color: #2B2620; font-family: var(--font-body); outline: none; transition: border-color .15s; }
  .rg-input:focus { border-color: #E46C31; background: #FFFFFF; }
  .rg-input--error { border-color: #B23B3B; }
  .rg-error { font-size: 11px; color: #B23B3B; margin-top: 5px; }
  .rg-divider { height: 1px; background: rgba(43,38,32,.08); margin: 8px 0 16px; }
  .rg-terms { display: flex; align-items: flex-start; gap: 10px; cursor: pointer; margin-bottom: 16px; }
  .rg-checkbox { width: 18px; height: 18px; border-radius: 5px; border: 1.5px solid rgba(43,38,32,.2); flex-shrink: 0; display: flex; align-items: center; justify-content: center; margin-top: 1px; transition: all .15s; }
  .rg-checkbox--on { background: #E46C31; border-color: #E46C31; }
  .rg-terms-text { font-size: 12px; color: rgba(43,38,32,.6); line-height: 1.5; }
  .rg-terms-text a { color: #E46C31; text-decoration: none; font-weight: 600; }
  .rg-btn { width: 100%; background: #E46C31; color: #fff; border: none; border-radius: 12px; padding: 14px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: var(--font-display); transition: background .15s; }
  .rg-btn:hover { background: #C85A20; }
  .rg-btn:disabled { opacity: .6; cursor: not-allowed; }
  .rg-footer { text-align: center; margin-top: 16px; font-size: 12.5px; color: rgba(43,38,32,.4); }
  .rg-footer a { color: #E46C31; text-decoration: none; font-weight: 600; }
  @media (max-width: 768px) {
    .rg-shell { flex-direction: column; }
    .rg-left { width: 100%; padding: 32px 24px; gap: 20px; }
    .rg-left-title { font-size: 22px; }
    .rg-steps { display: none; }
    .rg-right { padding: 20px; }
    .rg-card { padding: 24px; }
  }
`

function injectStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById('rg-css')) return
  const s = document.createElement('style')
  s.id = 'rg-css'
  s.textContent = CSS
  document.head.appendChild(s)
}

export default function RegisterPage() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirm: '', terms: false })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => { injectStyles() }, [])

  function set(field: string, value: string | boolean) {
    setForm({ ...form, [field]: value })
    if (errors[field]) setErrors({ ...errors, [field]: '' })
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!form.fullName.trim()) e.fullName = 'Ingresá tu nombre'
    if (!form.email.trim()) e.email = 'Ingresá tu email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.password) e.password = 'Elegí una contraseña'
    else if (form.password.length < 8) e.password = 'Mínimo 8 caracteres'
    if (form.password !== form.confirm) e.confirm = 'Las contraseñas no coinciden'
    if (!form.terms) e.terms = 'Tenés que aceptar los términos'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    try {
      await apiRegister({
        email: form.email,
        password: form.password,
        fullName: form.fullName,
        termsAccepted: 'true',
      })
      window.location.href = '/onboarding'
    } catch (err: any) {
      setErrors({ email: err.error || 'Error al crear la cuenta' })
      setLoading(false)
    }
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      <div className="rg-shell">
        <div className="rg-left">
          <div className="rg-logo">
            <StampaFrog size={56} />
            <div className="rg-wordmark">STAMPA</div>
          </div>
          <div className="rg-left-title">La fidelidad no es<br/>un algoritmo.<br/><em>Es humana.</em></div>
          <div className="rg-steps">
            {[
              { n: 1, title: 'Creá tu cuenta', sub: 'Solo te lleva 30 segundos' },
              { n: 2, title: 'Configurá tu programa', sub: 'Sellos, puntos o membresía' },
              { n: 3, title: 'Compartí el link', sub: 'Tus clientes se registran al instante' },
            ].map(({ n, title, sub }) => (
              <div key={n} className="rg-step">
                <div className="rg-step-num">{n}</div>
                <div>
                  <span className="rg-step-title">{title}</span>
                  <div className="rg-step-sub">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rg-right">
          <div className="rg-card">
            <div className="rg-card-title">Crear cuenta</div>
            <div className="rg-card-sub">Creá tu cuenta para configurar tu programa de fidelización.</div>

            <form onSubmit={handleSubmit}>
              <div className="rg-field">
                <label className="rg-label">Nombre completo</label>
                <input className={`rg-input${errors.fullName ? ' rg-input--error' : ''}`} type="text" placeholder="Tu nombre y apellido" value={form.fullName} onChange={e => set('fullName', e.target.value)} autoFocus />
                {errors.fullName && <div className="rg-error">{errors.fullName}</div>}
              </div>
              <div className="rg-field">
                <label className="rg-label">Email</label>
                <input className={`rg-input${errors.email ? ' rg-input--error' : ''}`} type="email" placeholder="tu@negocio.com" value={form.email} onChange={e => set('email', e.target.value)} />
                {errors.email && <div className="rg-error">{errors.email}</div>}
              </div>

              <div className="rg-divider" />

              <div className="rg-field">
                <label className="rg-label">Contraseña</label>
                <input className={`rg-input${errors.password ? ' rg-input--error' : ''}`} type="password" placeholder="Mínimo 8 caracteres" value={form.password} onChange={e => set('password', e.target.value)} />
                {errors.password && <div className="rg-error">{errors.password}</div>}
              </div>

              <div className="rg-field">
                <label className="rg-label">Confirmar contraseña</label>
                <input className={`rg-input${errors.confirm ? ' rg-input--error' : ''}`} type="password" placeholder="Repetí la contraseña" value={form.confirm} onChange={e => set('confirm', e.target.value)} />
                {errors.confirm && <div className="rg-error">{errors.confirm}</div>}
              </div>

              <div className="rg-terms" onClick={() => set('terms', !form.terms)}>
                <div className={`rg-checkbox${form.terms ? ' rg-checkbox--on' : ''}`}>
                  {form.terms && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                </div>
                <span className="rg-terms-text">
                  Acepto los <a href="#" onClick={e => e.stopPropagation()}>Términos</a> y la <a href="#" onClick={e => e.stopPropagation()}>Política de privacidad</a>
                </span>
              </div>
              {errors.terms && <div className="rg-error" style={{ marginBottom: 12 }}>{errors.terms}</div>}

              <button className="rg-btn" type="submit" disabled={loading}>
                {loading ? 'Creando tu cuenta...' : 'Crear cuenta y continuar →'}
              </button>
            </form>

            <div className="rg-footer">
              ¿Ya tenés cuenta? <a href="/login">Iniciá sesión</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}