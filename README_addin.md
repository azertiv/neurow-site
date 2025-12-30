Ci-dessous, je te propose une “bibliothèque de contenu” très riche que tu peux réutiliser telle quelle (ou découper) pour alimenter ton site : marketing, conversion, pages produit, pages “comment ça marche”, documentation type wiki, et une FAQ dépannage orientée Excel. Le contenu est strictement dérivé du fonctionnement réel de l’add-in tel qu’implémenté (custom functions AI.*, panneau de configuration, providers Gemini/OpenAI, cache, logs, web search, etc.).         








1) Neurow en une phrase (plusieurs variantes)





Neurow est une extension Excel qui ajoute des fonctions IA prêtes à l’emploi directement dans tes formules (AI.ASK, AI.TRANSLATE, AI.CLASSIFY, etc.), sans backend : tes données partent directement vers Gemini ou OpenAI, depuis Excel.    
L’IA dans tes cellules : nettoyage, traduction, extraction, classification, résumé, génération de formules et recherche web… avec cache intelligent et suivi coûts/tokens intégré.    
Une “boîte à outils IA” pour Excel : tu écris une formule, Neurow appelle le modèle, et la réponse revient dans la cellule (ou en plage “spill”).  









2) Positionnement produit (texte long réutilisable)





Neurow est un add-in Excel qui transforme les tâches “non structurées” (texte, commentaires, libellés hétérogènes, descriptions, emails, verbatims, notes d’entretien, résumés, etc.) en résultats structurés et exploitables dans Excel, via des fonctions personnalisées (AI.*).

L’objectif est simple : gagner du temps, standardiser, et accélérer l’analyse sans sortir d’Excel.



L’add-in repose sur trois piliers très concrets :



Des fonctions IA orientées tableur, conçues pour les usages de cellules et de plages (résultats scalaires, matrices “spill”, batch sur une plage, etc.).    
Un panneau de configuration clair et opérationnel : choix du fournisseur par défaut (Gemini/OpenAI), choix des modèles, réglage du max output tokens, réglage de “l’effort de raisonnement”, gestion des clés API et de la licence.    
Une couche “pro” de fiabilité pour Excel : cache mémoire + cache persistant, déduplication des appels identiques en cours, limitation de concurrence, retries, timeouts, logs d’exécution (tokens, latence, erreurs) et dashboard de consommation.      




Neurow est pensé pour être à la fois :



Accessible (particuliers / étudiants / indépendants) : tu écris =AI.ASK("…") et tu obtiens une réponse.
Professionnel (analystes, contrôle de gestion, audit, conseil, M&A) : tu industrialises un workflow Excel en traitant des centaines de lignes de texte, et tu suis la consommation, les coûts estimés et les erreurs, au même endroit.    









3) Message “Pourquoi Neurow” (problèmes / douleurs résolues)







Les problèmes Excel “classiques” que Neurow attaque de front





Libellés incohérents (ex. noms de sociétés, villes, catégories, statuts, postes, métiers) qui rendent les TCD et agrégations pénibles.
Textes difficiles à exploiter (commentaires, réponses libres, notes de rendez-vous) : il faut résumer, classifier, extraire.
Nettoyage et normalisation chronophages (espaces, retours ligne, formats hétérogènes).
Traductions par lot (client, fournisseur, support, documents).
Extraction d’informations (emails, identifiants, champs demandés, items).
Besoin ponctuel de formules Excel sans perdre 20 minutes à trouver la bonne combinaison LET/XLOOKUP/SOMME.SI.ENS/etc.
Recherche d’un fait (valeur + source) sans quitter Excel (avec AI.WEB).  






L’idée clé





Neurow ne remplace pas Excel. Il augmente Excel en ajoutant des capacités IA là où Excel est moins naturel : compréhension de texte, synthèse, classement sémantique, extraction, génération guidée.








4) Cible et cas d’usage (grand public + pro, avec focus M&A/Conseil)







Cible “particuliers / étudiants”





