# Configuration GitHub Pages - Joyce Portfolio

## ✅ Configuration effectuée

Le projet a été configuré pour le déploiement sur GitHub Pages. Voici ce qui a été fait :

### 1. **Configuration Vite** (`vite.config.ts`)
   - ✅ `base` défini à `/joyce-portfolio/` pour correspondre au nom du dépôt GitHub

### 2. **Script de déploiement** (`package.json`)
   - ✅ Script `deploy` ajouté pour construction et déploiement local

### 3. **Workflow GitHub Actions** (`.github/workflows/deploy.yml`)
   - ✅ Automatisation du build et déploiement sur chaque push vers `main`
   - ✅ Utilise Bun comme gestionnaire de packages

## 📋 Prochaines étapes

### 1. **Configurer GitHub Pages**
   1. Allez sur votre dépôt GitHub: `https://github.com/[votre-nom]/joyce-portfolio`
   2. Allez dans **Settings** → **Pages**
   3. Sous "Build and deployment":
      - Source: **GitHub Actions**
      - Le workflow devrait être automatiquement détecté

### 2. **Activer les secrets (si nécessaire)**
   Si vous avez besoin d'une clé d'authentification:
   - Allez dans **Settings** → **Secrets and variables** → **Actions**
   - Aucun secret n'est actuellement requis

### 3. **Pousser les modifications**
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 4. **Vérifier le déploiement**
   - Allez dans l'onglet **Actions** de votre dépôt GitHub
   - Vérifiez que le workflow `Deploy to GitHub Pages` s'exécute
   - Une fois terminé, votre site sera disponible sur: `https://[votre-nom].github.io/joyce-portfolio/`

## 🔧 Détails techniques

### Build
```bash
bun run build
```
Crée un dossier `dist/` avec les fichiers statiques prêts pour la production.

### Développement local
```bash
bun run dev
```

### Prévisualisation locale (avant déploiement)
```bash
bun run preview
```

## 📝 Notes importantes

- Le fichier `vite.config.ts` a été modifié pour inclure la base path `/joyce-portfolio/`
- Le workflow GitHub Actions gérera automatiquement tous les déploiements
- Les fichiers sont construits directement depuis le dépôt - pas besoin de branche `gh-pages`

## ⚠️ Troubleshooting

Si le déploiement échoue:
1. Vérifiez que GitHub Pages est configuré avec "GitHub Actions" comme source
2. Consultez l'onglet "Actions" pour voir les logs d'erreur
3. Vérifiez que `bun` est bien installé dans l'environnement CI

---
Configuration terminée! 🚀
