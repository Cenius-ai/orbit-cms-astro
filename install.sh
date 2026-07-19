#!/usr/bin/env bash
set -euo pipefail

echo "==> Installing Orbit dependencies..."
npm install --no-audit --no-fund

echo ""
echo "==> Build check (verifying the project compiles)..."
npx astro build --silent

echo ""
echo "==> Setup complete."
echo "    Run the dev server:  npm run dev"
echo "    Or preview the build: npm run preview"
