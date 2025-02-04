/**
 * @file Script-Hero\swatches-add\swatches-add-gray.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-07-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Demonstrates bulk creation of `GrayColor` swatches.
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

(function addSwatchesGray() {

  var functionID = 'addSwatchesGray';
  var functionTitle = 'Add Gray Swatches';
  var DEBUG = false;

  try {

    // Prompt for swatch clean up
    var  promptCleanup = scriptUIUtils.promptConfirm(functionTitle, 'Delete existing swatches?');

    if (promptCleanup) {
      swatchUtils.deleteAllSwatches();
    }

    // Add Swatches
    swatchUtils.makeSwatchGray('Gray 100',100,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 90',90,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 80',80,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 70',70,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 60',60,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 50',50,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 40',40,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 30',30,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 20',20,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 10',10,'Gray Color');
    swatchUtils.makeSwatchGray('Gray 0',0,'Gray Color');

    // Debug
    var message = 'SUCCESS ' + functionID + '\nGrayscale swatches added.';
    if (DEBUG) alert(message, functionID);
    
  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();

