import { AnthroSystemCodes, CALCULATED_MONITORING_ELEMENT, CARE_SESSION, consecutiveVariable, dailyVariable, DATA_POINTS, WEIGHT_CONSECUTIVE_RECORDING_0, WEIGHT_CONSECUTIVE_RECORDING_1, WEIGHT_CONSECUTIVE_RECORDING_2, WEIGHT_IN_PHASE_ADMISSION, WEIGHT_RECORDING_BEFORE_PREV_DAY, WEIGHT_RECORDING_PREV_DAY } from "../../constants";
import { FormulaFieldReference } from "../../types";
import { fExp } from "../../utils";

export const formulaFields: FormulaFieldReference[] = [
    {
        code: CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_KG_DAY,
        formula: {
            description: "Calcule le taux de prise de poids quotidien en kg/jour en soustrayant le poids de l'avant-veille du poids de la veille. Un résultat positif indique une prise de poids, négatif indique une perte.",
            formula: {
                value: fExp`(${WEIGHT_RECORDING_PREV_DAY} - ${WEIGHT_RECORDING_BEFORE_PREV_DAY})`,
                variables: [WEIGHT_RECORDING_PREV_DAY, WEIGHT_RECORDING_BEFORE_PREV_DAY]
            },
            variablesExplanation: {
                [WEIGHT_RECORDING_BEFORE_PREV_DAY]: "Poids enregistré il y a deux jours (avant-veille) - utilisé comme référence pour calculer l'évolution pondérale sur 24h",
                [WEIGHT_RECORDING_PREV_DAY]: "Poids enregistré hier (veille) - représente le poids le plus récent pour le calcul de la variation quotidienne"
            }
        }
    },
    {
        code: CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_DURING_PHASE,
        formula: {
            description: "Détermine la prise de poids totale depuis l'admission dans la phase de soins actuelle. Cette mesure permet d'évaluer l'évolution pondérale globale du patient depuis son entrée.",
            formula: {
                value: fExp`(${AnthroSystemCodes.WEIGHT} - ${WEIGHT_IN_PHASE_ADMISSION})`,
                variables: [AnthroSystemCodes.WEIGHT, WEIGHT_IN_PHASE_ADMISSION]
            },
            variablesExplanation: {
                [AnthroSystemCodes.WEIGHT]: "Poids actuel du patient mesuré lors de la dernière pesée - représente l'état pondéral présent",
                [WEIGHT_IN_PHASE_ADMISSION]: "Poids du patient enregistré lors de l'admission dans la phase de soins actuelle - sert de baseline pour mesurer l'évolution"
            }
        }
    }, 
    {
        code: CALCULATED_MONITORING_ELEMENT.WEIGHT_LOSS_PERCENT_BETWEEN_TWO_CONSECUTIVE_MEASUREMENTS,
        formula: {
            description: "Calcule le pourcentage de perte de poids entre deux mesures consécutives. Formule: ((Poids_initial - Poids_final) * 100) / Poids_initial. Un résultat positif indique une perte, négatif indique un gain.",
            formula: {
                value: fExp`(((${WEIGHT_CONSECUTIVE_RECORDING_1} - ${WEIGHT_CONSECUTIVE_RECORDING_0})* 100)/ ${WEIGHT_CONSECUTIVE_RECORDING_1}) `,
                variables: [
                    WEIGHT_CONSECUTIVE_RECORDING_0,
                    WEIGHT_CONSECUTIVE_RECORDING_1
                ]
            },
            variablesExplanation: {
                [WEIGHT_CONSECUTIVE_RECORDING_0]: "Deuxième mesure de poids consécutive (plus récente) - utilisée comme point final pour calculer la variation relative",
                [WEIGHT_CONSECUTIVE_RECORDING_1]: "Première mesure de poids consécutive (plus ancienne) - sert de référence baseline et dénominateur pour le calcul du pourcentage"
            }
        }
    },
    {
        code: CALCULATED_MONITORING_ELEMENT.WEIGHT_LOSS_PERCENT_BETWEEN_THREE_CONSECUTIVE_MEASUREMENTS,
        formula: {
            description: "Calcule le pourcentage de perte de poids entre la première et la troisième mesure sur trois prises consécutives. Permet d'évaluer l'évolution sur une période plus longue en excluant la mesure intermédiaire.",
            formula: {
                value: fExp`(((${WEIGHT_CONSECUTIVE_RECORDING_2} - ${WEIGHT_CONSECUTIVE_RECORDING_0})* 100)/ ${WEIGHT_CONSECUTIVE_RECORDING_2}) `,
                variables: [
                    WEIGHT_CONSECUTIVE_RECORDING_0,
                    WEIGHT_CONSECUTIVE_RECORDING_2
                ]
            },
            variablesExplanation: {
                [WEIGHT_CONSECUTIVE_RECORDING_2]: "Première mesure de poids dans la série de trois mesures consécutives - point de départ chronologique utilisé comme baseline de référence",
                [WEIGHT_CONSECUTIVE_RECORDING_0]: "Troisième mesure de poids dans la série (plus récente) - point final pour mesurer l'évolution pondérale sur la période étendue"
            }
        }
    },
    {
        code: CALCULATED_MONITORING_ELEMENT.NUTRITIONAL_MILK_CONSUMPTION_RATE_PERCENT_PER_DAY,
        formula: {
            description: "Calcule la différence entre la quantité de lait administrée lors d'une session de soins et la consommation nutritionnelle quotidienne prescrite. Permet d'évaluer l'écart entre l'apport réel et l'objectif thérapeutique.",
            formula: {
                value: fExp`(${CARE_SESSION.ADMINISTRED_MILK_QUANTITY_G} - ${DATA_POINTS.NUTRITIONAL_MILK_CONSUMPTION_G_PER_DAY})`,
                variables: [CARE_SESSION.ADMINISTRED_MILK_QUANTITY_G, DATA_POINTS.NUTRITIONAL_MILK_CONSUMPTION_G_PER_DAY]
            },
            variablesExplanation: {
                [CARE_SESSION.ADMINISTRED_MILK_QUANTITY_G]: "Quantité de lait effectivement administrée au patient en grammes lors de la session de soins - représente l'apport réel mesuré",
                [DATA_POINTS.NUTRITIONAL_MILK_CONSUMPTION_G_PER_DAY]: "Objectif de consommation nutritionnelle quotidienne de lait en grammes - cible thérapeutique prescrite pour répondre aux besoins du patient"
            }
        }
    }
];