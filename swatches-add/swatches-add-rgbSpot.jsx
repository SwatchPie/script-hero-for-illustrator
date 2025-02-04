/**
 * @file Script-Hero\swatches-add\swatches-add-rgbSpot.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-07-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Demonstrates bulk creation of RGB Spot swatches.
 * 
 * @example
 * 1. Open a document in RGB mode.
 * 2. Use `CTRL+F12` to run this script.
 * 3. When prompted, keep or delete existing swatches.
 * 4. New swatches are added to the Swatches panel.
 * 5. Optionally, both new and existing swatches are grouped.
 * 
 */


// @include '../library/utilities/swatchUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

(function addSwatchesRGBSpot() {

  var functionID = 'addSwatchesRGBSpot';
  var functionTitle = 'Add RGB Spot Swatches';
  var DEBUG = false;

  try {

    // Prompt for swatch clean up
    var  promptCleanup = scriptUIUtils.promptConfirm(functionTitle, 'Delete existing swatches?');

    if (promptCleanup) {
      swatchUtils.deleteAllSwatches();
    }

    swatchUtils.makeSwatchSpotRGB('RGB Spot 5R',255,0,0,'RGB Spots');
    swatchUtils.makeSwatchSpotRGB('RGB Spot 5YR',255,128,0,'RGB Spots');
    swatchUtils.makeSwatchSpotRGB('RGB Spot 5Y',255,255,0,'RGB Spots');
    swatchUtils.makeSwatchSpotRGB('RGB Spot 5GY',128,255,0,'RGB Spots');
    swatchUtils.makeSwatchSpotRGB('RGB Spot 5G',0,255,0,'RGB Spots');
    swatchUtils.makeSwatchSpotRGB('RGB Spot 5BG',0,255,255,'RGB Spots');
    swatchUtils.makeSwatchSpotRGB('RGB Spot 5B',0,128,255,'RGB Spots');
    swatchUtils.makeSwatchSpotRGB('RGB Spot 5PB',0,0,255,'RGB Spots');
    swatchUtils.makeSwatchSpotRGB('RGB Spot 5P',128,0,255,'RGB Spots');
    swatchUtils.makeSwatchSpotRGB('RGB Spot 5RP',255,0,255,'RGB Spots');

    // Debug
    var message = 'SUCCESS ' + functionID + '\nRGB Spot swatches added.';
    if (DEBUG) alert(message, functionID);
    
  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();

