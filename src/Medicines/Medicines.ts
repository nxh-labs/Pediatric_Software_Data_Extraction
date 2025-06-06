import { Medicine, MedicineCategory, AdministrationRoute, DosageUnit } from "../../types";


const antibacterials: Medicine[] = [
  {
    code: "AMOX",
    name: "Amoxicilline",
    category: MedicineCategory.ANTIBACTERIALS,
    administrationRoutes: [AdministrationRoute.ORAL],
    baseDosage: {
      label: "50-100 mg/kg/jour",
      frequency: 2,
      min: 50,
      max: 100,
      unit: DosageUnit.MG,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 5,
          description: "3 - 5 kg",
        },
        amount: {
          value: 125,
          unit: DosageUnit.MG,
        },
        frequency: 2,
      },
      {
        weightRange: {
          min: 5,
          max: 10,
          description: "5 - 10 kg",
        },
        amount: {
          value: 250,
          unit: DosageUnit.MG,
        },
        frequency: 2,
      },
      {
        weightRange: {
          min: 10,
          max: 20,
          description: "10 - 20 kg",
        },
        amount: {
          value: 500,
          unit: DosageUnit.MG,
        },
        frequency: 2,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20 - 35 kg",
        },
        amount: {
          value: 750,
          unit: DosageUnit.MG,
        },
        frequency: 2,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: ">35 kg",
        },
        amount: {
          value: 1000,
          unit: DosageUnit.MG,
        },
        frequency: 2,
      },
    ],
    warnings: [
      "Contient du sel à base de sodium – attention aux patients sensibles au sodium",
      "La résistance à l'amoxicilline est fréquente",
    ],
    interactions: [
      "Effets négatifs possibles avec les infections virales (Virus Epstein-Barr, CMV et possiblement VIH)",
    ],
    notes: [
      "Le dosage n'est pas critique – peut être doublé",
      "À donner quand l'estomac est vide",
      "Antibiotique de 1ère intention, traitement systématique en CNT et CNA",
    ],
  },
  {
    code: "AMP",
    name: "Ampicilline",
    category: MedicineCategory.ANTIBACTERIALS,
    administrationRoutes: [AdministrationRoute.IV, AdministrationRoute.IM],
    baseDosage: {
      label: "100-200 mg/kg/jour",
      min: 100,
      max: 200,
      unit: DosageUnit.MG,
      frequency: 4,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 5,
          description: "3 - 5 kg",
        },
        amount: { value: 250, unit: DosageUnit.MG },
        frequency: 4,
      },
      {
        weightRange: {
          min: 5,
          max: 10,
          description: "5 - 10 kg",
        },
        amount: { value: 500, unit: DosageUnit.MG },
        frequency: 4,
      },
      {
        weightRange: {
          min: 10,
          max: 20,
          description: "10 - 20 kg",
        },
        amount: { value: 1, unit: DosageUnit.G },
        frequency: 4,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20 - 35 kg",
        },
        amount: { value: 2, unit: DosageUnit.G },
        frequency: 4,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: "> 35 kg",
        },
        amount: { value: 3, unit: DosageUnit.G },
        frequency: 4,
      },
    ],
    warnings: [
      "Les injections IV sont préférables aux IM qui sont plus douloureuses",
      "Donner en perfusion pendant au moins 30 minutes si déficiences rénales",
      "Présenté sous forme de sel de Sodium - utiliser faible dose si sensibilité au sodium",
    ],
    interactions: [
      "NE PAS DONNER avec la Gentamicine (séparer les injections d'au moins une heure)",
      "L'ampicilline inactive la gentamicine",
    ],
    notes: [
      "Lors d'infections sévères, utiliser des antibiotiques de 2ème et 3ème intention",
      "Risque accru avec doses élevées chez Kwashiorkor et défaillances cardiaques",
    ],
  },
  {
    code: "GENT",
    name: "Gentamycine",
    category: MedicineCategory.ANTIBACTERIALS,
    administrationRoutes: [AdministrationRoute.IM, AdministrationRoute.IV],
    baseDosage: {
      label: "5 mg/kg/jour",
      min: 5,
      max: 5,
      unit: DosageUnit.MG,
      frequency: 1,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 0,
          max: 3,
          description: "<=3 kg",
        },
        amount: { value: 10, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 3.1,
          max: 5.0,
          description: "3.1-5.0 kg",
        },
        amount: { value: 20, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 5.1,
          max: 10.0,
          description: "5.1-10 kg",
        },
        amount: { value: 40, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 10.1,
          max: 15.0,
          description: "10.1-15 kg",
        },
        amount: { value: 60, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 15.1,
          max: 20,
          description: "15.1-20 kg",
        },
        amount: { value: 80, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20-35 kg",
        },
        amount: { value: 140, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: ">35 kg",
        },
        amount: { value: 200, unit: DosageUnit.MG },
        frequency: 1,
      },
    ],
    warnings: [
      "Danger de néphrotoxicité et d'ototoxicité",
      "Chez les enfants œdémateux, donner la dose selon le poids sans œdèmes",
    ],
    interactions: [
      "Ne pas donner IV au même moment que l'amoxicilline, ampicilline, cloxacilline, céfotaxime",
      "Précaution avec sulfate de magnésium - risque de blocage neuromusculaire",
    ],
    notes: [
      "La voie IM est préférée si les Pénicillines/céfotaxime sont données IV",
      "Approximativement 5 mg/kg/jour une fois/jour, mais chez les nourrissons de moins de 6 mois : 3,5mg/kg",
    ],
  },
  {
    code: "CEFO",
    name: "Céfotaxime",
    category: MedicineCategory.ANTIBACTERIALS,
    administrationRoutes: [AdministrationRoute.IM, AdministrationRoute.IV],
    baseDosage: {
      frequency: 2,
      label: "50-100 mg/kg/jour",
      min: 50,
      max: 100,
      unit: DosageUnit.MG,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 5,
          description: "3 - 5 kg",
        },
        amount: { value: 100, unit: DosageUnit.MG },
        frequency: 2,
      },
      {
        weightRange: {
          min: 5,
          max: 10,
          description: "5 - 10 kg",
        },
        amount: { value: 200, unit: DosageUnit.MG },
        frequency: 2,
      },
      {
        weightRange: {
          min: 10,
          max: 20,
          description: "10 - 20 kg",
        },
        amount: { value: 400, unit: DosageUnit.MG },
        frequency: 2,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20 - 35 kg",
        },
        amount: { value: 800, unit: DosageUnit.MG },
        frequency: 2,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: "> 35 kg",
        },
        amount: { value: 1000, unit: DosageUnit.MG },
        frequency: 2,
      },
    ],
    warnings: [
      "L'injection IM très douloureuse",
      "Peut épuiser les réserves de vitamine K dans le foie",
    ],
    interactions: [
      "Ne pas donner dans la même perfusion que la gentamicine",
      "La céfotaxime peut inactiver la gentamicine",
    ],
    notes: [
      "Préférer à la céftriaxone, particulièrement pour les septicémies à gram négatif",
      "Dans le cas d'infections sévères, on peut augmenter la fréquence jusqu'à 4 fois par jour",
    ],
  },

  {
    code: "CIPRO",
    name: "Ciprofloxacine",
    category: MedicineCategory.ANTIBACTERIALS,
    administrationRoutes: [AdministrationRoute.ORAL, AdministrationRoute.IV],
    baseDosage: {
      frequency: 3,
      label: "30-45 mg/kg/jour",
      min: 30,
      max: 45,
      unit: DosageUnit.MG,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 5,
          description: "3 - 5 kg",
        },
        amount: { value: 50, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 5,
          max: 10,
          description: "5 - 10 kg",
        },
        amount: { value: 100, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 10,
          max: 20,
          description: "10 - 20 kg",
        },
        amount: { value: 200, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20 - 35 kg",
        },
        amount: { value: 400, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: "> 35 kg",
        },
        amount: { value: 800, unit: DosageUnit.MG },
        frequency: 3,
      },
    ],
    warnings: [
      "Donner par voie orale ou SNG lorsque l'estomac est vide",
      "Absorption réduite par les produits laitiers, antiacides, calcium, fer et sels de zinc",
    ],
    interactions: [
      "Ne pas donner avec les compléments de Zinc",
      "Éviter de donner avec l'artéméther+luméfantrine (Co-artem)",
    ],
    notes: [
      "Bien absorbé oralement - voie IV réservée aux vomissements ou infections très sévères",
      "COMBINER avec la céfotaxime pour prévenir la survenue de résistance",
      "En perfusion IV, concentration maximum 2mg/ml pendant au moins 60 minutes",
    ],
  },
  {
    code: "CLOXA",
    name: "Cloxacilline",
    category: MedicineCategory.ANTIBACTERIALS,
    administrationRoutes: [AdministrationRoute.ORAL, AdministrationRoute.IV_IM],
    baseDosage: {
      frequency: 3,
      label: "100-200 mg/kg/jour",
      min: 100,
      max: 200,
      unit: DosageUnit.MG,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 5,
          description: "3 - 5 kg",
        },
        amount: { minValue: 62.5, maxValue: 250, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 5,
          max: 10,
          description: "5 - 10 kg",
        },
        amount: { minValue: 100, maxValue: 300, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 10,
          max: 20,
          description: "10 - 20 kg",
        },
        amount: { minValue: 250, maxValue: 750, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20 - 35 kg",
        },
        amount: { minValue: 1, maxValue: 1.5, unit: DosageUnit.G },
        frequency: 3,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: "> 35 kg",
        },
        amount: { minValue: 2, maxValue: 6, unit: DosageUnit.G },
        frequency: 3,
      },
    ],
    warnings: [
      "Thérapie parentérale préférée lors d'infections sévères",
      "Préparation à base de sels de sodium",
    ],
    interactions: [
      "Ne pas donner en IV en même temps que la gentamicine – séparer au moins d'une heure",
      "Rincer le cathéter avant administration",
    ],
    notes: [
      "Pour des infections systémiques à staphylocoques suspectées ou diagnostiquées",
      "Particulièrement indiqué pour les pneumonies à staphylocoques",
    ],
  },

  {
    code: "METRO",
    name: "Métronidazole",
    category: MedicineCategory.ANTIBACTERIALS,
    administrationRoutes: [AdministrationRoute.ORAL, AdministrationRoute.IV],
    baseDosage: {
      frequency: 1,
      label: "10-12 mg/kg/jour",
      min: 10,
      max: 12,
      unit: DosageUnit.MG,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 5,
          description: "3 - 5 kg",
        },
        amount: { minValue: 30, maxValue: 60, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 5,
          max: 10,
          description: "5 - 10 kg",
        },
        amount: { minValue: 60, maxValue: 100, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 10,
          max: 20,
          description: "10 - 20 kg",
        },
        amount: { minValue: 120, maxValue: 200, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20 - 35 kg",
        },
        amount: { minValue: 250, maxValue: 350, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: "> 35 kg",
        },
        amount: { minValue: 400, maxValue: 500, unit: DosageUnit.MG },
        frequency: 1,
      },
    ],
    warnings: [
      "Ne pas donner pour plus de 7 jours",
      "Réduire la dose à 1/3 s'il y a des problèmes hépatiques",
    ],
    interactions: [],
    notes: [
      "Biodisponibilité très élevée : la voie orale est fortement recommandée",
      "Bonne absorption par voie rectale",
      "Prendre la suspension avant le repas",
      "Prendre les comprimés avec ou après la prise de nourriture",
      "La dose Maximum dans la MAS est de 10-12 mg/kg/j d'après des études pharmacodynamiques",
    ],
  },
];

