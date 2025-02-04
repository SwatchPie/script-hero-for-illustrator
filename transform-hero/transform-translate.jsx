/**
 * @file Script-Hero\transform-hero\transform-translate.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-01-31
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Move objects. Undo moves made my this script. 
 * 
 * @example
 * 1. Open a document.
 * 2. Use `CTRL+F12` to run this script.
 * 
 */


// @include '../library/utilities/itemUtils.jsx'
// @include '../library/utilities/miscUtils.jsx'
// @include '../library/utilities/scriptUIUtils.jsx'

var DEBUG = false;

(function transformTranslateUI() {

  var functionID = 'transformTranslateUI';
  var functionTitle = 'Transform Translate';

  try {

    if (!app.activeDocument) {
      throw new Error('No active document.');
    }
    if (app.activeDocument.selection.length === 0) {
      throw new Error('No selected items.');
    }

    var win = new Window('dialog', functionTitle);
        win.alignChildren = 'fill';

    //
    // Panel: Options
    //
    var optionsPanel = win.add('panel', undefined, 'Options');
        optionsPanel.orientation = 'column';
        optionsPanel.alignChildren = 'left';
        optionsPanel.margins = scriptUIUtils.panelMargins;
    
    var deltaXField = scriptUIUtils.numberField(optionsPanel, 'Horizontal', -9999, 9999, 100);
    var deltaYField = scriptUIUtils.numberField(optionsPanel, 'Vertical', -9999, 9999, 100);
    
    var staticText = optionsPanel.add('statictext', undefined, 'Positive = Right and Up');
        staticText.alignment = ['fill', 'top'];

    var staticText2 = optionsPanel.add('statictext', undefined, 'Negative = Left and Down');
        staticText2.alignment = ['fill', 'top'];
        
    //
    // Run Button Group
    //
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
          deltaX: parseFloat(deltaXField.text),
          deltaY: parseFloat(deltaYField.text)
        };

        // Debug
        var optionsString = miscUtils.objectToString(options);
        if (DEBUG) alert(optionsString, functionID);

        // Pass options
        transformTranslate(options);

        // Close the dialog
        win.close();

      } catch (e) {
        e.message = 'ERROR ' + functionID + '\n' + e.message;
        throw e;
      }
    };

    //
    // Reset Button Group
    //
    var resetGroup = win.add('group', undefined);
        resetGroup.orientation = 'column';
        resetGroup.alignment = 'fill';

    // Rest button and handler
    var resetButton = resetGroup.add('button', undefined, 'Reset');
        resetButton.alignment = 'fill'
        resetButton.onClick = resetButtonHandler;

    function resetButtonHandler() {

      var functionID = 'resetButtonHandler';

      try {
        // Run reset function
        transformTranslateReset();

        // Debug
        var message = 'SUCCESS ' + functionID + '\n';
        if (DEBUG) alert(message, functionID);

        // Close the dialog
        win.close();

      } catch (e) {
        e.message = 'ERROR ' + functionID + '\n' + e.message;
        throw e;
      }
    };

    //
    // Show dialog + debug
    //
    win.show();

    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    scriptUIUtils.alertBox(functionID, e.message);
  }

})();


function transformTranslate(options) {

  var functionID = 'transformTranslate';

  try {

    if (typeof options !== 'object') {
      throw new Error('Parameter must be an object: options.');
    }

    var selection = itemUtils.getSelectedItems();
    
    for (var i = 0; i < selection.length; i++) {
      var item = selection[i];
      itemUtils.translateItem(item, options.deltaX, options.deltaY);
    }

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}


function transformTranslateReset() {

  var functionID = 'transformTranslateReset';

  try {

    var selection = itemUtils.getSelectedItems();
    
    for (var i = 0; i < selection.length; i++) {
      var item = selection[i];
      itemUtils.resetItemTranslation(item);
    }

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}

