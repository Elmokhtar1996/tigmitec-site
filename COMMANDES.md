# ⚡ Commandes Rapides - TigmiTec

## 🚀 Démarrage Rapide

### Installer et Démarrer
```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Puis ouvrir: **http://localhost:3000**

---

## 🔄 Activer les Optimisations

### Option 1: Tester le Header Optimisé

**Fichier:** `app/layout.js`

**Remplacer:**
```javascript
import Header from '@/components/Header';
```

**Par:**
```javascript
import Header from '@/components/HeaderOptimized';
```

### Option 2: Tester la Page Optimisée

**PowerShell:**
```powershell
# Sauvegarder l'ancienne page
Rename-Item app/page.js app/page-old.js

# Utiliser la nouvelle page
Rename-Item app/page-optimized.js app/page.js

# Redémarrer le serveur
npm run dev
```

### Option 3: Tout Activer en Une Fois

**PowerShell:**
```powershell
# Sauvegarder les anciens fichiers
Rename-Item app/page.js app/page-old.js
Rename-Item components/Header.js components/Header-old.js

# Activer les nouveaux
Rename-Item app/page-optimized.js app/page.js
Rename-Item components/HeaderOptimized.js components/Header.js

# Redémarrer
npm run dev
```

---

## 📊 Tester les Performances

### Lighthouse (Chrome)
```bash
1. Ouvrir Chrome
2. Aller sur http://localhost:3000
3. F12 (DevTools)
4. Onglet "Lighthouse"
5. Cocher "Mobile"
6. Cliquer "Analyze page load"
```

### Build de Production
```bash
# Build optimisé
npm run build

# Démarrer en mode production
npm start
```

---

## 🔧 Commandes de Développement

### Serveur de Développement
```bash
npm run dev
# Serveur sur http://localhost:3000
```

### Build de Production
```bash
npm run build
# Crée le dossier .next/ optimisé
```

### Démarrer en Production
```bash
npm start
# Démarre le serveur de production
```

### Analyser le Bundle
```bash
npm run analyze
# Analyse la taille du bundle
```

---

## 🧹 Nettoyage

### Nettoyer le Cache
```powershell
# Supprimer .next
Remove-Item -Recurse -Force .next

# Supprimer node_modules
Remove-Item -Recurse -Force node_modules

# Réinstaller
npm install
```

### Nettoyer et Redémarrer
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

---

## 🔄 Revenir en Arrière

### Restaurer l'Ancienne Page
```powershell
# Sauvegarder la nouvelle
Rename-Item app/page.js app/page-new.js

# Restaurer l'ancienne
Rename-Item app/page-old.js app/page.js

# Redémarrer
npm run dev
```

### Restaurer l'Ancien Header
```powershell
# Restaurer
Rename-Item components/Header.js components/Header-new.js
Rename-Item components/Header-old.js components/Header.js

# Redémarrer
npm run dev
```

---

## 📦 Gestion des Dépendances

### Installer Tailwind (si nécessaire)
```powershell
npm install -D tailwindcss postcss autoprefixer
```

### Mettre à Jour les Packages
```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour
npm update
```

### Installer un Package
```bash
npm install <package-name>
```

---

## 🐛 Résolution de Problèmes

### Port 3000 déjà utilisé
```powershell
# Trouver le processus
netstat -ano | findstr :3000

# Tuer le processus (remplacer <PID>)
taskkill /PID <PID> /F

# Redémarrer
npm run dev
```

### Erreur de Build
```powershell
# Nettoyer et rebuild
Remove-Item -Recurse -Force .next
npm run build
```

### Styles Tailwind ne s'appliquent pas
```powershell
# Vérifier que globals.css est importé dans layout.js
# Nettoyer et redémarrer
Remove-Item -Recurse -Force .next
npm run dev
```

---

## 📝 Fichiers Importants

### Configuration
- `tailwind.config.js` - Config Tailwind
- `postcss.config.js` - Config PostCSS
- `next.config.mjs` - Config Next.js
- `package.json` - Dépendances

### Styles
- `app/globals.css` - Styles globaux Tailwind

### Composants
- `components/HeaderOptimized.js` - Header optimisé
- `components/Footer.js` - Footer

### Pages
- `app/page-optimized.js` - Page d'accueil optimisée
- `app/layout.js` - Layout principal

### Documentation
- `README.md` - Documentation principale
- `RECAP_MIGRATION.md` - Récapitulatif migration
- `GUIDE_TAILWIND.md` - Guide Tailwind
- `OPTIMISATIONS.md` - Liste optimisations
- `COMPARAISON.md` - Comparaison avant/après
- `COMMANDES.md` - Ce fichier

---

## 🎯 Workflow Recommandé

### 1. Développement
```bash
# Démarrer le serveur
npm run dev

# Faire vos modifications
# Les changements sont automatiquement rechargés
```

### 2. Test
```bash
# Tester en mode production
npm run build
npm start

# Tester avec Lighthouse
# Chrome DevTools > Lighthouse > Mobile
```

### 3. Déploiement
```bash
# Build final
npm run build

# Déployer sur Vercel
vercel

# Ou autre plateforme
```

---

## 💡 Astuces

### Hot Reload
Le serveur de développement recharge automatiquement les changements.

### Tailwind IntelliSense
Installez l'extension VSCode "Tailwind CSS IntelliSense" pour l'autocomplétion.

### Format du Code
```bash
# Installer Prettier
npm install -D prettier

# Formater
npx prettier --write .
```

---

## 📚 Ressources Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind](https://tailwindcss.com/docs)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)

---

## 🆘 Besoin d'Aide ?

1. Consultez `README.md`
2. Consultez `GUIDE_TAILWIND.md`
3. Consultez `RECAP_MIGRATION.md`
4. Contactez l'équipe TigmiTec

---

**Bon développement ! 🚀**
