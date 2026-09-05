// Ensure datasets are exported to window for global.js attachSearch to consume
// CRITICAL: This runs after tips.js but before breeds.js, so we preserve comprehensive data
(function(){
  try {
    // Export pet tips (always from tips.js)
    if (typeof petTips !== 'undefined') {
      window.petTips = petTips;
    }

    // Export comprehensive breed data from tips.js before breeds.js overwrites it
    if (typeof dogBreeds !== 'undefined') {
      window.dogBreeds = dogBreeds;
    }

    if (typeof catBreeds !== 'undefined') {
      window.catBreeds = catBreeds;
    }
  } catch (e) {
    console.error('DATA EXPORTS: Error during export:', e);
  }
})();

