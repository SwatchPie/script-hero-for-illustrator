/**
 * @file Script-Hero\document-hero\delete-unused-panel-items.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-02-01
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * description.
 * 
 * @example
 * 1. Open a document in CMYK mode.
 * 2. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../global.jsx'
// @include '../library/utilities/docUtils.jsx'
// @include '../library/utilities/miscUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

var DEBUG = true;
var DUPI_OPTS = global.DUPI_OPTS;

(function deleteUnusedPanelItemsUI() {

  var functionID = 'deleteUnusedPanelItemsUI';
  var functionTitle = 'Delete Unused Panel Items';

  try {

    if (!app.activeDocument) {
      throw new Error('No active document.');
    }
    if (typeof DUPI_OPTS !== 'object') {
      throw new Error('Missing or undefined module object: DUPI_OPTS.');
    }

    var win = new Window('dialog', functionTitle);
        win.alignChildren = 'fill';

    // ----------------------------------------------------
    // Checkboxes Group
    // ----------------------------------------------------

    var checkboxGroup = win.add('group', undefined);
        checkboxGroup.orientation = 'column';
        checkboxGroup.alignment = 'fill';
        checkboxGroup.alignChildren = 'fill';
        checkboxGroup.preferredSize.width = 240;
        checkboxGroup.margins = scriptUIUtils.panelMargins;

    var deleteSwatches = scriptUIUtils.checkBox(checkboxGroup, 'Delete Unused Swatches', DUPI_OPTS.deleteSwatches);
    var deleteBrushes  = scriptUIUtils.checkBox(checkboxGroup, 'Delete Unused Brushes', DUPI_OPTS.deleteBrushes);
    var deleteStyles   = scriptUIUtils.checkBox(checkboxGroup, 'Delete Unused Graphic Styles ', DUPI_OPTS.deleteStyles);
    var deleteSymbols  = scriptUIUtils.checkBox(checkboxGroup, 'Delete Unused Symbols', DUPI_OPTS.deleteSymbols);

    // ----------------------------------------------------
    // Run Button Group
    // ----------------------------------------------------

    var runGroup = win.add('group', undefined);
        runGroup.orientation = 'column';
        runGroup.alignment = 'fill';

    // Run button and handler
    var runButton = runGroup.add('button', undefined, 'Run');
        runButton.alignment = 'fill'
        runButton.onClick = runButtonHandler;

    function runButtonHandler() {

      var functionID = 'runButtonHandler';

      try {
        // Gather input values
        var options = {
          deleteSwatches: deleteSwatches.value,
          deleteBrushes: deleteBrushes.value,
          deleteStyles: deleteStyles.value,
          deleteSymbols: deleteSymbols.value
        };

        // Debug
        var optionsString = miscUtils.objectToString(options);
        if (DEBUG) alert(optionsString, functionID);

        // Pass options
        docUtils.deleteUnusedPanelItems(options); 

        // Close the dialog
        win.close();

      } catch (e) {
        e.message = 'ERROR ' + functionID + '\n' + e.message;
        throw e;
      }
    };

    // ----------------------------------------------------
    // Show Window and Debug
    // ----------------------------------------------------

    win.show();

    var message = 'SUCCESS ' + functionID + '\nUnused panel items deleted.';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionID, e.message);
  }

})();

