/**
 * @file Script-Hero\swatches-add\swatches-add-labSpot.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-07-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Demonstrates bulk creation of Lab Spot swatches.
 * 
 * @example
 * 1. Open a document in CMYK or RGB mode.
 * 2. Use `CTRL+F12` to run this script.
 * 3. When prompted, keep or delete existing swatches.
 * 4. New swatches are added to the Swatches panel.
 * 5. Optionally, both new and existing swatches are grouped.
 * 
 */


// @include '../library/utilities/swatchUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

(function addSwatchesLabSpot() {

  var functionID = 'addSwatchesLabSpot';
  var functionTitle = 'Add Lab Spot Swatches';
  var DEBUG = false;

  try {

    // Prompt for swatch clean up
    var  promptCleanup = scriptUIUtils.promptConfirm(functionTitle, 'Delete existing swatches?');

    if (promptCleanup) {
      swatchUtils.deleteAllSwatches();
    }

    // Add swatches
    swatchUtils.makeSwatchSpotLab('5R LAB',48.18,75.84,59.46,'Hues LAB');
    swatchUtils.makeSwatchSpotLab('5YR LAB',72.9,38.98,85.24,'Hues LAB');
    swatchUtils.makeSwatchSpotLab('5Y LAB',95.81,-6.56,109.46,'Hues LAB');
    swatchUtils.makeSwatchSpotLab('5GY LAB',74.9,-40.54,73.39,'Hues LAB');
    swatchUtils.makeSwatchSpotLab('5G LAB',50.74,-84.69,34.98,'Hues LAB');
    swatchUtils.makeSwatchSpotLab('5BG LAB',52.46,-43.28,-55.63,'Hues LAB');
    swatchUtils.makeSwatchSpotLab('5B LAB',39.27,-10.9,-56.93,'Hues LAB');
    swatchUtils.makeSwatchSpotLab('5PB LAB',21.61,32.89,-61.73,'Hues LAB');
    swatchUtils.makeSwatchSpotLab('5P LAB',37.89,58.59,-37.86,'Hues LAB');
    swatchUtils.makeSwatchSpotLab('5RP LAB',53.46,82.71,-6.3,'Hues LAB');

    // Debug
    var message = 'SUCCESS ' + functionID + '\nLAB Spot swatches added.';
    if (DEBUG) alert(message, functionID);
  
  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }
  
})();

