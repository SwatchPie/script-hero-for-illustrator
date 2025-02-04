/**
 * @file Script-Hero\swatch-hero\spots-remove.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-02-01
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Removes all Spot colors and swatches from a document.
 * 
 * @example
 * 1. Open a document.
 * 2. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../library/utilities/docUtils.jsx'
// @include '../library/utilities/swatchUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

var DEBUG = true;

(function spotsRemove() {

  var functionID = 'spotsRemove';
  var functionTitle = 'Remove Spot Colors';

  try {

    // Get spots
    var doc = docUtils.getActiveDocument();
    var spots = doc.spots;

    // Count spots
    var spotNames = [];

    for (var i = 0; i < spots.length; i++) {
      var spot = spots[i];
      if (spot.name === '[Registration]') {
        continue;
      }
      spotNames.push(spot.name);
    }

    // Bail if no spots
    if (spotNames.length === 0) {
      scriptUIUtils.alertBox(functionTitle, 'No Spots found.');
      return;
    }

    // Prompt to continue
    var spotsPlural = (spotNames.length > 1) ? ' Spots?' : ' Spot?';
    var promptString = 'Delete ' + spotNames.length + ' ' + spotsPlural;
    var promptContinue = scriptUIUtils.promptConfirm(functionTitle, promptString);

    if (!promptContinue) {
      return;
    }

    // Delete spots
    swatchUtils.deleteAllSpots();
    
    // Debug
    var message = 'SUCCESS ' + functionID + '\n' + spotNames.length + ' Spots removed.';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();
