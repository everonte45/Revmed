# 🚀 Setup GitHub Pages per RevMed Assist

## 🔧 **Configurazione Necessaria**

### 1. **Abilita GitHub Pages**

1. Vai al tuo repository su GitHub
2. Clicca su **Settings**
3. Scorri fino a **Pages** (nella sidebar sinistra)
4. In **Source**, seleziona **"GitHub Actions"**
5. Salva le impostazioni

### 2. **Configurazione Repository**

Il repository è già configurato con:
- ✅ **`.nojekyll`** - Disabilita Jekyll
- ✅ **GitHub Actions workflow** - Build automatico
- ✅ **Vite config** - Base path per GitHub Pages

### 3. **Push del Codice**

```bash
# Aggiungi tutti i file
git add .

# Commit
git commit -m "feat: setup GitHub Pages deployment"

# Push
git push origin main
```

### 4. **Monitora il Deploy**

1. Vai alla tab **Actions** del tuo repository
2. Clicca sul workflow **"Deploy to GitHub Pages"**
3. Verifica che il build sia completato con successo
4. Il sito sarà disponibile su: `https://TUO-USERNAME.github.io/Revmed/`

## 🔍 **Risoluzione Problemi**

### **Errore Jekyll**
Se vedi errori Jekyll:
- ✅ Il file `.nojekyll` è già presente
- ✅ GitHub Pages è configurato per usare **GitHub Actions**

### **404 Not Found**
Se il sito non si carica:
- ✅ Verifica che il workflow GitHub Actions sia completato
- ✅ Controlla che l'URL sia corretto: `https://TUO-USERNAME.github.io/Revmed/`
- ✅ Assicurati che il nome del repository sia `Revmed`

### **Asset Non Trovati**
Se CSS/JS non si caricano:
- ✅ Il `vite.config.ts` è configurato con il base path corretto
- ✅ Il build genera i file nella cartella `dist/`

## 📝 **Note Importanti**

1. **Nome Repository**: Assicurati che il repository si chiami `revmed-assist`
2. **Branch**: Il deploy avviene automaticamente dal branch `main`
3. **Build Time**: Il primo deploy può richiedere 5-10 minuti
4. **Aggiornamenti**: Ogni push al branch `main` triggera un nuovo deploy

## 🔗 **URL Finale**

Una volta configurato, il tuo sito sarà disponibile su:
**`https://TUO-USERNAME.github.io/Revmed/`**

Sostituisci `TUO-USERNAME` con il tuo username GitHub.

---

**Setup completato! Il sito dovrebbe essere visibile entro 10 minuti dal push. 🎉**
