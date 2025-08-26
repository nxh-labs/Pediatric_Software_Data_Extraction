# Guide de Contribution

Nous sommes ravis que vous souhaitiez contribuer à ce projet ! Ce document fournit un ensemble de directives pour vous aider à participer de manière efficace et cohérente.

## Table des Matières

1.  [Comment Contribuer](#comment-contribuer)
2.  [Gestion des Branches](#gestion-des-branches)
3.  [Format des Commits](#format-des-commits)
4.  [Tests](#tests)
5.  [Processus de Revue de Code](#processus-de-revue-de-code)
6.  [Données Sensibles et Éthique](#données-sensibles-et-éthique)

## 1. Comment Contribuer

Les contributions peuvent prendre plusieurs formes :

- **Ajout ou mise à jour de données** : Intégrer de nouvelles courbes de croissance, de nouveaux protocoles ou mettre à jour les références existantes.
- **Amélioration du code** : Rendre le code plus lisible, plus performant ou plus maintenable.
- **Correction de bugs** : Résoudre des erreurs dans l'extraction ou la transformation des données.
- **Amélioration de la documentation** : Clarifier le `README.md` ou d'autres documents.

Avant de commencer à travailler, veuillez ouvrir une "Issue" sur GitHub pour discuter des changements que vous souhaitez apporter.

## 2. Gestion des Branches

Pour maintenir un historique de projet propre, veuillez suivre ce modèle de gestion des branches :

- **`main`** : La branche `main` est réservée au code de production stable. Aucune modification directe n'est autorisée.
- **Branches de fonctionnalités (`feature/...`)** : Toute nouvelle fonctionnalité ou ajout de données doit être développé dans une branche dédiée.
    - Nommez votre branche de manière descriptive, par exemple : `feature/add-new-growth-chart-2023`.
    - Basez votre branche sur la version la plus récente de `main`.
    ```bash
    git checkout main
    git pull origin main
    git checkout -b feature/nom-de-la-fonctionnalite
    ```
- **Branches de correction (`fix/...`)** : Pour les corrections de bugs.
    - Exemple : `fix/incorrect-zscore-calculation`.

## 3. Format des Commits

Un style de commit cohérent permet de garder l'historique Git lisible. Nous suivons la convention "Conventional Commits".

Chaque message de commit doit être structuré comme suit :

```
<type>(<scope>): <description>

[corps optionnel]

[pied de page optionnel]
```

- **Type** : `feat` (nouvelle fonctionnalité), `fix` (correction de bug), `docs` (documentation), `style` (formatage), `refactor` (refactoring), `test` (ajout de tests), `chore` (tâches de maintenance).
- **Scope** (optionnel) : Le module concerné (ex: `GrowthRef`, `Medicines`, `deps`).
- **Description** : Un résumé concis des changements en minuscules et à l'impératif.

**Exemples** :

```
feat(GrowthRef): add who 2023 weight-for-height charts
fix(ClinicalRef): correct typo in a clinical sign code
docs(README): update installation instructions
chore(deps): upgrade xlsx to version 0.19.0
```

## 4. Tests

Bien que ce projet ne dispose pas actuellement d'une suite de tests automatisés, la **validation des données générées est une étape cruciale**.

- **Validation par comparaison** : Après avoir modifié un extracteur, générez les fichiers JSON et comparez-les manuellement ou via un script avec les données sources (le fichier Excel). Assurez-vous que les valeurs (Z-scores, médianes, etc.) sont identiques.
- **Validation de la structure** : Vérifiez que le fichier JSON généré est bien formé et respecte les `types` définis dans le répertoire `types/`.
- **Exécution complète du pipeline** : Après vos modifications, lancez toujours la commande `yarn build` pour vous assurer que vous n'avez pas introduit de régressions dans d'autres parties du pipeline.

À l'avenir, nous prévoyons d'intégrer un framework de test comme `jest` pour automatiser ces validations.

## 5. Processus de Revue de Code

Une fois votre travail terminé, soumettez une "Pull Request" (PR) vers la branche `main`.

- **Titre et description clairs** : Le titre de votre PR doit suivre le format des commits. La description doit expliquer le "pourquoi" de vos changements et lier l'Issue correspondante.
- **Auto-revue** : Relisez votre propre code avant de demander une revue. Assurez-vous qu'il respecte les règles de style et de contribution.
- **Revue par les mainteneurs** : Au moins un mainteneur du projet doit approuver les changements. Soyez prêt à répondre aux commentaires et à apporter des modifications.
- **Merge** : Une fois la PR approuvée, elle sera "squashed and merged" dans `main` par un mainteneur pour conserver un historique propre.

## 6. Données Sensibles et Éthique

Ce projet manipule des **données de référence médicales**. Il ne traite **aucune donnée de patient**. Cependant, la précision de ces données de référence est critique.

- **Exactitude avant tout** : La priorité absolue est de garantir que les données générées sont une transcription exacte des sources officielles (OMS, NCHS, protocoles). Toute approximation ou interprétation doit être documentée et justifiée.
- **Pas de données patient** : Ne jamais introduire de données personnelles ou de patient dans ce dépôt, que ce soit dans le code, les issues ou les PRs.
- **Mise à jour des sources** : Si vous constatez qu'une source de données est obsolète, veuillez ouvrir une Issue pour discuter de sa mise à jour. Utiliser des références médicales à jour est une responsabilité éthique.
