# Quiz Me Up

**Duel quiz de culture générale** pour téléphone : 10 questions, 12 secondes chacune, contre un robot. Tu choisis un thème avant de jouer, ou « Culture générale » pour tout mélanger.

## Jouer sur téléphone

L'app est une **PWA** : elle s'installe comme une vraie app, en plein écran, et marche hors-ligne.

1. Ouvre l'adresse du jeu dans Chrome (Android) ou Safari (iPhone).
2. Android : menu ⋮ → « Installer l'application ». iPhone : Partager → « Sur l'écran d'accueil ».

Adresse (après activation de GitHub Pages) : `https://rayenbensalem123-cloud.github.io/quiz-me-up/`

> Activation : dépôt → Settings → Pages → Source : **GitHub Actions**. Le workflow `.github/workflows/pages.yml` publie ensuite à chaque push sur `main`.

## Jouer sur ordinateur

Sers le dossier avec un serveur statique (le mode hors-ligne exige http/https, pas `file://`) :

```
python3 -m http.server 8000
```

puis ouvre http://localhost:8000.

## Règles

- Choisis ton pseudo et un thème, ou « Culture générale » qui les mélange tous (Histoire, Géographie, Sciences, Nature et animaux, Cinéma et séries, Musique, Arts et littérature, Sport, Football, Tunisie et monde arabe, Tech et jeux vidéo)
- 100 points par bonne réponse, plus un bonus de vitesse jusqu'à 50
- Le robot répond juste environ 65 % du temps, à un moment aléatoire
- La page « Mes scores » garde tes duels, tes victoires et ta réussite par thème (localStorage, sur l'appareil)

## Ajouter des questions

Tout est dans `questions.js`. Une question tient sur une ligne, la bonne réponse en premier (le jeu mélange l'ordre) :

```js
Q("histoire", "Qui fut le premier empereur romain ?", "Auguste", "Jules César", "Néron", "Trajan");
```

Pour créer un thème, ajoute-le à la liste `GENRES` en haut du fichier.

## Fichiers

- `index.html` : le jeu (HTML, CSS, JS)
- `questions.js` : thèmes et questions
- `manifest.webmanifest`, `sw.js`, `icons/` : installation et hors-ligne

## Prochaines étapes possibles

- Vrais duels en ligne et classement côté serveur (Firebase ou Supabase)
- Équipes et classement par équipe
- Salons privés entre amis par code
- Plus de questions par thème, niveaux de difficulté
- Publication sur les stores via Capacitor

## Licence

Utilisation libre, démo de concept.
