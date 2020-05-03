const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNumber = Number(sampleActivity)

  if (typeof(sampleActivity) !== "string" ||
      arguments.length === 0 ||
      isNaN(sampleActivityNumber) ||
      sampleActivity > MODERN_ACTIVITY ||
      sampleActivity <= 0)
    return false

  let k = 0.693 / HALF_LIFE_PERIOD

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k)
};