const antifungals: Medicine[] = [
  {
    code: "NYST",
    name: "Nystatine",
    category: MedicineCategory.ANTIFUNGALS,
    administrationRoutes: [AdministrationRoute.ORAL],
    baseDosage: {
      label: "400.000 UI/jour",
      min: 400000,
      max: 400000,
      unit: DosageUnit.UI,
      frequency: 4,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 60,
          description: "3 - 60 kg",
        },
        amount: { value: 100000, unit: DosageUnit.UI },
        frequency: 4,
      },
    ],
    warnings: [
      "Risque de toxicité hépatique aigüe 6 fois plus élevé qu'avec l'amoxicilline seule",
    ],
    interactions: [],
    notes: [
      "Le dosage n'est pas très critique - peut être doublé dans le cas d'infections sévères",
      "Ratio fixé à 1 mg d'amoxicilline pour 0,25 mg d'acide clavulanique",
      "Dose exprimée en terme de contenu en amoxicilline",
    ],
  },
  {
    code: "FLUC",
    name: "Fluconazole",
    category: MedicineCategory.ANTIFUNGALS,
    administrationRoutes: [AdministrationRoute.ORAL, AdministrationRoute.IV],
    baseDosage: {
      label: "3-6 mg/kg/jour",
      min: 3,
      max: 6,
      unit: DosageUnit.MG,
      frequency: 1,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 5,
          description: "3 - 5 kg",
        },
        amount: { value: 15, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 5,
          max: 10,
          description: "5 - 10 kg",
        },
        amount: { value: 30, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 10,
          max: 20,
          description: "10 - 20 kg",
        },
        amount: { value: 60, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20 - 35 kg",
        },
        amount: { value: 120, unit: DosageUnit.MG },
        frequency: 1,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: "> 35 kg",
        },
        amount: { value: 200, unit: DosageUnit.MG },
        frequency: 1,
      },
    ],
    warnings: [
      "La préparation orale contient du benzoate de sodium",
      "A utiliser prudemment chez le kwashiorkor et dans les défaillances cardiaques car elle contient du sodium",
    ],
    interactions: [
      "Eviter de donner avec l'artéméther + luméfantrine (Co-artem)",
    ],
    notes: [
      "La biodisponibilité de la préparation orale est excellente",
      "Pour la préparation IV, diluer en plus avec 5% glucose avant la perfusion IV",
      "Une double dose peut être donnée le premier jour du traitement",
      "Pour les nourrissons – donner la même dose mais un jour sur deux",
      "Pour la préparation IV, donner 2,4mg/kg à 0h, 12h, 24h et ensuite chaque jour jusqu'à ce que le traitement oral puisse être donné",
    ],
  },
];

