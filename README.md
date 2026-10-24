# Quiz Me Up

Prototype jouable d'un **duel quiz football** : deux joueurs (vous contre un robot) répondent aux mêmes 10 questions en temps réel, et chaque victoire fait grimper votre équipe au classement hebdomadaire.

Basé sur le document « Jeux mobiles compétitifs et sociaux : idées et plan » — recommandation : duel quiz (idée 1) + équipe contre équipe (idée 3).

## Jouer

Ouvrez simplement `duel-quiz-football.html` dans un navigateur (double-clic). Aucun serveur, aucune installation.

- Choisissez votre pseudo et votre équipe (8 drapeaux)
- 10 questions de football, 12 secondes chacune
- 100 points par bonne réponse + bonus de vitesse jusqu'à 50
- Victoire = +150 points pour votre équipe au classement hebdo
- Le pseudonyme, l'équipe et le classement sont mémorisés (localStorage)

## Pourquoi un robot

Résoudre le problème du « salon vide » : un jeu de duel avec 20 joueurs connectés paraît mort. L'adversaire ici est un robot qui répond avec ~65 % de réussite, à un instant aléatoire de la question.

## Notes de conception

- Le classement est calculé localement (prototype) — la version réelle passerait par Firebase/Supabase pour l'anti-triche
- Pas de publicité ni d'achat : boucle de jeu de base uniquement
- Prochaines étapes possibles : salons privés entre amis par code, vrais duels en ligne, cosmétiques

## Licence

Utilisation libre — démo de concept.
