import {
  AnthroSystemCodes,
  CARE_SESSION,
  CLINICAL_SIGNS,
  ConditionResult,
} from "../../constants";
import {
  CARE_PHASE_CODES,
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
        dosages: [
          {
            weight_kg: [2, 2.1],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
              [RecommendedMilkPerDay.SIX]: 50,
              [RecommendedMilkPerDay.FIVE]: 65,
            },
          },
          {
            weight_kg: [2.2, 2.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
              [RecommendedMilkPerDay.SIX]: 60,
              [RecommendedMilkPerDay.FIVE]: 70,
            },
          },
          {
            weight_kg: [2.5, 2.7],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
              [RecommendedMilkPerDay.SIX]: 65,
              [RecommendedMilkPerDay.FIVE]: 75,
            },
          },
          {
            weight_kg: [2.8, 2.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
              [RecommendedMilkPerDay.SIX]: 70,
              [RecommendedMilkPerDay.FIVE]: 80,
            },
          },
          {
            weight_kg: [3, 3.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
              [RecommendedMilkPerDay.SIX]: 75,
              [RecommendedMilkPerDay.FIVE]: 85,
            },
          },
          {
            weight_kg: [3.5, 3.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
              [RecommendedMilkPerDay.SIX]: 80,
              [RecommendedMilkPerDay.FIVE]: 95,
            },
          },
          {
            weight_kg: [4, 4.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 70,
              [RecommendedMilkPerDay.SIX]: 85,
              [RecommendedMilkPerDay.FIVE]: 110,
            },
          },
          {
            weight_kg: [4.5, 4.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 80,
              [RecommendedMilkPerDay.SIX]: 95,
              [RecommendedMilkPerDay.FIVE]: 120,
            },
          },
          {
            weight_kg: [5, 5.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 90,
              [RecommendedMilkPerDay.SIX]: 110,
              [RecommendedMilkPerDay.FIVE]: 130,
            },
          },
          {
            weight_kg: [5.5, 5.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 100,
              [RecommendedMilkPerDay.SIX]: 120,
              [RecommendedMilkPerDay.FIVE]: 150,
            },
          },
          {
            weight_kg: [6, 6.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 110,
              [RecommendedMilkPerDay.SIX]: 140,
              [RecommendedMilkPerDay.FIVE]: 175,
            },
          },
          {
            weight_kg: [7, 7.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 125,
              [RecommendedMilkPerDay.SIX]: 160,
              [RecommendedMilkPerDay.FIVE]: 200,
            },
          },
          {
            weight_kg: [8, 8.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 140,
              [RecommendedMilkPerDay.SIX]: 180,
              [RecommendedMilkPerDay.FIVE]: 225,
            },
          },
          {
            weight_kg: [9, 9.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 155,
              [RecommendedMilkPerDay.SIX]: 190,
              [RecommendedMilkPerDay.FIVE]: 250,
            },
          },
          {
            weight_kg: [10, 10.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 170,
              [RecommendedMilkPerDay.SIX]: 200,
              [RecommendedMilkPerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: [11, 11.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 190,
              [RecommendedMilkPerDay.SIX]: 230,
              [RecommendedMilkPerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: [12, 12.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 205,
              [RecommendedMilkPerDay.SIX]: 250,
              [RecommendedMilkPerDay.FIVE]: 300,
            },
          },
          {
            weight_kg: [13, 13.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 230,
              [RecommendedMilkPerDay.SIX]: 275,
              [RecommendedMilkPerDay.FIVE]: 350,
            },
          },
          {
            weight_kg: [13, 13.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 230,
              [RecommendedMilkPerDay.SIX]: 275,
              [RecommendedMilkPerDay.FIVE]: 350,
            },
          },
          {
            weight_kg: [14, 14.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 250,
              [RecommendedMilkPerDay.SIX]: 290,
              [RecommendedMilkPerDay.FIVE]: 375,
            },
          },
          {
            weight_kg: [15, 19.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 260,
              [RecommendedMilkPerDay.SIX]: 300,
              [RecommendedMilkPerDay.FIVE]: 400,
            },
          },
          {
            weight_kg: [20, 24.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 290,
              [RecommendedMilkPerDay.SIX]: 320,
              [RecommendedMilkPerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: [25, 29.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 300,
              [RecommendedMilkPerDay.SIX]: 350,
              [RecommendedMilkPerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: [30, 39.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 320,
              [RecommendedMilkPerDay.SIX]: 370,
              [RecommendedMilkPerDay.FIVE]: 500,
            },
          },
          {
            weight_kg: [40, 60],
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
        dosages: [
          {
            weight_kg: [0, 1.5],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: [1.6, 1.8],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: [1.9, 2.1],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: [2.2, 2.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: [2.5, 2.7],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: [2.8, 2.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: [3.0, 3.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: [3.5, 3.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: [4, 4.4],
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
        dosages: [
          {
            weight_kg: [0, 1.2],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 25,
            },
          },
          {
            weight_kg: [1.3, 1.5],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: [1.6, 1.7],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: [1.8, 2.1],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: [2.2, 2.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: [2.5, 2.7],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: [2.8, 2.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: [3.0, 3.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: [3.5, 3.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: [4.0, 4.4],
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
        dosages: [
          {
            weight_kg: [0, 1.2],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 25,
            },
          },
          {
            weight_kg: [1.3, 1.5],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: [1.6, 1.7],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: [1.8, 2.1],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: [2.2, 2.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: [2.5, 2.7],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: [2.8, 2.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: [3.0, 3.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: [3.5, 3.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: [4.0, 4.4],
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
        dosages: [
          {
            weight_kg: [0, 1.5],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 30,
            },
          },
          {
            weight_kg: [1.6, 1.8],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 35,
            },
          },
          {
            weight_kg: [1.9, 2.1],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: [2.2, 2.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: [2.5, 2.7],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 50,
            },
          },
          {
            weight_kg: [2.8, 2.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: [3.0, 3.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: [3.5, 3.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: [4, 4.4],
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
        dosages: [
          {
            weight_kg: [0, 1.5],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 40,
            },
          },
          {
            weight_kg: [1.6, 1.8],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 45,
            },
          },
          {
            weight_kg: [1.9, 2.1],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 55,
            },
          },
          {
            weight_kg: [2.2, 2.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 60,
            },
          },
          {
            weight_kg: [2.5, 2.7],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 65,
            },
          },
          {
            weight_kg: [2.8, 2.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 75,
            },
          },
          {
            weight_kg: [3.0, 3.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 80,
            },
          },
          {
            weight_kg: [3.5, 3.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.EIGHT]: 85,
            },
          },
          {
            weight_kg: [4, 4.4],
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
        dosages: [
          {
            weight_kg: [0, 1.5],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 60,
            },
          },
          {
            weight_kg: [1.6, 1.8],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 70,
            },
          },
          {
            weight_kg: [1.9, 2.1],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 80,
            },
          },
          {
            weight_kg: [2.2, 2.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 90,
            },
          },
          {
            weight_kg: [2.5, 2.7],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 100,
            },
          },
          {
            weight_kg: [2.8, 2.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 110,
            },
          },
          {
            weight_kg: [3.0, 3.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 120,
            },
          },
          {
            weight_kg: [3.5, 3.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 130,
            },
          },
          {
            weight_kg: [4, 4.4],
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
        dosages: [
          {
            weight_kg: [3, 3.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 75,
              [RecommendedMilkPerDay.FIVE]: 85,
            },
          },
          {
            weight_kg: [3.5, 3.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 80,
              [RecommendedMilkPerDay.FIVE]: 95,
            },
          },
          {
            weight_kg: [4, 4.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 85,
              [RecommendedMilkPerDay.FIVE]: 110,
            },
          },
          {
            weight_kg: [4.5, 4.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 95,
              [RecommendedMilkPerDay.FIVE]: 120,
            },
          },
          {
            weight_kg: [5, 5.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 110,
              [RecommendedMilkPerDay.FIVE]: 130,
            },
          },
          {
            weight_kg: [5.5, 5.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 120,
              [RecommendedMilkPerDay.FIVE]: 150,
            },
          },
          {
            weight_kg: [6, 6.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 140,
              [RecommendedMilkPerDay.FIVE]: 175,
            },
          },
          {
            weight_kg: [7, 7.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 160,
              [RecommendedMilkPerDay.FIVE]: 200,
            },
          },
          {
            weight_kg: [8, 8.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 180,
              [RecommendedMilkPerDay.FIVE]: 225,
            },
          },
          {
            weight_kg: [9, 9.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 190,
              [RecommendedMilkPerDay.FIVE]: 250,
            },
          },
          {
            weight_kg: [10, 10.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 200,
              [RecommendedMilkPerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: [11, 11.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 230,
              [RecommendedMilkPerDay.FIVE]: 275,
            },
          },
          {
            weight_kg: [12, 12.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 250,
              [RecommendedMilkPerDay.FIVE]: 300,
            },
          },
          {
            weight_kg: [13, 13.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 275,
              [RecommendedMilkPerDay.FIVE]: 350,
            },
          },
          {
            weight_kg: [14, 14.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 290,
              [RecommendedMilkPerDay.FIVE]: 375,
            },
          },
          {
            weight_kg: [15, 19.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 300,
              [RecommendedMilkPerDay.FIVE]: 400,
            },
          },
          {
            weight_kg: [20, 24.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 320,
              [RecommendedMilkPerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: [25, 29.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 350,
              [RecommendedMilkPerDay.FIVE]: 450,
            },
          },
          {
            weight_kg: [30, 39.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 370,
              [RecommendedMilkPerDay.FIVE]: 500,
            },
          },
          {
            weight_kg: [40, 60],
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
        dosages: [
          {
            weight_kg: [3, 3.4],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 110,
              [RecommendedMilkPerDay.FIVE]: 130,
            },
          },
          {
            weight_kg: [3.5, 3.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 125,
              [RecommendedMilkPerDay.FIVE]: 150,
            },
          },

          {
            weight_kg: [4, 4.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 135,
              [RecommendedMilkPerDay.FIVE]: 160,
            },
          },
          {
            weight_kg: [5, 5.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 160,
              [RecommendedMilkPerDay.FIVE]: 190,
            },
          },

          {
            weight_kg: [6, 6.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 180,
              [RecommendedMilkPerDay.FIVE]: 215,
            },
          },
          {
            weight_kg: [7, 7.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 200,
              [RecommendedMilkPerDay.FIVE]: 240,
            },
          },
          {
            weight_kg: [8, 8.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 215,
              [RecommendedMilkPerDay.FIVE]: 260,
            },
          },
          {
            weight_kg: [9, 9.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 225,
              [RecommendedMilkPerDay.FIVE]: 270,
            },
          },
          {
            weight_kg: [10, 11.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 230,
              [RecommendedMilkPerDay.FIVE]: 280,
            },
          },
          {
            weight_kg: [12, 14.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 260,
              [RecommendedMilkPerDay.FIVE]: 310,
            },
          },
          {
            weight_kg: [15, 19.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 300,
              [RecommendedMilkPerDay.FIVE]: 360,
            },
          },
          {
            weight_kg: [20, 24.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 370,
              [RecommendedMilkPerDay.FIVE]: 440,
            },
          },
          {
            weight_kg: [25, 29.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 420,
              [RecommendedMilkPerDay.FIVE]: 500,
            },
          },
          {
            weight_kg: [30, 39.9],
            dosePerMeal: {
              [RecommendedMilkPerDay.SIX]: 450,
              [RecommendedMilkPerDay.FIVE]: 540,
            },
          },
          {
            weight_kg: [40, 60],
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