// ATTENTION: Il y avait dans la frusémide une dose de 0.5 à 2 par dose (2, 3 fois par jour ) donc je l'ai traduit en multipliant la dose par la fréquence que j'ai pris
const cardiacfailure: Medicine[] = [
  {
    code: "FURO",
    name: "Furosémide/ Frusémide",
    category: MedicineCategory.CARDIAC_FAILURE,
    administrationRoutes: [AdministrationRoute.ORAL, AdministrationRoute.IV_IM],
    baseDosage: {
      label: "0.5-2 mg/kg/dose (2-3 fois / jour)",
      min: 0.5 * 2,
      max: 2 * 2,
      unit: DosageUnit.MG,
      frequency: 2,
    },
    dosageRanges: [],
    warnings: [
      "Uniquement utilisé pour les DEFAILLANCES CARDIAQUES",
      "NE jamais donner pour la mobilisation des œdèmes",
    ],
    interactions: [],
    notes: [
      "Pour les enfants, dose orale normale 0,5-1 mg/kg",
      "Dose orale maximum 3 x 4 mg/kg = 12 mg/kg (80mg) par jour",
      "Dose normale IV : 0,5-1 mg/kg",
      "Dose maximum IV 3 x 4 mg/kg",
      "Cause des pertes en potassium, magnésium, etc. aussi bien que sodium et eau",
      "Pas très efficace dans les défaillances cardiaques chez les MAS – on peut utiliser des doses plus élevées",
    ],
  },
];
const alternatives: Medicine[] = [
  {
    code: "CEFT",
    name: "Céftriaxone",
    category: MedicineCategory.ANTIBACTERIALS,
    administrationRoutes: [AdministrationRoute.IM, AdministrationRoute.IV],
    baseDosage: {
      frequency: 2,
      label: "50-100 mg/kg/jour",
      min: 50,
      max: 100,
      unit: DosageUnit.MG,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 5,
          description: "3 - 5 kg",
        },
        amount: { value: 100, unit: DosageUnit.MG },
        frequency: 2,
      },
      {
        weightRange: {
          min: 5,
          max: 10,
          description: "5 - 10 kg",
        },
        amount: { value: 200, unit: DosageUnit.MG },
        frequency: 2,
      },
      {
        weightRange: {
          min: 10,
          max: 20,
          description: "10 - 20 kg",
        },
        amount: { value: 400, unit: DosageUnit.MG },
        frequency: 2,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20 - 35 kg",
        },
        amount: { value: 800, unit: DosageUnit.MG },
        frequency: 2,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: "> 35 kg",
        },
        amount: { value: 1000, unit: DosageUnit.MG },
        frequency: 2,
      },
    ],
    warnings: [
      "Très douloureux si donné en IM",
      "Incompatible avec le Ringer Lactate et produits à base de calcium",
      "Sous forme de sel de sodium",
    ],
    interactions: [
      "La céftriaxone provoque une précipitation avec les produits calciques",
    ],
    notes: [
      "Préférer la céfotaxime si disponible",
      "Peut entraîner des perturbations au niveau électrolytique",
      "Donne des faux positifs au niveau de la glycosurie et le test de Coomb",
      "Pour un enfant dose maximum : 1g",
    ],
  },
  {
    code: "AMOXI_ACIDE_CLAVULANIQUE",
    name: "Amoxicilline + Acide Clavulanique",
    category: MedicineCategory.ANTIBACTERIALS,
    administrationRoutes: [AdministrationRoute.ORAL, AdministrationRoute.IV],
    baseDosage: {
      frequency: 3,
      label: "25-50 mg/kg/jour",
      min: 25,
      max: 50,
      unit: DosageUnit.MG,
    },

    dosageRanges: [
      {
        weightRange: {
          min: 3,
          max: 5,
          description: "3 - 5 kg",
        },
        amount: { value: 62.5, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 5,
          max: 10,
          description: "5 - 10 kg",
        },
        amount: { value: 125, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 10,
          max: 20,
          description: "10 - 20 kg",
        },
        amount: { value: 250, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 20,
          max: 35,
          description: "20 - 35 kg",
        },
        amount: { value: 500, unit: DosageUnit.MG },
        frequency: 3,
      },
      {
        weightRange: {
          min: 35,
          max: Infinity,
          description: "> 35 kg",
        },
        amount: { value: 750, unit: DosageUnit.MG },
        frequency: 3,
      },
    ],
    warnings: [
      "Risque de toxicité hépatique aigüe 6 fois plus élevé qu'avec l'amoxicilline seule",
    ],
    interactions: [],
    notes: [
      "Le dosage n'est pas très critique - peut être doublé dans le cas d'infections sévères",
      "Ratio fixé à 1 mg d'amoxicilline pour 0,25 mg d'acide clavulanique",
      "Dose exprimée en terme de contenu en amoxicilline",
    ],
  },
];

export const medicines = [
  ...antibacterials,
  ...antifungals,
  ...cardiacfailure,
  ...alternatives,
];
