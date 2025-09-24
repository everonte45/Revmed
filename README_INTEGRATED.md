# 🧬 RevMed Assist - Frontend React + Backend Flask Integrato

**Sistema completo per ricerca e download automatico di articoli PubMed con interfaccia moderna e API robusta.**

## 🎯 Caratteristiche Principali

### Frontend React (TypeScript + Tailwind + shadcn/ui)
- ✅ **Interfaccia moderna** con design system medical-tech
- ✅ **Query builder avanzato** con operatori booleani
- ✅ **Filtri intelligenti** (data, tipo studio, open access)
- ✅ **Progress tracking real-time** con statistiche live
- ✅ **Responsive design** ottimizzato per desktop e mobile
- ✅ **Gestione errori** completa con toast notifications

### Backend Flask (Python + BioPython)
- ✅ **API RESTful** con CORS configurato
- ✅ **Integrazione PubMed** con BioPython
- ✅ **Download automatico** PDF open access
- ✅ **Progress monitoring** con stato persistente
- ✅ **Gestione errori** robusta e logging
- ✅ **Rate limiting** rispettoso dei limiti NCBI

## 🚀 Quick Start

### Sviluppo Locale

#### 1. Setup Backend
```bash
# Vai nella cartella backend
cd analisi_sistematica

# Setup automatico
python setup-dev.py

# Avvia backend
venv/bin/python app.py  # Linux/Mac
venv\Scripts\python app.py  # Windows
```

#### 2. Setup Frontend
```bash
# Vai nella cartella frontend
cd pubmed-query-flow-main

# Installa dipendenze
npm install

# Crea configurazione
cp env.example .env
# Modifica .env con: VITE_API_URL=http://localhost:5000

# Avvia in sviluppo
npm run dev
```

#### 3. Testa l'Applicazione
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api/status

### Deploy Produzione

#### Opzione 1: Deploy Automatico
```bash
# Nel frontend
./build-and-deploy.sh production

# Segui le istruzioni per caricare i file sul server
```

#### Opzione 2: Deploy Manuale
Segui la guida completa in `DEPLOYMENT_INTEGRATED.md`

## 📁 Struttura Progetto

```
revmed-assist/
├── frontend/                    # React Frontend
│   ├── src/
│   │   ├── components/         # Componenti UI
│   │   ├── hooks/              # Hook personalizzati
│   │   ├── lib/                # Servizi API
│   │   └── pages/              # Pagine applicazione
│   ├── public/                 # Asset statici
│   └── dist/                   # Build produzione
│
├── backend/                     # Flask Backend
│   ├── app.py                  # Server Flask principale
│   ├── requirements_production.txt
│   └── downloads/              # PDF scaricati
│
└── deployment/                  # Configurazioni deploy
    ├── nginx.conf
    ├── revmed-assist.service
    └── deploy.sh
```

## 🔧 Configurazione

### Variabili Ambiente

#### Frontend (.env)
```bash
VITE_API_URL=http://localhost:5000  # URL backend
```

#### Backend (app.py)
```python
# Configurazione NCBI
Entrez.email = "your-email@example.com"
Entrez.tool = "revmed_assist_web"

# Configurazione Flask
app.config.update(
    DEBUG=False,  # True per sviluppo
    SECRET_KEY='your-secret-key'
)
```

### Personalizzazione

#### Colori e Tema
Modifica `src/index.css` per personalizzare il design system:
```css
:root {
  --teal: 178 85% 42%;           /* Colore principale */
  --charcoal: 220 14% 4%;        /* Testo principale */
  --medical-bg: 220 20% 98%;     /* Sfondo medical */
}
```

#### API Endpoints
Il backend espone questi endpoint:
- `GET /api/status` - Stato ricerca corrente
- `POST /api/search` - Avvia nuova ricerca
- `POST /api/stop` - Interrompi ricerca
- `POST /api/browse` - Suggerimenti cartelle

## 🎨 Design System

