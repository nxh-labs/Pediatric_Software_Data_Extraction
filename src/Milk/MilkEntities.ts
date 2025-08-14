import { MilkEntity, MilkType } from "../../types";

export const milkEntities: MilkEntity[] = [
  {
    code: MilkType.F100,
    name: "Lait Thérapeutique F-100",
    notes: [
      "Lait de rattrapage nutritionnel pour la phase de transition et de réhabilitation.",
      "Vise une prise de poids rapide. Ne pas utiliser en phase aiguë."
    ],
  },
  {
    code: MilkType.F100Diluted,
    name: "Lait Thérapeutique F-100 Dilué",
    notes: [
      "Utilisé spécifiquement pour les nourrissons de moins de 6 mois (ou < 3 kg) SANS œdèmes.",
      "Permet une transition douce vers la prise de poids pour les plus jeunes."
    ],
  },
  {
    code: MilkType.F75,
    name: "Lait Thérapeutique F-75",
    notes: [
      "Lait de stabilisation pour la Phase 1 (aiguë).",
      "Restaure les fonctions métaboliques sans causer de prise de poids.",
      "Aussi utilisé pour les nourrissons avec œdèmes."
    ],
  },
];