Traduire rapidement des contenus (cours, articles, notes).
Résumer des textes (chapitres, notes, retours).
Nettoyer et harmoniser des listes.
Générer des formules Excel plus vite.
Construire des petits tableaux (“AI.TABLE”) pour démarrer une analyse.






Cible “professionnels” (généraliste)





Sales / CRM / RevOps : catégoriser des leads, qualifier des verbatims, résumer des appels.
Finance / FP&A / contrôle de gestion : standardiser des libellés, préparer des reporting, résumer des commentaires.
Achats / supply : nettoyer des références, normaliser des fournisseurs, extraire des champs de descriptions.
RH / recrutement : classifier des CV, extraire des informations, normaliser des intitulés.
Support / CX : résumer tickets, classifier demandes, extraire motifs.






Focus M&A, Transaction Services, Conseil (sans être exclusif)





Neurow est particulièrement adapté aux environnements où Excel est le cockpit et où la donnée est un mélange de quantitatif + qualitatif :



M&A / TS :
Harmoniser des noms de sociétés / pays / secteurs dans un dataset d’opérations (AI.CONSISTENT).
Classifier des descriptions d’opérations selon une taxonomie (type d’opération, secteur, vertical, stage) (AI.CLASSIFY).
Résumer des notes de lecture, extraits de rapports, minutes de call (AI.SUMMARIZE).
Extraire des éléments structurants d’un texte (dates, parties, métriques mentionnées, risques) (AI.EXTRACT).
Générer des formules pour accélérer la construction (net debt bridge, clean-up, analyse de variance) (AI.FORMULA).

Conseil :
Industrialiser la synthèse et la catégorisation de verbatims (atelier, enquête, interviews).
Traduire des éléments multi-langues.
Transformer des données texte en colonnes exploitables (classification / extraction / nettoyage).

Audit :
Nettoyer, standardiser, transformer des exports hétérogènes.
Documenter rapidement des rationales (résumés) et rapprocher du quanti.










5) “Comment ça marche” (explication claire, orientée conversion)







5.1 Le principe





Tu installes Neurow et tu ouvres le panneau.
Tu ajoutes une clé API Gemini et/ou OpenAI (stockée localement).
Tu choisis un fournisseur “par défaut” et un modèle.
Dans Excel, tu appelles les fonctions AI.* directement dans des cellules.    




Neurow exécute l’appel IA et renvoie la réponse dans la cellule (ou en plage “spill” si la fonction renvoie une matrice).





5.2 Pourquoi le “provider” n’est pas dans les formules





Un choix produit fort est de ne jamais mettre le fournisseur (Gemini/OpenAI) dans les formules. Le fournisseur est choisi dans le panneau. Résultat :



Tes formules restent propres, stables, partageables.
Tu peux basculer de fournisseur pour un classeur entier sans modifier toutes tes cellules.
Tu peux itérer “vitesse vs qualité vs coût” en changeant simplement de modèle / fournisseur côté panneau.      






5.3 Ce qui se passe techniquement lors d’un calcul





Excel calcule AI.*.
Neurow construit un prompt “Excel-friendly” (réponse courte, sans Markdown, parfois en JSON strict).  
Neurow récupère la configuration locale (provider, modèle, tokens, effort de raisonnement).    
Neurow exécute l’appel API directement vers Gemini ou OpenAI.  
Neurow renvoie le texte ou la matrice à Excel, avec des garde-fous (limite de taille de cellule).  









6) Sécurité, confidentialité et “no backend” (texte de confiance)







6.1 Zéro serveur Neurow pour tes données





Neurow est conçu pour fonctionner sans backend :



Tes prompts et tes données partent directement de ton Excel vers l’API du fournisseur (Gemini ou OpenAI).
Neurow ne met pas en place de serveur intermédiaire pour “transiter” ou stocker les données.  






6.2 Stockage local des clés API





Les clés API sont stockées localement sur ta machine :



