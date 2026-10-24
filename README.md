# Quiz Me Up

**Duel quiz football** pour téléphone : tu affrontes un robot sur 10 questions de 12 secondes, et chaque victoire fait grimper ton équipe au classement hebdomadaire.

Basé sur le document « Jeux mobiles compétitifs et sociaux : idées et plan » — duel quiz (idée 1) + équipe contre équipe (idée 3).

## Jouer sur téléphone

L'app est une **PWA** : elle s'installe comme une vraie app, en plein écran, et marche hors-ligne.

1. Ouvre l'adresse du jeu dans Chrome (Android) ou Safari (iPhone).
2. Android : menu ⋮ → « Installer l'application ». iPhone : Partager → « Sur l'écran d'accueil ».

Adresse (après activation de GitHub Pages) : `https://rayenbensalem123-cloud.github.io/quiz-me-up/`

> Activation : dépôt → Settings → Pages → Source : **GitHub Actions**. Le workflow `.github/workflows/pages.yml` publie ensuite à chaque push sur `main`.

## Jouer sur ordinateur

Sers le dossier avec n'importe quel serveur statique (le mode hors-ligne exige http/https, pas `file://`) :

```
python3 -m http.server 8000
```

puis ouvre http://localhost:8000.

## Règles

- Choisis ton pseudo et ton équipe (8 drapeaux)
- 10 questions de football, 12 secondes chacune
- 100 points par bonne réponse + bonus de vitesse jusqu'à 50
- Victoire = +150 points pour ton équipe, nul = +60, défaite = +20
- Pseudo, équipe et classement sont mémorisés sur l'appareil (localStorage)

## Pourquoi un robot

Résoudre le problème du « salon vide » : un duel avec peu de joueurs connectés paraît mort. L'adversaire est un robot qui répond juste ~65 % du temps, à un instant aléatoire.

## Fichiers

- `index.html` : tout le jeu (HTML, CSS, JS)
- `manifest.webmanifest`, `sw.js`, `icons/` : installation et hors-ligne

## Prochaines étapes possibles

- Vrais duels en ligne et classement côté serveur (Firebase/Supabase) pour l'anti-triche
- Salons privés entre amis par code
- Plus de questions, catégories, cosmétiques
- Publication sur les stores via Capacitor

## Licence

Utilisation libre — démo de concept.
