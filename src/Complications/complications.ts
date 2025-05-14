import { COMPLICATION_CODES } from "../../constants";
import { ComplicationDto } from "../../types";


export const complicationRefs: ComplicationDto[] = [
  {
    code: COMPLICATION_CODES.DEHYDRATION,
    name: "Déshydratation",
    description: "Erreur de diagnostic ou traitement inadéquat pouvant entraîner une hyperhydratation et une défaillance cardiaque chez les MAS sans œdème."
  },
  {
    code: COMPLICATION_CODES.DIARRHEA,
    name: "Diarrhée",
    description: "Fréquente chez les MAS, elle peut causer un échec au traitement et nécessite un suivi intensif."
  },
  {
    code: COMPLICATION_CODES.VOMITING,
    name: "Vomissements sévères",
    description: "Nécessite une prise en charge en phase aiguë et peut compromettre l'alimentation."
  },
  {
    code: COMPLICATION_CODES.PNEUMONIA,
    name: "Pneumonie",
    description: "Fréquence respiratoire élevée selon l'âge, tirage sous-costal ; nécessite un traitement médical d'urgence."
  },
  {
    code: COMPLICATION_CODES.SKIN_LESIONS,
    name: "Lésions cutanées ouvertes",
    description: "Signes de complication nécessitant traitement spécifique et hospitalisation."
  },
  {
    code: COMPLICATION_CODES.HYPOTHERMIA,
    name: "Hypothermie",
    description: "Température axillaire < 35°C ou rectale < 35,5°C ; signe de danger chez l’enfant MAS."
  },
  {
    code: COMPLICATION_CODES.FEVER,
    name: "Fièvre",
    description: "Température rectale ≥ 39°C ou axillaire ≥ 38,5°C ; indicateur d'infection."
  },
  {
    code: COMPLICATION_CODES.ANEMIA,
    name: "Anémie sévère",
    description: "Manifestée par une pâleur extrême, nécessite transfusion ou traitement spécifique."
  },
  {
    code: COMPLICATION_CODES.LETHARGY,
    name: "Léthargie",
    description: "Incapacité à se réveiller ou faible réactivité, exige une prise en charge en urgence."
  },
  {
    code: COMPLICATION_CODES.CONVULSION,
    name: "Convulsions",
    description: "Signe de complication neurologique grave chez l’enfant MAS."
  },
  {
    code: COMPLICATION_CODES.VITA_DEFICIENCY,
    name: "Carence en vitamine A",
    description: "Peut causer cécité nocturne, taches de Bitôt, ulcérations cornéennes."
  },
  {
    code: COMPLICATION_CODES.SNG_REQUIRED,
    name: "Besoin de Sonde Naso-Gastrique (SNG)",
    description: "Indique une incapacité à s'alimenter par voie orale, nécessite hospitalisation."
  },
  {
    code: COMPLICATION_CODES.CANDIDOSIS,
    name: "Candidose",
    description: "Indique une immunodépression sévère, observée dans certains cas de MAS."
  },
  {
    code: COMPLICATION_CODES.HIV_TB,
    name: "Co-infection VIH/Tuberculose",
    description: "Aggrave la situation nutritionnelle, nécessite un suivi spécifique combiné."
  }
];
