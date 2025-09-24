# 🚀 Guida Deploy RevMed Assist - Frontend React + Backend Flask

Questa guida ti aiuterà a pubblicare l'applicazione completa RevMed Assist con frontend React e backend Flask integrato.

## 📋 Architettura

- **Frontend**: React + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Flask + CORS per API PubMed
- **Database**: File-based (JSON) per stato ricerche
- **Deploy**: nginx + systemd + SSL

## 🛠️ File di Deploy

### Frontend React (pubmed-query-flow-main)
- `src/` - Codice React con integrazione API
- `src/lib/api.ts` - Servizio API per comunicazione backend
- `src/hooks/usePubMedSearch.ts` - Hook personalizzato per gestione stato
- `src/components/SearchProgress.tsx` - Componente progresso real-time
- `env.example` - Configurazione ambiente

### Backend Flask (analisi_sistematica)
- `app.py` - Server Flask con API endpoints
- `requirements_production.txt` - Dipendenze Python
- `nginx.conf` - Configurazione nginx
- `revmed-assist.service` - Service systemd
- `deploy.sh` - Script deploy automatico

## 🚀 Deploy Completo

### 1. Prepara il Server

```bash
# Connettiti al server
ssh root@your-server-ip

# Crea directory progetto
mkdir -p /var/www/revmed-assist
cd /var/www/revmed-assist
```

### 2. Carica i File

```bash
# Carica backend Flask
scp -r /path/to/analisi_sistematica/* user@server:/var/www/revmed-assist/backend/

# Carica frontend React (dopo build)
scp -r /path/to/pubmed-query-flow-main/dist/* user@server:/var/www/revmed-assist/frontend/
```

### 3. Build Frontend React

```bash
# Nel tuo computer locale
cd pubmed-query-flow-main

# Installa dipendenze
npm install

# Crea file .env
cp env.example .env
# Modifica .env con l'URL del tuo backend

# Build per produzione
npm run build

# Carica dist/ sul server
scp -r dist/* user@server:/var/www/revmed-assist/frontend/
```

### 4. Configura Backend

```bash
# Sul server
cd /var/www/revmed-assist/backend

# Crea virtual environment
python3 -m venv venv
source venv/bin/activate

# Installa dipendenze
pip install -r requirements_production.txt

# Crea directory downloads
mkdir -p downloads
chown -R www-data:www-data .
```

### 5. Configura nginx

```bash
# Copia configurazione nginx
cp nginx.conf /etc/nginx/sites-available/revmed-assist

# Modifica il dominio nella configurazione
sed -i 's/your-domain.com/tuo-dominio.com/g' /etc/nginx/sites-available/revmed-assist

# Abilita sito
ln -s /etc/nginx/sites-available/revmed-assist /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test configurazione
nginx -t
```

### 6. Configura SSL

```bash
# Installa certbot
apt install certbot python3-certbot-nginx

# Ottieni certificato
certbot --nginx -d tuo-dominio.com -d www.tuo-dominio.com
```

### 7. Configura Systemd

```bash
# Copia service file
cp revmed-assist.service /etc/systemd/system/

# Modifica percorso nel service file
sed -i 's|/var/www/revmed-assist|/var/www/revmed-assist/backend|g' /etc/systemd/system/revmed-assist.service

# Abilita e avvia servizio
systemctl daemon-reload
systemctl enable revmed-assist
systemctl start revmed-assist
```

### 8. Avvia Servizi

```bash
# Riavvia nginx
systemctl restart nginx

# Verifica stato
systemctl status revmed-assist
systemctl status nginx
```

## 🔧 Configurazione Avanzata

### nginx.conf Ottimizzato per React + Flask

```nginx
server {
    listen 443 ssl http2;
    server_name tuo-dominio.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/tuo-dominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tuo-dominio.com/privkey.pem;

    # Frontend React (static files)
    location / {
        root /var/www/revmed-assist/frontend;
        try_files $uri $uri/ /index.html;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Backend API
    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
```

### Configurazione Ambiente

