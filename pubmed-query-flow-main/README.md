# 🧬 RevMed Assist - Frontend

**Frontend React per sistema di ricerca e download automatico di articoli PubMed**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-blue.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-purple.svg)](https://vitejs.dev/)

## 🎯 Caratteristiche

- ✅ **Interfaccia moderna** con design system medical-tech
- ✅ **Query builder avanzato** con operatori booleani PubMed
- ✅ **Filtri intelligenti** (data, tipo studio, open access)
- ✅ **Progress tracking real-time** con statistiche live
- ✅ **Responsive design** ottimizzato per desktop e mobile
- ✅ **Integrazione API** con backend Flask per download automatico

## 🚀 Quick Start

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Installazione

```bash
# 1. Clona il repository
git clone https://github.com/your-username/revmed-assist.git
cd revmed-assist

# 2. Installa le dipendenze
npm install

# 3. Configura l'ambiente
cp env.example .env
# Modifica .env con l'URL del tuo backend

# 4. Avvia in modalità sviluppo
npm run dev
```

### Configurazione

Crea un file `.env` nella root del progetto:

```bash
# Per sviluppo locale
VITE_API_URL=http://localhost:5000

# Per produzione
VITE_API_URL=https://your-backend-domain.com
```

## 🛠️ Script Disponibili

```bash
# Sviluppo
npm run dev          # Avvia server sviluppo
npm run build        # Build per produzione
npm run preview      # Preview build produzione
npm run lint         # Linting con ESLint

# Deploy
./build-and-deploy.sh development  # Build per sviluppo
./build-and-deploy.sh production   # Build per produzione
```

## 📁 Struttura Progetto

```
src/
├── components/          # Componenti UI riutilizzabili
│   ├── ui/             # Componenti base (shadcn/ui)
│   ├── SearchProgress.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── hooks/              # Hook personalizzati
│   ├── usePubMedSearch.ts
│   └── use-toast.ts
├── lib/                # Servizi e utilities
│   ├── api.ts          # Servizio API per backend
│   └── utils.ts
├── pages/              # Pagine dell'applicazione
│   ├── Home.tsx
│   ├── Tool.tsx        # Pagina principale ricerca
│   ├── Pacchetti.tsx
│   └── ...
└── main.tsx            # Entry point
```

## 🎨 Design System

### Palette Colori
- **Primary**: Teal (#11C5BB) - Accent medical
- **Text**: Charcoal (#0B0B0D) - Testo principale  
- **Background**: Light Gray (#E6E7EB) - Sfondo
- **Success**: Green - Operazioni riuscite
- **Warning**: Yellow - Avvisi
- **Error**: Red - Errori

### Componenti
Basato su [shadcn/ui](https://ui.shadcn.com/) con personalizzazioni medical:
- Cards con bordi medical
- Bottoni con gradienti teal
- Progress bars animate
- Toast notifications
- Modal dialogs

## 🔧 Tecnologie

- **[React 18](https://reactjs.org/)** - Framework UI
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool veloce
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Componenti UI
- **[React Router](https://reactrouter.com/)** - Routing
- **[TanStack Query](https://tanstack.com/query)** - State management
- **[Lucide React](https://lucide.dev/)** - Icone

## 🌐 API Integration

Il frontend si connette al backend Flask tramite REST API:

```typescript
// Esempio utilizzo API
import { apiService } from '@/lib/api';

// Avvia ricerca
await apiService.startSearch({
  query: "actinic keratosis AND treatment",
  max_total: 100,
  batch_size: 5,
  save_path: "./downloads"
});

// Monitora progresso
const status = await apiService.getSearchStatus();
```

### Endpoints Supportati
- `POST /api/search` - Avvia nuova ricerca PubMed
- `GET /api/status` - Stato ricerca corrente
- `POST /api/stop` - Interrompi ricerca
- `POST /api/browse` - Suggerimenti cartelle

## 🚀 Deploy

### Sviluppo
```bash
npm run dev
# Frontend: http://localhost:5173
```

### Produzione
```bash
npm run build
# I file build sono in dist/
```

Per deploy completo con backend, vedi `DEPLOYMENT_INTEGRATED.md`.

## 🤝 Contribuire

1. Fork del repository
2. Crea branch feature: `git checkout -b feature/nuova-funzionalita`
3. Commit changes: `git commit -m 'Aggiungi nuova funzionalità'`
4. Push branch: `git push origin feature/nuova-funzionalita`
5. Crea Pull Request

### Guidelines
- **Codice**: TypeScript strict mode, ESLint rules
- **Styling**: Tailwind CSS, design system medical
- **Testing**: Jest per unit tests
- **Docs**: JSDoc per funzioni, README aggiornati

## 📚 Documentazione

- **[Guida Deploy Completa](DEPLOYMENT_INTEGRATED.md)** - Deploy con backend
- **[Documentazione Integrata](README_INTEGRATED.md)** - Sistema completo
- **[shadcn/ui Docs](https://ui.shadcn.com/)** - Componenti UI
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Styling

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori dettagli.

## 🙏 Ringraziamenti

- [shadcn/ui](https://ui.shadcn.com/) per i componenti UI
- [Tailwind CSS](https://tailwindcss.com/) per il framework CSS
- [Lucide](https://lucide.dev/) per le icone
- [PubMed](https://pubmed.ncbi.nlm.nih.gov/) per l'API di ricerca

---

*Sviluppato con ❤️ per la comunità medica e scientifica*