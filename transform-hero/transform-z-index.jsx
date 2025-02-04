/**
 * @file Script-Hero\transform-hero\transform-z-index.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-01-31
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Randomize the Z-index of selected items.
 * 
 * @example
 * 1. Open a document.
 * 2. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../library/utilities/itemUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

var DEBUG = false;

(function transformZIndexUI() {

  var functionID = 'transformZIndexUI';
  var functionTitle = 'Transform Z-Index';

  try {

    if (!app.activeDocument) {
      throw new Error('No active document.');
    }
    if (app.activeDocument.selection.length === 0) {
      throw new Error('No selected items.');
    }

    // Confirm run script
    var promptContinue = scriptUIUtils.promptConfirm(functionTitle, 'Randomize Z-order of selected items?');
    
    if (!promptContinue) {
      return;
    }
    
    // Run
    var selection = app.activeDocument.selection;
    itemUtils.setRandomZOrder(selection);
    
    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionID, e.message);
  }

})();

