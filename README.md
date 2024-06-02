# inPaste - Clone du site web Pastebin

inPaste est un clone du célèbre site web Pastebin, conçu pour permettre aux utilisateurs de partager rapidement et facilement du texte en ligne. Ce projet a été réalisé en 48 heures, donc certaines fonctionnalités peuvent ne pas être complètes ou entièrement implémentées.

## Fonctionnalités principales

- **Ajout de Pâtes :** Les utilisateurs peuvent ajouter du texte à partager en ligne en créant une nouvelle pâte.
- **Partage Public ou Privé :** Les pâtes peuvent être partagées publiquement ou privément en définissant un mot de passe.
- **Suppression de Pâtes :** Les utilisateurs peuvent supprimer leurs pâtes en fournissant le mot de passe correspondant.
- **Expiration des Pâtes :** Les pâtes peuvent être configurées pour expirer après une certaine période.

## Fonctionnalités manquantes

En raison du temps limité, certaines fonctionnalités n'ont pas été complètement implémentées dans ce projet :

- Page de Connexion ou d'Inscription : Actuellement, le projet ne comporte pas de système de connexion ou d'inscription pour les utilisateurs. Toutes les fonctionnalités sont accessibles publiquement.
- Interface Utilisateur : L'interface utilisateur peut ne pas être complètement finalisée ou optimisée dans cette version.
## Figma lien
https://www.figma.com/design/fXUtGtLr9GPtvOf9EuJtbM/Untitled?node-id=0-1&t=FAz7CXGjnKuTzHlj-1
## Gestion des Tâches de Fond

Un défi rencontré lors du développement de inPaste a été la mise en place de tâches de fond pour vérifier régulièrement si des pâtes ont dépassé leur heure d'expiration. Pour cela, Django offre plusieurs options, notamment l'utilisation de bibliothèques telles que Celery ou Django Background Tasks. Ces outils permettent de planifier et d'exécuter des tâches asynchrones, telles que la vérification des pâtes expirées, de manière efficace et fiable.

## Conception

La conception visuelle de inPaste a été un défi, et nous avons cherché à créer une interface utilisateur attrayante et conviviale. Utilisant la bibliothèque Tailwind CSS, nous avons pu créer des composants et des mises en page réactives, tout en gardant une approche centrée sur l'utilisateur. Bien que le projet puisse nécessiter des améliorations supplémentaires dans ce domaine, nous avons cherché à fournir une expérience utilisateur agréable et intuitive.

## Technologies Utilisées

inPaste a été développé en utilisant plusieurs technologies :

- **Django** : Un framework web puissant pour le développement rapide d'applications web en Python.
- **Django Rest Framework (DRF)** : Une extension de Django pour la création d'API Web.
- **Tailwind CSS** : Une bibliothèque de styles utilitaire pour la création de conceptions modernes et personnalisables.

## Remerciements

inPaste a été réalisé dans un délai limité et a été un projet stimulant et enrichissant. Nous tenons à remercier tous ceux qui ont contribué à ce projet, ainsi que la communauté open source pour leurs précieuses ressources et contributions.

---
**Note:** Bien que inPaste ait été initialement conçu comme un projet de test, il a été réalisé avec soin et attention pour offrir une expérience de qualité. Nous sommes ouverts aux commentaires, suggestions et contributions pour améliorer davantage ce projet.