Priorité à OfficeRuntime.storage quand disponible (contexte Office).
Fallback sur localStorage.
Fallback extrême en mémoire (si aucun stockage n’est accessible).    




Dans l’UX, les champs de clé n’affichent pas la clé en clair (placeholders “clé enregistrée”). 





6.3 Cache et logs locaux





Le cache et les logs sont locaux :



Cache mémoire (runtime) + cache persistant (sur la machine) avec TTL.    
Journal d’exécution (tokens, latence, erreurs) conservé sur une fenêtre glissante (24h).    






6.4 Attention “données sensibles”





Neurow n’ajoute pas de backend, mais il déclenche des appels vers un fournisseur externe. Pour des données sensibles, il faut appliquer les bonnes pratiques d’entreprise (données minimisées, anonymisation si nécessaire, comptes/projets dédiés, vérification des politiques de conservation du fournisseur, etc.). Neurow est conçu pour réduire le risque côté “Neurow”, mais il ne remplace pas une politique sécurité interne.








7) La proposition premium / licence (contenu pour page pricing + onboarding)







7.1 Modèle économique “clair”





Neurow est un produit logiciel (add-in Excel) avec une licence :



Essai : limité à 5 formules/jour (objectif : tester sur tes cas d’usage réels).
Premium : usage illimité des fonctions Neurow (mensuel ou annuel), annulable à tout moment.  




Important à expliquer (et à assumer sur le site) : Neurow est un add-in “no backend” et utilise tes propres clés Gemini/OpenAI. Cela signifie que :


Tu paies Neurow pour débloquer l’usage illimité et l’expérience produit (fonctions, UI, cache, logs, etc.).
Tu paies séparément tes coûts d’API auprès de Gemini/OpenAI selon ta consommation.






7.2 Explication “valeur” (copy conversion)





Premium n’est pas seulement “plus de formules” : c’est la possibilité de transformer Neurow en outil de production, pas uniquement en outil d’essai.



Industrialiser des classeurs entiers (classification / nettoyage / traduction / extraction sur des plages).
Itérer plus vite en changeant de modèle / effort de raisonnement selon le besoin.
Suivre la consommation via le tableau de bord (tokens/coûts estimés).
Profiter du cache intelligent pour éviter de repayer les mêmes requêtes.    






7.3 “Activation” (contenu wiki)





Dans le panneau Neurow :



Clique sur “Acheter une licence” (checkout).
Récupère ta clé (format AAAA-BBBB-CCCC-DDDD).
Colle-la dans “Clé de licence”, puis “Activer”.
Tu peux aussi “Tester” une clé avant de l’enregistrer, ou “Effacer” pour réinitialiser.    









8) Les fournisseurs et les modèles (contenu wiki + aide au choix)





Neurow supporte 2 fournisseurs :



Gemini (Google Generative Language API).
OpenAI (Responses API).  






8.1 Pourquoi deux fournisseurs





Résilience : si un fournisseur est lent / indisponible / en quota, tu peux basculer.
Optimisation coût/qualité : certains modèles excellent en vitesse, d’autres en rigueur.
Flexibilité : tu choisis par défaut dans le panneau, sans toucher aux formules.  






8.2 Modèles disponibles dans l’UI (catalogue)





Neurow propose un catalogue de modèles (avec indicateurs coût et “raisonnement”) ; tu peux aussi saisir un modèle “hors liste” si tu veux un modèle spécifique non listé. 



Exemples de modèles présents :



Gemini : gemini-3-flash-preview (recommandé), gemini-3-pro-preview, gemini-2.5-flash-lite.
OpenAI : gpt-5-mini (recommandé), gpt-5.2, gpt-5-nano.  






8.3 Effort de raisonnement (impact réel)





Neurow expose un réglage d’effort de raisonnement, distinct par fournisseur :



OpenAI : none, minimal, low, medium, high (selon support modèle).    
Gemini : auto, minimal, low, medium, high (avec adaptation selon modèle).    




Texte “site” réutilisable :



