import {
  generateAndSaveGrowthRef,
  saveAllIndicators,
  saveBiochemicalRef,
  saveClinicalRefs,
  saveAppetiteTestRefs,
  saveOrientationRefs,
  saveAnthropometricMeasures,
  saveDiagnosticRules,
  saveMedicines,
  saveMilks,
} from "./src";

saveAnthropometricMeasures();
generateAndSaveGrowthRef();
saveAllIndicators();
saveBiochemicalRef();
saveClinicalRefs();
saveDiagnosticRules();
saveAppetiteTestRefs();
saveOrientationRefs();
saveMedicines();
saveMilks();
