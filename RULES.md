# Règles Internes du Projet

Ce document définit les règles et conventions à suivre pour assurer la cohérence, la qualité et la maintenabilité du code et des données de ce projet.

## 1. Style de Code

Le projet utilise **TypeScript**. Le style de code doit rester cohérent sur l'ensemble de la base de code.

- **Formatage** : Nous utilisons un formateur de code automatique (comme Prettier) pour garantir un style uniforme. Bien qu'il ne soit pas configuré dans `package.json`, il est fortement recommandé de l'utiliser. Les règles de base sont :
    - Indentation de 2 espaces.
    - Virgule à la fin des listes d'objets ou de tableaux multi-lignes.
    - Guillemets simples (`'`) ou doubles (`"`) sont acceptables, mais la cohérence au sein d'un même fichier est attendue. Le code existant utilise principalement des guillemets doubles.
- **Nommage** :
    - **Variables et fonctions** : `camelCase` (ex: `saveClinicalRefs`).
    - **Types et Interfaces** : `PascalCase` (ex: `GrowthRefChart`).
    - **Fichiers** : `camelCase` pour les fichiers `.ts` (ex: `clinicalRef.ts`), `kebab-case` pour les fichiers JSON générés (ex: `weight-for-age.json`).
    - **Constantes** : `UPPER_CASE` (ex: `GrowthRefChartAndTableCodes`).
- **Commentaires** :
    - Utilisez les commentaires pour expliquer le "pourquoi" du code, pas le "comment".
    - Le code doit être aussi auto-documenté que possible.
    - Utilisez les commentaires de bloc `/** ... */` pour la documentation de haut niveau des fonctions et des modules.

## 2. Organisation des Modules

La structure du projet est conçue pour séparer les préoccupations et faciliter la maintenance.

- **`src/`** : Chaque sous-dossier dans `src/` doit correspondre à un **domaine de données unique** (ex: `ClinicalRef`, `Medicines`, `GrowthRef`).
- **`index.ts`** : Chaque module (sous-dossier de `src/`) doit avoir un fichier `index.ts` qui exporte les fonctions et les types publics de ce module. Cela permet des importations propres depuis d'autres parties du code.
- **`types/`** : Ce répertoire centralise toutes les définitions de types TypeScript. Chaque fichier dans `types/` doit correspondre à une structure de données principale (ex: `ClinicalRef.ts`, `Medicine.ts`).
- **`assets/`** : Les données brutes doivent être organisées de manière à refléter leur source et leur contenu. Par exemple, les données de l'OMS sont dans `assets/oms/`. Ne modifiez jamais les fichiers dans `assets/` manuellement, sauf pour mettre à jour une source de données officielle.
- **`processed_data/`** : Ce répertoire est **généré automatiquement**. Ne modifiez jamais son contenu manuellement. Toute modification doit passer par le code source dans `src/`.

## 3. Confidentialité et Éthique des Données

La manipulation de données médicales, même de référence, impose des responsabilités éthiques.

- **Priorité à l'exactitude** : La règle la plus importante est de garantir que les données générées sont une transcription parfaite des sources officielles. Toute erreur peut avoir des conséquences cliniques graves.
- **Vérification obligatoire** : Avant de soumettre une modification qui affecte la logique de traitement, le contributeur doit **prouver** que la sortie est correcte. Cela peut se faire en fournissant un extrait des données sources et des données générées correspondantes dans la description de la Pull Request.
- **Aucune donnée patient** : Il est formellement interdit d'introduire des données identifiantes de patients (noms, dates de naissance, etc.) dans ce dépôt.

## 4. Mise à Jour de la Documentation

Une documentation à jour est aussi importante que le code lui-même.

- **`README.md`** : Si vous ajoutez une nouvelle fonctionnalité (ex: un nouveau type de données traité), mettez à jour la section "Fonctionnalités Principales". Si vous modifiez le processus de build, mettez à jour les sections "Installation" ou "Usage".
- **`LEXICAL.md`** : Si vous introduisez un nouveau terme technique ou médical, ajoutez-le au lexique avec une définition claire.
- **`CONTRIBUTING.md` et `RULES.md`** : Ces fichiers ne doivent être modifiés qu'après une discussion et un accord avec les mainteneurs du projet.

Toute Pull Request qui modifie le comportement du projet de manière significative doit inclure une mise à jour de la documentation correspondante.