L’effort de raisonnement te permet d’arbitrer entre vitesse/coût et profondeur. Si tu n’as pas le résultat attendu, monte l’effort (ou change de modèle). Pour des tâches massives (nettoyage, traduction, classification), un effort faible suffit souvent. Pour des tâches plus “analyste” (résumé complexe, extraction délicate, génération de formule avancée), monte l’effort.   




8.4 Max output tokens (contrôle de longueur)





Neurow utilise un réglage global “Max output tokens” partagé entre les fournisseurs. Plus la limite est haute :



plus les réponses peuvent être longues (utile pour résumés ou explications),
mais plus la latence et les coûts peuvent augmenter.    









9) L’ADN “Excel” de Neurow (détails différenciants)







9.1 Réponses compatibles Excel (cellules)





Neurow applique des garde-fous spécifiques Excel :



Taille de cellule : tronquage sécurisé autour de ~32 000 caractères.  
Nettoyage des marqueurs Markdown pour AI.ASK (suppression gras, ##, etc.) pour une lecture propre.  
Production de matrices “spill” quand c’est pertinent (traduction de plages, classification, table, etc.).  






9.2 Contexte de plage (TSV) pour donner du “sens” à l’IA





Plusieurs fonctions acceptent un contexte sous forme de plage (convertie en TSV, tabulations/lignes). Exemple : AI.ASK peut prendre A1:B10 pour répondre avec le contexte de ton tableau. 





9.3 Génération de formules “FR/EN” intelligente





AI.FORMULA détecte la langue/locale Excel et :



si Excel est en FR : produit des noms de fonctions Excel FR et séparateur ;
sinon : noms anglais et séparateur ,  




C’est un détail qui “change tout” en production, car beaucoup d’outils IA génèrent des formules “US-only”.








10) Cache, logs, performance : contenu “pro” (wiki + page features)







10.1 Pourquoi un cache est indispensable dans Excel





Dans Excel, les recalculs peuvent déclencher les mêmes formules plusieurs fois (ou en cascade). Sans cache, tu payes et tu attends inutilement.



Neurow implémente :



Cache mémoire (LRU) : ultra rapide dans le runtime.    
Cache persistant : survit aux redémarrages, avec index limité et TTL.  
TTL différencié : plus long pour les tâches “stables”, plus court pour AI.WEB (données qui changent).    




Le panneau “Cache intelligent” affiche le nombre d’entrées et une taille approximative, et permet de vider le cache.   





10.2 Déduplication des appels identiques (anti-burst)





Neurow déduplique les requêtes identiques “en vol” (si plusieurs cellules demandent la même chose au même moment, un seul appel part, et les autres attendent). 





10.3 Limitation de concurrence + retries + timeouts





Pour éviter de saturer l’API (ou Excel) :



Concurrence max ~4 appels simultanés, le reste est mis en file.  
Retentatives automatiques (retries) sur erreurs transitoires.  
Timeout configurable (par défaut robuste).    






10.4 Suivi tokens et coûts estimés





Le panneau “Utilisation” affiche :



tokens totaux, tokens entrée / raisonnement / sortie,
coûts estimés par fournisseur et par modèle,
historique des appels et erreurs (logs),
activité sur 60 minutes (graph).    




Point important pour le site : le coût est une estimation basée sur une table de prix intégrée (à maintenir à jour). 








11) Bibliothèque “fonction par fonction” (texte prêt pour wiki)







Convention générale (à expliquer une fois)





Les fonctions Neurow sont dans le namespace AI.
Certaines renvoient un texte (scalaire), d’autres une matrice (spill).
Le fournisseur (Gemini/OpenAI) est choisi dans le panneau, pas dans les arguments.    









11.1 

AI.ASK(prompt, [context])





Objectif : poser une question et obtenir une réponse unique adaptée à une cellule Excel.



prompt : question/instruction.
context (optionnel) : une cellule ou une plage utilisée comme contexte (convertie en TSV).  




Sortie : texte (scalaire).



Exemples



