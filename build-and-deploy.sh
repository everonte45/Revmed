#!/bin/bash

# Script per build e deploy RevMed Assist
# Uso: ./build-and-deploy.sh [production|development]

set -e

ENV=${1:-development}
API_URL=""

echo "🚀 Build RevMed Assist - Environment: $ENV"

# Determina URL API
if [ "$ENV" = "production" ]; then
    read -p "Inserisci URL backend (es. https://tuo-dominio.com): " API_URL
    if [ -z "$API_URL" ]; then
        echo "❌ URL backend richiesto per produzione"
        exit 1
    fi
else
    API_URL="http://localhost:5000"
fi

echo "📡 API URL: $API_URL"

# Crea .env file
echo "📝 Creazione file .env..."
cat > .env << EOF
VITE_API_URL=$API_URL
EOF

# Installa dipendenze se necessario
if [ ! -d "node_modules" ]; then
    echo "📦 Installazione dipendenze..."
    npm install
fi

# Build per produzione
echo "🔨 Build applicazione..."
if [ "$ENV" = "production" ]; then
    npm run build
    echo "✅ Build completato in cartella dist/"
    echo "📁 Contenuto dist/:"
    ls -la dist/
else
    echo "🛠️ Modalità development - avvia con: npm run dev"
    echo "🌐 Frontend: http://localhost:5173"
    echo "🔧 Backend: $API_URL"
fi

echo ""
echo "🎯 Prossimi passi:"
if [ "$ENV" = "production" ]; then
    echo "1. Carica contenuto di dist/ sul server"
    echo "2. Configura nginx per servire file statici"
    echo "3. Avvia backend Flask"
    echo "4. Testa l'applicazione"
else
    echo "1. Avvia backend Flask: python app.py"
    echo "2. Avvia frontend: npm run dev"
    echo "3. Apri http://localhost:5173"
fi

echo ""
echo "📚 Documentazione completa: DEPLOYMENT_INTEGRATED.md"
