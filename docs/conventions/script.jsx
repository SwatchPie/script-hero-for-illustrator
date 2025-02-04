/**
 * @file directory/script.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2024-11-29
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Description
 * 
 * @example
 * 1. Open a document in CMYK mode.
 * 2. Use `CTRL+F12` to run this script.
 */


// @include '../library/utilities/scriptUIUtils.jsx'

(function functionName() {

  var functionID = 'functionName';
  var functionTitle = 'Function Title';
  var DEBUG = false;

  try {

    // Prompt to continue
    var promptCleanup = scriptUIUtils.promptConfirm(functionTitle, 'Continue?');

    if (promptCleanup) {
      swatchUtils.deleteAllSwatches();
    }

    // 

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();