=AI.ASK("Explique la variance"; A1:B10)
=AI.ASK("Rédige une synthèse en 5 points sur ce tableau"; A1:D20)




Bonnes pratiques



Donne un contexte concis, évite d’envoyer des tableaux gigantesques (tu veux de la pertinence, pas du volume).
Précise le format attendu (ex. “en 5 bullet points”, “une phrase”, “en style email”).
Si tu veux du structurel, préfère AI.EXTRACT, AI.CLASSIFY ou AI.TABLE.




Détails techniques



Neurow force une réponse “cell-friendly” (sans Markdown, sans guillemets, pas de code fences).
Le texte est tronqué si trop long pour Excel.  









11.2 

AI.WEB(query, [focus], [showSource])





Objectif : obtenir une valeur factuelle “à jour” issue du web, avec une source.



query : question factuelle (ex. “population France 2024”, “taux BCE”, “prix du cuivre”, etc.).
focus (optionnel) : cellule/plage de contexte pour préciser l’angle (TSV).
showSource (optionnel) : 1 pour inclure des sources, sinon 0.  




Sortie : texte (scalaire).

Neurow essaie d’extraire un JSON { value, source, reason } et peut ajouter une section “Sources:” si showSource=1. 



Exemples



=AI.WEB("Population France 2024";;1)
=AI.WEB("Taux directeur BCE";;1)




Important (texte à mettre sur le site)



AI.WEB utilise les outils web natifs des fournisseurs (Gemini google_search, OpenAI web_search). Si le modèle ne supporte pas l’outil, Neurow retombe automatiquement sur une réponse sans outil web (et la réponse peut être moins “vérifiable”).  









11.3 

AI.TRANSLATE(textOrRange, targetLang)





Objectif : traduire du texte, cellule par cellule, vers une langue cible.



textOrRange : cellule ou plage.
targetLang : code langue (ex. en, fr, de, es).  




Sortie : matrice (spill) avec une traduction par cellule.



Exemples



=AI.TRANSLATE(A2:A50;"en")
=AI.TRANSLATE(B2;"fr")




Bonnes pratiques



Pour des identifiants, références, unités : indique “conserver unités et identifiants” (Neurow le pousse déjà dans l’instruction système).  









11.4 

AI.CLASSIFY(textOrRange, labels)





Objectif : assigner à chaque texte un label parmi une liste donnée.



textOrRange : cellule ou plage.
labels : soit une chaîne “A|B|C”, soit une plage qui contient les labels.  




Sortie : matrice (spill) avec un label par cellule.



Exemples



=AI.CLASSIFY(B2:B100;"Urgent|Normal|À traiter")
=AI.CLASSIFY(C2;"Bug|Question|Feature")




Bonnes pratiques



Garde une taxonomie courte (3–10 labels) pour réduire l’ambiguïté.
Si c’est critique, ajoute un label UNKNOWN (Neurow le gère déjà).  









11.5 

AI.EXTRACT(textOrRange, instruction)





Objectif : extraire une information demandée (ou plusieurs) d’un texte.



instruction : ce que tu veux extraire (ex. “emails”, “SIREN”, “nom de la société”, “date”, “montant”, etc.).  




Sortie : matrice (spill).



Comportement différenciant :



Si tu passes une seule cellule : Neurow peut renvoyer plusieurs éléments sous forme de liste verticale (spill vertical).
Si tu passes une plage : Neurow renvoie un élément par cellule (best-effort).  




Exemples



=AI.EXTRACT(A2;"emails")
=AI.EXTRACT(C2:C200;"numéro de téléphone")
=AI.EXTRACT(D2:D200;"pays mentionné")









11.6 

AI.CLEAN(textOrRange)





Objectif : nettoyer/normaliser du texte pour une version plus exploitable dans Excel (espaces, retours, bruit).



Sortie : matrice (spill), “un texte propre” par cellule. 



Exemples



=AI.CLEAN(A2:A300)
=AI.CLEAN(B2)









11.7 

AI.CONSISTENT(textOrRange)





