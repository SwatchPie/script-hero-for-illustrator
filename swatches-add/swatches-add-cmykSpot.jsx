/**
 * @file Script-Hero\swatches-add\swatches-add-cmykSpot.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-07-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Demonstrates bulk creation of CMYK Spot swatches.
 * 
 * @example
 * 1. Open a document in CMYK mode.
 * 2. Use `CTRL+F12` to run this script.
 * 3. When prompted, keep or delete existing swatches.
 * 4. New swatches are added to the Swatches panel.
 * 5. Optionally, both new and existing swatches are grouped.
 * 
 */


// @include '../library/utilities/swatchUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

(function addSwatchesCMYKSpot() {

  var functionID = 'addSwatchesCMYKSpot';
  var functionTitle = 'Add CMYK Spot Swatches';
  var DEBUG = false;

  try {

    // Prompt for swatch clean up
    var  promptCleanup = scriptUIUtils.promptConfirm(functionTitle, 'Delete existing swatches?');

    if (promptCleanup) {
      swatchUtils.deleteAllSwatches();
    }

    // Add swatches
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5R',0,100,100,0,'CMYK Spots');
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5YR',0,50,100,0,'CMYK Spots');
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5Y',0,0,100,0,'CMYK Spots');
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5GY',50,0,100,0,'CMYK Spots');
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5G',100,0,100,0,'CMYK Spots');
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5BG',100,0,0,0,'CMYK Spots');
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5B',100,50,0,0,'CMYK Spots');
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5PB',100,100,0,0,'CMYK Spots');
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5P',50,100,0,0,'CMYK Spots');
    swatchUtils.makeSwatchSpotCMYK('CMYK Spot 5RP',0,100,0,0,'CMYK Spots');

    // Debug
    var message = 'SUCCESS ' + functionID + '\nCMYK Spot swatches added.';
    if (DEBUG) alert(message, functionID);
    
  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();

