#!/usr/bin/env bash
# deploy.sh — Build y deploy de GDI CityHub a Netlify.
#
# Uso:
#   ./scripts/deploy.sh             # deploy a preview (draft)
#   ./scripts/deploy.sh --prod      # deploy a producción
#
# Requisitos:
#   - netlify-cli instalado globalmente: npm i -g netlify-cli
#   - Autenticado: netlify login
#   - NETLIFY_SITE_ID exportado o configurado con netlify link

set -euo pipefail

PROD=false
if [[ "${1:-}" == "--prod" ]]; then
  PROD=true
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="$REPO_ROOT/gdi-cityhub"

echo "=== GDI CityHub Deploy ==="
echo "Directorio app: $APP_DIR"
echo "Modo: $([ "$PROD" = true ] && echo 'PRODUCCION' || echo 'preview')"
echo ""

if ! command -v netlify &> /dev/null; then
  echo "[error] netlify-cli no encontrado. Instalar con: npm i -g netlify-cli"
  exit 1
fi

if ! command -v pnpm &> /dev/null; then
  echo "[error] pnpm no encontrado. Instalar con: npm i -g pnpm"
  exit 1
fi

cd "$APP_DIR"

echo "[1/3] Instalando dependencias..."
pnpm install --frozen-lockfile

echo "[2/3] Construyendo aplicación..."
pnpm build

echo "[3/3] Desplegando a Netlify..."
cd "$REPO_ROOT"

if [ "$PROD" = true ]; then
  netlify deploy --prod --dir="gdi-cityhub/.next" --message="deploy $(git rev-parse --short HEAD)"
else
  DEPLOY_URL=$(netlify deploy --dir="gdi-cityhub/.next" --json 2>/dev/null | grep '"deploy_url"' | sed 's/.*"deploy_url": "\(.*\)".*/\1/')
  echo ""
  echo "Preview disponible en: $DEPLOY_URL"
fi

echo ""
echo "=== Deploy completado ==="