Objectif : harmoniser une liste de libellés proches en une représentation cohérente (casse, accents, espaces, fautes évidentes).



Sortie : matrice (spill) alignée sur les entrées. 



Exemples



=AI.CONSISTENT(A2:A500) (noms d’entreprises, statuts, villes)









11.8 

AI.SUMMARIZE(textOrRange, [mode])





Objectif : produire un résumé “Excel-friendly”.



mode 0 (défaut) : résume chaque cellule indépendamment (utile pour des notes ligne à ligne).
mode 1 : produit un résumé global de toute la plage (utile pour une synthèse de dataset).  




Sortie : matrice (spill).



Exemples



=AI.SUMMARIZE(F2:F50)
=AI.SUMMARIZE(F2:F50;1)









11.9 

AI.FORMULA(description, [context])





Objectif : générer uniquement une formule Excel valide (=…) à partir d’une description.



Détection FR/EN et séparateur ; / ,.  




Sortie : texte (scalaire), une formule.



Exemples



=AI.FORMULA("Sommer les ventes par région"; A1:C200)
=AI.FORMULA("Trouver le dernier mois non nul dans la colonne B")




Bonnes pratiques



Donne un exemple de structure (noms de colonnes, colonnes concernées) via contextRange.
Si la formule est complexe, augmente max tokens / effort de raisonnement.









11.10 

AI.TABLE(description, [context])





Objectif : générer un tableau complet (en-têtes + lignes) à partir d’un brief.



Sortie : matrice “spill” : première ligne = en-têtes, puis les lignes. 



Exemples



=AI.TABLE("Top 10 villes françaises avec population et région")
=AI.TABLE("Tableau de segmentation clients : segment, critères, action")









11.11 

AI.FILL(exampleRange, targetRange, instruction)





Objectif : remplir une colonne cible en imitant des exemples.



exampleRange : exemples “input → output” (souvent 2 colonnes).
targetRange : inputs à transformer (souvent 1 colonne).
instruction : règle de transformation.  




Sortie : une colonne (spill vertical) de valeurs transformées.



Exemples



=AI.FILL(A2:B20; D2:D200; "Normaliser en Nom Prénom (Title Case) et supprimer les doublons d'espaces")
=AI.FILL(A2:B10; C2:C100; "Mapper en catégorie produit (catégorie = output)")









11.12 

AI.KEYSTATUS()





Objectif : diagnostic rapide (provider par défaut, max tokens, clés présentes, modèles, backend de stockage). 



Sortie : texte.








11.13 

AI.TEST()





Objectif : test de connectivité du provider par défaut (réponse “OK” si tout va bien).   








11.14 

AI.COUNT(range, value)





Objectif : compter localement le nombre de cellules qui matchent exactement une valeur (insensible à la casse).

Utile comme fonction “utilitaire” rapide sans appel IA. 








12) Contenu “exemples concrets” (à mettre sur pages démo)







Démo “data cleaning”





Harmoniser des villes : =AI.CONSISTENT(A2:A200)
Nettoyer des commentaires : =AI.CLEAN(B2:B200)
Résumer des notes : =AI.SUMMARIZE(C2:C200)






Démo “M&A / Deal screening”





=AI.CLASSIFY(D2:D500;"Software|Healthcare|Industry|Consumer|Services|Other")
=AI.EXTRACT(E2:E500;"montant de l'opération")
=AI.SUMMARIZE(F2:F500;1) (synthèse globale)






Démo “formula helper”





=AI.FORMULA("Faire une recherche par clé, gérer les #N/A, et renvoyer 0 si vide"; A1:D200)






Démo “web factual”





=AI.WEB("PIB France 2024";;1)
=AI.WEB("Taux de chômage zone euro";;1)









13) FAQ / dépannage (orientée erreurs récurrentes)







13.1 “Aucune clé API enregistrée” / “Clé manquante”





Symptôme : erreurs ou panneau indiquant qu’aucune clé n’est enregistrée.

