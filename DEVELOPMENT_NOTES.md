# Stampa — Notas de desarrollo (actualizado Julio 2026)

## URLs de producción
```
Backend:   https://surge-malaga-olive.vercel.app
Dashboard: https://stampa-dashboard-v2.vercel.app
```

## Credenciales de producción
```
Owner producción: matias@stampa.app / stampa2025
```

## Repos de GitHub
```
Backend:   github.com/stampaminiz-cloud/SurgeMalaga (carpeta /backend)
Dashboard: github.com/stampaminiz-cloud/stampa_dashboardV2
```
Git config para commits: `stampa.miniz@gmail.com` / `stampaminiz-cloud`

## Stack técnico
```
Frontend:  Next.js 14 + TypeScript + Tailwind (stampa-dashboardV2/)
Backend:   Node.js + Express + Mongoose (SurgeMalaga/backend/)
Database:  MongoDB Atlas
  - stampa-dev (desarrollo): mongodb+srv://stampaminiz_db_user:...@stampa-dev...
  - surgemalagacluster (producción): datos reales de Surge Málaga
Hosting:   Vercel (backend y dashboard)
Auth:      JWT (30 días owners, 7 días scanners)
Wallets:   Apple PassKit + Google Wallet API
Push:      APN (Apple) + Google Wallet PATCH
Cron:      cron-job.org → ping cada 5 min a surge-malaga-olive.vercel.app
```

## Arquitectura multi-tenant
```
Owner (cuenta principal)
  └── Business[] (locales — gateado por plan.maxLocations)
        ├── Card[] (tarjetas stamp/points/membership)
        │     └── FormField[] (campos del formulario)
        ├── TeamUser[] (managers y scanners)
        ├── Customer[] (clientes registrados)
        └── Notifications (historial + programadas)
```

## Planes
| Feature           | Starter | Growth | Pro | Enterprise |
|-------------------|---------|--------|-----|------------|
| Locales           | 1       | 1      | 3   | ilimitados |
| Tarjetas activas  | 1       | 3      | ilimitadas | ilimitadas |
| Campos custom     | 0       | 3      | 3   | 10         |
| Miembros equipo   | 1       | 5      | ilimitados | ilimitados |
| Notif/mes         | 100     | 1000   | ilimitadas | ilimitadas |

## Variables de entorno

### Backend (.env)
```
PORT=5002
NODE_ENV=production (Vercel) / development (local)
FRONTEND_URL=https://surge-malaga-card.vercel.app
DASHBOARD_URL=https://stampa-dashboard-v2.vercel.app
API_URL=https://surge-malaga-olive.vercel.app
MONGO_URI=... (stampa-dev para local, surgemalagacluster para prod)
JWT_SECRET=...
SURGE_OWNER_EMAIL=owner@surgemalaga.com
SURGE_OWNER_TEMP_PASSWORD=changeme123
# Apple Wallet + Google Wallet vars (en Vercel de producción)
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5002 (local)
NEXT_PUBLIC_API_URL=https://surge-malaga-olive.vercel.app (producción en Vercel)
```

## API Endpoints

### Auth (públicos)
```
POST /api/auth/register       → crea owner + JWT
POST /api/auth/login          → valida credenciales + JWT
GET  /api/auth/me             → owner + sus negocios (requiere JWT)
POST /api/auth/scanner-login  → PIN → JWT de scanner
```

### Businesses (requieren JWT)
```
POST /api/businesses/onboarding     → crea business + card + formfields
GET  /api/businesses                → lista negocios del owner
GET  /api/businesses/:id            → detalle
PATCH /api/businesses/:id           → actualiza
DELETE /api/businesses/:id          → soft delete
GET  /api/businesses/:id/analytics  → métricas de clientes
GET  /api/businesses/:id/rewards-stats → métricas del programa
GET  /api/businesses/:id/customers  → lista clientes
```

### Cards, Fields, Team, Notifications
```
GET/POST/PATCH/DELETE /api/businesses/:id/cards
GET/POST/PATCH/DELETE /api/businesses/:id/cards/:cardId/fields
PUT /api/businesses/:id/cards/:cardId/fields/reorder
GET/POST/PATCH/DELETE /api/businesses/:id/team
POST /api/businesses/:id/notifications/broadcast
POST /api/businesses/:id/notifications/scheduled
GET  /api/businesses/:id/notifications
```

### Legacy (Surge Málaga, sin cambios)
```
POST /api/customers/form
GET  /api/customers/card/:id
POST /api/customers/qr-code-scan
POST /api/customers/add-to-wallet/:id
```