### Palette Colori
- **Primary**: Teal (#11C5BB) - Accent medical
- **Text**: Charcoal (#0B0B0D) - Testo principale
- **Background**: Light Gray (#E6E7EB) - Sfondo
- **Success**: Green - Operazioni riuscite
- **Warning**: Yellow - Avvisi
- **Error**: Red - Errori

### Typography
- **Headings**: Sora (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Code**: Courier New

### Componenti
Basato su shadcn/ui con personalizzazioni medical:
- Cards con bordi medical
- Bottoni con gradienti teal
- Progress bars animate
- Toast notifications
- Modal dialogs

## 📊 Funzionalità Avanzate

### Query Builder
- **Termini multipli** con operatori AND/OR/NOT
- **Filtri per campo**: Titolo, Abstract, MeSH Terms
- **Filtri temporali**: Range date pubblicazione
- **Filtri studio**: RCT, Meta-analisi, etc.
- **Preview query** in tempo reale

### Progress Tracking
- **Monitoraggio real-time** con polling API
- **Statistiche live**: Scaricati, Falliti, Progresso
- **Log attività** con colori per livello
- **Stop/Resume** funzionalità

### Download Management
- **Batch processing** configurabile
- **Retry automatico** per download falliti
- **Validazione PDF** prima del salvataggio
- **Organizzazione file** per PMID

## 🔒 Sicurezza

### Backend
- **CORS configurato** per domini autorizzati
- **Rate limiting** per API NCBI
- **Input validation** per tutti i parametri
- **Error handling** sicuro

### Frontend
- **XSS protection** con React
- **CSRF protection** via same-origin
- **Secure headers** in nginx
- **HTTPS enforcement** in produzione

## 🚀 Performance

### Ottimizzazioni Frontend
- **Code splitting** con Vite
- **Tree shaking** per bundle size
- **Lazy loading** componenti
- **Memoization** hook personalizzati

### Ottimizzazioni Backend
- **Async processing** per download
- **Connection pooling** per API
- **Caching** per query frequenti
- **Compression** gzip

## 🐛 Troubleshooting

### Problemi Comuni

**Frontend non si connette al backend**
```bash
# Verifica .env
cat .env
# Verifica backend running
curl http://localhost:5000/api/status
```

**Errori CORS**
```python
# In app.py verifica:
CORS(app, origins=['http://localhost:5173'])
```

**Download non funziona**
```bash
# Verifica permessi cartella
ls -la downloads/
# Verifica log backend
tail -f logs/app.log
```

### Debug Mode
```bash
# Frontend
npm run dev -- --debug

# Backend
export FLASK_DEBUG=1
python app.py
```

## 📈 Roadmap

### Prossime Funzionalità
- [ ] **Database persistente** (PostgreSQL)
- [ ] **User authentication** con JWT
- [ ] **Batch export** in formati multipli
- [ ] **Email notifications** per ricerche complete
- [ ] **API rate limiting** avanzato
- [ ] **Dashboard analytics** per admin

### Miglioramenti UI
- [ ] **Dark mode** toggle
- [ ] **Keyboard shortcuts** per power users
- [ ] **Drag & drop** per import query
- [ ] **Export templates** personalizzabili
- [ ] **Multi-language** support

## 🤝 Contribuire

### Setup Sviluppo
1. Fork del repository
2. Crea branch feature: `git checkout -b feature/nuova-funzionalita`
3. Commit changes: `git commit -m 'Aggiungi nuova funzionalità'`
4. Push branch: `git push origin feature/nuova-funzionalita`
5. Crea Pull Request

### Guidelines
- **Codice**: TypeScript strict mode, ESLint rules
- **Styling**: Tailwind CSS, design system medical
- **Testing**: Jest per frontend, pytest per backend
- **Docs**: JSDoc per funzioni, README aggiornati

## 📞 Supporto

### Documentazione
- **API Docs**: `/api/docs` (quando implementato)
- **Component Library**: Storybook (quando implementato)
- **Deploy Guide**: `DEPLOYMENT_INTEGRATED.md`

### Community
- **Issues**: GitHub Issues per bug reports
- **Discussions**: GitHub Discussions per domande
- **Email**: support@revmed-assist.com

---

## 🎉 Conclusione

RevMed Assist è ora un sistema completo e integrato che combina:

- **Frontend moderno** React con UX ottimizzata
- **Backend robusto** Flask con API efficienti  
- **Design system** medical-tech professionale
- **Deploy automatizzato** con nginx + SSL
- **Monitoring completo** con logging e metriche

**Pronto per la produzione e scalabile per migliaia di utenti!**

---

*Sviluppato con ❤️ per la comunità medica e scientifica*