Cause : aucune clé Gemini ou OpenAI n’est stockée.

Résolution : ouvrir Neurow → saisir une clé API → tester.     








13.2 “Échec / API_ERROR / quota / credit”





Symptôme : AI.TEST() échoue, ou une formule renvoie une erreur.

Causes probables :



clé invalide,
quota dépassé / compte sans crédit,
modèle non accessible pour ton compte/projet,
endpoint temporairement instable.




Actions :



Vérifier la clé dans le provider.
Tester avec un modèle plus “standard”.
Réduire max output tokens et effort de raisonnement.
Réessayer (Neurow applique déjà des retries).    









13.3 “Réponse vide”





Symptôme : erreur “Réponse vide …”.

Causes probables :



modèle saturé,
outil web non disponible,
prompt trop contraint.




Actions :



Refaire le calcul (F9 / recalcul),
changer de modèle,
simplifier la requête,
augmenter max output tokens (si réponse coupée).    









13.4 “JSON parsing error” sur 

AI.EXTRACT

 (single cell)





Symptôme : Neurow attend du JSON strict mais la réponse n’est pas parseable.

Actions :



Utiliser un modèle plus fiable en sortie structurée,
réduire la complexité de l’instruction,
éviter d’envoyer un texte énorme,
relancer (les fallbacks existent mais une réponse peut rester non conforme).    









13.5 

#SPILL!

 (Excel)





Symptôme : la formule renvoie une matrice mais Excel ne peut pas “spiller”.

Cause : cellules adjacentes non vides ou zone de spill bloquée.

Résolution : libérer la zone de spill, ou déplacer la formule.








13.6 Résultats “trop longs” / tronqués





Symptôme : texte coupé avec “…”

Cause : limite Excel de taille de cellule. Neurow tronque pour éviter une erreur.

Résolution :



demander un format plus court (ex. “3 bullets max”),
répartir la sortie sur plusieurs cellules (table, extraction, etc.).  









13.7 “Ça relance des appels tout le temps”





Pourquoi : Excel recalcul (changement de cellule, dépendances, etc.).

Ce que Neurow fait : cache mémoire + persistant + dédup en vol.   

Bonnes pratiques :



éviter les fonctions volatiles,
stabiliser les prompts (moins de dépendances),
utiliser le cache (ne pas vider inutilement),
en fin de chaîne, coller en valeurs si besoin.









13.8 

AI.WEB

 ne donne pas de source / web search indisponible





Pourquoi : certains modèles ou environnements ne supportent pas les outils web.

Ce que Neurow fait : fallback automatique sans web tool. 

Résolution : changer de modèle, ou basculer fournisseur.








13.9 Problèmes de licence





Symptômes : “Licence invalide / expirée”, limitation d’usage.

Résolution :



Tester la clé,
Activer la clé,
Vérifier la date de renouvellement affichée,
Réinitialiser (effacer puis réactiver).    









14) Contenu “comparatif” et différenciation (sans dépendre d’un concurrent précis)





Tu peux utiliser ce texte sur ton site pour clarifier la différence entre Neurow et “utiliser une IA à côté” :



Neurow travaille dans Excel : les résultats vivent dans les cellules, se spillent en matrices, s’agrègent, se filtrent, s’intègrent aux formules et TCD.
Neurow est industrialisable : même si une question peut être posée à une IA générale, industrialiser “300 lignes de texte → 300 catégories” est une autre histoire. Neurow est pensé pour ça.
Neurow te donne de la visibilité : tokens, coûts estimés, logs et cache (tu sais ce qui se passe).  
Neurow n’impose pas un modèle unique : tu peux choisir Gemini ou OpenAI, changer de modèle selon le besoin, sans réécrire tes formules.  









15) Contenu “technique” (wiki exhaustif – architecture)







15.1 Architecture globale





Neurow utilise un Shared Runtime : le panneau (taskpane) et les custom functions tournent dans le même runtime, ce qui permet de partager la configuration et les caches.   



Chaîne d’appel (vulgarisée) :



