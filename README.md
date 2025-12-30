# README DE L'EXTENSION EXCEL
# Neurow (Gemini + OpenAI) - Add-in Excel

Add-in Excel Neurow de fonctions personnalisees pour interroger Gemini 3 Flash et OpenAI GPT-5 mini directement dans des formules, sans backend.

## Fonctionnalites principales
- Fonctions personnalisees sous le namespace `AI` (ASK, WEB, TRANSLATE, etc.).
- Choix du fournisseur par defaut dans le panneau (Gemini/OpenAI), jamais dans les formules.
- Parametrage local des cles API, des modeles et des tokens max (partages).
- Dashboard d'usage : tokens, cout estime, logs et cache.
- Cache memoire + cache persistant, deduplication des appels, retries et timeouts.
- Recherche web integree pour `AI.WEB` (outils provider natifs).
- Appels directs aux API, aucune donnee transmise a un backend.

## Architecture et fonctionnement
L'add-in utilise un Shared Runtime : le panneau et les fonctions personnalisees tournent dans le meme runtime et partagent la configuration.

```
Excel (formules) -> src/functions/functions.js
                       -> src/shared/providers.js -> Gemini/OpenAI API
Panneau (taskpane) -> src/taskpane/*
                       -> src/shared/core.js -> OfficeRuntime.storage / localStorage
```

Points clefs du flux :
- Le fournisseur par defaut est choisi dans le panneau, pas dans les formules.
- Les appels IA passent par `aiGenerate()` qui gere cache, retries, timeouts et logs.
- `AI.WEB` utilise les outils web des providers (Gemini `google_search`, OpenAI `web_search`) avec fallback si non supporte.
- Aucune temperature ou top-p n'est envoyee.

## Configuration dans Excel (panneau "Neurow")
1. Ouvrir le panneau depuis le ruban Excel (bouton "Neurow").
2. Choisir le fournisseur par defaut (Gemini ou OpenAI).
3. Definir le max output tokens (unique pour les deux providers).
4. Renseigner la cle API et le modele pour chaque provider.
5. Enregistrer, tester ou effacer les cles.

Stockage :
- `OfficeRuntime.storage` si disponible.
- Sinon `localStorage`.
- Fallback en memoire si aucun stockage n'est accessible.

## Fonctions disponibles (namespace `AI`)

| Fonction | Description courte | Sortie |
| --- | --- | --- |
| `AI.ASK(prompt, [contextRange])` | Question IA avec contexte optionnel (TSV). | Texte (scalaire) |
| `AI.WEB(query, [focus], [showSource])` | Recherche web factuelle avec sources optionnelles. | Texte (scalaire) |
| `AI.TRANSLATE(textOrRange, targetLang)` | Traduction d'une cellule ou d'une plage. | Matrice (spill) |
| `AI.CLASSIFY(textOrRange, labels)` | Classification stricte parmi des labels. | Matrice (spill) |
| `AI.EXTRACT(textOrRange, instruction)` | Extraction d'entites selon instruction. | Matrice / liste verticale |
| `AI.CLEAN(textOrRange)` | Nettoyage et normalisation de texte. | Matrice (spill) |
| `AI.CONSISTENT(textOrRange)` | Harmonisation de valeurs proches. | Matrice (spill) |
| `AI.SUMMARIZE(textOrRange, [mode])` | Resume court par cellule (mode 0) ou global (mode 1). | Matrice (spill) |
| `AI.FORMULA(description, [contextRange])` | Genere une formule Excel valide. | Texte (scalaire) |
| `AI.TABLE(description, [contextRange])` | Genere un tableau (entetes + lignes). | Matrice (spill) |
| `AI.FILL(exampleRange, targetRange, instruction)` | Remplit une colonne a partir d'exemples. | Colonne (spill) |
| `AI.KEYSTATUS()` | Etat des cles, modeles et provider courant. | Texte (scalaire) |
| `AI.TEST()` | Test de connectivite du provider par defaut. | Texte (scalaire) |
| `AI.COUNT(range, value)` | Compte les occurrences exactes (local). | Nombre |