## Frontend — Patrón de datos (MUY IMPORTANTE)
```
dashboard-page.tsx
  → loadBusiness() carga TODO al inicio:
    - owner, businesses → apiMe()
    - team              → apiGetTeam()
    - cards             → apiGetCards()
    - analyticsData     → fetch /analytics
    - rewardsData       → fetch /rewards-stats
    - customers         → fetch /customers
    - notifHistory      → fetch /notifications
  → Pasa datos como props a cada tab
  → Tabs solo escriben y llaman onRefresh() = loadBusiness()
  → key={businessId} en tabs para forzar remonte cuando llegan datos reales
```

## Estado de cada Tab

### Conectados al backend real:
- ✅ Overview — analytics + rewards reales, empty state cuando no hay datos
- ✅ Design — cards reales, CRUD funcionando
- ✅ Settings — carga y guarda datos reales, llama onRefresh al guardar
- ✅ Users/Team — CRUD real, avatares en sidebar colapsado
- ✅ Form — campos reales, guarda cambios
- ✅ Notifications/Campañas — broadcast real, counts reales de customers
- ✅ Customers — endpoint real (vacío hasta migrate-surge-malaga.js)
- ✅ Analytics — métricas reales, empty state cuando no hay datos
- ✅ Rewards/Premios — métricas reales, empty state cuando no hay datos

### Brandbook / Design System
```
Sistema: "Botanica Daylight"
Sidebar: #1E3329
Fondo:   #FBF6EE
Cards:   #FFFFFF
Acento:  #C75D3A
Verde:   #01231A
Texto:   #2B2620

Mascota: "Stampy" (isologo naranja)
  → Archivo: /public/stampa-mascot.png
  → Aparece en: Login, Register, Onboarding, Sidebar, empty states, Stampy tips
Wordmark: "STAMPA" (logo texto naranja)
  → Archivo: /public/stampa-wordmark.png
  → Sidebar expandido: filter brightness(0) invert(1) → blanco
  → Login/Register/Onboarding: color original naranja
```

## Errores importantes documentados

1. **CORS** → agregar cada cliente a allowedOrigins en server.js. PATCH/DELETE necesitan estar en methods
2. **useState(prop) no es reactivo** → usar key o useEffect(() => setState(prop), [prop])
3. **MongoDB _id vs id** → siempre mapear _id → id en respuestas de API
4. **useEffect antes de useState** → causa crash, orden importa
5. **Botón no llama onSave** → SIEMPRE verificar con console.log primero antes de tocar código
6. **businessId null al cargar** → usar businesses[0]._id del backend, ignorar localStorage stale
7. **CardManager no actualiza** → key={realCards ? 'api' : 'mock'} + useEffect(() => setCards(init), [init])
8. **Módulos no subidos a Git** → git status antes de cada deploy
9. **Deployment bloqueado en Vercel** → git config user.email stampa.miniz@gmail.com

## PENDIENTE — Lista completa

### Alta prioridad:
```
→ migrate-surge-malaga.js → correr con MONGO_URI de producción para conectar clientes reales
→ Settings: Program Rules — agregar más info explicativa al usuario
→ Settings: cambio de sector con modal de confirmación
→ Login: mensaje de error desaparece muy rápido (aumentar duración)
→ Login/Register: términos y condiciones legales (España + Argentina)
→ Onboarding Step 5: plan gate para Starter (sin colores/logo propio)
→ Onboarding desktop: verificar que el rediseño se ve bien
→ Flash de datos/HTML al cargar el dashboard (spinner)
```

### Media prioridad:
```
→ Register: verificación de email con link de confirmación
→ Idioma: consistencia completa ES/EN en todos los tabs
→ Labels Analytics: cambiar según tipo de tarjeta activa
→ Settings: alertas por email funcionales
→ Settings: upgrade plan funcional con link a planes
→ Topbar campana: feed de actividad real (nuevo cliente, canje, near prize)
```

### Post-MVP:
```
→ Tab "Actividad" nuevo (feed en tiempo real)
→ Scanner web PWA (Plan Growth)
→ Multi-local (Plan Pro — 3 locales)
→ MercadoPago Point integration (Plan Enterprise)
→ White label (Plan Enterprise)
→ Cron job para reset mensual de notificaciones
→ GDPR compliance completo para España/EU
```

## Comandos útiles

```bash
# Generar JWT_SECRET
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Arrancar backend local
cd ~/Documents/SurgeMalaga/backend && npm run dev

# Arrancar dashboard local
cd ~/Documents/stampa-dashboardV2 && npm run dev

# Ver status antes de commit
git status

# Correr migración (cuando esté listo)
node migrate-surge-malaga.js
```

## Próxima sesión — por dónde empezar
1. Verificar onboarding desktop en producción
2. migrate-surge-malaga.js con MONGO_URI de producción
3. Settings: Program Rules + cambio de sector
4. Login: mensaje de error + términos y condiciones
5. Flash de datos al cargar dashboard