Excel (cellule)

→ functions.js (custom function)

→ aiGenerate() (orchestrateur)

→ Provider API (Gemini / OpenAI)

→ retour dans Excel (texte ou matrice)   





15.2 Stockage & configuration





La configuration inclut :



provider par défaut,
clés API (Gemini / OpenAI),
modèle par provider,
effort de raisonnement par provider,
max output tokens (global),
options UI (sections).    






15.3 Orchestration des requêtes





aiGenerate() gère :



récupération config (provider, modèle, tokens, effort),
construction de clé de cache (hash stable + SHA-256 si possible),
cache mémoire + persistent,
dédup en vol,
limite de concurrence,
retries,
fallbacks (web search et structured output).    






15.4 Structured outputs (JSON) pour fiabilité





Pour plusieurs fonctions “batch”, Neurow demande du JSON strict, parfois avec schema (Gemini responseSchema, OpenAI json_schema). Si le modèle ne supporte pas, Neurow retente sans schema en renforçant l’instruction “Return valid JSON only”.   





15.5 Web search





Gemini : tools: [{ google_search: {} }], extraction des sources via groundingMetadata.  
OpenAI : tools: [{ type: "web_search" }] + inclusion des sources via include.  









16) Contenu “marketing opérationnel” (SEO + messages + CTAs)







16.1 Phrases CTA prêtes à l’emploi





“Activez Neurow et passez de données texte à des colonnes exploitables, en quelques formules.”
“Nettoyage, traduction, extraction, classification, résumé : l’IA dans Excel, pas à côté.”
“Choisissez Gemini ou OpenAI, changez de modèle sans réécrire vos formules.”
“Suivez vos tokens, votre coût estimé et vos appels en temps réel.”  






16.2 Angles de landing page (au choix)





Angle “productivité” : “20 minutes de nettoyage deviennent 20 secondes.”
Angle “industrialisation” : “Transformez des workflows manuels en pipelines Excel.”
Angle “finance/analyste” : “Données propres, labels cohérents, synthèses prêtes pour les slides.”
Angle “pilotage” : “Vous maîtrisez la consommation (tokens/cost) — pas de boîte noire.”  






16.3 SEO / mots-clés (suggestions)





“extension Excel IA”, “custom functions Excel IA”, “IA dans Excel formule”, “traduction Excel IA”, “classification texte Excel IA”, “nettoyage libellés Excel IA”, “résumé automatique Excel”, “extraction emails Excel IA”, “générer formule Excel IA”.









17) Contenu “bonnes pratiques” (page tips / wiki)





Stabiliser les entrées : une formule IA dépendante d’une cellule volatile peut se recalculer souvent.
Préférer les plages raisonnables : même si Excel accepte de grandes plages, l’IA est plus fiable si chaque requête reste ciblée.
Préciser le format : “1 phrase”, “3 bullets”, “label exact”, “JSON strict” (Neurow le fait déjà pour certaines fonctions).  
Itérer modèle/effort : si le résultat est trop “léger”, augmenter l’effort de raisonnement et/ou le modèle.  
Exploiter le cache : si tu as un classeur très itératif, le cache réduit radicalement le coût.    









Références code (liens vers les fichiers analysés)





UI panneau (structure & contenus) :  
UI panneau (logique, modèles, coûts, onboarding, logs, cache, licence) :  
Custom functions (AI.*) :  
Orchestrateur providers, cache, retries, web search :  
Storage, cache persistant, logs :  
Métadonnées fonctions :  
README (vue globale projet) :  
Package scripts/build :  







Si tu veux aller encore plus loin côté “site”, je peux aussi te produire (dans le même niveau de détail) :



une page “pricing” complète (objections, clarifications API costs vs licence, FAQ de paiement),
une page “sécurité & conformité” (tableau flux de données, stockage local, recommandations entreprise),
des pages “use-cases” prêtes pour M&A / conseil / audit / FP&A avec mini scénarios et templates d’exemples Excel.