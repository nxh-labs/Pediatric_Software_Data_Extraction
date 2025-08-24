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
  RecommendedMilkPerDay,
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
        dosages: [
          {
            weight_kg: 2,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
              [RecommendedMilkPerDay.SIX]: 50,
              [RecommendedMilkPerDay.FIVE]: 65,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
              [RecommendedMilkPerDay.SIX]: 60,
              [RecommendedMilkPerDay.FIVE]: 70,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
              [RecommendedMilkPerDay.SIX]: 65,
              [RecommendedMilkPerDay.FIVE]: 75,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
              [RecommendedMilkPerDay.SIX]: 70,
              [RecommendedMilkPerDay.FIVE]: 80,
            },
          },
          {
            weight_kg: 3,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
              [RecommendedMilkPerDay.SIX]: 75,
              [RecommendedMilkPerDay.FIVE]: 85,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
              [RecommendedMilkPerDay.SIX]: 80,
              [RecommendedMilkPerDay.FIVE]: 95,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 70,
              [RecommendedMilkPerDay.SIX]: 85,
              [RecommendedMilkPerDay.FIVE]: 110,
            },
          },
          {
            weight_kg: 4.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 80,
              [RecommendedMilkPerDay.SIX]: 95,
              [RecommendedMilkPerDay.FIVE]: 120,
            },
          },
          {
            weight_kg: 5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 90,
              [RecommendedMilkPerDay.SIX]: 110,
              [RecommendedMilkPerDay.FIVE]: 130,
            },
          },
          {
            weight_kg: 5.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 100,
              [RecommendedMilkPerDay.SIX]: 120,
              [RecommendedMilkPerDay.FIVE]: 150,
            },
          },
          {
            weight_kg: 6,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 110,
              [RecommendedMilkPerDay.SIX]: 140,
              [RecommendedMilkPerDay.FIVE]: 175,
            },
          },
          {
            weight_kg: 7,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 125,
              [RecommendedMilkPerDay.SIX]: 160,
              [RecommendedMilkPerDay.FIVE]: 200,
            },
          },
          {
            weight_kg: 8,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 140,
              [RecommendedMilkPerDay.SIX]: 180,
              [RecommendedMilkPerDay.FIVE]: 225,
            },
          },
          {
            weight_kg: 9,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 155,
              [RecommendedMilkPerDay.SIX]: 190,
              [RecommendedMilkPerDay.FIVE]: 250,
            },
          },
          {
            weight_kg: 10,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 170,
              [RecommendedMilkPerDay.SIX]: 200,
              [RecommendedMilkPerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: 11,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 190,
              [RecommendedMilkPerDay.SIX]: 230,
              [RecommendedMilkPerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: 12,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 205,
              [RecommendedMilkPerDay.SIX]: 250,
              [RecommendedMilkPerDay.FIVE]: 300,
            },
          },
          {
            weight_kg: 13,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 230,
              [RecommendedMilkPerDay.SIX]: 275,
              [RecommendedMilkPerDay.FIVE]: 350,
            },
          },
          {
            weight_kg: 14,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 250,
              [RecommendedMilkPerDay.SIX]: 290,
              [RecommendedMilkPerDay.FIVE]: 375,
            },
          },
          {
            weight_kg: 15,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 260,
              [RecommendedMilkPerDay.SIX]: 300,
              [RecommendedMilkPerDay.FIVE]: 400,
            },
          },
          {
            weight_kg: 20,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 290,
              [RecommendedMilkPerDay.SIX]: 320,
              [RecommendedMilkPerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: 25,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 300,
              [RecommendedMilkPerDay.SIX]: 350,
              [RecommendedMilkPerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: 30,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 320,
              [RecommendedMilkPerDay.SIX]: 370,
              [RecommendedMilkPerDay.FIVE]: 500,
            },
          },
          {
            weight_kg: 40,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 350,
              [RecommendedMilkPerDay.SIX]: 400,
              [RecommendedMilkPerDay.FIVE]: 500,
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
                [AnthroSystemCodes.WEIGHT]: "Poids du patient en kilogrammes utilisé pour le calcul du volume de lait."
              }
            }
          },
        ],
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: 1.9,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 70,
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
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 25,
            },
          },
          {
            weight_kg: 1.3,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: 1.8,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 4.0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 70,
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
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 25,
            },
          },
          {
            weight_kg: 1.3,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: 1.8,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 4.0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 70,
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
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: 1.9,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 70,
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
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: 1.9,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 75,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 80,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 85,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 95,
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
        dosages: [
          {
            weight_kg: 0,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 60,
            },
          },
          {
            weight_kg: 1.6,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 70,
            },
          },
          {
            weight_kg: 1.9,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 80,
            },
          },
          {
            weight_kg: 2.2,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 90,
            },
          },
          {
            weight_kg: 2.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 100,
            },
          },
          {
            weight_kg: 2.8,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 110,
            },
          },
          {
            weight_kg: 3.0,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 120,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 130,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 140,
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
        dosages: [
          {
            weight_kg: 3,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 75,
              [RecommendedMilkPerDay.FIVE]: 85,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 80,
              [RecommendedMilkPerDay.FIVE]: 95,
            },
          },
          {
            weight_kg: 4,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 85,
              [RecommendedMilkPerDay.FIVE]: 110,
            },
          },
          {
            weight_kg: 4.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 95,
              [RecommendedMilkPerDay.FIVE]: 120,
            },
          },
          {
            weight_kg: 5,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 110,
              [RecommendedMilkPerDay.FIVE]: 130,
            },
          },
          {
            weight_kg: 5.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 120,
              [RecommendedMilkPerDay.FIVE]: 150,
            },
          },
          {
            weight_kg: 6,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 140,
              [RecommendedMilkPerDay.FIVE]: 175,
            },
          },
          {
            weight_kg: 7,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 160,
              [RecommendedMilkPerDay.FIVE]: 200,
            },
          },
          {
            weight_kg: 8,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 180,
              [RecommendedMilkPerDay.FIVE]: 225,
            },
          },
          {
            weight_kg: 9,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 190,
              [RecommendedMilkPerDay.FIVE]: 250,
            },
          },
          {
            weight_kg: 10,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 200,
              [RecommendedMilkPerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: 11,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 230,
              [RecommendedMilkPerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: 12,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 250,
              [RecommendedMilkPerDay.FIVE]: 300,
            },
          },
          {
            weight_kg: 13,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 275,
              [RecommendedMilkPerDay.FIVE]: 350,
            },
          },
          {
            weight_kg: 14,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 290,
              [RecommendedMilkPerDay.FIVE]: 375,
            },
          },
          {
            weight_kg: 15,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 300,
              [RecommendedMilkPerDay.FIVE]: 400,
            },
          },
          {
            weight_kg: 20,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 320,
              [RecommendedMilkPerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: 25,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 350,
              [RecommendedMilkPerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: 30,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 370,
              [RecommendedMilkPerDay.FIVE]: 500,
            },
          },
          {
            weight_kg: 40,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 400,
              [RecommendedMilkPerDay.FIVE]: 500,
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
        dosages: [
          {
            weight_kg: 3,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 110,
              [RecommendedMilkPerDay.FIVE]: 130,
            },
          },
          {
            weight_kg: 3.5,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 125,
              [RecommendedMilkPerDay.FIVE]: 150,
            },
          },

          {
            weight_kg: 4,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 135,
              [RecommendedMilkPerDay.FIVE]: 160,
            },
          },
          {
            weight_kg: 5,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 160,
              [RecommendedMilkPerDay.FIVE]: 190,
            },
          },

          {
            weight_kg: 6,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 180,
              [RecommendedMilkPerDay.FIVE]: 215,
            },
          },
          {
            weight_kg: 7,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 200,
              [RecommendedMilkPerDay.FIVE]: 240,
            },
          },
          {
            weight_kg: 8,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 215,
              [RecommendedMilkPerDay.FIVE]: 260,
            },
          },
          {
            weight_kg: 9,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 225,
              [RecommendedMilkPerDay.FIVE]: 270,
            },
          },
          {
            weight_kg: 10,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 230,
              [RecommendedMilkPerDay.FIVE]: 280,
            },
          },
          {
            weight_kg: 12,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 260,
              [RecommendedMilkPerDay.FIVE]: 310,
            },
          },
          {
            weight_kg: 15,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 300,
              [RecommendedMilkPerDay.FIVE]: 360,
            },
          },
          {
            weight_kg: 20,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 370,
              [RecommendedMilkPerDay.FIVE]: 440,
            },
          },
          {
            weight_kg: 25,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 420,
              [RecommendedMilkPerDay.FIVE]: 500,
            },
          },
          {
            weight_kg: 30,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 450,
              [RecommendedMilkPerDay.FIVE]: 540,
            },
          },
          {
            weight_kg: 40,
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 530,
              [RecommendedMilkPerDay.FIVE]: 640,
            },
          },
        ],
      },
    ],
  },
];
