# Contribuire a RevMed Assist

Grazie per il tuo interesse a contribuire a RevMed Assist! 🎉

## 🚀 Come Iniziare

### 1. Fork e Clone
```bash
# Fork del repository su GitHub, poi:
git clone https://github.com/your-username/revmed-assist.git
cd revmed-assist
```

### 2. Setup Sviluppo
```bash
# Installa dipendenze
npm install

# Crea file ambiente
cp env.example .env
# Modifica .env con: VITE_API_URL=http://localhost:5000

# Avvia in sviluppo
npm run dev
```

### 3. Crea Branch
```bash
git checkout -b feature/nome-funzionalita
# oppure
git checkout -b fix/nome-bug
```

## 📋 Processo di Contribuzione

### 1. Sviluppo
- Scrivi codice TypeScript pulito e ben documentato
- Segui le convenzioni di naming esistenti
- Aggiungi test quando appropriato
- Assicurati che il build passi: `npm run build`

### 2. Commit
```bash
# Segui Conventional Commits
git add .
git commit -m "feat: aggiungi nuova funzionalità ricerca avanzata"
# oppure
git commit -m "fix: risolvi bug nel progress tracking"
```

### 3. Push e Pull Request
```bash
git push origin feature/nome-funzionalita
```

Poi crea una Pull Request su GitHub con:
- Descrizione chiara della modifica
- Screenshot se applicabile
- Riferimento a issues se rilevanti

## 🎨 Guidelines di Stile

### TypeScript
```typescript
// ✅ Buono
interface SearchRequest {
  query: string;
  maxTotal: number;
  batchSize: number;
}

const handleSearch = async (request: SearchRequest): Promise<void> => {
  // implementazione
};

// ❌ Evitare
const handleSearch = async (req) => {
  // implementazione
};
```

### React Components
```tsx
// ✅ Buono
interface SearchFormProps {
  onSubmit: (query: string) => void;
  isLoading?: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({ 
  onSubmit, 
  isLoading = false 
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* JSX */}
    </form>
  );
};

// ❌ Evitare
export function SearchForm(props) {
  return <form>{/* JSX */}</form>;
}
```

### Styling
```tsx
// ✅ Buono - Usa Tailwind CSS
<Button className="bg-teal hover:bg-teal-dark text-white px-4 py-2">
  Cerca
</Button>

// ❌ Evitare - CSS inline o custom
<Button style={{ backgroundColor: '#11C5BB' }}>
  Cerca
</Button>
```

## 🧪 Testing

### Linting
```bash
npm run lint
```

### Build Test
```bash
npm run build
```

### Type Checking
```bash
npx tsc --noEmit
```

## 📁 Struttura del Codice

```
src/
├── components/
│   ├── ui/              # Componenti base shadcn/ui
│   ├── SearchProgress.tsx
│   └── ...
├── hooks/
│   ├── usePubMedSearch.ts
│   └── ...
├── lib/
│   ├── api.ts           # Servizio API
│   └── utils.ts         # Utilities
└── pages/
    ├── Home.tsx
    ├── Tool.tsx
    └── ...
```

## 🎯 Aree di Contribuzione

### 🐛 Bug Fixes
- Correggi bug esistenti
- Migliora gestione errori
- Ottimizza performance

### ✨ Nuove Funzionalità
- Miglioramenti UI/UX
- Nuovi filtri di ricerca
- Export formati aggiuntivi
- Integrazione con altri database

### 📚 Documentazione
- Migliora README
- Aggiungi JSDoc
- Crea guide utente
- Traduzioni

### 🎨 Design
- Miglioramenti UI
- Responsive design
- Accessibility
- Dark mode

## 🔍 Code Review Process

### Criteri di Approvazione
- ✅ Codice funzionante e testato
- ✅ Segue le convenzioni del progetto
- ✅ Non introduce breaking changes
- ✅ Documentazione aggiornata se necessario
- ✅ Build passa senza errori

### Feedback
- Sii costruttivo e rispettoso
- Spiega il "perché" non solo il "cosa"
- Suggerisci alternative quando possibile
- Riconosci i buoni contributi

## 🚨 Reporting Issues

### Bug Report
Usa il template GitHub per bug reports:
- Descrizione chiara del problema
- Passi per riprodurre
- Comportamento atteso vs attuale
- Screenshot se applicabile
- Informazioni ambiente (OS, browser, Node.js version)

### Feature Request
- Descrizione della funzionalità
- Caso d'uso e benefici
- Esempi di implementazione se possibile
- Considerazioni tecniche

## 📞 Supporto

### Domande
- GitHub Discussions per domande generali
- Issues per bug e feature requests
- Pull Request per discussioni tecniche

### Community
- Rispetta tutti i contributori
- Sii paziente con i maintainer
- Aiuta altri contributori quando possibile

## 🎉 Riconoscimenti

I contributori saranno riconosciuti in:
- README.md
- CHANGELOG.md
- Release notes

## 📄 Licenza

Contribuendo accetti che il tuo codice sarà distribuito sotto licenza MIT.

---

**Grazie per aver reso RevMed Assist migliore! 🧬✨**
