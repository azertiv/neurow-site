# AI.Native — Marketing site (statique)

Ce dossier contient un site vitrine **100% statique** (HTML/CSS/JS) : landing page + page tarifs + wiki (docs) + pages légales.

## Personnalisation (à faire avant publication)

Ouvrez `assets/site.js` et modifiez :

- `microsoftStoreUrl` : URL de votre listing Microsoft Store
- `supportEmail` : email de support
- `pricing` : prix (affichage)

Ensuite, mettez à jour :

- `robots.txt` et `sitemap.xml` : remplacez `https://example.com` par votre domaine.

## Hébergement

### Option A — GitHub Pages
1. Poussez le contenu de `ainative-site/` dans votre repo (ex : branch `gh-pages`).
2. Activez GitHub Pages sur la branche et le dossier racine.
3. (Optionnel) Ajoutez un `CNAME`.

### Option B — Netlify / Vercel
- Déposez le dossier tel quel (pas de build nécessaire).

## Structure

- `index.html` : landing page
- `pricing.html` : comparatif et offre
- `docs/` : wiki + référence des fonctions
- `legal/` : pages légales (modèles)
- `assets/styles.css` : design system / composants
- `assets/site.js` : thème, menu mobile, search docs, config (Store URL…)

## Notes

- Le site ne contient aucun tracking par défaut.
- Les liens vers les docs OpenAI/Google sont inclus dans le wiki (à jour au moment de génération).
