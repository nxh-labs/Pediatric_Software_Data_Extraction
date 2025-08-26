# Lexique du Projet

Ce document a pour but de définir les termes techniques, scientifiques et spécifiques au projet. Il est destiné à être une ressource pour tous les contributeurs, qu'ils soient développeurs, experts médicaux ou gestionnaires de projet.

## Termes Généraux et Techniques

- **Pipeline de Données**
    - **Explication vulgarisée** : Une chaîne de traitement automatique où les données entrent sous une forme brute et sortent sous une forme structurée et utilisable.
    - **Contexte du projet** : Le projet est un pipeline qui prend des fichiers Excel et des protocoles en entrée et produit des fichiers JSON en sortie.

- **JSON (JavaScript Object Notation)**
    - **Explication vulgarisée** : Un format de texte léger pour l'échange de données, facile à lire et à écrire pour les humains, et facile à analyser et à générer pour les machines.
    - **Contexte du projet** : C'est le format de sortie final pour toutes les données traitées.

- **TypeScript**
    - **Explication vulgarisée** : Un langage de programmation basé sur JavaScript, qui ajoute des "types" aux variables pour rendre le code plus sûr et plus facile à comprendre.
    - **Contexte du projet** : L'ensemble du code source du pipeline est écrit en TypeScript.

## Termes Médicaux et Scientifiques

- **Anthropométrie**
    - **Explication vulgarisée** : L'étude des mesures du corps humain (poids, taille, périmètre brachial, etc.).
    - **Contexte du projet** : Le projet traite de nombreuses mesures anthropométriques pour évaluer la croissance des enfants.

- **Z-score (ou Écart-Réduit)**
    - **Explication vulgarisée** : Une mesure statistique qui indique à combien d'écarts-type une valeur se situe par rapport à la moyenne d'une population de référence. Un Z-score de 0 est la moyenne. Un Z-score de -2 signifie que l'enfant est bien en dessous de la moyenne pour son âge et son sexe.
    - **Explication technique** : Calculé comme `(valeur observée - moyenne de référence) / écart-type de référence`.
    - **Contexte du projet** : Les Z-scores sont la principale mesure utilisée dans les courbes de croissance de l'OMS pour déterminer si un enfant a un poids ou une taille normal.

- **OMS (Organisation Mondiale de la Santé)**
    - **Explication vulgarisée** : L'agence des Nations Unies pour la santé publique. Elle établit des standards mondiaux, notamment pour la croissance de l'enfant.
    - **Contexte du projet** : La majorité des données de référence de croissance utilisées dans ce projet proviennent des standards de l'OMS de 2006/2007.

- **NCHS (National Center for Health Statistics)**
    - **Explication vulgarisée** : Une agence gouvernementale américaine qui a produit des courbes de croissance de référence.
    - **Contexte du projet** : Le projet utilise une table de référence Poids/Taille du NCHS, qui était une référence internationale avant les standards de l'OMS de 2006. Elle est encore utilisée dans certains contextes.

- **Périmètre Brachial (PB ou MUAC en anglais)**
    - **Explication vulgarisée** : La circonférence du milieu du bras. C'est un indicateur clé pour dépister la malnutrition aiguë chez les enfants.
    - **Contexte du projet** : Le projet inclut des courbes de référence pour le périmètre brachial (`arm_circumference`).

- **IMC (Indice de Masse Corporelle) ou BMI (Body Mass Index)**
    - **Explication vulgarisée** : Un indice qui évalue la corpulence d'une personne en fonction de son poids et de sa taille.
    - **Explication technique** : Calculé comme `poids (kg) / (taille (m))^2`.
    - **Contexte du projet** : Le projet utilise des courbes de référence IMC-pour-âge (`bmi_for_age`).

- **Pli Cutané Tricipital et Subscapulaire**
    - **Explication vulgarisée** : Mesures de l'épaisseur de la graisse sous la peau à des endroits spécifiques (triceps et sous l'omoplate). Elles aident à évaluer les réserves de graisse du corps.
    - **Contexte du projet** : Le projet traite les courbes de référence pour ces mesures (`triceps_skinfold`, `subscapular_skinfold`).

## Termes Spécifiques au Projet

- **`ClinicalRef` (Référence Clinique)**
    - **Définition** : Représente un signe clinique (ex: "oedème", "pâleur") avec ses métadonnées (code, catégorie, etc.). Utilisé pour standardiser l'enregistrement des observations cliniques.

- **`DiagnosticRule` (Règle de Diagnostic)**
    - **Définition** : Une règle logique qui combine plusieurs indicateurs (anthropométriques, cliniques) pour aboutir à un diagnostic (ex: "Malnutrition Aiguë Sévère").

- **`GrowthRef` (Référence de Croissance)**
    - **Définition** : Un terme générique dans le code pour désigner une courbe ou une table de croissance de l'OMS ou du NCHS.

- **`Indicator` (Indicateur)**
    - **Définition** : Un objet de données qui représente une mesure ou un concept (ex: "Poids-pour-âge"). Il lie une mesure brute à ses métadonnées et aux références de croissance correspondantes.
