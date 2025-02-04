/**
 * @file Script-Hero\transform-hero\transform-scale.jsx
 * @author SwatchPie.io
 * @version 1.0
 * @date 2025-01-31
 * @license 'CC BY-NC 4.0'
 * 
 * @description
 * Scale selected items.
 * - Set a fixed or randomized scale.
 * - Scale all selected items, or a random percent of selected items.
 * - Undo scaling performed by this script. 
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

(function transformScaleUI() {

  var functionID = 'transformScaleUI';
  var functionTitle = 'Transform Scale';

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
    // Panel: Selection
    //
    var selectionPanel = win.add('panel', undefined, 'Selection');
        selectionPanel.orientation = 'column';
        selectionPanel.alignChildren = 'left';
        selectionPanel.margins = scriptUIUtils.panelMargins;

    // Add row to hold radio buttons
    var selectionRadioGroup = selectionPanel.add('group', undefined);
        selectionRadioGroup.orientation = 'row';

    // Add the radio buttons and set default
    var allSelectedRadio = selectionRadioGroup.add('radiobutton', undefined, 'All Items');
        allSelectedRadio.value = true; 
    var randomSelectRadio = selectionRadioGroup.add('radiobutton', undefined, 'Random Items');
    
    // Add fields
    var randomSelectionField = scriptUIUtils.numberField(selectionPanel, 'Random Selection Percent', 1, 100, 70);

    // Set field defaults
    randomSelectionField.enabled = false;

    // Radio handler
    allSelectedRadio.onClick = selectionRadioHandler;
    randomSelectRadio.onClick = selectionRadioHandler;

    function selectionRadioHandler() {
      randomSelectionField.enabled = randomSelectRadio.value;
    }

    //
    // Panel: Scale
    //
    var scalePanel = win.add('panel', undefined, 'Scale');
        scalePanel.orientation = 'column';
        scalePanel.alignChildren = 'left';
        scalePanel.margins = scriptUIUtils.panelMargins;

    // Add row to hold radio buttons
    var scaleRadioGroup = scalePanel.add('group', undefined);
        scaleRadioGroup.orientation = 'row';

    // Add the radio buttons and set default
    var setScaleRadio = scaleRadioGroup.add('radiobutton', undefined, 'Set Scale');
        setScaleRadio.value = true; 
    var randomScaleRadio = scaleRadioGroup.add('radiobutton', undefined, 'Random Scale');
    
    // Add fields
    var scaleField = scriptUIUtils.numberField(scalePanel, 'Scale Factor', 0, 10, 1.2);
    var minScaleField = scriptUIUtils.numberField(scalePanel, 'Minimum Scale Factor', 0, 10, 0.8);
    var maxScaleField = scriptUIUtils.numberField(scalePanel, 'Maximum Scale Factor', 0, 10, 1.2);

    // Set field defaults
    scaleField.enabled = true;
    minScaleField.enabled = false;
    maxScaleField.enabled = false;

    // Radio handler
    setScaleRadio.onClick = scaleRadioHandler;
    randomScaleRadio.onClick = scaleRadioHandler;

    function scaleRadioHandler() {
      scaleField.enabled = setScaleRadio.value;
      minScaleField.enabled = randomScaleRadio.value;
      maxScaleField.enabled = randomScaleRadio.value;
    }
    
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
          selectionRandomizeBool: randomSelectRadio.value,
          selectionPercent: parseFloat(randomSelectionField.text),
          scaleRandomizeBool: randomScaleRadio.value,
          scaleFactor: parseFloat(scaleField.text),
          minScaleFactor: parseFloat(minScaleField.text),
          maxScaleFactor: parseFloat(maxScaleField.text),
        };

        // Debug
        var optionsString = miscUtils.objectToString(options);
        if (DEBUG) alert(optionsString, functionID);

        // Pass options
        transformScale(options);

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
        transformScaleReset();

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


function transformScale(options) {

  var functionID = 'transformScale';

  try {

    if (typeof options !== 'object') {
      throw new Error('Parameter must be an object: options.');
    }

    if (options.selectionRandomizeBool) {
      itemUtils.randomizeSelection(options.selectionPercent);
    }

    var selection = itemUtils.getSelectedItems();
    
    for (var i = 0; i < selection.length; i++) {
      var item = selection[i];

      if (options.scaleRandomizeBool) {
        itemUtils.scaleItemRandom(item, options.minScaleFactor, options.maxScaleFactor);
      } else {
        itemUtils.scaleItem(item, options.scaleFactor);
      }
    }

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}

function transformScaleReset() {

  var functionID = 'transformScaleReset';

  try {
    
    var selection = itemUtils.getSelectedItems();
    
    for (var i = 0; i < selection.length; i++) {
      var item = selection[i];
      itemUtils.resetItemScale(item);
    }

    // Debug
    var message = 'SUCCESS ' + functionID + '\n';
    if (DEBUG) alert(message, functionID);

  } catch (e) {
    e.message = 'ERROR ' + functionID + '\n' + e.message;
    throw e;
  }
}
