/**
 * @file Script-Hero\swatch-hero\swatches-random.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-02-01
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Randomly applies selected swatches to selected `PageItems`.
 * 
 * @testFile Script-Hero\test-files\swatch-hero\swatch-hero.ai
 * 
 * @example
 * 1. Select some objects.
 * 2. Press and hold `CTRL` and select multiple swatches.
 * 3. Use `CTRL+F12` to run this script.
 * 
 * @remarks
 * - Operates on:`PathItem` and `CompoundPathItem`.
 * - Operates on individual items in `GroupItem`.
 * - Evenly distributes swatches across items.
 * 
 */


// @include '../library/utilities/itemUtils.jsx'
// @include '../library/utilities/swatchUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

var DEBUG = false;

(function swatchesRandom() {

  var functionID = 'swatchesRandom';
  var functionTitle = 'Apply Random Swatches';

  try {

    var selection = itemUtils.getSelectedItems();
    var swatches = swatchUtils.getSelectedSwatches();

    // Prompt to continue
    var promptContinue = scriptUIUtils.promptConfirm(functionTitle, 'Apply random swatches to selected items?');

    if (!promptContinue) {
      return;
    }

    // Randomize swatch indexes
    var swatchIndexes = swatchUtils.randomizeSwatchIndexes(selection.length, swatches.length);
    var swatchIndex = 0; 

    for (var i = 0; i < selection.length; i++) {
      var item = selection[i];
      var color = swatches[swatchIndexes[swatchIndex++]].color;
      applyColorToItem(item, color);
    }

    // Apply function
    function applyColorToItem(item, color) {

      switch (item.typename) {
        case 'PathItem':
          item.filled = true;
          item.fillColor = color;
          break;

        case 'CompoundPathItem':
          item.filled = true;
          item.pathItems[0].fillColor = color;
          break;
        
        case 'GroupItem':
          for (var j = 0; j < item.pageItems.length; j++) {
            applyColorToItem(item.pageItems[j], color);
          }
          break;

        default:
          break;
      }
    }

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionTitle, e.message);
  }

})();