Comportements notables :
- `AI.EXTRACT` : si l'instruction parle d'emails, extraction locale par regex (plus rapide et fiable).
- `AI.EXTRACT` sur une seule cellule peut renvoyer plusieurs items en liste verticale.
- `AI.TABLE` renvoie toujours une ligne d'entetes (creee si absente).
- `AI.FORMULA` force les noms de fonctions Excel FR et le separateur `;` (langue par defaut = `fr`).
- `AI.WEB` tente de parser un JSON `{ value, source, reason }` et peut ajouter une liste de sources si `showSource=1`.
- `AI.SUMMARIZE` : mode 0 = par cellule, mode 1 = resume global.

## Exemples rapides (Excel FR)

```excel
=AI.ASK("Explique la variance"; A1:B5)
=AI.WEB("Population France 2024";;1)
=AI.TRANSLATE(A2:A10;"en")
=AI.CLASSIFY(B2:B10;"Urgent|Normal|A traiter")
=AI.EXTRACT(C2:C10;"emails")
=AI.CLEAN(D2:D10)
=AI.CONSISTENT(E2:E50)
=AI.SUMMARIZE(F2:F10)
=AI.SUMMARIZE(F2:F10;1)
=AI.FORMULA("Sommer les ventes par region"; A1:C20)
=AI.TABLE("Top 5 villes de France avec population")
=AI.FILL(A2:B6; D2:D20; "Normaliser en nom complet")
=AI.KEYSTATUS()
=AI.TEST()
=AI.COUNT(G2:G100;"Homme")
```

## Limites et garde-fous
- Sortie tronquee a 32 000 caracteres (limite Excel).
- Contexte limite a ~9 000 caracteres (TSV) par appel.
- Plages batch limitees a 200 cellules (TRANSLATE, CLASSIFY, CLEAN, CONSISTENT, EXTRACT).
- `AI.FILL` limite a 200 lignes cible.
- `AI.TABLE` limite a 200 lignes de donnees.
- Concurrence max 4 appels en parallele, retries par defaut = 2.
- Timeout par defaut = 30 s.
- Max output tokens ajuste via un slider en puissances de 2 (128 a 131 072), clamp a 128 000.

## Cache, logs et couts
- Cache memoire (LRU) + cache persistant (index limite a 250 entrees).
- TTL par defaut : 7 jours, et 1 heure pour `AI.WEB`.
- Journal d'execution conserve 24 h pour alimenter l'onglet "Utilisation".
- Les couts affiches sont estimes via des tarifs statiques dans le panneau (a verifier avec vos prix reels).

## Installation et developpement local

Prerequis : Node.js 20+, Excel (desktop ou web).

```bash
npm install
npm run dev-server
```

Pour demarrer l'add-in dans Excel :

```bash
npm run start
# ou
npm run start:web
```

Autres commandes utiles :

```bash
npm run build
npm run validate
npm run clean
npm run dev-certs
```

Notes :
- `manifest.xml` pointe vers les assets heberges sur GitHub Pages.
- Si vous voulez tester en local, remplacez les URLs dans `manifest.xml` par votre host local (HTTPS requis).

## Deploiement
- `npm run build` genere `dist/` (taskpane.html, functions.js, functions.json, manifest.xml).
- Le workflow `.github/workflows/pages.yml` deploie automatiquement `dist/` sur GitHub Pages.
- Pensez a aligner les URLs du `manifest.xml` avec le domaine de deploiement.

## Securite et confidentialite
- Les cles API sont stockees localement (OfficeRuntime.storage ou localStorage).
- Les donnees et prompts partent directement vers Gemini/OpenAI, sans serveur intermediaire.
- Le cache et les logs restent locaux a la machine.

## Depannage rapide
- `AI.KEYSTATUS()` pour verifier les cles, modeles et provider.
- `AI.TEST()` pour valider la connectivite.
- Erreurs frequentes : cle manquante, quotas/credit, plage trop grande, timeout.

## Structure du projet
- `manifest.xml` : declaration Office Add-in, commandes, URLs.
- `src/functions/functions.js` : implementation des fonctions Excel.
- `src/functions/functions.json` : metadonnees des fonctions.
- `src/shared/core.js` : storage, cache, logs et utils.
- `src/shared/providers.js` : appels Gemini/OpenAI et orchestration.
- `src/taskpane/taskpane.*` : UI du panneau.
- `webpack.config.js` : build et dev server.
