# 🐛 Debug Pagina Bianca - GitHub Pages

## 🔍 **Passi per Diagnosticare**

### 1. **Apri la Console del Browser**
- Premi **F12** o **Ctrl+Shift+I**
- Vai alla tab **Console**
- Ricarica la pagina
- Cerca errori in rosso

### 2. **Controlla la Tab Network**
- Vai alla tab **Network**
- Ricarica la pagina
- Verifica se i file CSS/JS si caricano (status 200)

### 3. **Verifica l'URL**
Il tuo sito dovrebbe essere su:
`https://TUO-USERNAME.github.io/revmed-assist/`

**IMPORTANTE**: Deve finire con `/revmed-assist/`

## 🚨 **Errori Comuni**

### **404 Not Found**
- **Causa**: URL sbagliato o repository non configurato
- **Soluzione**: Verifica l'URL e le impostazioni GitHub Pages

### **Failed to load resource**
- **Causa**: Base path sbagliato
- **Soluzione**: Aggiorna vite.config.ts

### **MIME type error**
- **Causa**: GitHub Pages non serve correttamente i file
- **Soluzione**: Verifica il workflow GitHub Actions

## 🔧 **Soluzioni Rapide**

### **Soluzione 1: Verifica Base Path**
Assicurati che vite.config.ts contenga:
```typescript
base: mode === "production" ? "/revmed-assist/" : "/",
```

### **Soluzione 2: Ricarica con Cache Pulisco**
- **Chrome**: Ctrl+Shift+R
- **Firefox**: Ctrl+F5

### **Soluzione 3: Verifica GitHub Actions**
- Vai su GitHub → Actions
- Verifica che il deploy sia completato con successo
- Controlla i log del workflow

## 📝 **Cosa Controllare**

1. ✅ URL corretto con `/revmed-assist/`
2. ✅ GitHub Actions completato con successo
3. ✅ Nessun errore nella console del browser
4. ✅ File CSS/JS si caricano (Network tab)
5. ✅ Base path configurato correttamente

---

**Se vedi errori specifici nella console, condividili per un aiuto mirato!**
