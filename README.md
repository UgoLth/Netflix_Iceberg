# Sous la surface — Netflix

Site pédagogique en français, React + TypeScript + Vite, consacré à la culture Netflix. Le parcours est une plongée continue dans les trois niveaux de Schein : artefacts à la surface, valeurs sous l’eau, présupposés dans les profondeurs. Les stations OCAI, concurrence et intrapreneuriat suivent la plongée.

[Voir le site](https://ugolth.github.io/Netflix_Iceberg/) · [Dépôt GitHub](https://github.com/UgoLth/Netflix_Iceberg)

## Lancer le projet

Prérequis : Node.js 22.12 ou supérieur (vérifié avec Node 22.20).

```powershell
git clone https://github.com/UgoLth/Netflix_Iceberg.git
cd Netflix_Iceberg
npm ci
npm run dev
```

Ouvrir l’adresse affichée par Vite. Si le port est occupé, Vite en choisit un autre.

Dans l’espace de travail original, le projet se trouve déjà dans le dossier `sous-la-surface` : il n’est pas nécessaire de le cloner à nouveau.

```powershell
npm run build
npm run preview
```

Le build vérifie TypeScript et génère `dist/`. Ne pas ouvrir `dist/index.html` directement avec `file://` ; utiliser un serveur HTTP.

## Expérience et accessibilité

- Une seule scène SVG : la caméra suit les positions réelles des chapitres. La ligne d’eau et l’iceberg évoluent ensemble ; la scène ne se réinitialise pas entre les niveaux.
- Fluidité : translations et zoom par `transform`, transparence de la glace sur une couche séparée, léger lissage commun de la caméra et de l’eau. Les positions des chapitres sont mises en cache jusqu’à un changement de mise en page. Les grands filtres et les flous derrière les cartes ont été retirés du parcours animé pour limiter le travail de rendu.
- Le défilement reste natif. Les liens permettent de rejoindre chaque niveau directement.
- Les cartes s’ouvrent au clic ou au clavier ; leurs sources restent toujours accessibles.
- La boussole donne les trois niveaux de Schein, sans profondeurs physiques ou proportions prétendument mesurées.
- Le bouton **Mode lecture** supprime la mise en scène, déplie les analyses et affiche une vue complète de l’iceberg.
- `prefers-reduced-motion` désactive les particules et la parallaxe continue ; la scène change par niveau.
- L’impression affiche toutes les analyses et les quatre diagnostics OCAI. Une feuille d’impression est incluse.
- Aucun compte, backend, cookie applicatif, outil de suivi, son automatique ou service de polices distant.

## Modifier le contenu

- `src/content/netflix.ts` : faits, analyses des cartes, valeurs, OCAI, frise, proposition d’intrapreneuriat et observations documentaires.
- `src/content/sources.ts` : références, dates et bibliographie théorique.
- `src/sections/Exploration.tsx` : récit des trois niveaux et passages visuels.
- `src/sections/Stations.tsx` : outils complémentaires et avis proposé.
- `src/components/DiveScene.tsx` : caméra et synchronisation de la ligne d’eau.
- `src/components/IcebergScene.tsx` : dessin SVG original de l’iceberg.
- `src/styles/immersion.css` : scène, transitions visuelles, mobile, mouvement réduit et adaptations de lecture.
- `src/components/Footer.tsx` : méthode, limites, observations, crédits et outils.

Les informations documentaires ont été vérifiées lors de la réalisation initiale du 2 novembre 2026. Cette refonte porte sur l’expérience visuelle : elle n’ajoute aucun nouveau fait sur Netflix. Les annonces futures citées dans les sources ne sont pas présentées comme des déploiements réalisés.

## Avant la remise universitaire

1. Faire valider par l’enseignant le choix d’une entreprise externe, Netflix, au lieu de l’entreprise d’alternance.
2. Faire valider le remplacement des trois observations de terrain par les trois observations documentaires clairement signalées.
3. Réaliser et remettre séparément le brouillon manuscrit demandé par le cours.
4. Relire et s’approprier l’avis argumenté proposé. Aucune expérience personnelle chez Netflix n’a été inventée.

Le cours fourni est utilisé pour le cadre théorique (p. 17–18, 22–23, 28–30, 41–46) et les exigences du travail (p. 50–53). Son PDF n’est pas distribué avec le site.

## Déploiement statique

`dist/` est autonome et peut être publié sur un hébergeur statique.

- **Netlify** : répertoire de base `sous-la-surface` si le dépôt contient le dossier parent ; commande `npm run build` ; dossier publié `dist`.
- **Vercel** : même répertoire de base ; framework Vite ; commande `npm run build` ; sortie `dist`.
- **GitHub Pages** : le workflow `.github/workflows/pages.yml` installe les dépendances avec `npm ci`, vérifie TypeScript, compile puis publie `dist/`. Il s’exécute à chaque push sur `main`, ou manuellement depuis Actions. Le chemin de base est automatiquement lu dans la configuration Pages : aucun nom de dépôt n’est à coder dans Vite. Le favicon suit ce même chemin.
- **Sites** : l’identité existante et le répertoire statique sont conservés dans `.openai/hosting.json`. La publication privée passe par le workflow du plugin ; ce fichier ne contient aucun secret.

### Activer GitHub Pages

Dans le dépôt GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**. Le workflow doit être autorisé à déployer vers l’environnement `github-pages`. Après un push sur `main`, suivre **Actions → Publier sur GitHub Pages** ; le job `deploy` fournit l’URL finale.

Seuls les fichiers du site sont versionnés dans ce dépôt. `node_modules/` et `dist/` sont reconstruits par le workflow. Le PDF du cours et le cahier des charges situés dans le dossier parent ne font pas partie du dépôt.

Références techniques : [déploiement Vite sur GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages), [documentation GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Validation

`npm run build` vérifie les types et le bundle. La scène doit aussi être relue sur navigateur : surface, traversée de l’eau, valeurs, profondeurs, retour vers les stations, ouverture des cartes, mode lecture et ancres. Les limites des vérifications visuelles effectuées sont rapportées dans le message de livraison.

Projet pédagogique indépendant, non affilié à Netflix.