#### Frontend (.env)
```bash
# Sviluppo
VITE_API_URL=http://localhost:5000

# Produzione
VITE_API_URL=https://tuo-dominio.com
```

#### Backend (app.py)
```python
# Configurazione produzione
app.config.update(
    DEBUG=False,
    SECRET_KEY='your-secret-key-here',
    MAX_CONTENT_LENGTH=100 * 1024 * 1024  # 100MB
)
```

## 🔄 Script Deploy Automatico

Crea `deploy-complete.sh`:

```bash
#!/bin/bash
set -e

DOMAIN="tuo-dominio.com"
APP_DIR="/var/www/revmed-assist"

echo "🚀 Deploy completo RevMed Assist..."

# 1. Aggiorna sistema
apt update && apt upgrade -y

# 2. Installa dipendenze
apt install -y python3 python3-pip python3-venv nginx certbot python3-certbot-nginx nodejs npm

# 3. Crea directory
mkdir -p $APP_DIR/{backend,frontend}
cd $APP_DIR

# 4. Setup backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements_production.txt
mkdir -p downloads

# 5. Setup frontend
cd ../frontend
# Carica i file built del frontend qui

# 6. Configura nginx
cp $APP_DIR/backend/nginx.conf /etc/nginx/sites-available/revmed-assist
sed -i "s/your-domain.com/$DOMAIN/g" /etc/nginx/sites-available/revmed-assist
ln -s /etc/nginx/sites-available/revmed-assist /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# 7. SSL
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN

# 8. Systemd
cp $APP_DIR/backend/revmed-assist.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable revmed-assist
systemctl start revmed-assist
systemctl restart nginx

echo "✅ Deploy completato!"
echo "🌐 Frontend: https://$DOMAIN"
echo "🔧 API: https://$DOMAIN/api/"
```

## 🐛 Troubleshooting

### Problemi Comuni

**1. Frontend non carica**
```bash
# Verifica file statici
ls -la /var/www/revmed-assist/frontend/
# Verifica nginx config
nginx -t
```

**2. API non risponde**
```bash
# Verifica Flask app
systemctl status revmed-assist
journalctl -u revmed-assist -f
# Verifica porta
netstat -tlnp | grep 5000
```

**3. CORS errors**
```python
# In app.py, verifica:
CORS(app, origins=['https://tuo-dominio.com'])
```

**4. Build React fallisce**
```bash
# Verifica dipendenze
npm install
# Verifica .env
cat .env
# Build con verbose
npm run build -- --verbose
```

### Log Utili

```bash
# Backend logs
journalctl -u revmed-assist -f

# Nginx logs
tail -f /var/log/nginx/revmed-assist.access.log
tail -f /var/log/nginx/revmed-assist.error.log

# Sistema
dmesg | tail
```

## 📊 Monitoraggio

### Metriche Chiave

```bash
# Uso risorse
htop
df -h
free -h

# Connessioni API
netstat -an | grep :5000

# Performance nginx
nginx -T | grep -i worker
```

### Backup

```bash
# Backup automatico
crontab -e
# Aggiungi:
0 2 * * * tar -czf /backup/revmed-assist-$(date +\%Y\%m\%d).tar.gz /var/www/revmed-assist
```

## 🎯 Ottimizzazioni

### Performance

1. **CDN**: Usa Cloudflare per asset statici
2. **Compression**: Abilita gzip in nginx
3. **Caching**: Cache API responses quando possibile
4. **Database**: Considera PostgreSQL per ricerche complesse

### Sicurezza

1. **Firewall**: Configura UFW
2. **Updates**: Aggiornamenti automatici
3. **Monitoring**: Log monitoring con fail2ban
4. **SSL**: Renewal automatico certificati

---

🎉 **Congratulazioni!** Il tuo RevMed Assist integrato è ora live su `https://tuo-dominio.com`

### Prossimi Passi

1. **Testa tutte le funzionalità**
2. **Configura monitoring**
3. **Setup backup automatici**
4. **Ottimizza performance**
