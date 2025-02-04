/**
 * @file Script-Hero\swatches-add\swatches-add-lab.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-07-10
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Demonstrates bulk creation of Lab Process swatches.
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

(function addSwatchesLab() {

  var functionID = 'addSwatchesLab';
  var functionTitle = 'Add Lab Swatches';
  var DEBUG = false;

  try {

    // Prompt for swatch clean up
    var  promptCleanup = scriptUIUtils.promptConfirm(functionTitle, 'Delete existing swatches?');

    if (promptCleanup) {
      swatchUtils.deleteAllSwatches();
    }

    // Add swatches
    swatchUtils.makeSwatchLab('Lab R',60,127,127,'Lab Process');
    swatchUtils.makeSwatchLab('Lab YR',100,127,127,'Lab Process');
    swatchUtils.makeSwatchLab('Lab Y',100,0,127,'Lab Process');
    swatchUtils.makeSwatchLab('Lab GY',100,-60,127,'Lab Process');
    swatchUtils.makeSwatchLab('Lab G',100,-128,127,'Lab Process');
    swatchUtils.makeSwatchLab('Lab BG',100,-128,40,'Lab Process');
    swatchUtils.makeSwatchLab('Lab B',0,-128,-128,'Lab Process');
    swatchUtils.makeSwatchLab('Lab PB',35,100,-128,'Lab Process');
    swatchUtils.makeSwatchLab('Lab P',50,90,-128,'Lab Process');
    swatchUtils.makeSwatchLab('Lab RP',95,127,55,'Lab Process');

    // Debug
    var message = 'SUCCESS ' + functionID + '\nLAB Process swatches added.';
    if (DEBUG) alert(message, functionID);
    
  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();

