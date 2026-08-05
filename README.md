# Black Studio — Site React

Site portfolio de Sossou Kennedy (Black Studio), repris depuis la maquette Figma Make.

## Installation

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:5173` (ou l'URL affichée dans le terminal).

Pour le build de production :

```bash
npm run build
npm run preview
```

## Modifications apportées

1. **Titres centrés** — tous les gros titres de section (Hero, À propos, Mes créations,
   Mes prestations, Passer une commande, Parlons de votre projet) sont désormais centrés
   au lieu d'être alignés à gauche.

2. **Section "Mes créations"** — les 5 emplacements du carrousel 3D qui réutilisaient
   tous la même image d'affiche ont été remplacés par 7 vrais visuels de projets
   (`src/imports/portfolio/`) :
   - `ewa.png` — Èwa (packaging)
   - `black-studio-carte.png` — carte de visite Black Studio (branding)
   - `weekend-artistique-compte-a-rebours.png` — Weekend Artistique (social media)
   - `akossiwa-lundi.jpg` — Association Akossiwa (social media)
   - `week-art-affiche-officielle.png` — Week Art (print)
   - `black-studio-grand-format.jpg` — impression grand format (print media)
   - `koudi-chips-etiquette.jpg` — Koudi Chips (packaging)

3. **Deux nouvelles sections vidéo** (`src/imports/videos/`) :
   - **« Ce que je fais »** — juste après le Hero, avant « À propos » : vidéo de
     présentation de l'activité de Black Studio (`black-studio-presentation.mp4`).
   - **« Souriez avec nous »** — juste avant le footer : vidéo de clôture
     (`black-studio-souriez.mp4`).

## Structure

```
src/
  App.tsx            → tout le site (Nav, Hero, Presentation, About, Portfolio,
                        Services, Order, Contact, ClosingVideo, Footer)
  imports/
    portfolio/        → les 7 visuels de projets
    videos/            → les 2 vidéos
    Affiche_motivation.png, logo_animated.mp4  → assets d'origine (Hero, logo nav)
```
