/**
 * @file Script-Hero\templates\script.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-01-31
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Description
 * 
 * @example
 * 1. Open a document in CMYK mode.
 * 2. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../library/utilities/scriptUIUtils.jsx'

var DEBUG = false;

(function scriptName() {

  var functionID = 'scriptName';
  var functionTitle = 'Script Title';

  try {

    // Prompt to continue
    var promptContinue = scriptUIUtils.promptConfirm(functionTitle, 'Continue?');

    if (!promptContinue) {
      return;
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
