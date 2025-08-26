# Projet de Traitement de Données pour Nutriped

## 1. Introduction

Ce projet est un pipeline de traitement de données conçu pour extraire, transformer et structurer des données de référence pédiatriques et nutritionnelles. Il sert de socle "backend" pour **Nutriped**, une application mobile complète destinée aux professionnels de la santé pour la gestion et l'évaluation de l'état nutritionnel des patients pédiatriques.

L'objectif principal est de convertir des documents complexes (tableaux Excel de l'OMS, protocoles cliniques) en un format JSON structuré, simple à interroger et à intégrer dans l'application Nutriped.

## 2. Contexte et Domaine d'Application

En pédiatrie, l'évaluation précise de la croissance et de la santé nutritionnelle d'un enfant est cruciale. **Nutriped** vise à simplifier et à standardiser ce processus en fournissant une solution numérique à la fois puissante et simple d'utilisation, destinée aux pédiatres, nutritionnistes et autres professionnels de santé en milieu clinique.

Les données traitées par ce pipeline sont essentielles pour permettre à Nutriped de :

- **Suivre en détail les données** anthropométriques, cliniques et biologiques d'un patient.
- **Générer des diagnostics nutritionnels automatisés** pour aider les professionnels à prendre des décisions éclairées rapidement.
- **Évaluer la croissance de l'enfant** : en comparant les mesures (poids, taille, IMC) avec les courbes de référence de l'OMS.
- **Identifier la malnutrition** : détection des cas de malnutrition aiguë, sévère ou modérée.
- **Aider à la décision clinique** : fourniture de références pour les traitements (médicaments, laits thérapeutiques) et l'orientation des patients.

## 3. Fonctionnalités Principales

Le pipeline de traitement de données exécute les tâches suivantes :

- **Extraction de Données de Croissance** : Lit les fichiers Excel de l'OMS contenant les données de référence pour les indicateurs de croissance (Poids-pour-Âge, Taille-pour-Âge, IMC-pour-Âge, etc.), différenciés par sexe et par tranche d'âge.
- **Transformation en Courbes et Tables JSON** : Convertit les données extraites en fichiers JSON structurés, qui représentent des courbes de croissance (avec Z-scores) et des tables de référence.
- **Intégration de Protocoles Cliniques** : Traite des informations relatives aux :
    - **Signes cliniques** (`ClinicalRef`)
    - **Règles de diagnostic** (`DiagnosticRule`)
    - **Complications médicales** (`Complications`)
    - **Tests d'appétit** (`AppetiteTestRef`)
    - **Médicaments et posologies** (`Medicines`)
    - **Laits et produits nutritionnels** (`Milks`, `Nutritional Products`)
    - **Phases de soin** (`CarePhases`)
- **Génération d'Indicateurs** : Crée des objets "indicateurs" qui combinent les données brutes avec des métadonnées (nom, code, unité).
- **Packaging des Données** : Crée une archive `.zip` (`PediatricSoftWareData.zip`) contenant tous les fichiers JSON traités, prête à être déployée pour Nutriped.

## 4. Technologies Utilisées

- **Langage** : TypeScript
- **Exécution** : ts-node
- **Dépendances principales** :
    - `xlsx` : pour lire et extraire les données des fichiers Excel (`.xlsx`).
    - `adm-zip` : pour créer des archives `.zip`.
- **Environnement** : Node.js

## 5. Architecture du Projet

Le projet est structuré comme suit :

- `assets/` : Contient les données brutes, principalement des fichiers Excel de l'OMS et des JSON de protocoles.
- `src/` : Contient le code source TypeScript pour l'extraction et la transformation des données. Chaque sous-dossier correspond à un domaine de données (ex: `GrowthRef`, `Medicines`).
- `processed_data/` : Le répertoire de sortie où les fichiers JSON générés sont stockés.
- `types/` : Contient les définitions de types TypeScript pour les différentes structures de données.
- `extract_all.ts` : Le script orchestrateur qui exécute l'ensemble du pipeline de traitement.
- `package.json` : Définit les dépendances et les scripts du projet.

## 6. Installation

Pour exécuter ce projet, vous devez avoir Node.js et `yarn` (ou `npm`) installés.

1.  **Clonez le dépôt** :
    ```bash
    git clone <URL_DU_DEPOT>
    cd <NOM_DU_DEPOT>
    ```

2.  **Installez les dépendances** :
    ```bash
    yarn install
    # ou
    # npm install
    ```

## 7. Usage

Pour exécuter le pipeline de traitement de données complet et générer les fichiers JSON dans `processed_data/`, utilisez la commande suivante :

```bash
yarn build
```

Cette commande exécute le script `extract_all.ts` qui orchestre toutes les étapes de traitement.

Pour générer l'archive `dist/PediatricSoftWareData.zip` et copier les autres ressources nécessaires, utilisez la commande :

```bash
yarn build:zip:move
```

Cette commande enchaîne les étapes suivantes :
1.  `build` : Génère les fichiers JSON.
2.  `create-data-zip` : Compresse le contenu de `processed_data/` dans une archive.
3.  `move` : Copie certains assets (templates, PDF) dans le répertoire `dist/`.

## 8. Exemples de Données Traitées

Le projet génère des fichiers JSON structurés. Voici un exemple simplifié de ce à quoi pourrait ressembler un point de donnée pour une courbe de croissance :

```json
// Fichier: processed_data/charts/weight_for_age_boys_0_5.json
{
  "code": "WFA_BOYS_0_5_CHART",
  "label": "Courbe de référence poids pour l'âge (garçons 0-5 ans)",
  "unit": "kg",
  "measure": "weight",
  "points": [
    {
      "x": 0, // Âge en jours
      "l": -3,
      "m": 3.34, // Valeur médiane
      "s": 1,
      "sd": 0.42 // Écart-type
      // ... autres valeurs pour les Z-scores
    },
    // ... autres points
  ]
}
```

## 9. Ressources

- **OMS (Organisation Mondiale de la Santé)** : Fournisseur principal des données de référence pour la croissance de l'enfant.
- **NCHS (National Center for Health Statistics)** : Fournisseur de certaines tables de référence complémentaires.
- **Protocoles cliniques** : Les fichiers `protocoles.json` et les documents PDF dans `assets/` décrivent les règles de prise en charge de la malnutrition.
