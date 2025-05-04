import {
  generateAndSaveGrowthRef,
  saveAllIndicators,
  saveBiochemicalRef,
  saveClinicalRefs,
  saveAppetiteTestRefs,
  saveOrientationRefs,
  saveAnthropometricMeasures,
  saveDiagnosticRules,
} from "./src";

saveAnthropometricMeasures();
generateAndSaveGrowthRef();
saveAllIndicators();
saveBiochemicalRef();
saveClinicalRefs();
saveDiagnosticRules();
saveAppetiteTestRefs();
saveOrientationRefs();
