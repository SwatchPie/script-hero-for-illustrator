/**
 * @file Script-Hero\swatches-add\swatches-add-cmyk.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-07-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Demonstrates bulk creation of CMYK Process swatches.
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

(function addSwatchesCMYK() {

  var functionID = 'addSwatchesCMYK';
  var functionTitle = 'Add CMYK Swatches';
  var DEBUG = false;

  try {

    // Prompt for swatch clean up
    var  promptCleanup = scriptUIUtils.promptConfirm(functionTitle, 'Delete existing swatches?');

    if (promptCleanup) {
      swatchUtils.deleteAllSwatches();
    }
    
    // Add swatches
    swatchUtils.makeSwatchCMYK('5R CMYK',0,100,100,0,'Hues CMYK');
    swatchUtils.makeSwatchCMYK('5YR CMYK',0,50,100,0,'Hues CMYK');
    swatchUtils.makeSwatchCMYK('5Y CMYK',0,0,100,0,'Hues CMYK');
    swatchUtils.makeSwatchCMYK('5GY CMYK',50,0,100,0,'Hues CMYK');
    swatchUtils.makeSwatchCMYK('5G CMYK',100,0,100,0,'Hues CMYK');
    swatchUtils.makeSwatchCMYK('5BG CMYK',100,0,0,0,'Hues CMYK');
    swatchUtils.makeSwatchCMYK('5B CMYK',100,50,0,0,'Hues CMYK');
    swatchUtils.makeSwatchCMYK('5PB CMYK',100,100,0,0,'Hues CMYK');
    swatchUtils.makeSwatchCMYK('5P CMYK',50,100,0,0,'Hues CMYK');
    swatchUtils.makeSwatchCMYK('5RP CMYK',0,100,0,0,'Hues CMYK');

    // Debug
    var message = 'SUCCESS ' + functionID + '\nCMYK Process swatches added.';
    if (DEBUG) alert(message, functionID);
    
  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();

