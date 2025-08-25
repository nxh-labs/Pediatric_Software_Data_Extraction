import {
  admissionVariable,
  ALWAYS_TRUE_CONDITION,
  AnthroSystemCodes,
  CARE_SESSION,
  CLINICAL_SIGNS,
  ConditionResult,
} from "../../constants";
import {
  CARE_PHASE_CODES,
  DosageFormulaUnit,
  MilkType,
  NutitionalProduct,
  FeedingFrequenciePerDay,
} from "../../types";
import { fExp } from "../../utils";

export const nutritionalProducts: NutitionalProduct[] = [
  {
    code: MilkType.F75,
    dosageTables: [
      {
        applicability: {
          condition: {
            value: fExp`(${CARE_SESSION.CURRENT_CARE_PHASE} == "${CARE_PHASE_CODES.CNT_PHASE1}") && (${AnthroSystemCodes.AGE_IN_MONTH} >=6)`,
            variables: [
              CARE_SESSION.CURRENT_CARE_PHASE,
              AnthroSystemCodes.AGE_IN_MONTH,
            ],
          },
          descritption:
            "Le F75 est administré lorsque le patient est en phase de stabilisation",
          variableExplanation: {
            [CARE_SESSION.CURRENT_CARE_PHASE]: "Phase de soin actuelle du patient (doit être CNT_PHASE1).",
            [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (≥ 6 mois pour ce tableau de doses).",
          },
        },
        conditionalDosageFormulas: [
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`(${admissionVariable(CLINICAL_SIGNS.EDEMA)} == ${ConditionResult.False})`,
                  variables: [admissionVariable(CLINICAL_SIGNS.EDEMA)]
                },
                description: "Appliqué lorsque le patient ne présente pas d'œdème bilatéral à l'admission.",
                variableExplanation: {
                  [admissionVariable(CLINICAL_SIGNS.EDEMA)]: "Indique la présence d'œdème bilatéral (False = pas d'œdème)."
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 130)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              max: null,
              unit: DosageFormulaUnit.ML,
              desciption: "Le volume de lait à administrer par jour est calculé en multipliant le poids du patient (en kg) par 130. Cette formule est utilisée pour les patients sans œdème.",
              variableExplanation: {
                [admissionVariable(AnthroSystemCodes.WEIGHT)]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`(${admissionVariable(CLINICAL_SIGNS.EDEMA)} == ${ConditionResult.True})`,
                  variables: [admissionVariable(CLINICAL_SIGNS.EDEMA)]
                },
                description: "Appliqué lorsque le patient présente un œdème bilatéral à l'admission.",
                variableExplanation: {
                  [admissionVariable(CLINICAL_SIGNS.EDEMA)]: "Indique la présence d'œdème bilatéral (True = œdème présent)."
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 100)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              max: null,
              unit: DosageFormulaUnit.ML,
              desciption: "Le volume de lait à administrer par jour est calculé en multipliant le poids du patient (en kg) par 100. Cette formule est utilisée pour les patients avec œdème.",
              variableExplanation: {
                [admissionVariable(AnthroSystemCodes.WEIGHT)]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          }
        ],
        isAdmissionWeight: true,
        dosages: [
          {
            weight_kg: 2,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 40,
              [FeedingFrequenciePerDay.SIX]: 50,
              [FeedingFrequenciePerDay.FIVE]: 65,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 45,
              [FeedingFrequenciePerDay.SIX]: 60,
              [FeedingFrequenciePerDay.FIVE]: 70,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 50,
              [FeedingFrequenciePerDay.SIX]: 65,
              [FeedingFrequenciePerDay.FIVE]: 75,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 55,
              [FeedingFrequenciePerDay.SIX]: 70,
              [FeedingFrequenciePerDay.FIVE]: 80,
            },
          },
          {
            weight_kg: 3,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 60,
              [FeedingFrequenciePerDay.SIX]: 75,
              [FeedingFrequenciePerDay.FIVE]: 85,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 65,
              [FeedingFrequenciePerDay.SIX]: 80,
              [FeedingFrequenciePerDay.FIVE]: 95,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 70,
              [FeedingFrequenciePerDay.SIX]: 85,
              [FeedingFrequenciePerDay.FIVE]: 110,
            },
          },
          {
            weight_kg: 4.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 80,
              [FeedingFrequenciePerDay.SIX]: 95,
              [FeedingFrequenciePerDay.FIVE]: 120,
            },
          },
          {
            weight_kg: 5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 90,
              [FeedingFrequenciePerDay.SIX]: 110,
              [FeedingFrequenciePerDay.FIVE]: 130,
            },
          },
          {
            weight_kg: 5.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 100,
              [FeedingFrequenciePerDay.SIX]: 120,
              [FeedingFrequenciePerDay.FIVE]: 150,
            },
          },
          {
            weight_kg: 6,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 110,
              [FeedingFrequenciePerDay.SIX]: 140,
              [FeedingFrequenciePerDay.FIVE]: 175,
            },
          },
          {
            weight_kg: 7,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 125,
              [FeedingFrequenciePerDay.SIX]: 160,
              [FeedingFrequenciePerDay.FIVE]: 200,
            },
          },
          {
            weight_kg: 8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 140,
              [FeedingFrequenciePerDay.SIX]: 180,
              [FeedingFrequenciePerDay.FIVE]: 225,
            },
          },
          {
            weight_kg: 9,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 155,
              [FeedingFrequenciePerDay.SIX]: 190,
              [FeedingFrequenciePerDay.FIVE]: 250,
            },
          },
          {
            weight_kg: 10,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 170,
              [FeedingFrequenciePerDay.SIX]: 200,
              [FeedingFrequenciePerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: 11,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 190,
              [FeedingFrequenciePerDay.SIX]: 230,
              [FeedingFrequenciePerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: 12,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 205,
              [FeedingFrequenciePerDay.SIX]: 250,
              [FeedingFrequenciePerDay.FIVE]: 300,
            },
          },
          {
            weight_kg: 13,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 230,
              [FeedingFrequenciePerDay.SIX]: 275,
              [FeedingFrequenciePerDay.FIVE]: 350,
            },
          },
          {
            weight_kg: 14,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 250,
              [FeedingFrequenciePerDay.SIX]: 290,
              [FeedingFrequenciePerDay.FIVE]: 375,
            },
          },
          {
            weight_kg: 15,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 260,
              [FeedingFrequenciePerDay.SIX]: 300,
              [FeedingFrequenciePerDay.FIVE]: 400,
            },
          },
          {
            weight_kg: 20,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 290,
              [FeedingFrequenciePerDay.SIX]: 320,
              [FeedingFrequenciePerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: 25,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 300,
              [FeedingFrequenciePerDay.SIX]: 350,
              [FeedingFrequenciePerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: 30,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 320,
              [FeedingFrequenciePerDay.SIX]: 370,
              [FeedingFrequenciePerDay.FIVE]: 500,
            },
          },
          {
            weight_kg: 40,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 350,
              [FeedingFrequenciePerDay.SIX]: 400,
              [FeedingFrequenciePerDay.FIVE]: 500,
            },
          },
        ],
      },
      {
        applicability: {
          condition: {
            value: fExp`(${CARE_SESSION.CURRENT_CARE_PHASE} == "${CARE_PHASE_CODES.CNT_PHASE1}") && ((${AnthroSystemCodes.AGE_IN_MONTH}  < 6) || (${AnthroSystemCodes.WEIGHT} < 3)) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})`,
            variables: [
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
              CARE_SESSION.CURRENT_CARE_PHASE,
              CLINICAL_SIGNS.EDEMA,
            ],
          },
          descritption:
            "Le F75 se donne chez les enfants de moins de 6 mois ou moins de 3kg, non allaités et qui presente d'œdème bilateraux.",
          variableExplanation: {
            [CARE_SESSION.CURRENT_CARE_PHASE]: "Phase CNT_PHASE1 (stabilisation).",
            [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (< 6 mois).",
            [AnthroSystemCodes.WEIGHT]: "Poids en kg (< 3 kg).",
            [CLINICAL_SIGNS.EDEMA]: "Présence d'œdèmes bilatéraux (True).",
          },
        },
        conditionalDosageFormulas: [
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`${ALWAYS_TRUE_CONDITION}`,
                  variables: []
                },
                description: "Cette condition est toujours vraie et permet d'appliquer la formule par défaut pour le dosage, quel que soit le contexte clinique.",
                variableExplanation: {
                  // Aucune variable nécessaire, la formule s'applique à tous les patients dans ce contexte.
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 130)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              max: null,
              unit: DosageFormulaUnit.ML,
              desciption: "La quantité minimale recommandée est calculée en multipliant le poids du patient (en kg) par 130 pour obtenir le volume de lait en ml à administrer par jour. Cette formule est utilisée pour les enfants sans œdème ou dans les cas standards.",
              variableExplanation: {
                [admissionVariable(AnthroSystemCodes.WEIGHT)]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
        ],
        isAdmissionWeight: true,
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: 1.9,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 70,
            },
          },
        ],
      },
      {
        applicability: {
          condition: {
            value: fExp`(${CARE_SESSION.CURRENT_CARE_PHASE} == "${CARE_PHASE_CODES.CNT_INFANT_LT6m_LT3kg}") && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})`,
            variables: [CARE_SESSION.CURRENT_CARE_PHASE],
          },
          descritption:
            "Le F75 est donnée aux enfants de moins de 3kg ou moins de 6 mois allèté et presentant d'œdème",
          variableExplanation: {
            [CARE_SESSION.CURRENT_CARE_PHASE]: "Phase CNT_INFANT_LT6m_LT3kg.",
            [CLINICAL_SIGNS.EDEMA]: "Présence d'œdèmes (True).",
          },
        },
        conditionalDosageFormulas: [
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`${ALWAYS_TRUE_CONDITION}`,
                  variables: []
                },
                description: "Cette condition est toujours vraie et permet d'appliquer la formule par défaut pour le dosage, quel que soit le contexte clinique.",
                variableExplanation: {
                  // Aucune variable nécessaire, la formule s'applique à tous les patients dans ce contexte.
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 130)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              max: null,
              unit: DosageFormulaUnit.ML,
              desciption: "La quantité minimale recommandée est calculée en multipliant le poids du patient (en kg) par 130 pour obtenir le volume de lait en ml à administrer par jour. Cette formule est utilisée pour les enfants sans œdème ou dans les cas standards.",
              variableExplanation: {
                [admissionVariable(AnthroSystemCodes.WEIGHT)]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
        ],
        isAdmissionWeight: true,
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 25,
            },
          },
          {
            weight_kg: 1.3,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: 1.8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 4.0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 70,
            },
          },
        ],
      },
    ],
  },
  {
    code: MilkType.F100Diluted,
    dosageTables: [
      {
        applicability: {
          condition: {
            value: fExp`(${CARE_SESSION.CURRENT_CARE_PHASE} == "${CARE_PHASE_CODES.CNT_INFANT_LT6m_LT3kg}") && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False})`,
            variables: [CARE_SESSION.CURRENT_CARE_PHASE],
          },
          descritption:
            "Le F100-dilué est donnée aux enfants de moins de 3kg ou moins de 6 mois allèté et ne presentant d'œdème",
          variableExplanation: {
            [CARE_SESSION.CURRENT_CARE_PHASE]: "Phase CNT_INFANT_LT6m_LT3kg.",
            [CLINICAL_SIGNS.EDEMA]: "Absence d'œdèmes (False).",
          },
        },
        conditionalDosageFormulas: [
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`${ALWAYS_TRUE_CONDITION}`,
                  variables: []
                },
                description: "Cette condition est toujours vraie et permet d'appliquer la formule par défaut pour le dosage, quel que soit le contexte clinique.",
                variableExplanation: {
                  // Aucune variable nécessaire, la formule s'applique à tous les patients dans ce contexte.
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 130)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              max: null,
              unit: DosageFormulaUnit.ML,
              desciption: "La quantité minimale recommandée est calculée en multipliant le poids du patient (en kg) par 130 pour obtenir le volume de lait en ml à administrer par jour. Cette formule est utilisée pour les enfants sans œdème ou dans les cas standards.",
              variableExplanation: {
                [admissionVariable(AnthroSystemCodes.WEIGHT)]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
        ],
        isAdmissionWeight: true,
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 25,
            },
          },
          {
            weight_kg: 1.3,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: 1.8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 4.0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 70,
            },
          },
        ],
      },
      {
        applicability: {
          condition: {
            value: fExp`(${CARE_SESSION.CURRENT_CARE_PHASE} == "${CARE_PHASE_CODES.CNT_PHASE1}") && ((${AnthroSystemCodes.AGE_IN_MONTH}  < 6) || (${AnthroSystemCodes.WEIGHT} < 3)) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False})`,
            variables: [
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
              CARE_SESSION.CURRENT_CARE_PHASE,
              CLINICAL_SIGNS.EDEMA,
            ],
          },
          descritption:
            "Le F100-dilué se donne chez les enfants de moins de 6 mois ou moins de 3kg, non allaités et qui ne presentent pas d'œdème bilateraux.",
          variableExplanation: {
            [CARE_SESSION.CURRENT_CARE_PHASE]: "Phase CNT_PHASE1 (stabilisation).",
            [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (< 6 mois).",
            [AnthroSystemCodes.WEIGHT]: "Poids en kg (< 3 kg).",
            [CLINICAL_SIGNS.EDEMA]: "Absence d'œdèmes (False).",
          },
        },
        conditionalDosageFormulas: [
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`${ALWAYS_TRUE_CONDITION}`,
                  variables: []
                },
                description: "Cette condition est toujours vraie et permet d'appliquer la formule par défaut pour le dosage, quel que soit le contexte clinique.",
                variableExplanation: {
                  // Aucune variable nécessaire, la formule s'applique à tous les patients dans ce contexte.
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 130)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              max: null,
              unit: DosageFormulaUnit.ML,
              desciption: "La quantité minimale recommandée est calculée en multipliant le poids du patient (en kg) par 130 pour obtenir le volume de lait en ml à administrer par jour. Cette formule est utilisée pour les enfants sans œdème ou dans les cas standards.",
              variableExplanation: {
                [admissionVariable(AnthroSystemCodes.WEIGHT)]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
        ],
        isAdmissionWeight: true,
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: 1.9,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 70,
            },
          },
        ],
      },
      {
        applicability: {
          condition: {
            value: fExp`(${CARE_SESSION.CURRENT_CARE_PHASE} == "${CARE_PHASE_CODES.CNT_TRANS_PHASE}") && ((${AnthroSystemCodes.AGE_IN_MONTH}  < 6) || (${AnthroSystemCodes.WEIGHT} < 3)) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False})`,
            variables: [
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
              CARE_SESSION.CURRENT_CARE_PHASE,
              CLINICAL_SIGNS.EDEMA,
            ],
          },
          descritption:
            "Le F100-dilué se donne chez les enfants de moins de 6 mois ou moins de 3kg, non allaités et qui sont en phase de transition",
          variableExplanation: {
            [CARE_SESSION.CURRENT_CARE_PHASE]: "Phase CNT_TRANS_PHASE (transition).",
            [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (< 6 mois).",
            [AnthroSystemCodes.WEIGHT]: "Poids en kg (< 3 kg).",
            [CLINICAL_SIGNS.EDEMA]: "Absence d'œdèmes (False).",
          },
        },
        conditionalDosageFormulas: [
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`${ALWAYS_TRUE_CONDITION}`,
                  variables: []
                },
                description: "Cette condition est toujours vraie et permet d'appliquer la formule par défaut pour le dosage, quel que soit le contexte clinique.",
                variableExplanation: {
                  // Aucune variable nécessaire, la formule s'applique à tous les patients dans ce contexte.
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 150)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              max: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 170)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              unit: DosageFormulaUnit.ML,
              desciption: "Le volume de lait à administrer par jour est compris entre le poids du patient (en kg) multiplié par 150 et 170. Cette formule est utilisée pour les enfants en phase de transition sans œdème.",
              variableExplanation: {
                [admissionVariable(AnthroSystemCodes.WEIGHT)]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
        ],
        isAdmissionWeight: true,
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 1.9,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 75,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 80,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 85,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 95,
            },
          },
        ],
      },
      {
        applicability: {
          condition: {
            value: fExp`(${CARE_SESSION.CURRENT_CARE_PHASE} == "${CARE_PHASE_CODES.CNT_PHASE2}") && ((${AnthroSystemCodes.AGE_IN_MONTH}  < 6) || (${AnthroSystemCodes.WEIGHT} < 3)) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False})`,
            variables: [
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
              CARE_SESSION.CURRENT_CARE_PHASE,
              CLINICAL_SIGNS.EDEMA,
            ],
          },
          descritption:
            "Le F100-dilué se donne chez les enfants de moins de 6 mois ou moins de 3kg, non allaités et qui sont en phase de réhabilitation",
          variableExplanation: {
            [CARE_SESSION.CURRENT_CARE_PHASE]: "Phase CNT_PHASE2 (réhabilitation).",
            [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (< 6 mois).",
            [AnthroSystemCodes.WEIGHT]: "Poids en kg (< 3 kg).",
            [CLINICAL_SIGNS.EDEMA]: "Absence d'œdèmes (False).",
          },
        },
        conditionalDosageFormulas: [
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`${ALWAYS_TRUE_CONDITION}`,
                  variables: []
                },
                description: "Cette condition est toujours vraie et permet d'appliquer la formule par défaut pour le dosage, quel que soit le contexte clinique.",
                variableExplanation: {
                  // Aucune variable nécessaire, la formule s'applique à tous les patients dans ce contexte.
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 200)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              max: null,
              unit: DosageFormulaUnit.ML,
              desciption: "La quantité minimale recommandée est calculée en multipliant le poids du patient (en kg) par 200 pour obtenir le volume de lait en ml à administrer par jour. Cette formule est utilisée pour les enfants en phase de réhabilitation sans œdème.",
              variableExplanation: {
                [admissionVariable(AnthroSystemCodes.WEIGHT)]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
        ],
        isAdmissionWeight: true,
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 60,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 70,
            },
          },
          {
            weight_kg: 1.9,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 80,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 90,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 100,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 110,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 120,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 130,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [FeedingFrequenciePerDay.EIGHT]: 140,
            },
          },
        ],
      },
    ],
  },
  {
    code: MilkType.F100,
    dosageTables: [
      {
        applicability: {
          condition: {
            value: fExp`(${CARE_SESSION.CURRENT_CARE_PHASE} == ${CARE_PHASE_CODES.CNT_TRANS_PHASE}) && (${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.WEIGHT} >=3)`,
            variables: [
              CARE_SESSION.CURRENT_CARE_PHASE,
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
            ],
          },
          descritption:
            "Le F100 est donné en phase de transition aux enfants de plus de 6 mois et plus de 3 kg de poids corporelle",
          variableExplanation: {
            [CARE_SESSION.CURRENT_CARE_PHASE]: "Phase CNT_TRANS_PHASE (transition).",
            [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (≥ 6 mois).",
            [AnthroSystemCodes.WEIGHT]: "Poids en kg (≥ 3 kg).",
          },
        },
        conditionalDosageFormulas: [
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`${ALWAYS_TRUE_CONDITION}`,
                  variables: []
                },
                description: "Cette condition est toujours vraie et permet d'appliquer la formule par défaut pour le dosage, quel que soit le contexte clinique.",
                variableExplanation: {
                  // Aucune variable nécessaire, la formule s'applique à tous les patients dans ce contexte.
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 150)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              max: {
                value: fExp`(${admissionVariable(AnthroSystemCodes.WEIGHT)} * 220)`,
                variables: [admissionVariable(AnthroSystemCodes.WEIGHT)]
              },
              unit: DosageFormulaUnit.ML,
              desciption: "Le volume de lait à administrer par jour est compris entre le poids du patient (en kg) multiplié par 150 et 220. Cette formule est utilisée pour les enfants en phase de transition sans œdème.",
              variableExplanation: {
                [admissionVariable(AnthroSystemCodes.WEIGHT)]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
        ],
        isAdmissionWeight: true,
        dosages: [
          {
            weight_kg: 3,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 75,
              [FeedingFrequenciePerDay.FIVE]: 85,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 80,
              [FeedingFrequenciePerDay.FIVE]: 95,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 85,
              [FeedingFrequenciePerDay.FIVE]: 110,
            },
          },
          {
            weight_kg: 4.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 95,
              [FeedingFrequenciePerDay.FIVE]: 120,
            },
          },
          {
            weight_kg: 5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 110,
              [FeedingFrequenciePerDay.FIVE]: 130,
            },
          },
          {
            weight_kg: 5.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 120,
              [FeedingFrequenciePerDay.FIVE]: 150,
            },
          },
          {
            weight_kg: 6,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 140,
              [FeedingFrequenciePerDay.FIVE]: 175,
            },
          },
          {
            weight_kg: 7,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 160,
              [FeedingFrequenciePerDay.FIVE]: 200,
            },
          },
          {
            weight_kg: 8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 180,
              [FeedingFrequenciePerDay.FIVE]: 225,
            },
          },
          {
            weight_kg: 9,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 190,
              [FeedingFrequenciePerDay.FIVE]: 250,
            },
          },
          {
            weight_kg: 10,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 200,
              [FeedingFrequenciePerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: 11,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 230,
              [FeedingFrequenciePerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: 12,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 250,
              [FeedingFrequenciePerDay.FIVE]: 300,
            },
          },
          {
            weight_kg: 13,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 275,
              [FeedingFrequenciePerDay.FIVE]: 350,
            },
          },
          {
            weight_kg: 14,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 290,
              [FeedingFrequenciePerDay.FIVE]: 375,
            },
          },
          {
            weight_kg: 15,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 300,
              [FeedingFrequenciePerDay.FIVE]: 400,
            },
          },
          {
            weight_kg: 20,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 320,
              [FeedingFrequenciePerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: 25,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 350,
              [FeedingFrequenciePerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: 30,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 370,
              [FeedingFrequenciePerDay.FIVE]: 500,
            },
          },
          {
            weight_kg: 40,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 400,
              [FeedingFrequenciePerDay.FIVE]: 500,
            },
          },
        ],
      },
      {
        applicability: {
          condition: {
            value: fExp`(${CARE_SESSION.CURRENT_CARE_PHASE} == "${CARE_PHASE_CODES.CNT_PHASE2}") && (${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.WEIGHT} >=3)`,
            variables: [
              CARE_SESSION.CURRENT_CARE_PHASE,
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
            ],
          },
          descritption:
            "Le F100 est donné en phase de réhabilitation aux enfants de plus de 6 mois et plus de 3 kg de poids corporelle",
          variableExplanation: {
            [CARE_SESSION.CURRENT_CARE_PHASE]: "Phase CNT_PHASE2 (réhabilitation).",
            [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (≥ 6 mois).",
            [AnthroSystemCodes.WEIGHT]: "Poids en kg (≥ 3 kg).",
          },
        },
        conditionalDosageFormulas: [
          {
            applicabilities: [
              {
                condition: {
                  value: fExp`${ALWAYS_TRUE_CONDITION}`,
                  variables: []
                },
                description: "Cette condition est toujours vraie et permet d'appliquer la formule par défaut pour le dosage, quel que soit le contexte clinique.",
                variableExplanation: {
                  // Aucune variable nécessaire, la formule s'applique à tous les patients dans ce contexte.
                },
              }
            ],
            formula: {
              min: {
                value: fExp`(${AnthroSystemCodes.WEIGHT} * 220)`,
                variables: [AnthroSystemCodes.WEIGHT]
              },
              max: null,
              unit: DosageFormulaUnit.ML,
              desciption: "La quantité minimale recommandée est calculée en multipliant le poids du patient (en kg) par 220 pour obtenir le volume de lait en ml à administrer par jour. Cette formule est utilisée pour les enfants en phase de réhabilitation.",
              variableExplanation: {
                [AnthroSystemCodes.WEIGHT]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
        ],
        isAdmissionWeight: false,
        dosages: [
          {
            weight_kg: 3,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 110,
              [FeedingFrequenciePerDay.FIVE]: 130,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 125,
              [FeedingFrequenciePerDay.FIVE]: 150,
            },
          },

          {
            weight_kg: 4,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 135,
              [FeedingFrequenciePerDay.FIVE]: 160,
            },
          },
          {
            weight_kg: 5,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 160,
              [FeedingFrequenciePerDay.FIVE]: 190,
            },
          },

          {
            weight_kg: 6,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 180,
              [FeedingFrequenciePerDay.FIVE]: 215,
            },
          },
          {
            weight_kg: 7,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 200,
              [FeedingFrequenciePerDay.FIVE]: 240,
            },
          },
          {
            weight_kg: 8,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 215,
              [FeedingFrequenciePerDay.FIVE]: 260,
            },
          },
          {
            weight_kg: 9,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 225,
              [FeedingFrequenciePerDay.FIVE]: 270,
            },
          },
          {
            weight_kg: 10,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 230,
              [FeedingFrequenciePerDay.FIVE]: 280,
            },
          },
          {
            weight_kg: 12,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 260,
              [FeedingFrequenciePerDay.FIVE]: 310,
            },
          },
          {
            weight_kg: 15,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 300,
              [FeedingFrequenciePerDay.FIVE]: 360,
            },
          },
          {
            weight_kg: 20,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 370,
              [FeedingFrequenciePerDay.FIVE]: 440,
            },
          },
          {
            weight_kg: 25,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 420,
              [FeedingFrequenciePerDay.FIVE]: 500,
            },
          },
          {
            weight_kg: 30,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 450,
              [FeedingFrequenciePerDay.FIVE]: 540,
            },
          },
          {
            weight_kg: 40,
            dosePerMeal: {
              [FeedingFrequenciePerDay.SIX]: 530,
              [FeedingFrequenciePerDay.FIVE]: 640,
            },
          },
        ],
      },
    ],
  },
];
